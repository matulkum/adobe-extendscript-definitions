import { isArray } from 'util';
import { AClassdef, ADataType, AElement, AMethod, AParameter, AProperty } from './types';
import { StringifyOptions } from 'querystring';
import * as fs from 'fs';
import * as path from 'path';
import * as x2j from 'xml2json';


let filepath = `omv.xml`
if (process.argv.length > 2 ) {
  filepath = process.argv[2]
}
let outpath = process.argv[3]
if( outpath ) {
  if( fs.exists(outpath) && fs.lstatSync(outpath).isDirectory() ) {
    let outfilename = path.basename(filepath) + `.d.ts`
    outpath = path.join(outpath, outfilename)
  }
  else if (path.extname(outpath) !== `.ts`)
    outpath += `.d.ts`
}
else 
  outpath = filepath + `.d.ts`

let data: any
try {
  data = readXml(filepath) as any
  data = data[`dictionary`][`package`][`classdef`]
  fs.writeFileSync(`temp.json`, JSON.stringify(data, null, 2), 'utf8')
  for( let cd of data ) {
    if (!cd.elements)
      continue
    if(!isArray(cd.elements))
      cd.elements = [cd.elements]
    for( let element of cd.elements) {
      if (element.property && !isArray(element.property))
        element.property = [element.property]
      if( element.method && !isArray(element.method) )
        element.method = [element.method]

      if( !element.method )  
        continue
      for( let method of element.method ) {
        if (!method.parameters )
          continue
        if( method.parameters.parameter && !isArray(method.parameters.parameter)) {
          method.parameters.parameter = [method.parameters.parameter]
        }
        if( method.name === `alert` || method.name === `confirm` ) {
          let messageparam = method.parameters.parameter.find( p => p.name === `message`)
          if( messageparam )
            messageparam.datatype.type = `any`
        }
        else if (method.name === `alert` || method.name === `prompt`) {
          let messageparam = method.parameters.parameter.find( p => p.name === `prompt`)
          if( messageparam )
            messageparam.datatype.type = `any`
        }
      }
    }
  }
} catch( err ) {
  console.error(err)
  process.exit(0)
}

// fs.writeFileSync(`temp.json`, JSON.stringify(data, null, 2), 'utf8')

const excludes = ["Object", "Array", "Math", "Date", "Function", "String", "Number", "Boolean", "RegExp", "Error", "NaN", "Infinity", "undefined"]
let dtsString = (data as AClassdef[])
  // .filter( c => c.name !== `global`)
  .filter( c => excludes.indexOf(c.name) === -1 )
  .map( c => {
    if( c.name === `global` && c.elements) {
      let string = ``
      for( let element of c.elements ) {
        if( element.method ) {
          string += element.method
            .filter( m => excludes.indexOf(m.name) === -1)
            .map( m => stringifyAMethod(m, false, true))
            .join(`\n`)
        }
        if( element.property ) {
          string += element.property
            .filter(p => excludes.indexOf(p.name) === -1 )
            .map( p => stringifyAProperty(p, false, true))
            .join(`\n`)
        }
      }
      return string
    }
    return stringifyAClassdef(c)
  }).join(`\n`)

fs.writeFileSync(outpath, dtsString, 'utf8')



function readXml(filepath: string): Object|undefined {
  if (!fs.existsSync(filepath)) {
    throw(`File "${filepath}" does not exists!`)
  }
  if( fs.lstatSync(filepath).isDirectory() ) {
    throw(`File "${filepath}" should be a file!`)
  }
  const xmlstring = fs.readFileSync(filepath, 'utf8')
  const json = x2j.toJson(xmlstring)
  return JSON.parse(json)
}



function stringifyAClassdef(c: AClassdef) {
  let name = c.name;
  if( c.superclass )
    name += ` extends ${c.superclass}`

  if( !c.elements )
    return ``
    
  const elementsStrings = c.elements.map( element => {
    const isStatic = (element.type === `class`)
    let string = ``
    if( element.property )
      string += element.property.map(p => {
        let prop = stringifyAProperty(p, isStatic)
        if( c.name === `$` && p.name === `global`)
          prop = prop.replace(`global: Object`, `global: any`)
        return prop
      }).join(`\n`) || ''
    if (element.method) 
      string += element.method.map(m => {
        if( m.name === c.name ) {
          let params:string[] = []
          let paramDocs = ``
          if( m.parameters ) {
            for (let p of m.parameters.parameter ) {
              params.push(stringifyAParameter(p))
              if( p.shortdesc )
                paramDocs += `  * @param ${p.name} - ${p.shortdesc}\n`
            }
          }
          let docs = `/**\n`
          if( c.shortdesc )
            docs += `  * ${c.shortdesc}\n`
          docs += paramDocs
          docs += ` */`
          return `${docs}\nconstructor(${params.join(`, `)})`
        }
        return stringifyAMethod(m, isStatic)
      }).join(`\n`)
      return string
  })
  
  let result = `declare class ${name} {\n  ${elementsStrings.join('\n  ')}\n}`
  return result
}


function stringifyAProperty(p: AProperty, isStatic = false, addDeclare = false) {
  let type = mapArrified(p.datatype, stringifyADatatype).join(`|`)
  
  let prefix = isStatic ? `static ` : ``
  if( addDeclare )
    prefix = `declare var ${prefix}`
  else if (p.rwaccess === `readonly`)
    prefix += 'readonly '
  
  let result = `${prefix}${p.name}: ${type}`
  if( p.shortdesc)
    result = `/** ${p.shortdesc} */\n` + result
  return result
}

function arrify<T>(value: T[]|T) {
  if( isArray(value) )
    return value as T[]
  return [value] as T[]
}

function mapArrified<T,R>(value: T[] | T, map: (v:T) => R) {
  return arrify(value).map(map)
}


function stringifyAMethod(m: AMethod, isStatic = false, addDeclare = false) {
  let name = isStatic ? `static ${m.name}` : m.name
  if( addDeclare )
    name = `declare function ${name}`
  if( name === `[]`)
    return `[index:number]: ${mapArrified(m.datatype!, stringifyADatatype)}`
    
  let paramsString = ``
  let paramDocs: string[] = []
  if( m.parameters ) {
    const param = m.parameters.parameter
    const params = param as AParameter[]
    paramsString = (params).map( p => stringifyAParameter(p)).join(`, `)
    paramDocs = params.map(p => `${p.name} - ${p.shortdesc}`)
  }
  
  const type = m.datatype ? mapArrified(m.datatype, stringifyADatatype).join(`|`) : `void`

  let docs = `/**\n`
  if( m.shortdesc )
    docs += ` * ${m.shortdesc}\n`
  
  for( let pd of paramDocs )
    docs += `* @param ${pd}\n`
  docs += `*/\n`
  let result = `${docs}${name}(${paramsString}): ${type}`

  return result
}


function stringifyAParameter(p: AParameter) {
  let name = p.name.replace(`with`, `_with`).replace(`default`, `_default`)
  let type = mapArrified(p.datatype, stringifyADatatype ).join(`|`)
  if( p.optional || p.datatype.value )
    name += `?`
  return `${name}: ${type}`
}


function stringifyADatatype(d: ADataType) {
  let type = ''
  if(typeof d.type === 'string')
    type = d.type
  else
    type = d.type['$t']
  
  if( !type )
    throw(`could not define type`)
    
  switch (type) {
    case `int`:
    case `uint`:
      type = `number`
      break
    case `bool`:
      type = `boolean`
      break
    case `FileArray`:
    case `AliasArray`:
      type = `File[]`
    break
    case `UnitRect`:
    case `UnitPoint`:
      type = `UnitValue[]`
    break
    case `Array`:
      type = `any[]`
    break
  }
  
  return type
}
