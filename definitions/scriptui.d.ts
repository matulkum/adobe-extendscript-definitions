declare class ScriptUI {
  /** The font constants defined by the host application. */
static readonly applicationFonts: Object
/** An object whose properties are the names of compatability modes supported by the host application. */
static readonly compatibility: Object
/** A string containing the internal version number of the ScriptUI module. */
static readonly coreVersion: String
/** An object whose properties define attributes of the environment in which ScriptUI operates. */
static readonly environment: Environment
/** An object whose properties and methods provide access to objects used in the ScriptUI event system. */
static readonly events: Events
/** A string containing the name of the UI component framework with which this version of ScriptUI is compatible. */
static readonly frameworkName: String
/** A string containing the version number of the ScriptUI component framework */
static readonly version: Any
/** [object Object] */
static readonly Alignment: String
/** [object Object] */
static readonly FontStyle: Object/**
 * Finds and returns the resource for a given text string from the host application's resource data.
* @param text - The text to match.
*/
static getResourceText(text: String): String
/**
 * Loads a new image from resources or disk files into an image object.
* @param normal - The resource name or the disk file path to the image used for the normal state.
* @param disabled - The resource name, or the disk file path to the image used for the disabled state.
* @param pressed - The resource name, or the file-system path to the image used for the pressed state.
* @param rollover - The resource name, or the file-system path to the image used for the rollover state.
*/
static newImage(normal: String, disabled?: String, pressed?: String, rollover?: String): ScriptUIImage
/**
 * Creates a new font object for use in text controls and titles.
* @param name - The font name, or the font family name.
* @param style - [object Object]
* @param size - The font size in points.
*/
static newFont(name: String, style: String|Number, size: Number): ScriptUIFont
}
declare class Window {
  /**
  * The instance represents a top-level window or dialog box, which contains user-interface elements.
  * @param type - The window type.
  * @param title - The window title, a localizable string.
  * @param bounds - The window's position and size.
  * @param properties - An object containing creation-only properties.
 */
constructor(type: String, title?: String, bounds?: Bounds, properties?: Object)
  /** [object Object] */
static readonly frameworkName: String
/** [object Object] */
static readonly version: Any/**
 * Use this method to find an existing window.
* @param type - The name of a predefined resource available to JavaScript in the current application; or the window type.
* @param title - The window title.
*/
static find(type: String, title: String): Window
/**
 * Displays a platform-standard dialog containing a short message and an OK button.
* @param message - TThe string for the displayed message.
* @param title - A string to appear as the title of the dialog, if the platform supports a title.
* @param errorIcon - When true, the platform-standard alert icon is replaced by the platform-standard error icon in the dialog.
*/
static alert(message: any, title?: String, errorIcon?: Boolean): void
/**
 * Displays a platform-standard dialog containing a short message and two buttons labeled Yes and No.
* @param message - The string for the displayed message.
* @param noAsDefault - When true, the No button is the default choice, selected when the user types Enter.
* @param title - A string to appear as the title of the dialog, if the platform supports a title.
*/
static confirm(message: any, noAsDefault?: Boolean, title?: String): Boolean
/**
 * Displays a modal dialog that returns the user’s text input.
* @param prompt - The string for the displayed message.
* @param default - The initial value to be displayed in the text edit field.
* @param title - A string to appear as the title of the dialog.
*/
static prompt(prompt: any, _default?: String, title?: String): String
  /** [object Object] */
readonly graphics: ScriptUIGraphics
/** When true, the element is shown, when false it is hidden. */
visible: Boolean
/** The bounds of the window's drawable area, excluding the frame, in screen coordinates. */
bounds: Bounds
/** The bounds of the window frame in screen coordinates. */
readonly frameBounds: Bounds
/** The top left corner of the window frame in screen coordinates. */
frameLocation: Point
/** The size and location of the window's frame in screen coordinates. */
readonly frameSize: Dimension
/** The upper left corner of the window's drawable area. */
location: Point
/** The largest rectangle to which the window can be resized. */
maximumSize: Dimension
/** The smallest rectangle to which the window can be resized. */
minimumSize: Dimension
/** The preferred size of the window. */
preferredSize: Dimension
/** The current size and location of the content area of the window in screen coordinates. */
size: Dimension
/** The bounds of this window relative to the top-level parent window. */
readonly windowBounds: Bounds
/** A number of characters for which to reserve space when calculating the preferred size of the window. */
characters: Number
/** The default text justification style for child text elements. */
justify: String
/** The title, label, or displayed text, a localizeable string. */
text: String
/** Set to true to make this window active. */
active: Boolean
/** [object Object] */
shortcutKey: String
/** [object Object] */
cancelElement: Object
/** [object Object] */
defaultElement: Object
/** True if the window is expanded. */
maximized: Boolean
/** True if the window is minimized or iconified. */
minimized: Boolean
/** Tells the layout manager how unlike-sized children of this container should be aligned within a column or row. */
alignChildren: String
/** The collection of UI elements that have been added to this container. */
readonly children: Object
/** The layout manager for this container. */
layout: LayoutManager
/** The number of pixels between the edges of a container and the outermost child elements. */
margins: Number
/** The layout orientation of children in a container. */
orientation: String
/** The number of pixels separating one child element from its adjacent sibling element. */
spacing: Number
/** [object Object] */
alignment: String
/** An object that contains one or more creation properties of the container (properties used only when the element is created). */
properties: Object
/** True if this element is enabled. */
enabled: Boolean
/** The help text that is displayed when the mouse hovers over the element. */
helpTip: String
/** The number of pixels to indent the element. */
indent: Number
/** The immediate parent element. */
readonly parent: Object
/** The window that this element belongs to. */
readonly window: Window
/** The element type; "dialog", "palette", or "window". */
readonly type: String
/** The opacity of the window, in the range [0..1]. */
opacity: Number/**
 * Makes this window visible.
*/
show(): void
/**
 * Hides this windows.
*/
hide(): void
/**
 * Sends a notification message to all listeners, simulating the specified user interaction event.
* @param eventName - The event name; if omitted, the default event is sent.
*/
notify(eventName?: String): void
/**
 * Centers this window on screen or with repect to another window.
* @param window - The relative window. If not specified, centers on the screen.
*/
center(window?: Window): void
/**
 * Closes this window.
* @param return - A number to be returned from the show() method that invoked this window as a modal dialog.
*/
close(return?: Any): void
/**
 * Creates and returns a new control or container object and adds it to the children of this window.
* @param type - [object Object]
* @param bounds - A bounds specification that describes the size and position of the new control or container, relative to its parent.
* @param text - The text or label, a localizable string.
* @param properties - An object that contains one or more creation properties of the new child (properties used only when the element is created).
*/
add(type: String, bounds?: Bounds, text?: String, properties?: Object): Object
/**
 * [object Object]
* @param what - [object Object]
*/
remove(what: Any): void
/**
 * Registers an event handler for a particular type of event occuring in this window.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - When true, the handler is called only in the capturing phase of the event propagation.
*/
addEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Unregisters an event handler for a particular type of event occuring in this window.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - Whether to call the handler only in the capturing phase of the event propagation.
*/
removeEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Simulates the occurrence of an event in this target.
*/
dispatchEvent(): UIEvent
  /**
 * An event-handler callback function, called when the window acquires the keyboard focus.
*/
onActivate(): void
/**
 * An event-handler callback function, called when the window loses the keyboard focus.
*/
onDeactivate(): void
/**
 * An event-handler callback function, called  when the window is about to be closed.
*/
onClose(): Boolean
/**
 * An event-handler callback function, called  when the window  has been moved
*/
onMove(): void
/**
 * An event-handler callback function, called  when the window is being moved
*/
onMoving(): void
/**
 * An event-handler callback function, called after the window has been resized
*/
onResize(): void
/**
 * An event-handler callback function, called while a window is being resized
*/
onResizing(): void
/**
 * [object Object]
*/
onShortcutKey(): void
/**
 * An event-handler callback function, called just before the window is displayed
*/
onShow(): void
}
declare class LayoutManager {
  /**
 * Invokes the automatic layout behavior for the managed container.
*/
layout(): void
/**
 * Performs a layout after a Window is resized, based on the new size.
*/
resize(): void
}
declare class ScriptUIPen {
  /** The pen color. */
readonly color: Number
/** The theme name. */
readonly theme: String
/** The pen type, solid or theme. */
readonly type: String
/** The pixel width of the drawing line. */
lineWidth: Number
}
declare class ScriptUIBrush {
  /** The brush color. */
readonly color: Number
/** The theme name. */
readonly theme: String
/** The brush type, solid or theme. */
readonly type: Number
}

declare class ScriptUIGraphics {
  /** [object Object] */
static readonly BrushType: Object
/** [object Object] */
static readonly PenType: Object
  /** The background color for containers; for non-containers, the parent background color. */
backgroundColor: ScriptUIBrush
/** The background color for containers when disabled or inactive; for non-containers, the parent background color. */
disabledBackgroundColor: ScriptUIBrush
/** The text color when the element is disabled or inactive. */
disabledForegroundColor: ScriptUIPen
/** The default font to use for displaying text. */
font: ScriptUIFont
/** The text color. */
foregroundColor: ScriptUIPen
/** The current drawing path, encapsulated in a path object. */
readonly currentPath: ScriptUIPath
/** The current position in the current drawing path. */
readonly currentPoint: Point/**
 * Creates a new painting brush object.
* @param type - The brush type, solid or theme.
* @param color - The brush color.
*/
newBrush(type: Number, color: Number|String): ScriptUIBrush
/**
 * Creates a new drawing pen object.
* @param type - The pen type, solid or theme.
* @param color - The pen color.
* @param width - The width of the pen line in pixels.
*/
newPen(type: Number, color: Number|String, width: Number): ScriptUIPen
/**
 * Creates a new, empty path object.
*/
newPath(): ScriptUIPath
/**
 * Closes the current path.
*/
closePath(): void
/**
 * [object Object]
* @param x - The X coordinate for the new point, relative to the origin of this element.
* @param y - The Y coordinate for the new point, relative to the origin of this element.
*/
moveTo(x: Number, y: Number): Point
/**
 * [object Object]
* @param x - The X coordinate for the destination point, relative to the origin of this element.
* @param y - The Y coordinate for the destination point, relative to the origin of this element.
*/
lineTo(x: Number, y: Number): Point
/**
 * [object Object]
* @param left - The left coordinate relative to the origin of this element.
* @param top - The top coordinate relative to the origin of this element.
* @param width - The width in pixels.
* @param height - The height in pixels.
*/
rectPath(left: Number, top: Number, width: Number, height: Number): Point
/**
 * [object Object]
* @param left - The left coordinate of the region, relative to the origin of this element.
* @param top - The top coordinate of the region, relative to the origin of this element.
* @param width - The width of the region in pixels.
* @param height - The height of the region in pixels.
*/
ellipsePath(left: Number, top: Number, width: Number, height: Number): Point
/**
 * Strokes the path segments of a path with a given drawing pen.
* @param pen - The drawing pen that defines the color and line width.
* @param path - [object Object]
*/
strokePath(pen: ScriptUIPen, path?: ScriptUIPath): void
/**
 * Fills a path using a given painting brush.
* @param brush - The brush object that defines the fill color.
* @param path - [object Object]
*/
fillPath(brush: ScriptUIBrush, path?: ScriptUIPath): void
/**
 * Draws a focus ring within a region of this element.
* @param left - The left coordinate of the region.
* @param top - The top coordinate of the region.
* @param width - The width of the region in pixels.
* @param height - The height of the region in pixels.
*/
drawFocusRing(left: Number, top: Number, width: Number, height: Number): void
/**
 * Draws an image within a given region of the element.
* @param image - The image to draw.
* @param left - The left coordinate of the region, relative to the origin of this element.
* @param top - The top coordinate of the region, relative to the origin of this element.
* @param width - The width in pixels. If provided, the image is stretched or shrunk to fit. If omitted, uses the original image width.
* @param height - The height in pixels. If provided, the image is stretched or shrunk to fit. If omitted, uses the original image height.
*/
drawImage(image: ScriptUIImage, left: Number, top: Number, width?: Number, height?: Number): void
/**
 * Draw the platform-specific control associated with this element.
*/
drawOSControl(): void
/**
 * Draw a string of text starting at a given point in this element, using a given drawing pen and font.
* @param text - The text string.
* @param pen - The drawing pen to use.
* @param x - The left coordinate, relative to the origin of this element.
* @param y - The top coordinate, relative to the origin of this element.
* @param font - [object Object]
*/
drawString(text: String, pen: ScriptUIPen, x: Number, y: Number, font?: ScriptUIFont): void
/**
 * Calculates the size needed to display a string using the given font.
* @param text - The text string to measure.
* @param font - [object Object]
* @param boundingWidth - The bounding width.
*/
measureString(text: String, font?: ScriptUIFont, boundingWidth?: Number): Dimension
}
declare class DrawState {
  /** True if the cursor is hovering over this element. */
readonly mouseOver: Boolean
/** True if the left mouse button is being pressed. */
readonly leftButtonPressed: Boolean
/** True if the middle mouse button is being pressed. */
readonly middleButtonPressed: Boolean
/** True if the right mouse button is being pressed. */
readonly rightButtonPressed: Boolean
/** True if the element has the input focus. */
readonly hasFocus: Boolean
/** True if the Shift key is being pressed. */
readonly shiftKeyPressed: Boolean
/** True if the Ctrl key is being pressed. */
readonly ctrlKeyPressed: Boolean
/** True if the Command key is being pressed (in Mac OS only). */
readonly cmdKeyPressed: Boolean
/** True if the Option key is being pressed (in Mac OS only). */
readonly optKeyPressed: Boolean
/** True if the Alt key is being pressed (in Windows only). */
readonly altKeyPressed: Boolean
/** True if the Num Lock key is being pressed. */
readonly numLockKeyPressed: Boolean
/** True if the Caps Lock key is being pressed. */
readonly capsLockKeyPressed: Boolean
}
declare class ScriptUIFont {
  /** The font family name. */
readonly family: String
/** The complete font name, consisting of the family and style, if specified. */
readonly name: String
/** The font point size. */
readonly size: Number
/** [object Object] */
readonly style: Object
/** The name of a substitution font, a fallback font to substitute for this font if the requested font family or style is not available. */
readonly substitute: String
}
declare class ScriptUIImage {
  /** The image format. One of: resource, JPEG, GIF, TIFF, PNG, or PICT (Macintosh). */
readonly format: String
/** The image name. Either the file name, or the resource name. */
readonly name: String
/** The full path to the file that contains the image. */
readonly pathname: String
/** The image size in pixels. */
readonly size: Dimension
}
declare class StaticText {
  /** A number of characters for which to reserve space when calculating the preferred size of the element. */
characters: Number
/** The text justification style. */
justify: String
/** The text to display, a localizable string. */
text: String
/** Always false. This element cannot have input focus. */
active: Boolean
/** [object Object] */
shortcutKey: String
/** [object Object] */
readonly graphics: ScriptUIGraphics
/** True if this element is shown, false if it is hidden. */
visible: Boolean
/** The boundaries of the element, in parent-relative coordinates. */
bounds: Bounds
/** The upper left corner of this element relative to its parent. */
location: Point
/** The maximum height and width to which the element can be resized. */
maximumSize: Dimension
/** The minimum height and width to which the element can be resized. */
minimumSize: Dimension
/** The preferred size, used by layout managers to determine the best size for each element. */
preferredSize: Dimension
/** The current dimensions of this element. */
size: Dimension
/** The bounds of this element relative to the top-level parent window. */
readonly windowBounds: Bounds
/** [object Object] */
alignment: String
/** An array of child elements. */
readonly children: Object
/** An object that contains one or more creation properties of the container (properties used only when the element is created). */
properties: Object
/** True if this element is enabled. */
enabled: Boolean
/** The help text that is displayed when the mouse hovers over the element. */
helpTip: String
/** The number of pixels to indent the element during automatic layout. */
indent: Number
/** The parent element. */
readonly parent: Object
/** The window that this element belongs to. */
readonly window: Window
/** The element type, "statictext". */
readonly type: String/**
 * Sends a notification message, simulating the specified user interaction event.
* @param eventName - The name of the control event handler to call.
*/
notify(eventName?: String): void
/**
 * Shows this element.
*/
show(): void
/**
 * Hides this element.
*/
hide(): void
/**
 * Registers an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - When true, the handler is called only in the capturing phase of the event propagation.
*/
addEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Unregisters an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - Whether to call the handler only in the capturing phase of the event propagation.
*/
removeEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Simulates the occurrence of an event in this target.
*/
dispatchEvent(): Event
  /**
 * An event-handler callback function, called when the window is about to be drawn.
*/
onDraw(): void
/**
 * [object Object]
*/
onShortcutKey(): void
}
declare class Button {
  /** A number of characters for which to reserve space when calculating the preferred size of the element. */
characters: Number
/** The text justification style. */
justify: String
/** The text to display, a localizable string. */
text: String
/** True if this element is active. */
active: Boolean
/** [object Object] */
shortcutKey: String
/** [object Object] */
readonly graphics: ScriptUIGraphics
/** True if this element is shown, false if it is hidden. */
visible: Boolean
/** The boundaries of the element, in parent-relative coordinates. */
bounds: Bounds
/** The upper left corner of this element relative to its parent. */
location: Point
/** The maximum height and width to which the element can be resized. */
maximumSize: Dimension
/** The minimum height and width to which the element can be resized. */
minimumSize: Dimension
/** The preferred size, used by layout managers to determine the best size for each element. */
preferredSize: Dimension
/** The current dimensions of this element. */
size: Dimension
/** The bounds of this element relative to the top-level parent window. */
readonly windowBounds: Bounds
/** [object Object] */
alignment: String
/** An array of child elements. */
readonly children: Object
/** An object that contains one or more creation properties of the container (properties used only when the element is created). */
properties: Object
/** True if this element is enabled. */
enabled: Boolean
/** The help string that is displayed when the mouse hovers over the element. */
helpTip: String
/** The number of pixels to indent the element during automatic layout. */
indent: Number
/** The parent element. */
readonly parent: Object
/** The window that this element belongs to. */
readonly window: Window
/** The element type; "button". */
readonly type: String/**
 * Sends a notification message, simulating the specified user interaction event.
* @param eventName - The name of the control event handler to call.
*/
notify(eventName?: String): void
/**
 * Shows this element.
*/
show(): void
/**
 * Hides this element.
*/
hide(): void
/**
 * Registers an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - When true, the handler is called only in the capturing phase of the event propagation.
*/
addEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Unregisters an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - Whether to call the handler only in the capturing phase of the event propagation.
*/
removeEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Simulates the occurrence of an event in this target.
*/
dispatchEvent(): Event
  /**
 * An event-handler callback function, called when the element acquires the keyboard focus.
*/
onActivate(): void
/**
 * An event-handler callback function, called when the element loses the keyboard focus.
*/
onDeactivate(): void
/**
 * An event-handler callback function, called when the window is about to be drawn.
*/
onDraw(): void
/**
 * An event-handler callback function, called when the element has been clicked
*/
onClick(): void
/**
 * [object Object]
*/
onShortcutKey(): void
}
declare class IconButton {
  /** The image object that defines the image to be drawn. */
image: ScriptUIImage
/** True if this element is active. */
active: Boolean
/** [object Object] */
shortcutKey: String
/** [object Object] */
readonly graphics: ScriptUIGraphics
/** True if this element is shown, false if it is hidden. */
visible: Boolean
/** The boundaries of the element, in parent-relative coordinates. */
bounds: Bounds
/** The upper left corner of this element relative to its parent. */
location: Point
/** The maximum height and width to which the element can be resized. */
maximumSize: Dimension
/** The minimum height and width to which the element can be resized. */
minimumSize: Dimension
/** The preferred size, used by layout managers to determine the best size for each element. */
preferredSize: Dimension
/** The current dimensions of this element. */
size: Dimension
/** The bounds of this element relative to the top-level parent window. */
readonly windowBounds: Bounds
/** [object Object] */
alignment: String
/** An array of child elements. */
readonly children: Object
/** An object that contains one or more creation properties of the container (properties used only when the element is created). */
properties: Object
/** True if this element is enabled. */
enabled: Boolean
/** The help text that is displayed when the mouse hovers over the element. */
helpTip: String
/** The number of pixels to indent the element during automatic layout. */
indent: Number
/** The parent element. */
readonly parent: Object
/** The window that this element belongs to. */
readonly window: Window
/** The element type; "iconbutton". */
readonly type: String/**
 * Sends a notification message, simulating the specified user interaction event.
* @param eventName - The name of the control event handler to call.
*/
notify(eventName?: String): void
/**
 * Shows this element.
*/
show(): void
/**
 * Hides this element.
*/
hide(): void
/**
 * Registers an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - When true, the handler is called only in the capturing phase of the event propagation.
*/
addEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Unregisters an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - Whether to call the handler only in the capturing phase of the event propagation.
*/
removeEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Simulates the occurrence of an event in this target.
*/
dispatchEvent(): Event
  /**
 * An event-handler callback function, called when the element acquires the keyboard focus.
*/
onActivate(): void
/**
 * An event-handler callback function, called when the element loses the keyboard focus.
*/
onDeactivate(): void
/**
 * An event-handler callback function, called when the window is about to be drawn.
*/
onDraw(): void
/**
 * An event-handler callback function, called when the element has been clicked.
*/
onClick(): void
/**
 * [object Object]
*/
onShortcutKey(): void
}
declare class EditText {
  /** The currently selected text, or the empty string if there is no text selected. */
textselection: String
/** A number of characters for which to reserve space when calculating the preferred size of the element. */
characters: Number
/** The text justification style. */
justify: String
/** The current text displayed in the field, a localizable string. */
text: String
/** [object Object] */
readonly graphics: ScriptUIGraphics
/** True if this element is shown, false if it is hidden. */
visible: Boolean
/** The boundaries of the element, in parent-relative coordinates. */
bounds: Bounds
/** The upper left corner of this element relative to its parent. */
location: Point
/** The maximum height and width to which the element can be resized. */
maximumSize: Dimension
/** The minimum height and width to which the element can be resized. */
minimumSize: Dimension
/** The preferred size, used by layout managers to determine the best size for each element. */
preferredSize: Dimension
/** The current dimensions of this element. */
size: Dimension
/** The bounds of this element relative to the top-level parent window. */
readonly windowBounds: Bounds
/** True if this element is active. */
active: Boolean
/** [object Object] */
shortcutKey: String
/** [object Object] */
alignment: String
/** An array of child elements. */
readonly children: Object
/** An object that contains one or more creation properties of the container (properties used only when the element is created). */
properties: Object
/** True if this element is enabled. */
enabled: Boolean
/** The help text that is displayed when the mouse hovers over the element. */
helpTip: String
/** The number of pixels to indent the element during automatic layout. */
indent: Number
/** The parent element. */
readonly parent: Object
/** The window that this element belongs to. */
readonly window: Window
/** The element type; "edittext". */
readonly type: String/**
 * Shows this element.
*/
show(): void
/**
 * Hides this element.
*/
hide(): void
/**
 * Sends a notification message, simulating the specified user interaction event.
* @param eventName - The name of the control event handler to call.
*/
notify(eventName?: String): void
/**
 * Registers an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - When true, the handler is called only in the capturing phase of the event propagation.
*/
addEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Unregisters an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - Whether to call the handler only in the capturing phase of the event propagation.
*/
removeEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Simulates the occurrence of an event in this target.
*/
dispatchEvent(): Event
  /**
 * An event-handler callback function, called when the element acquires the keyboard focus.
*/
onActivate(): void
/**
 * An event-handler callback function, called when the element loses the keyboard focus.
*/
onDeactivate(): void
/**
 * An event-handler callback function, called when the window is about to be drawn.
*/
onDraw(): void
/**
 * An event-handler callback function, called when the content of the element is in the process of changing
*/
onChanging(): void
/**
 * An event-handler callback function, called when the content of the element has been changed
*/
onChange(): void
/**
 * [object Object]
*/
onShortcutKey(): void
}
declare class ListBox {
  /** The array of choice items displayed in the list. */
readonly items: ListItem
/** The width and height in pixels of each item in the list. */
itemSize: Dimension
/** The currently selected item for a single-selection list, or an array of items for current selection in a multi-selection list. */
selection: ListItem
/** True if this element is active. */
active: Boolean
/** [object Object] */
shortcutKey: String
/** [object Object] */
readonly graphics: ScriptUIGraphics
/** True if this element is shown, false if it is hidden. */
visible: Boolean
/** The boundaries of the element, in parent-relative coordinates. */
bounds: Bounds
/** The upper left corner of this element relative to its parent. */
location: Point
/** The maximum height and width to which the element can be resized. */
maximumSize: Dimension
/** The minimum height and width to which the element can be resized. */
minimumSize: Dimension
/** The preferred size, used by layout managers to determine the best size for each element. */
preferredSize: Dimension
/** The current dimensions of this element. */
size: Dimension
/** The bounds of this element relative to the top-level parent window. */
readonly windowBounds: Bounds
/** [object Object] */
alignment: String
/** [object Object] */
readonly children: Object
/** For a multi-column list box, the column properties. */
readonly columns: Object
/** An object that contains one or more creation properties of the control (properties used only when the element is created). */
properties: Object
/** True if this element is enabled. */
enabled: Boolean
/** The help text that is displayed when the mouse hovers over the element. */
helpTip: String
/** The number of pixels to indent the element during automatic layout. */
indent: Number
/** The parent element. */
readonly parent: Object
/** The window that this element belongs to. */
readonly window: Window
/** The element type; "listbox". */
readonly type: String/**
 * Adds an item to the choices in this list.
* @param type - The type of the child element, the string "item".
* @param text - The localizable text label for the item.
*/
add(type: String, text?: String): ListItem
/**
 * Retrieves an item object from the list that has a given text label.
* @param text - The text string to match.
*/
find(text: String): ListItem
/**
 * Removes a child item from the list.
* @param what - [object Object]
*/
remove(what: Any): void
/**
 * Removes all child items from the list.
*/
removeAll(): void
/**
 * Sends a notification message, simulating the specified user interaction event.
* @param eventName - The name of the control event handler to call.
*/
notify(eventName?: String): void
/**
 * Shows this element.
*/
show(): void
/**
 * Hides this element.
*/
hide(): void
/**
 * Registers an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - When true, the handler is called only in the capturing phase of the event propagation.
*/
addEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Unregisters an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - Whether to call the handler only in the capturing phase of the event propagation.
*/
removeEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Simulates the occurrence of an event in this target.
*/
dispatchEvent(): Event
  /**
 * An event-handler callback function, called when the element acquires the keyboard focus.
*/
onActivate(): void
/**
 * An event-handler callback function, called when the element loses the keyboard focus.
*/
onDeactivate(): void
/**
 * An event-handler callback function, called when the content of the element has been changed
*/
onChange(): void
/**
 * An event-handler callback function, called when an item in the listbox is double-clicked
*/
onDoubleClick(): void
/**
 * [object Object]
*/
onShortcutKey(): void
/**
 * An event-handler callback function, called when the window is about to be drawn.
*/
onDraw(): void
}
declare class DropDownList {
  /** The array of choice items displayed in the drop-down or pop-up list. */
readonly items: ListItem
/** The width and height in pixels of each item in the list. */
itemSize: Dimension
/** The currently selected  list item. */
selection: ListItem
/** True if this element is active. */
active: Boolean
/** [object Object] */
shortcutKey: String
/** [object Object] */
readonly graphics: ScriptUIGraphics
/** True if this element is shown, false if it is hidden. */
visible: Boolean
/** The boundaries of the element, in parent-relative coordinates. */
bounds: Bounds
/** The upper left corner of this element relative to its parent. */
location: Point
/** The maximum height and width to which the element can be resized. */
maximumSize: Dimension
/** The minimum height and width to which the element can be resized. */
minimumSize: Dimension
/** The preferred size, used by layout managers to determine the best size for each element. */
preferredSize: Dimension
/** The current dimensions of this element. */
size: Dimension
/** The bounds of this element relative to the top-level parent window. */
readonly windowBounds: Bounds
/** [object Object] */
alignment: String
/** An array of child elements. */
readonly children: Object
/** An object that contains one or more creation properties of the container (properties used only when the element is created). */
properties: Object
/** True if this element is enabled. */
enabled: Boolean
/** The help text that is displayed when the mouse hovers over the element. */
helpTip: String
/** The number of pixels to indent the element during automatic layout. */
indent: Number
/** The parent element. */
readonly parent: Object
/** The window that this element belongs to. */
readonly window: Window
/** The element type; "dropdownlist". */
readonly type: String/**
 * Adds an item or separator to the choices in this list.
* @param type - The type of the child element.
* @param text - The localizable text label for the item.
*/
add(type: String, text?: String): ListItem
/**
 * Retrieves an item object from the list that has a given text label.
* @param text - The text string to match.
*/
find(text: String): ListItem
/**
 * Removes a child item from the list.
* @param what - [object Object]
*/
remove(what: Any): void
/**
 * Removes all child items from the list.
*/
removeAll(): void
/**
 * Sends a notification message, simulating the specified user interaction event.
* @param eventName - The name of the control event handler to call.
*/
notify(eventName?: String): void
/**
 * Shows this element.
*/
show(): void
/**
 * Hides this element.
*/
hide(): void
/**
 * Registers an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - When true, the handler is called only in the capturing phase of the event propagation.
*/
addEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Unregisters an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - Whether to call the handler only in the capturing phase of the event propagation.
*/
removeEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Simulates the occurrence of an event in this target.
*/
dispatchEvent(): Event
  /**
 * An event-handler callback function, called when the element acquires the keyboard focus.
*/
onActivate(): void
/**
 * An event-handler callback function, called when the element loses the keyboard focus.
*/
onDeactivate(): void
/**
 * An event-handler callback function, called when the content of the element has been changed
*/
onChange(): void
/**
 * [object Object]
*/
onShortcutKey(): void
/**
 * An event-handler callback function, called when the window is about to be drawn.
*/
onDraw(): void
}
declare class ListItem {
  /** The checked state of an item in a list. */
checked: Boolean
/** [object Object] */
expanded: Boolean
/** [object Object] */
readonly index: Number
/** The selection state of this item. */
selected: Boolean
/** An image object for an icon to display in the item. */
image: ScriptUIImage
/** The label text to display for the item, a localizable string. */
text: String
/** [object Object] */
readonly subItems: any[]
/** An object that contains one or more creation properties of the item (properties used only when the element is created). */
properties: Object
/** The parent element, a list control. */
readonly parent: Object
/** The element type. */
readonly type: String
}
declare class Checkbox {
  /** The selection state of the control. */
value: Boolean
/** A number of characters for which to reserve space when calculating the preferred size of the element. */
characters: Number
/** The default text justification style for child text elements. */
justify: String
/** The text to display, a localizable string. */
text: String
/** True if this element is active. */
active: Boolean
/** [object Object] */
shortcutKey: String
/** [object Object] */
readonly graphics: ScriptUIGraphics
/** True if this element is shown, false if it is hidden. */
visible: Boolean
/** The boundaries of the element, in parent-relative coordinates. */
bounds: Bounds
/** The upper left corner of this element relative to its parent. */
location: Point
/** The maximum height and width to which the element can be resized. */
maximumSize: Dimension
/** The minimum height and width to which the element can be resized. */
minimumSize: Dimension
/** The preferred size, used by layout managers to determine the best size for each element. */
preferredSize: Dimension
/** The current dimensions of this element. */
size: Dimension
/** The bounds of this element relative to the top-level parent window. */
readonly windowBounds: Bounds
/** [object Object] */
alignment: String
/** An array of child elements. */
readonly children: Object
/** An object that contains one or more creation properties of the item (properties used only when the element is created). */
properties: Object
/** True if this element is enabled. */
enabled: Boolean
/** The help text that is displayed when the mouse hovers over the element. */
helpTip: String
/** The number of pixels to indent the element during automatic layout. */
indent: Number
/** The parent element. */
readonly parent: Object
/** The window that this element belongs to. */
readonly window: Window
/** The element type; "checkbox". */
readonly type: String/**
 * Sends a notification message, simulating the specified user interaction event.
* @param eventName - The name of the control event handler to call.
*/
notify(eventName?: String): void
/**
 * Shows this element.
*/
show(): void
/**
 * Hides this element.
*/
hide(): void
/**
 * Registers an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - When true, the handler is called only in the capturing phase of the event propagation.
*/
addEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Unregisters an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - Whether to call the handler only in the capturing phase of the event propagation.
*/
removeEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Simulates the occurrence of an event in this target.
*/
dispatchEvent(): Event
  /**
 * An event-handler callback function, called when the element acquires the keyboard focus.
*/
onActivate(): void
/**
 * An event-handler callback function, called when the element loses the keyboard focus.
*/
onDeactivate(): void
/**
 * An event-handler callback function, called when the window is about to be drawn.
*/
onDraw(): void
/**
 * An event-handler callback function, called when the element has been clicked.
*/
onClick(): void
/**
 * [object Object]
*/
onShortcutKey(): void
}
declare class Scrollbar {
  /** The amount by which to increment or decrement a scrollbar element's position when the user clicks a stepper button. */
stepdelta: Number
/** The amount to increment or decrement a scrollbar indicator's position when the user clicks ahead or behind the moveable element. */
jumpdelta: Number
/** The current position of the indicator. */
value: Number
/** [object Object] */
minvalue: Number
/** [object Object] */
maxvalue: Number
/** True if this element is active. */
active: Boolean
/** [object Object] */
shortcutKey: String
/** [object Object] */
readonly graphics: ScriptUIGraphics
/** True if this element is shown, false if it is hidden. */
visible: Boolean
/** The boundaries of the element, in parent-relative coordinates. */
bounds: Bounds
/** The upper left corner of this element relative to its parent. */
location: Point
/** The maximum height and width to which the element can be resized. */
maximumSize: Dimension
/** The minimum height and width to which the element can be resized. */
minimumSize: Dimension
/** The preferred size, used by layout managers to determine the best size for each element. */
preferredSize: Dimension
/** The current dimensions of this element. */
size: Dimension
/** The bounds of this element relative to the top-level parent window. */
readonly windowBounds: Bounds
/** [object Object] */
alignment: String
/** An array of child elements. */
readonly children: Object
/** An object that contains one or more creation properties of the container (properties used only when the element is created). */
properties: Object
/** True if this element is enabled. */
enabled: Boolean
/** The help text that is displayed when the mouse hovers over the element. */
helpTip: String
/** The number of pixels to indent the element during automatic layout. */
indent: Number
/** The parent element. */
readonly parent: Object
/** The window that this element belongs to. */
readonly window: Window
/** The element type, "scrollbar". */
readonly type: String/**
 * Sends a notification message, simulating the specified user interaction event.
* @param eventName - The name of the control event handler to call.
*/
notify(eventName?: String): void
/**
 * Shows this element.
*/
show(): void
/**
 * Hides this element.
*/
hide(): void
/**
 * Registers an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - When true, the handler is called only in the capturing phase of the event propagation.
*/
addEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Unregisters an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - Whether to call the handler only in the capturing phase of the event propagation.
*/
removeEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Simulates the occurrence of an event in this target.
*/
dispatchEvent(): Event
  /**
 * An event-handler callback function, called when the element acquires the keyboard focus.
*/
onActivate(): void
/**
 * An event-handler callback function, called when the element loses the keyboard focus.
*/
onDeactivate(): void
/**
 * An event-handler callback function, called when the window is about to be drawn.
*/
onDraw(): void
/**
 * An event-handler callback function, called when the content of the element is in the process of changing
*/
onChanging(): void
/**
 * An event-handler callback function, called when the user has finished dragging the position indicator, or has clicked the control.
*/
onChange(): void
/**
 * [object Object]
*/
onShortcutKey(): void
}
declare class RadioButton {
  /** The selection state of this button, selected when true. */
value: Boolean
/** A number of characters for which to reserve space when calculating the preferred size of the element. */
characters: Number
/** The default text justification style for child text elements. */
justify: String
/** The label text for this button, a localizable string. */
text: String
/** True if this element is active. */
active: Boolean
/** [object Object] */
shortcutKey: String
/** [object Object] */
readonly graphics: ScriptUIGraphics
/** True if this element is shown, false if it is hidden. */
visible: Boolean
/** The boundaries of the element, in parent-relative coordinates. */
bounds: Bounds
/** The upper left corner of this element relative to its parent. */
location: Point
/** The maximum height and width to which the element can be resized. */
maximumSize: Dimension
/** The minimum height and width to which the element can be resized. */
minimumSize: Dimension
/** The preferred size, used by layout managers to determine the best size for each element. */
preferredSize: Dimension
/** The current dimensions of this element. */
size: Dimension
/** The bounds of this element relative to the top-level parent window. */
readonly windowBounds: Bounds
/** [object Object] */
alignment: String
/** An array of child elements. */
readonly children: Object
/** An object that contains one or more creation properties of the container (properties used only when the element is created). */
properties: Object
/** True if this element is enabled. */
enabled: Boolean
/** The help text that is displayed when the mouse hovers over the element. */
helpTip: String
/** The number of pixels to indent the element during automatic layout. */
indent: Number
/** The parent element. */
readonly parent: Object
/** The window that this element belongs to. */
readonly window: Window
/** The element type; "radiobutton". */
readonly type: String/**
 * Sends a notification message, simulating the specified user interaction event.
* @param eventName - The name of the control event handler to call.
*/
notify(eventName?: String): void
/**
 * Shows this element.
*/
show(): void
/**
 * Hides this element.
*/
hide(): void
/**
 * Registers an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - When true, the handler is called only in the capturing phase of the event propagation.
*/
addEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Unregisters an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - Whether to call the handler only in the capturing phase of the event propagation.
*/
removeEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Simulates the occurrence of an event in this target.
*/
dispatchEvent(): Event
  /**
 * An event-handler callback function, called when the element acquires the keyboard focus.
*/
onActivate(): void
/**
 * An event-handler callback function, called when the element loses the keyboard focus.
*/
onDeactivate(): void
/**
 * An event-handler callback function, called when the window is about to be drawn.
*/
onDraw(): void
/**
 * An event-handler callback function, called when the element has been clicked.
*/
onClick(): void
/**
 * [object Object]
*/
onShortcutKey(): void
}
declare class Slider {
  /** The current position of the indicator. */
value: Number
/** [object Object] */
minvalue: Number
/** [object Object] */
maxvalue: Number
/** True if this element is active. */
active: Boolean
/** [object Object] */
shortcutKey: String
/** [object Object] */
readonly graphics: ScriptUIGraphics
/** True if this element is shown, false if it is hidden. */
visible: Boolean
/** The boundaries of the element, in parent-relative coordinates. */
bounds: Bounds
/** The upper left corner of this element relative to its parent. */
location: Point
/** The maximum height and width to which the element can be resized. */
maximumSize: Dimension
/** The minimum height and width to which the element can be resized. */
minimumSize: Dimension
/** The preferred size, used by layout managers to determine the best size for each element. */
preferredSize: Dimension
/** The current dimensions of this element. */
size: Dimension
/** The bounds of this element relative to the top-level parent window. */
readonly windowBounds: Bounds
/** [object Object] */
alignment: String
/** An array of child elements. */
readonly children: Object
/** An object that contains one or more creation properties of the container (properties used only when the element is created). */
properties: Object
/** True if this element is enabled. */
enabled: Boolean
/** The help text that is displayed when the mouse hovers over the element. */
helpTip: String
/** The number of pixels to indent the element during automatic layout. */
indent: Number
/** The parent element. */
readonly parent: Object
/** The window that this element belongs to. */
readonly window: Window
/** The element type, "slider". */
readonly type: String/**
 * Sends a notification message, simulating the specified user interaction event.
* @param eventName - The name of the control event handler to call.
*/
notify(eventName?: String): void
/**
 * Shows this element.
*/
show(): void
/**
 * Hides this element.
*/
hide(): void
/**
 * Registers an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - When true, the handler is called only in the capturing phase of the event propagation.
*/
addEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Unregisters an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - Whether to call the handler only in the capturing phase of the event propagation.
*/
removeEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Simulates the occurrence of an event in this target.
*/
dispatchEvent(): Event
  /**
 * An event-handler callback function, called when the element acquires the keyboard focus.
*/
onActivate(): void
/**
 * An event-handler callback function, called when the element loses the keyboard focus.
*/
onDeactivate(): void
/**
 * An event-handler callback function, called when the window is about to be drawn.
*/
onDraw(): void
/**
 * An event-handler callback function, called when the content of the element is in the process of changing
*/
onChanging(): void
/**
 * An event-handler callback function, called when the user has finished dragging the position indicator, or has clicked the control.
*/
onChange(): void
/**
 * [object Object]
*/
onShortcutKey(): void
}
declare class Progressbar {
  /** The current position of the indicator. */
value: Number
/** The minimum value in the range; always 0. If set to a different value, it is ignored. */
minvalue: Number
/** The maximum value in the range. Default is 100. */
maxvalue: Number
/** [object Object] */
readonly graphics: ScriptUIGraphics
/** True if this element is shown, false if it is hidden. */
visible: Boolean
/** The boundaries of the element, in parent-relative coordinates. */
bounds: Bounds
/** The upper left corner of this element relative to its parent. */
location: Point
/** The maximum height and width to which the element can be resized. */
maximumSize: Dimension
/** The minimum height and width to which the element can be resized. */
minimumSize: Dimension
/** The preferred size, used by layout managers to determine the best size for each element. */
preferredSize: Dimension
/** The current dimensions of this element. */
size: Dimension
/** The bounds of this element relative to the top-level parent window. */
readonly windowBounds: Bounds
/** [object Object] */
alignment: String
/** An array of child elements. */
readonly children: Object
/** An object that contains one or more creation properties of the container (properties used only when the element is created). */
properties: Object
/** True if this element is enabled. */
enabled: Boolean
/** The help text that is displayed when the mouse hovers over the element. */
helpTip: String
/** The number of pixels to indent the element during automatic layout. */
indent: Number
/** The parent element. */
readonly parent: Object
/** The window that this element belongs to. */
readonly window: Window
/** The element type, "progessbar". */
readonly type: String/**
 * Shows this element.
*/
show(): void
/**
 * Hides this element.
*/
hide(): void
/**
 * Registers an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - When true, the handler is called only in the capturing phase of the event propagation.
*/
addEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Unregisters an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - Whether to call the handler only in the capturing phase of the event propagation.
*/
removeEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Simulates the occurrence of an event in this target.
*/
dispatchEvent(): Event
  /**
 * An event-handler callback function, called when the window is about to be drawn.
*/
onDraw(): void
}
declare class TreeView {
  /** The array of top-level items displayed in the list. */
readonly items: ListItem
/** The width and height in pixels of each item in the list. */
itemSize: Dimension
/** The currently selected  list item. */
selection: ListItem
/** True if this element is active. */
active: Boolean
/** [object Object] */
shortcutKey: String
/** [object Object] */
readonly graphics: ScriptUIGraphics
/** True if this element is shown, false if it is hidden. */
visible: Boolean
/** The boundaries of the element, in parent-relative coordinates. */
bounds: Bounds
/** The upper left corner of this element relative to its parent. */
location: Point
/** The maximum height and width to which the element can be resized. */
maximumSize: Dimension
/** The minimum height and width to which the element can be resized. */
minimumSize: Dimension
/** The preferred size, used by layout managers to determine the best size for each element. */
preferredSize: Dimension
/** The current dimensions of this element. */
size: Dimension
/** The bounds of this element relative to the top-level parent window. */
readonly windowBounds: Bounds
/** [object Object] */
alignment: String
/** An array of child elements. */
readonly children: Object
/** An object that contains one or more creation properties of the control (properties used only when the element is created). */
properties: Object
/** True if this element is enabled. */
enabled: Boolean
/** The help text that is displayed when the mouse hovers over the element. */
helpTip: String
/** The number of pixels to indent the element during automatic layout. */
indent: Number
/** The parent element. */
readonly parent: Object
/** The window that this element belongs to. */
readonly window: Window
/** The element type, "treeview". */
readonly type: String/**
 * Adds an item to the top-level choices in this list.
* @param type - The type of the child element, the string "item".
* @param text - The localizable text label for the item.
*/
add(type: String, text?: String): ListItem
/**
 * Retrieves an item object from the list that has a given text label.
* @param text - The text string to match.
*/
find(text: String): ListItem
/**
 * Removes a child item from the list.
* @param what - [object Object]
*/
remove(what: Any): void
/**
 * Removes all child items from the list.
*/
removeAll(): void
/**
 * Sends a notification message, simulating the specified user interaction event.
* @param eventName - The name of the control event handler to call.
*/
notify(eventName?: String): void
/**
 * Shows this element.
*/
show(): void
/**
 * Hides this element.
*/
hide(): void
/**
 * Registers an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - When true, the handler is called only in the capturing phase of the event propagation.
*/
addEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Unregisters an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - Whether to call the handler only in the capturing phase of the event propagation.
*/
removeEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Simulates the occurrence of an event in this target.
*/
dispatchEvent(): Event
  /**
 * An event-handler callback function, called when the element acquires the keyboard focus.
*/
onActivate(): void
/**
 * An event-handler callback function, called when the element loses the keyboard focus.
*/
onDeactivate(): void
/**
 * An event-handler callback function, called when the user collapses (closes) an expanded node in the treeview.
* @param item - [object Object]
*/
onCollapse(item: ListItem): void
/**
 * An event-handler callback function, called when the window is about to be drawn.
*/
onDraw(): void
/**
 * An event-handler callback function, called when the user expands (opens) a collapsed node in the treeview.
* @param item - [object Object]
*/
onExpand(item: ListItem): void
/**
 * An event-handler callback function, called when the content of the element has been changed
*/
onChange(): void
/**
 * [object Object]
*/
onShortcutKey(): void
}
declare class FlashPlayer {
  /** True if this element is active. */
active: Boolean
/** True if this element is shown, false if it is hidden. */
visible: Boolean
/** The boundaries of the element, in parent-relative coordinates. */
bounds: Bounds
/** The upper left corner of this element relative to its parent. */
location: Point
/** The maximum height and width to which the element can be resized. */
maximumSize: Dimension
/** The minimum height and width to which the element can be resized. */
minimumSize: Dimension
/** The preferred size, used by layout managers to determine the best size for each element. */
preferredSize: Dimension
/** The current dimensions of this element. */
size: Dimension
/** The bounds of this element relative to the top-level parent window. */
readonly windowBounds: Bounds
/** [object Object] */
alignment: String
/** An object that contains one or more creation properties of the container (properties used only when the element is created). */
properties: Object
/** True if this element is enabled. */
enabled: Boolean
/** The help text that is displayed when the mouse hovers over the element. */
helpTip: String
/** The number of pixels to indent the element during automatic layout. */
indent: Number
/** The parent element. */
readonly parent: Object
/** The window that this element belongs to. */
readonly window: Window
/** The element type, "flashplayer". */
readonly type: String/**
 * Invokes an ActionScript function defined in the Flash application.
* @param name - The name of a Flash ActionScript function that has been registered with the ExternalInterface object by the currently loaded SWF file.
* @param argument - An argument to pass through to the function.
*/
invokePlayerFunction(name: String, argument?: Any): Any
/**
 * Loads a movie into the Flash Player, and begins playing it.
* @param file - The File object for the SWF file to load.
*/
loadMovie(file: File): void
/**
 * Restarts a movie that has been stopped.
* @param rewind - When true, restarts the movie from the beginning; otherwise, starts playing from the	point where it was stopped.
*/
playMovie(rewind?: Boolean): void
/**
 * Halts playback of the current movie.
*/
stopMovie(): void
/**
 * Sends a notification message, simulating the specified user interaction event.
* @param eventName - The name of the control event handler to call.
*/
notify(eventName?: String): void
/**
 * Shows this element.
*/
show(): void
/**
 * Hides this element.
*/
hide(): void
/**
 * Registers an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - When true, the handler is called only in the capturing phase of the event propagation.
*/
addEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Unregisters an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - Whether to call the handler only in the capturing phase of the event propagation.
*/
removeEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Simulates the occurrence of an event in this target.
*/
dispatchEvent(): Event
  /**
 * A function definition for a callback from the Flash ActionScript environment.
*/
callback(): void
}
declare class Group {
  /** [object Object] */
readonly graphics: ScriptUIGraphics
/** True if this element is shown, false if it is hidden. */
visible: Boolean
/** The boundaries of the element, in parent-relative coordinates. */
bounds: Bounds
/** The upper left corner of this element relative to its parent. */
location: Point
/** The maximum height and width to which the element can be resized. */
maximumSize: Dimension
/** The minimum height and width to which the element can be resized. */
minimumSize: Dimension
/** The preferred size, used by layout managers to determine the best size for each element. */
preferredSize: Dimension
/** The current dimensions of this element. */
size: Dimension
/** The bounds of this element relative to the top-level parent window. */
readonly windowBounds: Bounds
/** Tells the layout manager how unlike-sized children of this container should be aligned within a column or row. */
alignChildren: String
/** An array of child elements. */
readonly children: Object
/** The layout manager for this container. */
layout: LayoutManager
/** The number of pixels between the edges of a container and the outermost child elements. */
margins: Number
/** The layout orientation of children in a container. */
orientation: String
/** The number of pixels separating one child element from its adjacent sibling element. */
spacing: Number
/** [object Object] */
alignment: String
/** An object that contains one or more creation properties of the control (properties used only when the element is created). */
properties: Object
/** True if this element is enabled. */
enabled: Boolean
/** The help text that is displayed when the mouse hovers over the element. */
helpTip: String
/** The number of pixels to indent the element during automatic layout. */
indent: Number
/** The parent element. */
readonly parent: Object
/** The window that this element belongs to. */
readonly window: Window
/** The element type; "group". */
readonly type: String/**
 * Shows this element.
*/
show(): void
/**
 * Hides this element.
*/
hide(): void
/**
 * Adds a child element to this container.
* @param type - [object Object]
* @param bounds - A bounds specification that describes the size and position of the new control or container, relative to its parent.
* @param text - The text or label, a localizable string.
* @param properties - An object that contains one or more creation properties of the new child (properties used only when the element is created).
*/
add(type: String, bounds?: Bounds, text?: String, properties?: Object): Object
/**
 * [object Object]
* @param what - [object Object]
*/
remove(what: Any): void
/**
 * Registers an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - When true, the handler is called only in the capturing phase of the event propagation.
*/
addEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Unregisters an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - Whether to call the handler only in the capturing phase of the event propagation.
*/
removeEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Simulates the occurrence of an event in this target.
*/
dispatchEvent(): Event
  /**
 * An event-handler callback function, called when the group is about to be drawn.
*/
onDraw(): void
}
declare class Panel {
  /** [object Object] */
characters: Number
/** The default text justification style for child text elements. */
justify: String
/** The title or label text, a localizable string. */
text: String
/** [object Object] */
readonly graphics: ScriptUIGraphics
/** True if this element is shown, false if it is hidden. */
visible: Boolean
/** The boundaries of the element, in parent-relative coordinates. */
bounds: Bounds
/** The upper left corner of this element's frame relative to its parent. */
location: Point
/** The maximum height and width to which the element can be resized. */
maximumSize: Dimension
/** The minimum height and width to which the element can be resized. */
minimumSize: Dimension
/** The preferred size, used by layout managers to determine the best size for each element. */
preferredSize: Dimension
/** The current dimensions of this element. */
size: Dimension
/** The bounds of this element relative to the top-level parent window. */
readonly windowBounds: Bounds
/** Specifies how to align the child elements. */
alignChildren: String
/** An array of child elements. */
readonly children: Object
/** The layout manager for this container. */
layout: LayoutManager
/** The number of pixels between the edges of a container and the outermost child elements. */
margins: Number
/** The layout orientation of children in a container. */
orientation: String
/** The number of pixels separating one child element from its adjacent sibling element. */
spacing: Number
/** [object Object] */
alignment: String
/** An object that contains one or more creation properties of the control (properties used only when the element is created). */
properties: Object
/** True if this element is enabled. */
enabled: Boolean
/** The help text that is displayed when the mouse hovers over the element. */
helpTip: String
/** The number of pixels to indent the element during automatic layout. */
indent: Number
/** The parent element. */
readonly parent: Object
/** The window that this element belongs to. */
readonly window: Window
/** The element type; "panel". */
readonly type: String/**
 * Shows this element.
*/
show(): void
/**
 * Hides this element.
*/
hide(): void
/**
 * Adds a child element to this container.
* @param type - [object Object]
* @param bounds - A bounds specification that describes the size and position of the new control or container, relative to its parent.
* @param text - The text or label, a localizable string.
* @param properties - An object that contains one or more creation properties of the new child (properties used only when the element is created).
*/
add(type: String, bounds?: Bounds, text?: String, properties?: Object): Object
/**
 * [object Object]
* @param what - [object Object]
*/
remove(what: Any): void
/**
 * Registers an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - When true, the handler is called only in the capturing phase of the event propagation.
*/
addEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Unregisters an event handler for a particular type of event occuring in this element.
* @param eventName - The name of the event.
* @param handler - The function that handles the event.
* @param capturePhase - Whether to call the handler only in the capturing phase of the event propagation.
*/
removeEventListener(eventName: String, handler: Function, capturePhase?: Boolean): Boolean
/**
 * Simulates the occurrence of an event in this target.
*/
dispatchEvent(): Event
  /**
 * An event-handler callback function, called when the panel is about to be drawn.
*/
onDraw(): void
}
declare class Point {
  /** The horizontal coordinate, a pixel offset from the origin of the element's coordinate space. */
x: Number
/** The vertical coordinate, a pixel offset from the origin of the element's coordinate space. */
y: Number
/** The left coordinate. */
left: Number
/** The top coordinate. */
top: Number
/** The array length. */
readonly length: Number
}
declare class Dimension {
  /** The width in pixels. */
width: Number
/** The height in pixels. */
height: Number
/** The array length. */
readonly length: Number
}
declare class Bounds {
  /** The horizontal coordinate, a pixel offset from the origin of the element's coordinate space. */
x: Number
/** The vertical coordinate, a pixel offset from the origin of the element's coordinate space. */
y: Number
/** The width in pixels. */
width: Number
/** The height in pixels. */
height: Number
/** The horizontal coordinate, a pixel offset from the origin of the element's coordinate space. */
left: Number
/** The width in pixels. */
right: Number
/** The height in pixels. */
top: Number
/** The vertical coordinate, a pixel offset from the origin of the element's coordinate space. */
bottom: Number
/** The array length. */
readonly length: Number
}
declare class UIEvent {
  /**
  * Encapsulates input event information for an event that propagates through a container and control hierarchy.
  * @param type - [object Object]
  * @param captures - Set to true if this event can be captured.
  * @param bubbles - Set to true if the event bubbles.
  * @param view - The ScriptUI element that this event relates to.
  * @param detail - The click count for a mouse-click event.
 */
constructor(type: String, captures?: Boolean, bubbles?: Boolean, view?: Object, detail?: Number)
  /** True if this event can be captured. */
readonly captures: Boolean
/** True if the event is of a type that bubbles. */
readonly bubbles: Boolean
/** True if the default action associated with the event can be canceled with preventDefault(). */
readonly cancelable: Boolean
/** The event target object which is currently handling the event. During capturing and bubbling, this is different from the property target. */
readonly currentTarget: Boolean
/** The current phase of event propagation; one of none, target, capture, bubble. */
readonly eventPhase: String
/** The event target object for this event. */
readonly target: Object
/** The date and time at which the event occurred. */
readonly timeStamp: Date
/** The name of the event that this  object represents. */
readonly type: String
/** The ScriptUI element that this event relates to. */
readonly view: Any
/** The click count for a mouse-click event. */
readonly detail: Any/**
 * Prevents the default action associated with this event from being called.
*/
preventDefault(): void
/**
 * Stops the propagation of this event.
*/
stopPropagation(): void
/**
 * Initializes a UI event as a core W3C event.
* @param type - The event type.
* @param captures - Set to true if this event can be captured.
* @param bubbles - Set to true if the event bubbles.
* @param cancelable - Set to true if the default action is cancelable.
*/
initEvent(type: String, captures?: Boolean, bubbles?: Boolean, cancelable?: Boolean): void
/**
 * Initializes an event.
* @param type - The event type.
* @param captures - Set to true if this event can be captured.
* @param bubbles - Set to true if the event bubbles.
* @param view - The ScriptUI element that this event relates to.
* @param detail - The click count for a mouse-click event.
*/
initUIEvent(type: String, captures?: Boolean, bubbles?: Boolean, view?: Object, detail?: Number): void
}
declare class Event {
  static readonly NOT_DISPATCHING: any
static readonly CAPTURING_PHASE: any
static readonly AT_TARGET: any
static readonly BUBBLING_PHASE: any
  /** True if this event can be captured. */
readonly captures: Boolean
/** True if the event is of a type that bubbles. */
readonly bubbles: Boolean
/** True if the default action associated with the event can be canceled with preventDefault(). */
readonly cancelable: Boolean
/** The event target object which is currently handling the event. During capturing and bubbling, this is different from the property target. */
readonly currentTarget: Boolean
/** The current phase of event propagation; one of none, target, capture, bubble. */
readonly eventPhase: String
/** The event target object for this event. */
readonly target: Object
/** The date and time at which the event occurred. */
readonly timeStamp: Date
/** The name of the event that this object represents. */
readonly type: String/**
 * Prevents the default action associated with this event from being called.
*/
preventDefault(): void
/**
 * Stops the propagation of this event.
*/
stopPropagation(): void
}
declare class Environment {
  /** An object that reports the active state of the keyboard at any time. */
readonly keyboardState: KeyboardState
}
declare class Events {
  /**
 * [object Object]
* @param eventType - The name of an event type: one of "UIEvent", "KeyboardEvent", or "MouseEvent".
*/
createEvent(eventType: String): Event
}
declare class KeyboardState {
  /** A string containing the name of the currently pressed key, such as "a", or an empty string. */
readonly keyName: String
/** True if the Shift key is pressed. */
readonly shiftKey: Boolean
/** True if the Ctrl key is pressed. */
readonly ctrlKey: Boolean
/** True if the Alt or Option key is pressed. */
readonly altKey: Boolean
/** True if the Cmd key (in Mac OS) or Windows key (in Windows) is pressed. */
readonly metaKey: Boolean
}