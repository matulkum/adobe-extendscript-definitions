declare class $ {
  /** The most recent run-time error information. */
static error: Error
/** The version number of the ExtendScript engine. */
static readonly version: string
/** The ExtendScript build information. */
static readonly build: string
/** The ExtendScript build date. */
static readonly buildDate: Date
/** A reference to the global object, which contains the JavaScript global namespace. */
static readonly global: any
/** The current stack trace. */
static readonly stack: string
/** The current debugging level, which enables or disables the JavaScript debugger. */
static level: number
/** Gets or sets low-level debug output flags. */
static flags: number
/** Sets or clears strict mode for object modification. */
static strict: any
/** Gets or sets the current locale. */
static locale: string
/** Set to true to enable the extended localization features of the built-in toString() method. */
static localize: boolean
/** The character used as the decimal point character in formatted numeric output. */
static decimalPoint: string
/** The ExtendScript memory cache size, in bytes. */
static memCache: number
/** An array of objects containing information about the display screens attached to your computer. */
static readonly screens: Object
/** The current operating system version information. */
static readonly os: string
/** The file name of the current script. */
static readonly fileName: string
/** The current line number of the currently executing script. */
static readonly line: number
/** A high-resolution timer, measuring the time in microseconds. The timer starts when ExtendScript is
						initialized during the application startup sequence. Every read access resets the timer to Zero. */
static readonly hiresTimer: number
/** The name of the current ExtendScript engine, if set. */
static readonly engineName: string
/** The path for include files for the current script. */
static readonly includePath: string/**
 * Shows an About box for the ExtendScript component, and returns the text for the box.
*/
static about(): string
/**
 * Converts this object to a string.
*/
static toString(): string
/**
 * Prints text to the Console.
* @param text - The text to print. All arguments are concatenated.
*/
static write(text: any): void
/**
 * Prints text to the Console, and adds a newline character.
* @param text - The text to print. All arguments are concatenated.
*/
static writeln(text: any): void
/**
 * Breaks execution at the current position.
* @param condition - A string containing a JavaScript statement to be used as a condition. If the statement evaluates to true or nonzero when this point is reached, execution stops.
*/
static bp(condition?: any): void
/**
 * Retrieves the value of an environment variable.
* @param name - The name of the variable.
*/
static getenv(name: string): string
/**
 * Sets the value of an environment variable.
* @param name - The name of the variable.
* @param value - The value of the variable.
*/
static setenv(name: string, value: string): void
/**
 * Suspends the calling thread for a number of milliseconds.
* @param msecs - Number of milliseconds to sleep.
*/
static sleep(msecs: number): void
/**
 * Invokes the platform-specific color selection dialog, and returns the selected color.
* @param color - The color to be preselected in the dialog, as 0xRRGGBB, or -1 for the platform default.
*/
static colorPicker(color: number): number
/**
 * Loads and evaluates a file.
* @param file - The file to load.
* @param timeout - An optional timeout in milliseconds.
*/
static evalFile(file: File, timeout?: number): any
/**
 * Initiates garbage collection in the ExtendScript engine.
*/
static gc(): void
}
/**
 * Encodes a string after RFC2396.
* @param text - The text to encode.
*/
declare function encodeURI(text: string): string
/**
 * Encodes a string after RFC2396.
* @param text - The text to encode.
*/
declare function encodeURIComponent(text: string): string
/**
 * [object Object]
* @param uri - The text to decode.
*/
declare function decodeURI(uri: string): string
/**
 * [object Object]
* @param uri - The text to decode.
*/
declare function decodeURIComponent(uri: string): string
/**
 * Creates a URL-encoded string from aString.
* @param aString - The string to be encoded.
*/
declare function escape(aString: string): string
/**
 * Evaluates its argument as a JavaScript script, and returns the result of evaluation.
* @param stringExpression - The string to evaluate.
*/
declare function eval(stringExpression: string): any
/**
 * Creates a source code representation of the supplied argument, and returns it as a string.
* @param what - The object to uneval.
*/
declare function uneval(what: any): string
/**
 * Evaluates an expression and reports whether the result is a finite number.
* @param expression - Any valid JavaScript expression.
*/
declare function isFinite(expression: number): boolean
/**
 * Evaluates an expression and reports whether the result is "Not-a-Number" (NaN).
* @param expression - Any valid JavaScript expression.
*/
declare function isNaN(expression: number): boolean
/**
 * Extracts an integer from a string.
* @param text - The string from which to extract an integer.
* @param base - The base of the string to parse (from base 2 to base 36).
*/
declare function parseInt(text: string, base?: number): number
/**
 * Extracts a floating-point number from a string.
* @param text - The string from which to extract a floating point number.
*/
declare function parseFloat(text: string): number
/**
 * Translates URL-encoded string into a regular string, and returns that string.
* @param stringExpression - The URL-encoded string to convert.
*/
declare function unescape(stringExpression: string): string
/**
 * Localizes a ZString-encoded string and merges additional arguments into the string.
* @param what - The string to localize. A ZString-encoded string that can contain placeholder for additional arguments in the form %1 to %n.
* @param argument - Optional argument(s) to be merged into the string. There may be more than one argument.
*/
declare function localize(what: string, argument?: any): string
/**
 * Returns true if the supplied string is a valid XML name.
* @param name - The XML name to test.
*/
declare function isXMLName(name: string): boolean
/**
 * Defines the default XML namespace.
* @param namespace - The namespace to use.
*/
declare function setDefaultXMLNamespace(namespace: Namespace): void
/**
 * Displays an alert box
* @param message - The text to display
* @param title - The title of the alert; ignored on the Macintosh
* @param errorIcon - Display an Error icon; ignored on the Macintosh
*/
declare function alert(message: any, title?: string, errorIcon?: boolean): void
/**
 * Displays an alert box with Yes and No buttons; returns true for Yes
* @param message - The text to display
* @param noAsDefault - Set to true to set the No button as the default button
* @param title - The title of the alert; ignored on the Macintosh
*/
declare function confirm(message: any, noAsDefault?: boolean, title?: string): boolean
/**
 * Displays a dialog allowing the user to enter text
* @param prompt - The text to display
* @param default - The default text to preset the edit field with
* @param title - The title of the dialog;
*/
declare function prompt(prompt: any, _default?: string, title?: string): string
declare class File {
  /**
  * Represents a file in the local file system in a platform-independent manner.
  * @param path - The full or partial path name of the file,  in platform-specific or URI format.
 */
constructor(path?: string)
  /** The name of the file system. */
static readonly fs: string/**
 * Encodes a string as required by RFC 2396, and returns the encoded string.
* @param name - The string to encode.
*/
static encode(name: string): string
/**
 * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
* @param uri - The UTF-8 encoded string to decode.
*/
static decode(uri: string): string
/**
 * Reports whether a given encoding is available.
* @param name - The encoding name.
*/
static isEncodingAvailable(name: string): boolean
/**
 * Opens a dialog so the user can select one or more files to open.
* @param prompt - The prompt text, displayed if the dialog allows a prompt.
* @param filter - A filter that limits the types of files displayed in the dialog.
* @param multiSelect - When true, the user can select multiple files and the return value is an array.
*/
static openDialog(prompt: string, filter?: any, multiSelect?: boolean): File
/**
 * Opens a dialog so the user can select a file name to save to.
* @param prompt - The prompt text, displayed if the dialog allows a prompt.
* @param filter - In Windows only, a filter that limits the types of files displayed in the dialog.
*/
static saveDialog(prompt: string, filter?: any): File
  /** If true, the object refers to a file system alias or shortcut. */
readonly alias: boolean
/** The creation date of the referenced file, or null if the object does not refer to a file on disk. */
readonly created: Date
/** A string containing a message describing the most recent file system error. */
error: string
/** If true, this object refers to a file or file-system alias that actually exists in the file system. */
readonly exists: boolean
/** The platform-specific full path name for the referenced file. */
readonly fsName: string
/** The full path name for the referenced file in URI notation. */
readonly fullName: string
/** The full path name for the referenced file in URI notation. */
readonly absoluteURI: string
/** The path name for the object in URI notation, relative to the current folder. */
readonly relativeURI: string
/** The date of the referenced file's last modification, or null if the object does not refer to a file on the disk. */
readonly modified: Date
/** The file name portion of the absolute URI for the referenced file, without the path specification. */
readonly name: string
/** The localized name of the referenced file, without the path specification. */
readonly displayName: string
/** The path portion of the absolute URI for the referenced file, without the file name. */
readonly path: string
/** The Folder object for the folder that contains this file. */
readonly parent: Folder
/** The file type as a four-character string. */
readonly type: string
/** In Mac OS, the file creator as a four-character string. In Windows or UNIX, value is "????". */
readonly creator: string
/** When true, the file is not shown in the platform-specific file browser. */
hidden: boolean
/** When true, prevents the file from being altered or deleted. */
readonly: boolean
/** How line feed characters are written in the file system. */
lineFeed: string
/** The size of the file in bytes. */
length: number
/** Gets or sets the encoding for subsequent read/write operations. */
encoding: string
/** When true, a read attempt caused the current position to be at the end of the file, or the file is not open. */
readonly eof: boolean/**
 * Attempts to resolve the file-system alias or shortcut that this object refers to.
*/
resolve(): File
/**
 * Renames the associated file.
* @param newName - The new file name, with no path information.
*/
rename(newName: string): boolean
/**
 * Deletes the file associated with this object from disk immediately, without moving it to the system trash.
*/
remove(): boolean
/**
 * Changes the path specification of the referenced file.
* @param path - A string containing the new path, absolute or relative to the current folder.
*/
changePath(path: string): boolean
/**
 * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
* @param basePath - A base path in URI notation.
*/
getRelativeURI(basePath: string): string
/**
 * Executes or opens this file using the appropriate application, as if it had been double-clicked in a file browser.
*/
execute(): boolean
/**
 * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file or files, and creates new File objects to represent the selected files.
* @param prompt - A string containing the prompt text, if the dialog allows a prompt.
* @param filter - A filter that limits the types of files displayed in the dialog.
* @param multiSelect - When true, the user can select multiple files and the return value is an array.
*/
openDlg(prompt: string, filter?: any, multiSelect?: boolean): File
/**
 * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file location to which to save information, and creates a new File object to represent the selected file.
* @param prompt - A string containing the prompt text, if the dialog allows a prompt.
* @param filter - In Windows only, a filter that limits the types of files displayed in the dialog.
*/
saveDlg(prompt: string, filter?: any): File
/**
 * Converts this object to a string.
*/
toString(): string
/**
 * Creates and returns a serialized string representation of this object.
*/
toSource(): string
/**
 * Makes this file a file-system alias or shortcut to the specified file.
* @param path - A string containing the path of the target file.
*/
createAlias(path: string): void
/**
 * Opens the referenced file for subsequent read/write operations. The method resolves any aliases to find the file.
* @param mode - The read-write mode, a single-character string.
* @param type - In Mac OS, the type of a newly created file, a 4-character string. Ignored in Windows and UNIX.
* @param creator - In Mac OS, the creator of a newly created file, a 4-character string. Ignored in Windows and UNIX.
*/
open(mode: string, type?: string, creator?: string): boolean
/**
 * Closes this open file.
*/
close(): boolean
/**
 * Reads the contents of the file, starting at the current position.
* @param chars - An integer specifying the number of characters to read.
*/
read(chars?: number): string
/**
 * Reads a single text character from the file at the current position.
*/
readch(): string
/**
 * Reads a single line of text from the file at the current position.
*/
readln(): string
/**
 * Writes the specified text to the file at the current position.
* @param text - A text string to be written.
*/
write(text: string): boolean
/**
 * Writes a string to the file at the current position and appends a line-feed sequence.
* @param text - A text string to be written.
*/
writeln(text: string): boolean
/**
 * Seeks to a given position in the file.
* @param pos - [object Object]
* @param mode - The seek mode.
*/
seek(pos: number, mode?: number): boolean
/**
 * Retrieves the current position as a byte offset from the start of the file.
*/
tell(): number
/**
 * Copies this object’s referenced file to the specified target location.
* @param target - A string with the URI path to the target location, or a File object that references the target location.
*/
copy(target: string|File): boolean
}
declare class Folder {
  /**
  * Represents a file-system folder or directory in a platform-independent manner.
  * @param path - The absolute or relative path to the folder associated with this object, specified in URI format.
 */
constructor(path?: string)
  /** The name of the current file system. */
static readonly fs: string
/** A Folder object for the current folder. */
static current: Folder
/** A Folder object for the folder containing the executable image of the running application. */
static readonly startup: Folder
/** In Mac OS, a Folder object for the folder containing the bundle of the running application. */
static readonly appPackage: Folder
/** A Folder object for the folder containing the operating system files. */
static readonly system: Folder
/** A Folder object for the folder containing deleted items. On Windows, the trash folder is a virtual
								   folder containing a database; therefore, the property value is null on Windows. */
static readonly trash: Folder
/** A Folder object for the default folder for temporary files. */
static readonly temp: Folder
/** A Folder object for the folder containing the user's application data. */
static readonly userData: Folder
/** The folder containing the application data for all users. */
static readonly appData: Folder
/** A Folder object for the folder containing common files for all programs installed by the user. */
static readonly commonFiles: Folder
/** A folder pointing to the user's My Documents folder. */
static readonly myDocuments: Folder
/** A Folder object for the folder that contains the user’s desktop. */
static readonly desktop: Folder/**
 * Encodes a string as required by RFC 2396, and returns the encoded string.
* @param name - The string to encode.
*/
static encode(name: string): string
/**
 * Decodes a UTF-8 encoded string as required by RFC 2396, and returns the decoded string.
* @param uri - The UTF-8 string to decode.
*/
static decode(uri: string): string
/**
 * Reports whether a given encoding is available.
* @param name - The encoding name.
*/
static isEncodingAvailable(name: string): boolean
/**
 * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
* @param prompt - The prompt text, if the dialog allows a prompt.
*/
static selectDialog(prompt: string): Folder
  /** When true, the object refers to a file system alias or shortcut. */
readonly alias: boolean
/** The creation date of the referenced folder, or null if the object does not refer to a folder on disk. */
readonly created: Date
/** A message describing the most recent file system error. */
error: string
/** When true, this object refers to a folder that currently exists in the file system. */
readonly exists: boolean
/** The platform-specific name of the referenced folder as a full path name. */
readonly fsName: string
/** The full path name for the referenced folder in URI notation. . */
readonly fullName: string
/** The full path name for the referenced folder in URI notation. */
readonly absoluteURI: string
/** The path name for the referenced folder in URI notation, relative to the current folder. */
readonly relativeURI: string
/** The date of the referenced folder's last modification, or null if the object does not refer to a folder on disk. */
readonly modified: Date
/** The folder name portion of the absolute URI for the referenced file, without the path specification. */
readonly name: string
/** The localized name portion of the absolute URI for the referenced folder, without the path specification. */
readonly displayName: string
/** The path portion of the object absolute URI for the referenced file, without the folder name. */
readonly path: string
/** TThe Folder object for the folder that contains this folder, or null if this object refers to the root folder of a volume. */
readonly parent: Folder/**
 * Attempts to resolve the file-system alias or shortcut that this object refers to.
*/
resolve(): Folder
/**
 * Renames the associated folder.
* @param newName - The new folder name, with no path information.
*/
rename(newName: string): boolean
/**
 * Deletes the folder associated with this object from disk immediately, without moving it to the system trash.
*/
remove(): boolean
/**
 * Changes the path specification of the referenced folder.
* @param path - A string containing the new path, absolute or relative to the current folder.
*/
changePath(path: string): boolean
/**
 * Retrieves and returns the path for this file, relative to the specified base path, in URI notation.
* @param basePath - A base path in URI notation.
*/
getRelativeURI(basePath?: string): string
/**
 * Opens this folder in the platform-specific file browser (as if it had been double-clicked in the file browser).
*/
execute(): boolean
/**
 * Converts this object to a string.
*/
toString(): string
/**
 * Creates and returns a serialized string representation of this object.
*/
toSource(): string
/**
 * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder.
* @param prompt - The prompt text, if the dialog allows a prompt.
*/
selectDlg(prompt: string): Folder
/**
 * Retrieves the contents of this folder, filtered by the supplied mask.
* @param mask - A search mask for file names, specified as a string or a function.
*/
getFiles(mask: any): any[]
/**
 * [object Object]
*/
create(): boolean
}
declare class Socket {
  /**
  * Creates a TCP/IP connection, or establishes a TCP/IP server.
 */
constructor()
  /** The name of the remote computer when a connection is established. */
readonly host: string
/** Sets or retrieves the name of the encoding used to transmit data. */
encoding: string
/** A message describing the most recent error. Setting this value clears any error message. */
error: string
/** When true, the receive buffer is empty. */
readonly eof: boolean
/** When true, the connection is active. */
readonly connected: boolean
/** The timeout in seconds to be applied to read or write operations. */
timeout: number/**
 * Opens the connection for subsequent read/write operations.
* @param host - The server to connect to.
* @param encoding - The encoding to be used for the connection
*/
open(host: string, encoding?: string): boolean
/**
 * Instructs the object to start listening for an incoming connection.
* @param port - The TCP/IP port number to listen on.
* @param encoding - The encoding to be used for the connection
*/
listen(port: number, encoding?: string): boolean
/**
 * Terminates the open connection.
*/
close(): boolean
/**
 * Reads up to the specified number of characters from the connection. CR characters are ignored unless the encoding is set to "BINARY".
* @param count - The number of characters to read.
*/
read(count?: number): string
/**
 * Reads one line of text up to the next line feed.
*/
readln(): string
/**
 * Concatenates all arguments into a single string and writes that string to the connection.
* @param text - Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".
*/
write(text: string): boolean
/**
 * Concatenates all arguments into a single string, appends a LF character, and writes that string to the connection.
* @param text - Any number of string values. All arguments are concatenated to form the string to be written. CRLF sequences are converted to LFs unless the encoding is set to "BINARY".
*/
writeln(text: string): boolean
/**
 * Checks a listening object for a new incoming connection.
*/
poll(): Socket
}
declare class ReflectionInfo {
  /** The class object that this element belongs to. */
readonly parent: Reflection
/** The element name. */
readonly name: string
/** The element type. */
readonly type: string
/** The data type. */
readonly dataType: string
/** The description of method or function arguments. */
readonly arguments: ReflectionInfo
/** The minimum value. */
readonly min: number
/** The maximum value. */
readonly max: number
/** The default value. */
readonly defaultValue: any
/** Contains true if the class describes a collection class. */
readonly isCollection: boolean
/** The long description text. */
readonly description: string
/** The short description text. */
readonly help: string
/** Sample code, if present. */
readonly sampleCode: string
/** A file containing sample code. May be null. */
readonly sampleFile: File
}
declare class Reflection {
  /** The class name. */
readonly name: string
/** An array of method descriptions. */
readonly methods: ReflectionInfo
/** An array of property descriptions. */
readonly properties: ReflectionInfo
/** An array of class method descriptions. */
readonly staticMethods: ReflectionInfo
/** An array of class property descriptions. */
readonly staticProperties: ReflectionInfo
/** The long description text. */
readonly description: string
/** The short description text. */
readonly help: string
/** Sample code, if present. */
readonly sampleCode: string
/** A file containing sample code. May be null. */
readonly sampleFile: File/**
 * Finds an element description by name.
* @param name - The name of the element to find.
*/
find(name: string): ReflectionInfo
/**
 * Returns this class information as XML in OMV format.
*/
toXML(): XML
}
declare class QName {
  /**
  * A qualified XML name, containing the URI and the local name.
  * @param uri - [object Object]
  * @param name - The local name. Used only if URI is given as a string.
 */
constructor(uri: any, name?: string)
  /** The URI part of the qualified name. */
readonly uri: string
/** The local name part of the qualified name. */
readonly localName: string
}
declare class Namespace {
  /**
  * A XML namespace object.
  * @param prefix - [object Object]
  * @param uri - The URI if the prefix is specified as a string.
 */
constructor(prefix: any, uri?: string)
  /** The named prefix. */
readonly prefix: string
/** The URI. */
readonly uri: string
}
declare class XML {
  /**
  * Wraps XML into an object.
  * @param text - The text to parse.
 */
constructor(text: string)
  /** Controls whether XML comments should be parsed (false) or ignored (true). */
static ignoreComments: boolean
/** Controls whether XML preprocessing instructions should be parsed (false) or ignored (true). */
static ignoreProcessingInstructions: boolean
/** Controls whether whitespace should be parsed (false) or ignored (true). */
static ignoreWhitespace: boolean
/** When true, XML is pretty-printed when converting to a string. */
static prettyPrinting: boolean
/** The number of spaces used to indent pretty-printed XML. */
static prettyIndent: number/**
 * Returns an object containing the current parsing and print settings for XML.
*/
static settings(): Object
/**
 * [object Object]
* @param obj - The object containing the settings to set.
*/
static setSettings(obj: Object): void
/**
 * Returns an object containing the default parsing and print settings for XML.
*/
static defaultSettings(): Object
  /**
 * Adds a namespace declaration to the node. Returns the XML object itself.
* @param namespace - The namespace to add.
*/
addNamespace(namespace: Namespace): XML
/**
 * Appends the given XML to this XML as a child. Returns the XML object itself.
* @param child - The child XML to add.
*/
appendChild(child: XML): XML
/**
 * Returns a list containing all attribute elements matching the given name.
* @param name - The attribute name to look for.
*/
attribute(name: string): XML
/**
 * Returns a list containing all attribute elements.
*/
attributes(): XML
/**
 * Returns a list containing all children of this XML matching the given element name.
* @param name - The name or the index of the child element.
*/
child(name: string): XML
/**
 * Returns a number representing the ordinal position of this XML object within the context of its parent.
*/
childIndex(): number
/**
 * Returns an XML object containing all the properties of this XML object in order.
*/
children(): XML
/**
 * Returns an XML object containing the properties of this XML object that represent XML comments.
*/
comments(): XML
/**
 * Checks if this XML object contains the given XML object.
* @param xml - The XML to search for.
*/
contains(xml: XML): boolean
/**
 * Creates a copy of this XML object.
*/
copy(): XML
/**
 * Returns all the XML-valued descendants of this XML object with the given name.
* @param name - The name of the descendant to find.
*/
descendants(name?: string): XML
/**
 * Returns a list of XML children that are elements with a given name, or all children that are XML elements.
* @param name - The element name. If not supplied, gets all children that are XML elements.
*/
elements(name?: string): XML
/**
 * Reports whether this XML object contains complex content.
*/
hasComplexContent(): boolean
/**
 * Reports whether this XML object contains simple content.
*/
hasSimpleContent(): boolean
/**
 * [object Object]
*/
inScopeNamespaces(): any[]
/**
 * Inserts the given child2 after the given child1 in this XML object and returns this XML object.
* @param child1 - The child to insert the other child after.
* @param child2 - The XML to insert.
*/
insertChildAfter(child1: XML, child2: XML): void
/**
 * Inserts the given child2 before the given child1 in this XML object and returns this XML object.
* @param child1 - The child to search for.
* @param child2 - The XML to insert.
*/
insertChildBefore(child1: XML, child2: XML): void
/**
 * Returns the number of elements contained in an XML list. If this XML object is not a list, returns 1.
*/
length(): number
/**
 * Returns the local name of this XML object.
*/
localName(): string
/**
 * Returns a QName object containing the URI and the local name of the element.
*/
name(): QName
/**
 * Returns a Namespace object containing the namespace URI of the current element.
*/
namespace(): Namespace
/**
 * Returns an array containing all namespace declarations of this XML object.
*/
namespaceDeclarations(): any[]
/**
 * Returns the type of this XML object as one of the strings "element", "attribute", "comment", "processing-instruction", or "text".
*/
nodeKind(): string
/**
 * Puts all text nodes in this and all descendant XML objects into a normal form by merging adjacent text nodes and eliminating empty text nodes. Returns this XML object.
*/
normalize(): XML
/**
 * Returns the parent object of this XML object.
*/
parent(): XML
/**
 * Returns a list of preprocessing instructions.
* @param name - The name of the preprocessing instruction to return.
*/
processingInstructions(name?: string): XML
/**
 * Inserts a given child into this object before its existing XML properties, and returns this XML object.
* @param child - The XML to insert.
*/
prependChild(child: XML): XML
/**
 * Removes the given namespace from this XML, and returns this XML.
* @param namespace - The namespace to remove.
*/
removeNamespace(namespace: Namespace): XML
/**
 * Replaces the value of specified XML properties of this XML object returns this XML object.
* @param name - The property name.
* @param value - The XML with which to replace the value of the matching property.
*/
replace(name: string, value: XML): XML
/**
 * Replaces all of the XML-valued properties in this object with a new value, and returns this XML object.
* @param value - The new value, which can be a single XML object or an XML list.
*/
setChildren(value: XML): XML
/**
 * Replaces the local name of this XML object  with a string constructed from the given name
* @param name - The name to set.
*/
setLocalName(name: string): void
/**
 * Replaces the name of this XML object with the given QName object.
* @param name - The fully qualified name.
*/
setName(name: QName): void
/**
 * Sets the namespace for this XML element.
* @param namespace - The namespace to set.
*/
setNamespace(namespace: Namespace): void
/**
 * Returns an XML list containing all XML properties of this XML object that represent XML text nodes.
*/
text(): XML
/**
 * Returns the string representation of this object.
*/
toString(): string
/**
 * Returns an XML-encoded string representation of this XML object.
*/
toXMLString(): string
/**
 * Evaluates the given XPath expression in accordance with the W3C XPath recommendation, using this XML object as the context node.
* @param expr - The XPath expression to use.
*/
xpath(expr: string): XML
}

declare class UnitValue {
  /** The base unit for all conversions. */
static baseUnit: UnitValue
  /** The unit name. */
readonly type: string
/** The numeric value. */
value: number
/** The base unit. */
baseUnit: UnitValue/**
 * Converts this instance to a different unit.
* @param unitName - The unit name.
*/
convert(unitName: string): any
/**
 * Returns this instance as a different unit.
* @param unitName - The unit name.
*/
as(unitName: string): UnitValue
}