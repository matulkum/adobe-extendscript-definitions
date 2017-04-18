/** Clears text from the Info panel. */
declare function clearOutput()
/** Converts string time value to a numeric time value. */
declare function currentFormatToTime(formattedTime: string, fps: number, isDuration: number)
/** Converts a numeric time value to a string time value. */
declare function timeToCurrentFormat(time: number, fps: number, isDuration: number)
/** Writes text to the Info panel, with no line break added. */
declare function write(...any)
/** Writes text to the Info panel, adding a line break at the end. */
declare function writeLn(...any)
declare function writeln(...any)
/** When true, the specified object exists. */
declare function isValid()

declare var app: Application
declare var system: System

declare class Application {
  /** The current After Effects project. */
  project: Project
  /** The locale (language and region) in which the applica- tion is running. */
  readonly isoLanguage: string
  /** The version number of the After Effects application. */
  version: string
  /** The name of this build of the application. */
  readonly buildName: string
  /** The number of this build of the application. */
  readonly buildNumber: number
  /** When true, the local application is running in Watch Folder mode. */
  readonly isWatchFolder: boolean
  /** When true, the local After Effects application is running as a render engine. */
  readonly isRenderEngine: boolean
  /** Application settings that can be set via scripting. */
  settings
  /** A callback function that is called when an error occurs in the application. */
  onError: (string) => void
  /** A numeric status code used when executing a script externally (that is, from a command line or AppleScript). 0 if no error occurred.A positive number indicates an error that occurred while running the script. */
  exitCode: number
  /** When true, the application remains open after running a script from the command line on Windows. */
  exitAfterLaunchAndEval: boolean
  /** When true, the project is saved if the application closes unexpectedly. */
  saveProjectOnCrash: boolean
  /** Memory in use by this application. */
  readonly memoryInUse: number
  /** The effects available in the application. */
  readonly effects: { displayName: string, category: string, matchName: string }[]
  /** The currently focused or last- focused viewer panel. */
  readonly activeViewer: Viewer


  /** Creates a new project in After Effects. */
  newProject(): Project | null
  /** Opens a project or an Open Project dialog box. */
  open(file?: File): Project | null
  /** Quits the application. */
  quit()
  /** Starts Watch Folder mode; does not return until Watch Folder mode is turned off. */
  watchFolder()
  /** Pauses a current watch- folder process. */
  pauseWatchFolder()
  /** Ends a current watch- folder process. */
  endWatchFolder()
  /** Purges a targeted type of cached information (replicates Purge options in the Edit menu). */
  purge()
  /** Groups the actions that follow it into a single undoable step. */
  beginUndoGroup(undoString: string)
  /** Ends an undo group; needed only when a script contains more than one undo group. */
  endUndoGroup()
  /** Begins suppression of dialogs in the user inter- face. */
  beginSuppressDialogs()
  /** Ends suppression of dialogs in the user inter- face. */
  endSuppressDialogs(alert: boolean)
  /** Sets memory usage limits as in the Memory & Cache preferences area. */
  setMemoryUsageLimits()
  /** Sets whether preferences are saved when the application is quit. */
  setSavePreferencesOnQuit()
  /** Brings the After Effects main window to the front of the screen. */
  activate()
  /** Schedules a JavaScript script for delayed exe- cution. */
  scheduleTask()
  /** Cancels a scheduled task. */
  cancelTask(taskID: number)
  /** Loads a color swatch from an Adobe Swatch Exchange (ASE) file. */
  parseSwatchFile()
}

declare class AutoOrientType {
  /** Layer faces in the direction of the motion path. */
  static readonly ALONG_PATH: number
  /** Layer always faces the active camera or points at its point of interest. */
  static readonly CAMERA_OR_POINT_OF_INTEREST: number
  /** Each character in a per- character 3D text layer auto- matically faces the active camera. */
  static readonly CHARACTERS_TOWARD_CAMERA: number

}

/** Represents audio/ visual files imported into After Effects. */
declare class AVItem extends Item {
  /** The name of the object as shown in the Project panel. */
  name: string
  /** The width of the item.height */
  width: number
  /** The height of the item.pixelAspect */
  height: number
  /** The pixel aspect ratio of the item.frameRate */
  pixelAspect: number
  /** The frame rate of the item.frameDuration */
  frameRate: number
  /** The frame duration for the item.duration */
  frameDuration: number
  /** The total duration of the item.useProxy */
  duration: number
  /** When true, a proxy source is used for this item.proxySource */
  useProxy: boolean
  /** The FootageItem object used as proxy for the item.time */
  readonly proxySource: FootageItem
  /** Current time of the item.usedIn */
  time: number
  /** The CompItem objects that use this item.hasVideo */
  readonly usedIn: CompItem[]
  /** When true, the item has a video component.hasAudio */
  readonly hasVideo: boolean
  /** When true, the item has an audio component.footageMissing */
  readonly hasAudio: boolean
  /** When true, the item cannot be found or is a placeholder. */
  readonly footageMissing: boolean

  /** Sets a proxy for the item. */
  setProxy(file: File)
  /** Sets a sequence as a proxy for the item. */
  setProxyWithSequence(file: File, forceAlphabetical: boolean)
  /** Sets a solid as a proxy for the item. */
  setProxyWithSolid(color: number[], name: number, width: number, height: number, pixelAspect: number)
  /** Sets a placeholder as a proxy for the item. */
  setProxyWithPlaceholder(name: string, width: number, height: number, frameRate: number, duration: number)
  /** Removes the proxy for the item. */
  setProxyToNone()

}
/** Represents those layers that contain AVItem objects (composition layers, footage layers, solid layers, text layers, and sound layers). */
declare class AVLayer extends Layer {
  /* The source item for this layer.*/
  source: AVItem
  /* When true, the layer has no expressly set name, but contains a named source.*/
  isNameFromSource: boolean
  /* The height of the layer.*/
  height: number
  /* The width of the layer.*/
  width: number
  /* When true, the layer's audio is enabled.*/
  audioEnabled: boolean
  /* When true, the layer's motion blur is enabled.*/
  motionBlur: boolean
  /* When true, the layer's effects are active.*/
  effectsActive: boolean
  /* When true, this is an adjustment layer.*/
  adjustmentLayer: boolean
  /* When true, this is a guide layer.*/
  guideLayer: boolean
  /* When true, this is a 3D layer.*/
  threeDLayer: boolean
  /* When true, 3D is set on a per- character basis in this text layer.*/
  threeDPerChar: boolean
  /* When true, this is an environment layer.*/
  environmentLayer: boolean
  /* When true, it is legal to change the value of collapseTransformation.*/
  canSetCollapseTransformation: boolean
  /* When true, collapse transformation is on.*/
  collapseTransformation: boolean
  /* When true, frame blending is enabled.*/
  frameBlending: boolean
  /* FrameBlendingType for the layer.*/
  frameBlendingType: number
  /* When true, it is legal to change the value of timeRemapEnabled.*/
  canSetTimeRemapEnabled: boolean
  /* When true, time remapping is enabled on this layer.*/
  timeRemapEnabled: boolean
  /* When true, the layer contains an audio compo- nent.*/
  hasAudio: boolean
  /** When true, the layer's audio is active at the cur- rent time. */
  audioActive: boolean
  /** The BlendingMode of the layer. */
  blendingMode: number
  /** When true, preserve transparency is enabled. */
  preserveTransparency: boolean
  /** if layer has a TrackMatteType, specifies the way it is applied. */
  trackMatteType: number
  /** When true, this layer is being used as a track matte for the layer below it. */
  isTrackMatte: boolean
  /** When true, the layer above is being used as a track matte on this layer. */
  hasTrackMatte: boolean
  /** The LayerQuality setting. */
  quality: number
  /** The AutoOrientType for the layer. */
  autoOrient: number

  marker: any
  timeremap: any
  motionTrackers: any
  masks: any
  effects: any
  transform: LayerTransFormProperties
  layerStyles: any
  geometryOptions: any
  materialOptions: any
  audio: {
    audioLevels: any
  }

  /** Reports whether this layer's audio is active at a given time. */
  audioActiveAtTime(time: number): boolean
  /** Calculates a transformation from a set of points in this layer. */
  calculateTransformFromPoints(pointTopLeft: number[], pointTopRight: number[], pointBottomRight: number[]): object
  /** Changes the source item for this layer. */
  replaceSource(newSource: AVItem, fixExpressions: boolean)
  /**
   * Retrieves the source rectangle of a layer.
   * @param timeT - The time index, in seconds. A floating-point value.
   * @param extents - True to include the extents, false otherwise.Extents apply to shape layers, increasing the size of the layer bounds as necessary.
   * */
  sourceRectAtTime(timeT: number, extents: boolean): { top: number, left: number, width: number, height: number }
  /** Opens the layer in a Layer panel. */
  openInViewer(): Viewer
}


declare type LayerTransFormProperties = {
  anchorPoint: Property
  position: Property
  scale: Property
  orientation: Property
  xRotation: Property
  yRotation: Property
  rotation: Property
  opacity: Property
}




declare class BlendingMode {
  static readonly ADD: number
  static readonly ALPHA_ADD: number
  static readonly CLASSIC_COLOR_BURN: number
  static readonly CLASSIC_COLOR_DODGE: number
  static readonly CLASSIC_DIFFERENCE: number
  static readonly COLOR: number
  static readonly COLOR_BURN: number
  static readonly COLOR_DODGE: number
  static readonly DANCING_DISSOLVE: number
  static readonly DARKEN: number
  static readonly DARKER_COLOR: number
  static readonly DIFFERENCE: number
  static readonly DISSOLVE: number
  static readonly EXCLUSION: number
  static readonly HARD_LIGHT: number
  static readonly HARD_MIX: number
  static readonly HUE: number
  static readonly LIGHTEN: number
  static readonly LIGHTER_COLOR: number
  static readonly LINEAR_BURN: number
  static readonly LINEAR_DODGE: number
  static readonly LINEAR_LIGHT: number
  static readonly LUMINESCENT_PREMUL: number
  static readonly LUMINOSITY: number
  static readonly MULTIPLY: number
  static readonly NORMAL: number
  static readonly OVERLAY: number
  static readonly PIN_LIGHT: number
  static readonly SATURATION: number
  static readonly SCREEN: number
  static readonly SILHOUETE_ALPHA: number
  static readonly SILHOUETTE_LUMA: number
  static readonly SOFT_LIGHT: number
  static readonly STENCIL_ALPHA: number
  static readonly STENCIL_LUMA: number
  static readonly VIVID_LIGHT: number
}

declare class FrameBlendingType {
  static readonly FRAME_MIX: number
  static readonly NO_FRAME_BLEND: number
  static readonly PIXEL_MOTION: number
}

/** Represents a camera layer within a composition. */
declare class CameraLayer extends Layer {
  marker: any
  transform: LayerTransFormProperties
  cameraOptions: {
    zoom: any
    depthOfField: any
    focusDistance: any
    blurLevel: any
  }
}
/** Associates a set of objects or values as a logical group and provides access to them by index. */
declare class Collection<T> {
  length: number
  [index: number]: T
}
/** Represents a composition, and allows you to manipulate it and get information about it. */
declare class CompItem extends AVItem {
  /** The duration of a single frame. */
  frameDuration: number
  /** When true, indicates that the composi- tion uses drop-frame timecode. */
  dropFrame: boolean
  /** The work area start time. */
  workAreaStart: number
  /** The work area duration. */
  workAreaDuration: number
  /** The number of layers in the composi- tion. */
  numLayers: number
  /** When true, shy layers are visible in the Timeline panel. */
  hideShyLayers: boolean
  /** When true, motion blur is enabled for this composition. */
  motionBlur: boolean
  /** When true, Draft 3D mode is enabled for the Composition panel. */
  draft3d: boolean
  /** When true, time filtering is enabled for this composition. */
  frameBlending: boolean
  /** When true, the frame rate of nested compositions is preserved. */
  preserveNestedFrameRate: boolean
  /** When true, the resolution of nested compositions is preserved. */
  preserveNestedResolution: boolean
  /** The background color of the composition. */
  bgColor: number[]
  /** The current active camera layer. */
  activeCamera: CameraLayer


  /** Changes the display of the start time in the Timeline panel. */
  displayStartTime: number
  /** The factor by which the x and y resolution of the Composition panel is downsampled. */
  resolutionFactor: number
  /** The camera shutter angle. */
  shutterAngle: number
  /** The camera shutter phase. */
  shutterPhase: number
  /** The minimum number of motion blur samples per frame for Classic 3D layers, shape layers, and certain effects. */
  motionBlurSamplesPerFrame: number
  /** The maximum number of motion blur samples of 2D layer motion. */
  motionBlurAdaptiveSampleLimit: number
  /** The layers of the composition. */
  layers: LayerCollection
  /** The selected layers of the composition. */
  selectedLayers: Layer[]
  /** The selected properties of the compo- sition. */
  selectedProperties: PropertyGroup[]
  /** The rendering plug-in module to be used to render this composition. */
  renderer: string
  /** The set of available rendering plug-in modules. */
  renderers: string[]

  /** Creates and returns a duplicate of this composition. */
  duplicate(): CompItem
  /** Gets a layer from this composition. */

  layer(index: number): Layer
  layer(otherLayer: Layer, relIndex: number): Layer
  layer(name: string): Layer
  /** Opens the composition in a Composition panel. */
  openInViewer(): Viewer

}

/** Describes footage that comes from a file. */
declare class FileSource {
  /** The file that defines this asset. */
  file: File
  /** The file that contains footage missing from this asset. */
  missingFootagePath: string
  /** Reloads the asset from the file. This method can be called only on a mainSource, not a proxySource. */
  reload()
}

/** Represents a folder in the Project panel. */
declare class FolderItem extends Item {
  /** The contents of this folder. */
  readonly items: ItemCollection
  /** The number of items contained in the folder. */
  readonly numItems: number
  /**
  * Returns the top-level item in this folder at the specified index position. Note that “top-level” here means top- level within the folder, not necessarily within the project.
  * @param {number} index - An integer, the position index of the item to retrieve. The first item is at index 1.
  */
  item(index: number): Item
}

/** Represents a footage item imported into a project, which appears in the Project panel. */
declare class FootageItem extends AVItem {
  /** The footage source file. */
  file: File
  /** All settings related to the footage item. */
  readonly mainSource: FileSource

  /** Replaces a footage file with another footage file. */
  replace(file: File)

  /** Replaces a footage file with a placeholder object. */
  replaceWithPlaceholder(name: string, width: number, height: number, frameRate: number, duration: number)

  /** Replaces a footage file with an image sequence. */
  replaceWithSequence(file: File, forceAlphabetical: boolean)

  /** Replaces a footage file with a solid. */
  replaceWithSolid(color: number[], name: string, width: number, height: number, pixelAspect: number)

  /** Opens the footage in a Footage panel. */
  openInViewer(): Viewer

}

declare class AlphaMode {
  static readonly IGNORE: number
  static readonly STRAIGHT: number
  static readonly PREMULTIPLIED: number
}

declare class FieldSeparationType {
  static readonly OFF: number
  static readonly UPPER_FIELD_FIRST: number
  static readonly LOWER_FIELD_FIRST: number
}

declare class PulldownPhase {
  static readonly OFF: number
  static readonly WSSWW: number
  static readonly SSWWW: number
  static readonly SWWWS: number
  static readonly WWWSS: number
  static readonly WWSSW: number
  static readonly WSSWW_24P_ADVANCE: number
  static readonly SSWWW_24P_ADVANCE: number
  static readonly SWWWS_24P_ADVANCE: number
  static readonly WWWSS_24P_ADVANCE: number
  static readonly WWSSW_24P_ADVANCE: number
}
declare class PulldownMethod {
  static readonly PULLDOWN_3_2: number
  static readonly ADVANCE_24P: number
}


/** Describes the file source of some footage. */
declare class FootageSource {
  /** When true, a footage clip or proxy includes an alpha channel. */
  hasAlpha: boolean
  /** The AlphaMode of an alpha channel. */
  alphaMode: number
  /** The color to be premultiplied. */
  premulColor: number[]
  /** When true, an alpha channel in a footage clip or proxy should be inverted. */
  invertAlpha: boolean
  /** When true, footage is a still image. */
  isStill: boolean
  /** The FieldSeparationType. */
  fieldSeparationType: number
  /** How the fields are to be separated in non - still footage. */
  highQualityFieldSeparation: boolean
  /** The PulldownPhase for the footage. */
  removePulldown: number
  /** How many times an image sequence is set to loop. */
  loop: number
  /** The native frame rate of the footage. */
  nativeFrameRate: number
  /** The effective frame rate as displayed and rendered in compositions by After Effects. */
  displayFrameRate: number
  /** The rate to which footage should conform.   */
  conformFrameRate: number

  /** Estimates the alphaMode setting. */
  guessAlphaMode()
  /** Estimates the pulldownType setting.
   * @param method - The method to use for estimation. A PulldownMethod enumerated value
  */
  guessPulldown(method: number)

}
declare class ImportAsType {
  static readonly COMP_CROPPED_LAYERS: number
  static readonly FOOTAGE: number
  static readonly COMP: number
  static readonly PROJECT: number

}
/** Encapsulates options for importing files into After Effects. */
declare class ImportOptions {
  /** The ImportAsType of file to be imported. */
  importAs: number

  /** When true, import a sequence of files, rather than an individ- ual file. */
  sequence: boolean

  /** When true, the “Force alphabetical order” option is set. */
  forceAlphabetical: boolean

  /** The file to import, or the first file of the sequence to import. */
  file: File
  constructor(file: File)
  /**
   * Reports whether the file can be imported as the source of a particular object type. If this method returns true, you can set the given type as the value of the i m p o r t A s attribute
   * @param {number} type - The type of file that can be imported. An ImportAsType enumerated value
   */
  canImportAs(type: number): boolean
}


/** Represents an item in a project that appears in the Project panel. */
declare class Item {
  /** The name of the object as shown in the Project panel. */
  name: string
  /** A descriptive string. */
  comment: string
  /** A unique identifier for this item. */
  id: number
  /** The parent folder of this item. */
  parentFolder: FolderItem
  /** When true, this item is currently selected. */
  selected: boolean
  /** The type of item. */
  typeName: string
  /** The label color for the item. */
  label: string
  /** Deletes this item from the project and from the Project panel. If the item is a FolderItem, all the items contained in the folder are also removed from the project. No files or folders are removed from disk. */
  remove()

}
/** Collects items in a project. */
declare class ItemCollection extends Collection<Item> {
  /** Creates a new CompItem object and adds it to the collection. */
  addComp(name: string, width: number, height: number, pixelAspect: number, duration: number, frameRate: number)
  /**
   * Creates a new FolderItem object and adds it to the collection.
   * @param name - A string containing the name of the folder.
   * */
  addFolder(name: string)
}

/** Encapsulates keyframe ease values in an After Effects property. */
declare class KeyframeEase {
  /** The speed setting for a keyframe. */
  speed: number
  /** The influence setting for a keyframe. */
  influence: number
  /**
   * The KeyframeEase object encapsulates the keyframe ease settings of a layer’s AE property. Keyframe ease is determined by the speed and influence values that you set using the property’s setTemporalEaseAtKey method
   * @param speed - A floating-point value. Sets the speed attribute.
   * @param influence - A floating- point value in the range [0.1..100.0].Sets the influence attribute.
   */
  constructor(speed: number, influence: number)

}
/** A base class for layer classes. */
declare class Layer {
  /** The index position of the layer. */
  index: number
  /** The name of the layer. */
  name: string
  /** The parent of this layer. */
  parent: any
  /** The current time of the layer. */
  time: number
  /** The start time of the layer. */
  startTime: number
  /** The time stretch percentage of the layer. */
  stretch: number
  /** The “in” point of the layer. */
  inPoint: number
  /** The “out” point of the layer. */
  outPoint: number
  /** When true, the layer is enabled. */
  enabled: boolean
  /** When true, the layer is soloed. */
  solo: boolean
  /** When true, the layer is shy. */
  shy: boolean
  /** When true, the layer is locked. */
  locked: boolean
  /** When true, the layer contains a video component. */
  hasVideo: boolean
  /** When true, the layer is active at the current time. */
  active: boolean
  /** When true, this is a null layer. */
  nullLayer: boolean
  /** All selected AE properties in the layer. */
  selectedProperties: PropertyBase[]
  /** A descriptive comment for the layer. */
  comment: string
  /** The composition that contains this layer. */
  containingComp: CompItem
  /** When true, the layer’s name has been explicitly set. */
  isNameSet: boolean

  /** Deletes the layer from the composition. */
  remove()
  /** Moves the layer to the top of the composition (makes it the first layer). */
  moveToBeginning()
  /** Moves the layer to the bottom of the composition (makes it the last layer). */
  moveToEnd()
  /** Moves the layer below another layer. */
  moveAfter(layer: Layer)
  /** Moves the layer above another layer. */
  moveBefore(layer: Layer)
  /** Duplicates the layer. */
  duplicate(): Layer
  /** Copies the layer to the top (beginning) of another compo- sition. */
  copyToComp(intoComp: CompItem)
  /** Reports whether this layer will be active at a specified time. */
  activeAtTime(time: number): boolean
  /** Sets a new parent for this layer.
   * @param newParent - Optional, a layer object in the same composition. If not specified, it sets the parent to None.
  */
  setParentWithJump(newParent?: Layer)
  /** Applies a named collection of animation settings to the layer. */
  applyPreset(presetName: File)
}
/** Collects layers in a project. */
declare class LayerCollection extends Collection<Layer>{
  /** Creates a new AVLayer and adds it to this collection. */
  add(item: AVItem, duration?: number)
  /** Creates a new, null layer and adds it to this collection. */
  addNull(duration?: number)
  /** Creates a new layer, a FootageItem with a SolidSource, and adds it to this collection. */
  addSolid(color: number[], name: string, width: number, height: number, pixelAspect: number, duration?: number)
  /** Creates a new point text layer and adds it to this collection. */
  addText(sourceText?: string)
  /** Creates a new paragraph(box) text layer and adds it to this collec- tion. */
  addBoxText(sourceText?: string)
  /** Creates a new camera layer and adds it to this collection. */
  addCamera(name: string, centerPoint: number[])
  /** Creates a new light layer and adds it to this collection. */
  addLight(name: string, centerPoint: number[])
  /** Creates a new shape layer and adds it to this collection. */
  addShape(): ShapeLayer
  /** Retrieves the layer object with a specified name. */
  byName(name: string): Layer | null
  /** Collects specified layers into a new composition. */
  precompose(layerIndicies: number[], name: string, moveAllAttributes?: boolean): CompItem
}

declare class LayerQuality {
  static readonly BEST: number
  static readonly DRAFT: number
  static readonly WIREFRAME: number
}

/** Represents a light layer within a composition. */
declare class LightLayer extends Layer {
  /** For light layers, the LightType of light. */
  lightType: number
  marker: any
  transform: LayerTransFormProperties
  lightOptions: {
    intensity: any
    color: any
    coneAngle: any
    coneFeather: any
    castsShadows: any
    shadowDarkness: any
    shadowDiffusion: any
  }
}

declare class LightType {
  static readonly PARALLEL: number
  static readonly SPOT: number
  static readonly POINT: number
  static readonly AMBIENT: number
}

/** Encapsulates marker values in an After Effects property. */
declare class MarkerValue {
  /** A comment on the associated layer. */
  comment: string
  /** The amount of time represented by the marker. */
  duration: number
  /** A chapter link reference point for the associated layer. */
  chapter: string
  /** The Flash Video cue point name. */
  cuePointName: string
  /** Whether the Flash Video cue point is for an event or navigation. */
  eventCuePoint: boolean
  /** A URL for Web page to be associated with the layer. */
  url: string
  /** A specific frame target within the Web page specified by url. */
  frameTarget: string

  /** Retrieves the key-value pairs associated with the marker value. */
  getParameters(): object
  /** Sets the key- value pairs associated with the marker value. */
  setParameters(keyValuePairs: object)
}

/** attributes in a layer.page 106 */
declare class MaskPropertyGroup extends PropertyGroup {
  /** The MaskMode. */
  maskMode: number
  /** When true, the mask is inverted. */
  inverted: boolean
  /** When true, the shape of the mask is RotoBezier. */
  rotoBezier: number
  /** How MaskMotionBlur is applied to this mask. */
  maskMotionBlur: number
  /** When true, the mask is locked. */
  locked: boolean
  /** The color used to draw the mask outline in the user interface. */
  color: number[]
  /** The feather MaskFeatherFalloff mode for the mask. */
  maskFeatherFalloff: number
}

declare class MaskFeatherFalloff {
  static readonly FFO_LINEAR: number
  static readonly FFO_SMOOTH: number
}

declare class MaskMode {
  static readonly NONE: number
  static readonly ADD: number
  static readonly SUBTRACT: number
  static readonly INTERSECT: number
  static readonly LIGHTEN: number
  static readonly DARKEN: number
  static readonly DIFFERENCE: number
}

declare class MaskMotionBlur {
  static readonly SAME_AS_LAYER: number
  static readonly ON: number
  static readonly OFF: number
}

/** Collects output modules in a render queue. */
declare class OMCollection extends Collection<OutputModule> { }

/** Represents an output module for a render queue. */
declare class OutputModule {
  /** The path and name of the file to be rendered. */
  file: File
  /** An PostRenderAction to be taken after rendering. */
  postRenderAction: number
  /** The user-interface name of the output module. */
  name: string
  /** All templates for the output module. */
  readonly templates: string[]
  /** When true, writes all source footage XMP metadata to the output file. */
  includeSourceXMP: boolean

  /** Removes this output module from the render- queue item’s list. */
  remove()
  /** Saves a new output - module template. */
  saveAsTemplate(name: string)
  /** Applies an output- module template. */
  applyTemplate(templateName: string)
}


declare class PostRenderAction {
  static readonly NONE: number
  static readonly IMPORT: number
  static readonly IMPORT_AND_REPLACE_USAGE: number
  static readonly SET_PROXY: number
}

/** Describes a placeholder for footage. */
declare class PlaceholderSource extends FootageSource { }

/** Represents an After Effects project. */
declare class Project {
  /** The file for the currently open project. */
  file: File
  /** The folder containing all the contents of the project; the equivalent of the Project panel */
  rootFolder: FolderItem
  /** All items in the project. */
  items: ItemCollection
  /** The currently active item. */
  activeItem: Item | null
  /** The color depth of the current project. */
  bitsPerChannel: number
  /** When true, thumbnail views use the transpar- ency checkerboard pattern. */
  transparencyGridThumbnails: boolean
  /** The total number of items contained in the project. */
  numItems: number
  /** All items selected in the Project panel. */
  readonly selection: Item[]
  /** The project’s render queue. */
  readonly renderQueue: RenderQueue
  /** The TimeDisplayType, corresponding to the Time Display Style section in the Project Settings dialog box. */
  timeDisplayType: number
  /** The Footage Start Time setting (FootageTimecodeDisplayStartType) in the Project Settings dialog box, which is enabled when Timecode is selected as the time display style. */
  footageTimecodeDisplayStartType: number
  /** The Use Feet + Frames setting in the Project Settings dialog box. */
  framesUseFeetFrames: number
  /** The Use Feet + Frames (FeetFramesFilmType) menu setting in the Project Settings dialog box. */
  feetFramesFilmType: number
  /** The Frame FramesCountType menu setting in the Project Settings dialog box. */
  framesCountType: number
  /** The frame at which to start numbering when displaying the project. */
  displayStartFrame: number
  /** When true, linear blending is used for the project. */
  linearBlending: boolean
  /** The project’s XMP metadata. */
  xmpPacket: string

  /** Retrieves an item from the project. */
  item(index: number): Item

  /** Consolidates all footage in the project. */
  consolidateFootage(): number

  /** Removes unused footage from the project. */
  removeUnusedFootage(): number

  /** Reduces the project to a specified set of items. */
  reduceProject(array_of_items: Item[])

  /** Closes the project with normal save CloseOptions. */
  close(closeOptions: number)

  /** Saves the project. */
  save(file?: File)

  /** Displays a Save dialog box. */
  saveWithDialog(): boolean


  /** Imports a placeholder into the project. */
  importPlaceholder(name: string, width: number, height: number, frameRate: number, duration: number): object

  /** Imports a file into the project.
   * @param importOptions - importAsType
  */
  importFile(importOptions: number)

  /** Displays an Import File dialog box. */
  importFileWithDialog(): Array<Item> | null

  /** Shows or hides the Project panel. */
  showWindow(doShow: boolean)

  /** Automatically replaces text in all expressions. */
  autoFixExpressions(oldText: string, newText): string
}


declare class CloseOptions {
  static readonly DO_NOT_SAVE_CHANGES: number
  static readonly PROMPT_TO_SAVE_CHANGES: number
  static readonly SAVE_CHANGES: number
}
declare class FeetFramesFilmType {
  static readonly MM16: number
  static readonly MM35: number
}
declare class FootageTimecodeDisplayStartType {
  static readonly FTCS_START_0: number
  static readonly FTCS_USE_SOURCE_MEDIA: number
}
declare class FramesCountType {
  static readonly FC_START_1: number
  static readonly FC_START_0: number
  static readonly FC_TIMECODE_CONVERSION: number
}
declare class TimeDisplayType {
  static readonly FRAMES
  static readonly TIMECODE
}

/** Represents an After Effects property. */
declare class Property extends PropertyBase {
  /** Type of value stored in this property. */
  propertyValueType: any
  /** Current value of the property. */
  readonly value: any
  /** When true, there is a minimum permitted value. */
  readonly hasMin: boolean
  /** When true, there is a maximum permitted value. */
  readonly hasMax: boolean
  /** The minimum permitted value. */
  readonly minValue: number
  /** The maximum permitted value. */
  readonly maxValue: number
  /** When true, the property defines a spatial value. */
  readonly isSpatial: boolean
  /** When true, the property can be keyframed. */
  canVaryOverTime: boolean
  /** When true, the property has keyframes or an expression enabled that can vary its values. */
  readonly isTimeVarying: boolean
  /** The number of keyframes on this property. */
  readonly numKeys: number
  /** A text description of the units in which the value is expressed. */
  readonly unitsText: string
  /** The expression string for this property. */
  expression: string
  /** When true, the expression can be set by a script. */
  canSetExpression: boolean
  /** When true, the expression is used to generate val- ues for the property. */
  expressionEnabled: boolean
  /** The error, if any, that occurred when the last expres- sion was evaluated. */
  readonly expressionError: string
  /** All selected keyframes of the property. */
  readonly selectedKeys: number[]
  /** The position index of this property. */
  readonly propertyIndex: number
  /** When true, the property’s dimensions are repre- sented as separate properties. */
  dimensionsSeparated: boolean
  /** When true, the property represents one of the separated dimensions for a multidimensional property. */
  readonly isSeparationFollower: boolean
  /** When true, the property is multidimensional and can be separated. */
  readonly isSeparationLeader: boolean
  /** For a separated follower, the dimension it repre- sents in the multidimensional leader. */
  readonly separationDimension: number
  /** The original multidimensional property for this separated follower. */
  readonly separationLeader: object

  /** Gets the value of the property evalu- ated at given time. */
  valueAtTime(time:number, preExpression:boolean)
  /** Sets the static value of the property. */
  setValue(newValue: any)
  /** Creates a keyframe for the property. */
  setValueAtTime(time: number, newValue: any)
  /** Creates a set of keyframes for the prop- erty. */
  setValuesAtTimes(time: number[], newValue: any[])
  /** Finds a keyframe and sets the value of the property at that keyframe. */
  setValueAtKey(keyIndex: number, newVal: any)
  /** Gets the keyframe nearest to a specified time. */
  nearestKeyIndex(time: number): number
  /** Gets the time at which a condition occurs. */
  keyTime(keyIndex: number): number
  keyTime(markerComment: string): number
  /** Gets the value of a keyframe at the time at which a condition occurs. */
  keyValue(keyIndex: number): number
  keyValue(markerComment: string): MarkerValue
  /** Adds a new keyframe to the property at a given time. */
  addKey(time: number): number
  /** Removes a keyframe from the property. */
  removeKey(keyIndex: number)

  /** When true, this property can be inter- polated.
   * @param type - KeyframeInterpolationType
  */
  isInterpolationTypeValid(type: number): boolean
  /** Sets the interpolation type for a key. */
  setInterpolationTypeAtKey(keyIndex: number, inType: number, outType?: number)
  /** Gets the 'in' interpolation type for a key.
   * @param keyindex
   * @return KeyframeInterpolationType
  */
  keyInInterpolationType(keyIndex: number): number
  /** Gets the 'out' interpolation type for a key. */
  keyOutInterpolationType(keyIndex: number): number
  /** Sets the “in” and “out” tangent vectors for a key. */
  setSpatialTangentsAtKey(keyIndex: number, inTangent: number[], outTangent?: number)
  /** Gets the “in” spatial tangent for a key. */
  keyInSpatialTangent()
  /** Gets the “out” spatial tangent for a key.
   * @param keyIndex - The index for the keyframe. An integer in the range [1..numKeys], as returned by the addKey or nearest- KeyIndex method
   * @return Array of floating-point values: The index for the keyframe. An integer in the range [1..numKeys], as returned by the addKey or nearest- KeyIndex method. • If the property value type is PropertyValueType.TwoD_SPATIAL, the array contains 2 floating-point values. • If the property value type is PropertyValueType.ThreeD_SPATIAL, the array contains 3 floating-point values. • If the property value type is neither of these types, an exception is generated.
  */
  keyOutSpatialTangent(keyIndex: number): number[]
  /** Sets the “in” and “out” temporal ease for a key. */
  setTemporalEaseAtKey(keyIndex: number, inTemporalEase: number[], outTemporalEase?: number[])
  /** Gets the “in” temporal ease for a key. */
  keyInTemporalEase()
  /** Gets the “out” temporal ease for a key. */
  keyOutTemporalEase(keyIndex: number): number[]
  /** Sets whether a keyframe has temporal continuity. */
  setTemporalContinuousAtKey(keyIndex: number, newVal: boolean)
  /** Reports whether a keyframe has tem- poral continuity. */
  keyTemporalContinuous(keyIndex: number): boolean
  /** Sets whether a keyframe has temporal auto- Bezier. */
  setTemporalAutoBezierAtKey(keyIndex: number, newVal: boolean)
  /** Reports whether a keyframe has tem- poral auto- Bezier. */
  keyTemporalAutoBezier(keyIndex: number): boolean
  /** Sets whether a keyframe has spatial continuity. */
  setSpatialContinuousAtKey(keyIndex: number, newVal: boolean)
  /** Reports whether a keyframe has spatial continuity. */
  keySpatialContinuous(keyIndex: number): boolean
  /** Sets whether a keyframe has spatial auto- Bezier. */
  setSpatialAutoBezierAtKey(keyIndex: number, newVal: boolean)
  /** Reports whether a keyframe has spatial auto- Bezier. */
  keySpatialAutoBezier()
  /** Sets whether a keyframe is roving. */
  setRovingAtKey(keyIndex: number, newVal: boolean)
  /** Reports whether a keyframe is roving. */
  keyRoving(keyIndex: number): boolean
  /** Sets whether a keyframe is selected. */
  setSelectedAtKey(keyIndex: number, onOff: boolean)
  /** Reports whether a keyframe is selected. */
  keySelected(keyIndex: number): boolean
  /** For a separated, multidimensional property, retrieves a specific follower property. */
  getSeparationFollower(dim: number): object
}

declare class PropertyValueType {
  /** Stores no data. */
  NO_VALUE: number
  /** Array of three floating- point positional values.For example, an Anchor Point value might be [10.0, 20.2, 0.0] */
  ThreeD_SPATIAL: number
  /** Array of three floating- point quantitative values.For example, a Scale value might be [100.0, 20.2, 0.0] */
  ThreeD: number
  /** Array of 2 floating- point positional values For example, an Anchor Point value might be [5.1, 10.0] */
  TwoD_SPATIAL: number
  /** Array of 2 floating- point quantitative values.For example, a Scale value might be [5.1, 100.0] */
  TwoD: number
  /** A floating- point value. */
  OneD: number
  /** Array of 4 floating- point values in the range [0.0..1.0].For example, [0.8, 0.3, 0.1, 1.0] */
  COLOR: number
  /** Custom property value, such as the Histogram property for the Levels effect. */
  CUSTOM_VALUE: number
  /** MarkerValue object; see “MarkerValue object” on page 102. */
  MARKER: number
  /** Integer; a value of 0 means no layer. */
  LAYER_INDEX: number
  /** Integer; a value of 0 means no mask. */
  MASK_INDEX: number
  /** Shape object; */
  SHAPE: number
  /** TextDocument object; */
  TEXT_DOCUMENT: number

}

declare class KeyframeInterpolationType {
  static readonly LINEAR: number
  static readonly BEZIER: number
  static readonly HOLD: number
}

/** A base class for After Effects property and property group classes. */
declare class PropertyBase {

  /** Name of the property. */
  name: string
  /** A special name for the property used to build unique naming paths. */
  readonly matchName: string
  /** Index of this property within its parent group. */
  readonly propertyIndex: number
  /** The number of levels of parent groups between this property and the containing layer. */
  readonly propertyDepth: number
  /** The PropertyType. */
  propertyType: number
  /** The immediate parent group of this property. */
  readonly parentProperty: PropertyGroup | null
  /** When true, the property has been changed since its creation. */
  readonly isModified: boolean
  /** When true, the user interface displays an eyeball icon for this prop- erty. */
  readonly canSetEnabled: boolean
  /** When true, this property is enabled. */
  enabled: boolean
  /** When true, this property is active. */
  readonly active: boolean
  /** When true, this property is not displayed in the user interface. */
  readonly elided: boolean
  /** When true, this property is an effect. */
  readonly isEffect: boolean
  /** When true, this property is a mask. */
  readonly isMask: boolean
  /** When true, this property is selected. */
  selected: boolean

  /** Gets the parent group for this property. */
  propertyGroup(countUp?: number)
  /** Removes this from the project. */
  remove()
  /** Moves this property to a new position in its parent group. */
  moveTo(newIndex: number)
  /** Duplicates this property object. */
  duplicate(): PropertyBase
}

declare class PropertyType {
  static readonly PROPERTY: number
  static readonly INDEXED_GROUP: number
  static readonly NAMED_GROUP: number

}

/** Represents an After Effects property group. */
declare class PropertyGroup extends PropertyBase {
  readonly numProperties: number

  /** Gets a member property or group. */
  property(index: number): PropertyBase | null
  property(name: string): PropertyBase | null
  /** Reports whether a property can be added to the group. */
  canAddProperty(name: string): boolean
  /** Adds a property to the group. */
  addProperty(name: string): PropertyBase

}
/** Represents the After Effects render queue. */
declare class RenderQueue {
  /** When true, a render is in progress. */
  readonly rendering: boolean
  /** The total number of items in the render queue. */
  readonly numItems: number
  /** The collection of items in the render queue. */
  readonly items: RQItemCollection

  /** Show or hides the Render Queue panel. */
  showWindow(doShow: boolean)
  /** Starts the rendering process; does not return until render is complete. */
  render()
  /** Pauses or restarts the rendering process. */
  pauseRendering(pause: boolean)
  /** Stops the rendering process. */
  stopRendering()
  /** Gets a render- queue item from the collection. */
  item(index: number): RenderQueueItem
}
/** Represents a renderable item in a render queue. */
declare class RenderQueueItem extends Item {
  /** The total number of Output Modules assigned to the item. */
  readonly numOutputModules: number
  /** When true, this item is rendered when the queue is started. */
  render: boolean
  /** The time when rendering began for the item. */
  readonly startTime: Date | null
  /** The time elapsed in the current rendering of this item. */
  readonly elapsedSeconds: number | null
  /** The start time in the composition to be rendered. */
  timeSpanStart: number
  /** The duration of the composition to be rendered. */
  timeSpanDuration: number
  /** The number of frames to skip when rendering this item. */
  skipFrames: number
  /** The composition to be rendered by this item. */
  readonly comp: CompItem
  /** The collection of Output Modules for this item. */
  readonly outputModules: OMCollection
  /** A set of Render Settings templates. */
  readonly templates: string[]
  /** The current rendering RQItemStatus of the item. */
  readonly status: number
  /** A callback function that is called during the rendering process when the status of the item changes. */
  onStatusChanged: Function | null
  /** A LogType for this item. */
  readonly logType: number

  /* . Gets an Output Module for the item. */
  outputModule(index: string): OutputModule
  /* . Removes the item from the render queue. */
  remove()
  /* . Saves a new Render Settings template. */
  saveAsTemplate(name: string)
  /* . Applies a Render Settings template. */
  applyTemplate(templateName: string)
  /* . Duplicates this item. */
  duplicate(): RenderQueueItem
}


declare class LogType {
  static readonly ERRORS_ONLY: number
  static readonly ERRORS_AND_SETTINGS: number
  static readonly ERRORS_AND_PER_FRAME_INFO: number
}

declare class RQItemStatus {
  /** Rendering process has been paused. */
  WILL_CONTINUE: number
  /** Item lacks a valid output path. */
  NEEDS_OUTPUT: number
  /** Item is listed in the Render Queue panel but composition is not ready to render. */
  UNQUEUED: number
  /** Composition is ready to render. */
  QUEUED: number
  /** Composition is rendering */
  RENDERING: number
  /** Rendering process was stopped by user or script. */
  USER_STOPPED: number
  /** Rendering process was stopped due to an error. */
  ERR_STOPPED: number
  /** Rendering process for the item is complete. */
  DONE: number

}

/** Provides access to application settings and preferences. */
declare class RQItemCollection extends Collection<RenderQueueItem>{
  add(comp: CompItem): RenderQueueItem
}
/** Encapsulates the outline shape information for a mask. */
declare class Shape {
  /** When true, the shape is a closed curve. */
  closed: boolean
  /** The anchor points of the shape. */
  vertices: number[][]
  /** The tangent vectors coming into the shape vertices. */
  inTangents: number[][]
  /** The tangent vectors coming out of the shape vertices. */
  outTangents: number[][]
  /** The mask path segment (sections of a mask path between vertices) containing each feather point. */
  featherSegLocs: number[]
  /** The relative position of each feather point on its mask path segment. */
  featherRelSegLocs: number[]
  /** The feather amount (radius) for each feather point. */
  featherRadii: number[]
  /** The feather radius interpolation type for each feather point. */
  featherInterps: number[]
  /** The feather tension at each feather point. */
  featherTensions: number[]
  /** The direction (inner or outer) of each feather point. */
  featherTypes: number[]
  /** The relative angle between the two normals on either side of a curved outer feather boundary at a corner on a mask path. */
  featherRelCornerAngles: number[]
}
/** Represents a shape layer within a composition. */
declare class ShapeLayer extends AVLayer { }
/** Describes a solid color that is the source of some footage. */
declare class SolidSource {
  color: number[]
}
/** Provides access to the operating system from the application. */
declare class System {
  /** The current user name. */
  readonly userName: string
  /** The name of the host computer. */
  readonly machineName: string
  /** The name of the operating system. */
  readonly osName: string
  /** The version of the operating system. */
  readonly osVersion: string
  /** Execute’s a command on the system’s command line. */
  callSystem(cmdLineToExecute: string): string
}
/** Encapsulates the text in a text layer. */
declare class TextDocument {
  //* The text layer’s Source Text value. */
  text: string
  //* The text layer’s font specified by its PostScript name. */
  font: string
  //* The text layer’s font size in pixels. */
  fontSize: number
  //* When true, the text layer shows a fill. */
  applyFill: boolean
  //* When true, the text layer shows a stroke. */
  applyStroke: boolean
  //* The text layer’s fill color. */
  fillColor: number[]
  //* The text layer’s stroke color. */
  strokeColor: number[]
  //* Indicates the rendering order for the fill and stroke of a text layer. */
  strokeOverFill: boolean
  //* The text layer’s stroke thickness. */
  strokeWidth: number
  //* The ParagraphJustification for the text layer. */
  readonly justification: number
  //* The text layer’s spacing between characters. */
  tracking: number
  //* When true, the text layer is point (unbounded) text. */
  pointText: boolean
  //* When true, the text layer is paragraph (bounded) text. */
  readonly boxText: boolean
  //* For box text, the pixel dimensions for the text bounds. */
  boxTextSize: number[]

  /** Restores the default character settings in the Character panel. */
  resetCharStyle()
  /** Restores the default paragraph settings in the Paragraph panel. */
  resetParagraphStyle()
}

declare class ParagraphJustification {
  static readonly LEFT_JUSTIFY: number
  static readonly RIGHT_JUSTIFY: number
  static readonly CENTER_JUSTIFY: number
  static readonly FULL_JUSTIFY_LASTLINE_LEFT: number
  static readonly FULL_JUSTIFY_LASTLINE_RIGHT: number
  static readonly FULL_JUSTIFY_LASTLINE_CENTER: number
  static readonly FULL_JUSTIFY_LASTLINE_FULL: number
}

/** Represents a text layer within a composition. */
declare class TextLayer extends AVLayer { }

declare class TrackMatteType {
  static readonly ALPHA: number
  static readonly ALPHA_INVERTED: number
  static readonly LUMA: number
  static readonly LUMA_INVERTED: number
  static readonly NO_TRACK_MATTE: number
}

/** Represents a Composition, Layer, or Footage panel. */
declare class Viewer {
  /*  The ViewerType of content in the viewer. */
  readonly type: number
  /*  When true, the viewer is focused. */
  readonly active: boolean
  /*  When true, the viewer is at its maximized size. */
  maximized: boolean

  /** Moves the viewer to front and places focus on it. */
  setActive(): boolean
}

declare class ViewerType {
  static readonly VIEWER_COMPOSITION: number
  static readonly VIEWER_LAYER: number
  static readonly VIEWER_FOOTAGE: number
}