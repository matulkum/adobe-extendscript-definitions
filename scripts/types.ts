export type AClassdef = {
  name: string
  superclass?: string
  enumeration: string
  shortdesc?: string
  elements?: AElement[]
}

export type AElement = {
  type: string
  property?: AProperty[]
  method?: AMethod[]
}
export type ADataType = {
  type: string | {href: string, "$t": string} | {type: string, value: string}
  value?: string
}
export type AProperty = {
    name: string
    rwaccess?: string
    shortdesc?: string
    datatype: ADataType[]|ADataType
}

export type AMethod = {
  name: string
  shortdesc?: string
  parameters?: { parameter: AParameter[] }
  datatype?: ADataType
}

export type AParameter = {
  name: string
  optional: string
  shortdesc?: string
  datatype: ADataType
}