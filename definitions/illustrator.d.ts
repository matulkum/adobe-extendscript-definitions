declare class ScreenMode {
  /** Display multiple windows. */
static readonly MULTIWINDOW: number
/** Full screen with menu bar. */
static readonly DESKTOP: number
/** Full screen without menu bar. */
static readonly FULLSCREEN: number
}
declare class ColorType {
  static readonly None: number
static readonly CMYK: number
static readonly GRAY: number
static readonly RGB: number
static readonly SPOT: number
static readonly PATTERN: number
static readonly GRADIENT: number
}
declare class DocumentColorSpace {
  /** RGB document color space. */
static readonly RGB: number
/** CMYK document color space. */
static readonly CMYK: number
}
declare class DocumentPresetType {
  /** The default Print document preset. */
static readonly Print: number
/** The default Web document preset. */
static readonly Web: number
/** The default Mobile document preset. */
static readonly Mobile: number
/** The default Video and Film document preset. */
static readonly Video: number
/** The default CMYK document preset. */
static readonly BasicCMYK: number
/** The default RGB document preset. */
static readonly BasicRGB: number
}
declare class DocumentRasterResolution {
  /** Low raster resolution, 72 PPI. */
static readonly ScreenResolution: number
/** Medium raster resolution, 150 PPI. */
static readonly MediumResolution: number
/** High raster resolution, 300 PPI. */
static readonly HighResolution: number
}
declare class DocumentTransparencyGrid {
  /** No grids. */
static readonly TransparencyGridNone: number
/** Light grid colors. */
static readonly TransparencyGridLight: number
/** Medium grid colors. */
static readonly TransparencyGridMedium: number
/** Dark color grids. */
static readonly TransparencyGridDark: number
/** Red grids. */
static readonly TransparencyGridRed: number
/** Orange grids. */
static readonly TransparencyGridOrange: number
/** Green grids. */
static readonly TransparencyGridGreen: number
/** Blue grids. */
static readonly TransparencyGridBlue: number
/** Purple grids. */
static readonly TransparencyGridPurple: number
}
declare class DocumentPreviewMode {
  /** Default Preview mode. */
static readonly DefaultPreview: number
/** Pixel Preview mode. */
static readonly PixelPreview: number
/** Overprint Preview Mode. */
static readonly OverprintPreview: number
}
declare class DocumentArtboardLayout {
  /** Arrange artboards in Grid by Row pattern. */
static readonly GridByRow: number
/** Arrange artboards in Grid by Column pattern. */
static readonly GridByCol: number
/** Arrange artboards in a single row. */
static readonly Row: number
/** Arrange artboards in a single column. */
static readonly Column: number
/** Arrange artboards in Grid by Row pattern from right-to-left. */
static readonly RLGridByRow: number
/** Arrange artboards in Grid by Column pattern from right-to-left. */
static readonly RLGridByCol: number
/** Arrange artboards in a single row from right-to-left. */
static readonly RLRow: number
}
declare class ImageColorSpace {
  /** Gray color space. */
static readonly GrayScale: number
/** RGB color space. */
static readonly RGB: number
/** CMYK color space. */
static readonly CMYK: number
/** LAB color space. */
static readonly LAB: number
/** Separation color space. */
static readonly Separation: number
/** DeviceN color space. */
static readonly DeviceN: number
/** Indexed color space. */
static readonly Indexed: number
}
declare class StrokeCap {
  /** Butted cap. */
static readonly BUTTENDCAP: number
/** Rounded cap. */
static readonly ROUNDENDCAP: number
/** Projecting cap. */
static readonly PROJECTINGENDCAP: number
}
declare class StrokeJoin {
  /** Mitered joints. */
static readonly MITERENDJOIN: number
/** Rounded joints. */
static readonly ROUNDENDJOIN: number
/** Beveled joints. */
static readonly BEVELENDJOIN: number
}
declare class PathPointSelection {
  /** Path point not selected. */
static readonly NOSELECTION: number
/** Anchor point selected. */
static readonly ANCHORPOINT: number
/** Left direction point selected. */
static readonly LEFTDIRECTION: number
/** Right direction point selected. */
static readonly RIGHTDIRECTION: number
/** Left and right direction points selected. */
static readonly LEFTRIGHTPOINT: number
}
declare class PointType {
  /** Smooth path point. */
static readonly SMOOTH: number
/** Corner point. */
static readonly CORNER: number
}
declare class TextType {
  /** Text from a point. */
static readonly POINTTEXT: number
/** Text within an area. */
static readonly AREATEXT: number
/** Text on a path. */
static readonly PATHTEXT: number
}
declare class TextAntialias {
  /** Text from a point. */
static readonly NONE: number
/** Text within an area. */
static readonly SHARP: number
/** Text on a path. */
static readonly CRISP: number
/** Text on a path. */
static readonly STRONG: number
}
declare class GradientType {
  /** Linear gradient. */
static readonly LINEAR: number
static readonly RADIAL: number
}
declare class TextOrientation {
  /** Horizontal orientation. */
static readonly HORIZONTAL: number
/** Vertical orientation. */
static readonly VERTICAL: number
}
declare class CropOptions {
  /** Standard crop style. */
static readonly Standard: number
/** Japanese crop style. */
static readonly Japanese: number
}
declare class RasterLinkState {
  /** Image data is not set. */
static readonly NODATA: number
/** Image data is from the linked file. */
static readonly DATAFROMFILE: number
/** Image data has been modified. */
static readonly DATAMODIFIED: number
}
declare class TabStopAlignment {
  static readonly Left: number
static readonly Center: number
static readonly Right: number
static readonly Decimal: number
}
declare class Justification {
  static readonly LEFT: number
static readonly RIGHT: number
static readonly CENTER: number
static readonly FULLJUSTIFYLASTLINELEFT: number
static readonly FULLJUSTIFYLASTLINERIGHT: number
static readonly FULLJUSTIFYLASTLINECENTER: number
static readonly FULLJUSTIFY: number
}
declare class Transformation {
  /** Transform relative to the illustration's page origin. */
static readonly DOCUMENTORIGIN: number
/** Transform relative to the object's top left corner. */
static readonly TOPLEFT: number
/** Transform relative to the object's left edge. */
static readonly LEFT: number
/** Transform relative to the object's bottom left corner. */
static readonly BOTTOMLEFT: number
/** Transform relative to the object's top edge. */
static readonly TOP: number
/** Transform relative to the object's center. */
static readonly CENTER: number
/** Transform relative to the object's bottom edge. */
static readonly BOTTOM: number
/** Transform relative to the object's top right corner. */
static readonly TOPRIGHT: number
/** Transform relative to the object's right edge. */
static readonly RIGHT: number
/** Transform relative to the object's bottom right corner. */
static readonly BOTTOMRIGHT: number
}
declare class LibraryType {
  /** Illustrator artwork. */
static readonly ILLUSTRATORARTWORK: number
/** Illustrator swatches library. */
static readonly SWATCHES: number
/** Illustrator brushes library. */
static readonly BRUSHES: number
/** Illustrator graphic styles library. */
static readonly GRAPHICSTYLES: number
/** Illustrator symbols library. */
static readonly SYMBOLS: number
}
declare class DocumentType {
  /** Illustrator file format. */
static readonly ILLUSTRATOR: number
/** EPS file format. */
static readonly EPS: number
/** Acrobat PDF file format. */
static readonly PDF: number
/** FXG file format. */
static readonly FXG: number
}
declare class ExportType {
  /** JPEG export file format. */
static readonly JPEG: number
/** Photoshop export file format. */
static readonly PHOTOSHOP: number
/** SVG export file format. */
static readonly SVG: number
/** PNG 8-bit export file format. */
static readonly PNG8: number
/** PNG 24-bit export file format. */
static readonly PNG24: number
/** GIF export file format. */
static readonly GIF: number
/** Flash export file format. */
static readonly FLASH: number
/** AutoCAD export file format. */
static readonly AUTOCAD: number
/** TIFF export file format. */
static readonly TIFF: number
/** Web Optimized SVG export file format. */
static readonly WOSVG: number
}
declare class ColorReductionMethod {
  static readonly SELECTIVE: number
static readonly ADAPTIVE: number
static readonly PERCEPTUAL: number
static readonly WEB: number
}
declare class ColorDitherMethod {
  /** No dithering. */
static readonly NOREDUCTION: number
static readonly DIFFUSION: number
static readonly PATTERNDITHER: number
static readonly NOISE: number
}
declare class Compatibility {
  static readonly ILLUSTRATOR3: number
static readonly JAPANESEVERSION3: number
static readonly ILLUSTRATOR8: number
static readonly ILLUSTRATOR9: number
static readonly ILLUSTRATOR10: number
static readonly ILLUSTRATOR11: number
static readonly ILLUSTRATOR12: number
static readonly ILLUSTRATOR13: number
static readonly ILLUSTRATOR14: number
static readonly ILLUSTRATOR15: number
static readonly ILLUSTRATOR16: number
static readonly ILLUSTRATOR17: number
}
declare class PDFXStandard {
  /** The user isn't complying with any PDF standard. */
static readonly PDFXNONE: number
/** Supports only a CMYK and spot color workflow, targeted to a specific output device. */
static readonly PDFX1A2001: number
/** Supports only a CMYK and spot color workflow, targeted to a specific output device. */
static readonly PDFX1A2003: number
/** Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors. */
static readonly PDFX32001: number
/** Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors. */
static readonly PDFX32002: number
/** Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors. */
static readonly PDFX32003: number
/** Supports a color-managed workflow, allowing the use of device-independent color in addition to CMYK and spot colors. */
static readonly PDFX42007: number
}
declare class PDFCompatibility {
  /** Acrobat version 4. */
static readonly ACROBAT4: number
/** Acrobat version 5. */
static readonly ACROBAT5: number
/** Acrobat version 6. */
static readonly ACROBAT6: number
/** Acrobat version 7. */
static readonly ACROBAT7: number
/** Acrobat version 8. */
static readonly ACROBAT8: number
}
declare class PhotoshopCompatibility {
  /** Photoshop version 8. */
static readonly PHOTOSHOP8: number
/** Photoshop version 6. */
static readonly PHOTOSHOP6: number
}
declare class CompressionQuality {
  /** Automatic compression. */
static readonly None: number
static readonly JPEGMINIMUM: number
static readonly JPEGLOW: number
static readonly JPEGMEDIUM: number
static readonly JPEGHIGH: number
static readonly JPEGMAXIMUM: number
static readonly ZIP4BIT: number
static readonly ZIP8BIT: number
/** Automatically choose between JPEG and ZIP performing minimum compression depending on images. */
static readonly AUTOMATICJPEGMINIMUM: number
/** Automatic JPEG compression low. */
static readonly AUTOMATICJPEGLOW: number
/** Automatic JPEG compression medium. */
static readonly AUTOMATICJPEGMEDIUM: number
/** Automatic JPEG compression high. */
static readonly AUTOMATICJPEGHIGH: number
/** Automatic JPEG compression maximum. */
static readonly AUTOMATICJPEGMAXIMUM: number
/** Automatic JPEG2000 compression minimum. */
static readonly AUTOMATICJPEG2000MINIMUM: number
/** Automatic JPEG2000 compression low. */
static readonly AUTOMATICJPEG2000LOW: number
/** Automatic JPEG2000 compression medium. */
static readonly AUTOMATICJPEG2000MEDIUM: number
/** Automatic JPEG2000 compression high. */
static readonly AUTOMATICJPEG2000HIGH: number
/** Automatic JPEG2000 compression maximum. */
static readonly AUTOMATICJPEG2000MAXIMUM: number
/** Automatic JPEG2000 compression lossless. */
static readonly AUTOMATICJPEG2000LOSSLESS: number
static readonly JPEG2000MINIMUM: number
static readonly JPEG2000LOW: number
static readonly JPEG2000MEDIUM: number
static readonly JPEG2000HIGH: number
static readonly JPEG2000MAXIMUM: number
static readonly JPEG2000LOSSLESS: number
}
declare class ColorConversion {
  /** Preserves color data as is. */
static readonly None: number
/** Converts all colors to the profile selected for Destination. */
static readonly COLORCONVERSIONTODEST: number
/** Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off. */
static readonly COLORCONVERSIONREPURPOSE: number
}
declare class ColorDestination {
  /** N/A. */
static readonly None: number
/** Converts all colors to the profile selected for Destination. */
static readonly COLORDESTINATIONDOCCMYK: number
/** Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off. */
static readonly COLORDESTINATIONWORKINGCMYK: number
/** Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off. */
static readonly COLORDESTINATIONDOCRGB: number
/** Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off. */
static readonly COLORDESTINATIONWORKINGRGB: number
/** Preserves color numbers for untagged content in the same color space as the destination profile. Not available with CMS off. */
static readonly COLORDESTINATIONPROFILE: number
}
declare class ColorProfile {
  /** All profiles removed (embedProfile == false) */
static readonly None: number
/** Everything gets tagged (embedProfile == true) */
static readonly INCLUDEALLPROFILE: number
/** Leave tagged items tagged, untagged items untagged. */
static readonly LEAVEPROFILEUNCHANGED: number
/** Tag all RGB, leave CMYK unchanged. */
static readonly INCLUDERGBPROFILE: number
/** Everything ends up tagged with the destination profile. */
static readonly INCLUDEDESTPROFILE: number
}
declare class MonochromeCompression {
  /** Automatic compression. */
static readonly None: number
/** CCITT Group 3 compression. */
static readonly CCIT3: number
/** CCITT Group 4 compression. */
static readonly CCIT4: number
/** ZIP compression. */
static readonly MONOZIP: number
/** RLE compression. */
static readonly RUNLENGTH: number
}
declare class PDFTrimMarkWeight {
  static readonly TRIMMARKWEIGHT0125: number
static readonly TRIMMARKWEIGHT025: number
static readonly TRIMMARKWEIGHT05: number
}
declare class PDFOverprint {
  /** Preserve overprint. */
static readonly PRESERVEPDFOVERPRINT: number
/** Discard overprint. */
static readonly DISCARDPDFOVERPRINT: number
}
declare class PDFPrintAllowedEnum {
  /** Printing allowed none - 128bit. */
static readonly PRINT128NONE: number
/** Print allowed only in low resolution - 128bit. */
static readonly PRINT128LOWRESOLUTION: number
/** Print high resolution allowed - 128bit. */
static readonly PRINT128HIGHRESOLUTION: number
/** Printing allowed none - 40bit. */
static readonly PRINT40NONE: number
/** Print high resolution allowed - 40bit. */
static readonly PRINT40HIGHRESOLUTION: number
}
declare class PDFChangesAllowedEnum {
  /** No changes allowed - 128bit. */
static readonly CHANGE128NONE: number
/** Editing page allowed - 128bit. */
static readonly CHANGE128EDITPAGE: number
/** Filling in of form field and signing allowed - 128bit. */
static readonly CHANGE128FILLFORM: number
/** Comment allowed - 128bit. */
static readonly CHANGE128COMMENTING: number
/** Any changes allowed except extracting of pages- 128bit. */
static readonly CHANGE128ANYCHANGES: number
/** No changes allowed - 40bit. */
static readonly CHANGE40NONE: number
/** Comment allowed - 40bit. */
static readonly CHANGE40COMMENTING: number
/** Page layout allowed - 40bit. */
static readonly CHANGE40PAGELAYOUT: number
/** Any changes allowed except extracting of pages- 40bit. */
static readonly CHANGE40ANYCHANGES: number
}
declare class DownsampleMethod {
  /** Downsampling. */
static readonly NODOWNSAMPLE: number
/** Average Downsampling. */
static readonly AVERAGEDOWNSAMPLE: number
/** Subsampling. */
static readonly SUBSAMPLE: number
/** Bicubic Downsampling. */
static readonly BICUBICDOWNSAMPLE: number
}
declare class EPSPreview {
  /** No preview. */
static readonly None: number
/** Black and white Macintosh preview. */
static readonly BWMACINTOSH: number
/** Color Macintosh preview. */
static readonly COLORMACINTOSH: number
/** Black and white PC preview. */
static readonly BWTIFF: number
/** Color PC preview. */
static readonly COLORTIFF: number
/** Transparent color PC preview (8 or later) */
static readonly TRANSPARENTCOLORTIFF: number
}
declare class EPSPostScriptLevelEnum {
  /** PostScript Level 2. */
static readonly LEVEL2: number
/** PostScript Level 3. */
static readonly LEVEL3: number
}
declare class PrinterPostScriptLevelEnum {
  /** PostScript Level 1. */
static readonly PSLEVEL1: number
/** PostScript Level 2. */
static readonly PSLEVEL2: number
/** PostScript Level 3. */
static readonly PSLEVEL3: number
}
declare class SaveOptions {
  /** Save changes. */
static readonly SAVECHANGES: number
/** Do not save changes. */
static readonly DONOTSAVECHANGES: number
/** Ask the user whether to save. */
static readonly PROMPTTOSAVECHANGES: number
}
declare class RulerUnits {
  /** Ruler units are unknown. */
static readonly Unknown: number
/** Ruler units are unknown. */
static readonly Inches: number
/** Ruler units are measured in centimeters. */
static readonly Centimeters: number
/** Ruler units are measured in points. */
static readonly Points: number
/** Ruler units are measured in picas. */
static readonly Picas: number
/** Ruler units are measured in millimeters. */
static readonly Millimeters: number
/** Ruler units are measured in Qs. */
static readonly Qs: number
/** Ruler units are measured in pixels. */
static readonly Pixels: number
}
declare class BlendModes {
  static readonly NORMAL: number
static readonly MULTIPLY: number
static readonly SCREEN: number
static readonly OVERLAY: number
static readonly SOFTLIGHT: number
static readonly HARDLIGHT: number
static readonly COLORDODGE: number
static readonly COLORBURN: number
static readonly DARKEN: number
static readonly LIGHTEN: number
static readonly DIFFERENCE: number
static readonly EXCLUSION: number
static readonly HUE: number
static readonly SATURATIONBLEND: number
static readonly COLORBLEND: number
static readonly LUMINOSITY: number
}
declare class KnockoutState {
  /** Unknown/uninitialized knockout state. */
static readonly Unknown: number
/** Knockout off. */
static readonly DISABLED: number
/** Knockout off. */
static readonly ENABLED: number
/** Knockout state inherited from group? */
static readonly INHERITED: number
}
declare class ZOrderMethod {
  /** Move art to front of it's group or layer. */
static readonly BRINGTOFRONT: number
/** Move art one step forward in it's group or layer. */
static readonly BRINGFORWARD: number
/** Move art one step backwards in it's group or layer. */
static readonly SENDBACKWARD: number
/** Move art to back of it's group or layer. */
static readonly SENDTOBACK: number
}
declare class SVGDTDVersion {
  /** SVG 1.0. */
static readonly SVG1_0: number
/** SVG 1.1. */
static readonly SVG1_1: number
/** SVG Tiny 1.1. */
static readonly SVGTINY1_1: number
/** SVG Tiny 1.1 Plus. */
static readonly SVGTINY1_1PLUS: number
/** SVG Basic 1.1. */
static readonly SVGBASIC1_1: number
/** SVG Tiny 1.2. */
static readonly SVGTINY1_2: number
}
declare class SVGFontType {
  static readonly SVGFONT: number
static readonly OUTLINEFONT: number
}
declare class SVGFontSubsetting {
  /** Use system fonts. */
static readonly None: number
static readonly GLYPHSUSED: number
static readonly COMMONENGLISH: number
static readonly GLYPHSUSEDPLUSENGLISH: number
static readonly COMMONROMAN: number
static readonly GLYPHSUSEDPLUSROMAN: number
static readonly ALLGLYPHS: number
}
declare class SVGDocumentEncoding {
  /** ISO 8859-1. */
static readonly ASCII: number
static readonly UTF8: number
static readonly UTF16: number
}
declare class SVGCSSPropertyLocation {
  /** Style attributes with entity reference. */
static readonly ENTITIES: number
static readonly STYLEATTRIBUTES: number
static readonly STYLEELEMENTS: number
static readonly PRESENTATIONATTRIBUTES: number
}
declare class SVGIdType {
  /** Style attributes with entity reference. */
static readonly SVGIDMINIMAL: number
static readonly SVGIDREGULAR: number
static readonly SVGIDUNIQUE: number
}
declare class RasterImageLocation {
  /** Embed the raster images in the svg file. */
static readonly EMBED: number
static readonly LINK: number
static readonly PRESERVE: number
}
declare class OutputFlattening {
  /** Discard transparency. */
static readonly PRESERVEPATHS: number
static readonly PRESERVEAPPEARANCE: number
}
declare class ColorModel {
  /** Registration color (prints on in all separations) */
static readonly REGISTRATION: number
/** Process color (mixed ink) */
static readonly PROCESS: number
/** Spot color (separate ink) */
static readonly SPOT: number
}
declare class SpotColorKind {
  /** Solid ink, expressed in four CMYK values. */
static readonly SPOTCMYK: number
/** Solid color, expressed as three RGB values. */
static readonly SPOTRGB: number
/** Lab color. Only valid for spot colors. */
static readonly SPOTLAB: number
}
declare class FlashExportStyle {
  /** Illustrator Artboards to Flash Files. */
static readonly ARTBOARDSTOFILES: number
/** Illustrator file to Flash file. */
static readonly ASFLASHFILE: number
/** Illustrator layers to Flash frames. */
static readonly LAYERSASFRAMES: number
/** Illustrator layers to Flash files. */
static readonly LAYERSASFILES: number
/** Illustrator layers to Flash Symbols. */
static readonly LAYERSASSYMBOLS: number
}
declare class ArtClippingOption {
  /** Output size is the size of the artwork. */
static readonly OUTPUTARTBOUNDS: number
/** Output size is the size of the artboard. */
static readonly OUTPUTARTBOARDBOUNDS: number
/** Output size is the size of the crop area. */
static readonly OUTPUTCROPRECTBOUNDS: number
}
declare class FlashExportVersion {
  /** SWF Version 1. */
static readonly FLASHVERSION1: number
/** SWF Version 2. */
static readonly FLASHVERSION2: number
/** SWF Version 3. */
static readonly FLASHVERSION3: number
/** SWF Version 4. */
static readonly FLASHVERSION4: number
/** SWF Version 5. */
static readonly FLASHVERSION5: number
/** SWF Version 6. */
static readonly FLASHVERSION6: number
/** SWF Version 7. */
static readonly FLASHVERSION7: number
/** SWF Version 8. */
static readonly FLASHVERSION8: number
/** SWF Version 9. */
static readonly FLASHVERSION9: number
}
declare class FlashImageFormat {
  static readonly LOSSLESS: number
static readonly LOSSY: number
}
declare class LayerOrderType {
  static readonly BOTTOMUP: number
static readonly TOPDOWN: number
}
declare class BlendAnimationType {
  /** No blend animation. */
static readonly NOBLENDANIMATION: number
static readonly INSEQUENCE: number
static readonly INBUILD: number
}
declare class FlashJPEGMethod {
  static readonly Standard: number
static readonly Optimized: number
}
declare class FlashPlaybackSecurity {
  static readonly PlaybackLocal: number
static readonly PlaybackNetwork: number
}
declare class VariableKind {
  static readonly Unknown: number
static readonly VISIBILITY: number
static readonly TEXTUAL: number
static readonly IMAGE: number
static readonly GRAPH: number
}
declare class AutoCADExportFileFormat {
  static readonly DXF: number
static readonly DWG: number
}
declare class AutoCADCompatibility {
  static readonly AutoCADRelease13: number
static readonly AutoCADRelease14: number
static readonly AutoCADRelease15: number
static readonly AutoCADRelease18: number
static readonly AutoCADRelease21: number
static readonly AutoCADRelease24: number
}
declare class AutoCADUnit {
  static readonly Points: number
static readonly Picas: number
static readonly Inches: number
static readonly Millimeters: number
static readonly Centimeters: number
static readonly Pixels: number
}
declare class AutoCADColors {
  static readonly Max8Colors: number
static readonly Max16Colors: number
static readonly Max256Colors: number
static readonly TrueColors: number
}
declare class AutoCADRasterFormat {
  static readonly PNG: number
static readonly JPEG: number
}
declare class AutoCADExportOption {
  static readonly PreserveAppearance: number
static readonly MaximumEditability: number
}
declare class AutoCADGlobalScaleOption {
  static readonly OriginalSize: number
static readonly FitArtboard: number
static readonly ScaleByValue: number
}
declare class TIFFByteOrder {
  static readonly IBMPC: number
static readonly MACINTOSH: number
}
declare class UserInteractionLevel {
  static readonly DONTDISPLAYALERTS: number
static readonly DISPLAYALERTS: number
}
declare class PolarityValues {
  static readonly POSITIVE: number
static readonly NEGATIVE: number
}
declare class JavaScriptExecutionMode {
  /** Never show the JavaScript debugger. Treat runtime errors by throwing a JavaScript exceptions. */
static readonly never: number
/** Show the JavaScript debugger is a runtime error occurs. */
static readonly OnRuntimeError: number
/** Show the JavaScript debugger at the first line of the JavaScript. */
static readonly BeforeRunning: number
}
declare class PrintArtworkDesignation {
  /** Print visible printable layers. */
static readonly VISIBLEPRINTABLELAYERS: number
/** Print visible layers. */
static readonly VISIBLELAYERS: number
/** Print all layers. */
static readonly ALLLAYERS: number
}
declare class PrintingBounds {
  /** Use artboard bounds. */
static readonly ARTBOARDBOUNDS: number
/** Use artwork bounds. */
static readonly ARTWORKBOUNDS: number
/** Use crop bounds. */
static readonly CROPBOUNDS: number
}
declare class PrintColorSeparationMode {
  /** The composite mode. */
static readonly COMPOSITE: number
/** The host based color separation mode. */
static readonly HOSTBASEDSEPARATION: number
/** The InRIP color separation mode. */
static readonly INRIPSEPARATION: number
}
declare class PrintOrientation {
  /** Portrait. */
static readonly PORTRAIT: number
/** Landscape. */
static readonly LANDSCAPE: number
/** Reverse portrait. */
static readonly REVERSEPORTRAIT: number
/** Reverse landscape. */
static readonly REVERSELANDSCAPE: number
/** Auto Rotate. */
static readonly AUTOROTATE: number
}
declare class PrintPosition {
  /** Translate to the top left of media. */
static readonly TRANSLATETOPLEFT: number
/** Translate to the top center of media. */
static readonly TRANSLATETOP: number
/** Translate to the top right of media. */
static readonly TRANSLATETOPRIGHT: number
/** Translate to the left center of media. */
static readonly TRANSLATELEFT: number
/** Translate to the center of media. */
static readonly TRANSLATECENTER: number
/** Translate to the right center of media. */
static readonly TRANSLATERIGHT: number
/** Translate to the bottom left of media. */
static readonly TRANSLATEBOTTOMLEFT: number
/** Translate to the bottom center of media. */
static readonly TRANSLATEBOTTOM: number
/** Translate to the bottom right of media. */
static readonly TRANSLATEBOTTOMRIGHT: number
}
declare class PrintTiling {
  /** Tile single full page. */
static readonly TILESINGLEFULLPAGE: number
/** Tile full pages. */
static readonly TILEFULLPAGES: number
/** Tile imageable areas. */
static readonly TILEIMAGEABLEAREAS: number
}
declare class PageMarksTypes {
  /** Roman page marks style. */
static readonly Roman: number
/** Japanese page marks style. */
static readonly Japanese: number
}
declare class PrintFontDownloadMode {
  /** Download none. */
static readonly DOWNLOADNONE: number
/** Download subset. */
static readonly DOWNLOADSUBSET: number
/** Download complete. */
static readonly DOWNLOADCOMPLETE: number
}
declare class FontSubstitutionPolicy {
  /** Substitute oblique font. */
static readonly SUBSTITUTEOBLIQUE: number
/** Substitute tint font. */
static readonly SUBSTITUTETINT: number
/** Substitute device font. */
static readonly SUBSTITUTEDEVICE: number
}
declare class PostScriptImageCompressionType {
  /** No image compression. */
static readonly IMAGECOMPRESSIONNONE: number
/** RLE image compression. */
static readonly RLE: number
/** JPEG image compression. */
static readonly JPEG: number
}
declare class PrintColorProfile {
  /** Use old style AI color profile. */
static readonly OLDSTYLEPROFILE: number
/** Same as source color profile. */
static readonly SOURCEPROFILE: number
/** Same as printer color profile. */
static readonly PRINTERPROFILE: number
/** Use custom color profile. */
static readonly CUSTOMPROFILE: number
}
declare class PrintColorIntent {
  /** Perceptual color intent. */
static readonly PERCEPTUALINTENT: number
/** Saturation color intent. */
static readonly SATURATIONINTENT: number
/** Relative colorimetric. */
static readonly RELATIVECOLORIMETRIC: number
/** Absolute colorimetric. */
static readonly ABSOLUTECOLORIMETRIC: number
}
declare class PrinterTypeEnum {
  /** Unknown printer type. */
static readonly Unknown: number
/** PostScript printer. */
static readonly POSTSCRIPTPRINTER: number
/** Non PostScript printer. */
static readonly NONPOSTSCRIPTPRINTER: number
}
declare class PrinterColorMode {
  /** Color printer. */
static readonly COLORPRINTER: number
/** Grayscale printer. */
static readonly GRAYSCALEPRINTER: number
/** Black and white printer. */
static readonly BLACKANDWHITEPRINTER: number
}
declare class InkPrintStatus {
  /** Disable the ink during print. */
static readonly DISABLEINK: number
/** Enable the ink during print. */
static readonly ENABLEINK: number
/** Convert to process color during print. */
static readonly CONVERTINK: number
}
declare class InkType {
  /** Cyan color ink. */
static readonly CYANINK: number
/** Magenta color ink. */
static readonly MAGENTAINK: number
/** Yellow color ink. */
static readonly YELLOWINK: number
/** Black color ink. */
static readonly BLACKINK: number
/** Custom color ink. */
static readonly CUSTOMINK: number
}
declare class TrappingType {
  /** Normal trapping type. */
static readonly NORMALTRAPPING: number
/** Transparent trapping type. */
static readonly TRANSPARENT: number
/** Opaque trapping type. */
static readonly OPAQUE: number
/** Ignore opaque trapping type. */
static readonly IGNOREOPAQUE: number
}
declare class AutoKernType {
  /** No auto kerning. */
static readonly NOAUTOKERN: number
/** Auto kerning. */
static readonly AUTO: number
/** Optical kerning. */
static readonly OPTICAL: number
/** Metrics roman only. */
static readonly METRICSROMANONLY: number
}
declare class AutoLeadingType {
  /** Roman leading type. */
static readonly BOTTOMTOBOTTOM: number
/** Japanese leading type. */
static readonly TOPTOTOP: number
}
declare class CaseChangeType {
  /** Change to upper case. */
static readonly UPPERCASE: number
/** Change to lower case. */
static readonly LOWERCASE: number
/** Change to title case. */
static readonly TITLECASE: number
/** Change to sentence case. */
static readonly SENTENCECASE: number
}
declare class FontCapsOption {
  /** Normal caps. */
static readonly NORMALCAPS: number
/** Small caps. */
static readonly SMALLCAPS: number
/** All caps. */
static readonly ALLCAPS: number
/** All small caps. */
static readonly ALLSMALLCAPS: number
}
declare class FontBaselineOption {
  /** Normal baseline. */
static readonly NORMALBASELINE: number
/** Fauxed superscript baseline. */
static readonly SUPERSCRIPT: number
/** Fauxed subscript baseline. */
static readonly SUBSCRIPT: number
}
declare class FontOpenTypePositionOption {
  /** Default position. */
static readonly OPENTYPEDEFAULT: number
/** OpenType superscript position. */
static readonly OPENTYPESUPERSCRIPT: number
/** OpenType subscript position. */
static readonly OPENTYPESUBSCRIPT: number
/** OpenType numerator position. */
static readonly NUMERATOR: number
/** OpenType denominator position. */
static readonly DENOMINATOR: number
}
declare class FigureStyleType {
  /** Default figure style. */
static readonly DEFAULTFIGURESTYLE: number
/** Tabular lining style. */
static readonly TABULAR: number
/** Proportional oldstyle. */
static readonly PROPORTIONALOLDSTYLE: number
/** Proportional lining style. */
static readonly PROPORTIONAL: number
/** Tabular oldstyle. */
static readonly TABULAROLDSTYLE: number
}
declare class BaselineDirectionType {
  static readonly Standard: number
static readonly VerticalRotated: number
static readonly TateChuYoko: number
}
declare class LanguageType {
  static readonly ENGLISH: number
static readonly FINNISH: number
static readonly STANDARDFRENCH: number
static readonly CANADIANFRENCH: number
static readonly STANDARDGERMAN: number
static readonly OLDGERMAN: number
static readonly SWISSGERMAN: number
static readonly ITALIAN: number
static readonly BOKMALNORWEGIAN: number
/** Nynorsk Norwegian. */
static readonly NYNORSKNORWEGIAN: number
static readonly STANDARDPORTUGUESE: number
static readonly BRAZILLIANPORTUGUESE: number
static readonly SPANISH: number
static readonly SWEDISH: number
static readonly UKENGLISH: number
static readonly DUTCH: number
static readonly DANISH: number
static readonly CATALAN: number
static readonly RUSSIAN: number
static readonly UKRANIAN: number
static readonly BULGARIAN: number
static readonly SERBIAN: number
static readonly CZECH: number
static readonly POLISH: number
static readonly RUMANIAN: number
static readonly GREEK: number
static readonly TURKISH: number
static readonly ICELANDIC: number
static readonly HUNGARIAN: number
static readonly CHINESE: number
static readonly JAPANESE: number
static readonly ARABIC: number
static readonly FARSI: number
static readonly GERMAN2006REFORM: number
static readonly DUTCH2005REFORM: number
static readonly SWISSGERMAN2006REFORM: number
static readonly HINDI: number
static readonly MARATHI: number
static readonly BENGALIINDIA: number
static readonly PUNJABI: number
static readonly GUJARATI: number
static readonly ORIYA: number
static readonly TAMIL: number
static readonly TELUGU: number
static readonly KANNADA: number
static readonly MALAYALAM: number
}
declare class AlternateGlyphsForm {
  static readonly DEFAULTFORM: number
static readonly TRADITIONAL: number
static readonly EXPERT: number
static readonly JIS78FORM: number
static readonly JIS83FORM: number
static readonly HALFWIDTH: number
static readonly THIRDWIDTH: number
static readonly QUARTERWIDTH: number
static readonly FULLWIDTH: number
static readonly PROPORTIONALWIDTH: number
static readonly JIS90FORM: number
static readonly JIS04FORM: number
}
declare class StyleRunAlignmentType {
  static readonly bottom: number
static readonly icfBottom: number
static readonly ROMANBASELINE: number
static readonly center: number
static readonly icfTop: number
static readonly top: number
}
declare class WariChuJustificationType {
  static readonly Left: number
static readonly Right: number
static readonly Center: number
static readonly WARICHUFULLJUSTIFYLASTLINELEFT: number
static readonly WARICHUFULLJUSTIFYLASTLINERIGHT: number
static readonly WARICHUFULLJUSTIFYLASTLINECENTER: number
static readonly WARICHUFULLJUSTIFY: number
static readonly WARICHUAUTOJUSTIFY: number
}
declare class BurasagariTypeEnum {
  static readonly None: number
static readonly Standard: number
static readonly Forced: number
}
declare class KinsokuOrderEnum {
  static readonly PUSHIN: number
static readonly PUSHOUTFIRST: number
static readonly PUSHOUTONLY: number
}
declare class PDFBoxType {
  /** Crop to ArtBox. The art box defines the extent of the page's meaningful content (including potential white space) as intended by the page's creator. */
static readonly PDFARTBOX: number
/** Crop to CropBox. The crop box is the region of the page to display and to print. */
static readonly PDFCROPBOX: number
/** Crop to TrimBox. The trim box specifies the positioning of the page's content within the imposition. */
static readonly PDFTRIMBOX: number
/** Crop to BleedBox. The bleed box defines the region to which the contents of the page should be clipped when output in a production environment. */
static readonly PDFBLEEDBOX: number
/** Crop to MediaBox. The media box is a natural size of the page. For example, the dimensions of A4 sheet of paper. */
static readonly PDFMEDIABOX: number
/** Crop to Bounding Box. The bounding box is the rectangle that encloses all text, graphics, and images on the page. */
static readonly PDFBOUNDINGBOX: number
}
declare class TracingMethodType {
  /** Tracing abutting method. */
static readonly TRACINGMETHODABUTTING: number
/** Tracing overlapping method. */
static readonly TRACINGMETHODOVERLAPPING: number
}
declare class TracingModeType {
  /** Color tracing mode. */
static readonly TRACINGMODECOLOR: number
/** Grayscale tracing mode. */
static readonly TRACINGMODEGRAY: number
/** Black and white tracing mode. */
static readonly TRACINGMODEBLACKANDWHITE: number
}
declare class TracingColorType {
  /** Use Limited colors for Tracing. */
static readonly TRACINGLIMITEDCOLOR: number
/** Use Full colors for Tracing. */
static readonly TRACINGFULLCOLOR: number
}
declare class ViewType {
  /** View artwork. */
static readonly TRACINGVIEWVECTORTRACINGRESULT: number
/** View paths and transparent fills. */
static readonly TRACINGVIEWVECTOROUTLINESWITHTRACING: number
/** View just the paths. */
static readonly TRACINGVIEWVECTOROUTLINES: number
/** View Outlines with Transparent Image. */
static readonly TRACINGVIEWVECTORWITHTRANSPARENTIMAGE: number
/** View Source Image. */
static readonly TRACINGVIEWIMAGE: number
}
declare class RasterizationColorModel {
  /** Rasterize in the default document color space. */
static readonly DEFAULTCOLORMODEL: number
/** Rasterize as grayscale image. */
static readonly GRAYSCALE: number
/** Rasterize as 1-bit bitmap. */
static readonly BITMAP: number
}
declare class AntiAliasingMethod {
  /** No anti-aliasing allowed. */
static readonly None: number
/** Optimize for the art object. */
static readonly ARTOPTIMIZED: number
/** Optimize for the type object. */
static readonly TYPEOPTIMIZED: number
}
declare class ColorConvertPurpose {
  /** Do standard conversion, without black preservation. */
static readonly defaultpurpose: number
/** Conversion options appropriate to creating an image for screen display. */
static readonly previewpurpose: number
/** Conversion options appropriate to creating an image for print or export. */
static readonly exportpurpose: number
/** Dummy option. */
static readonly dummypurpose: number
}
declare class FXGVersion {
  /** FXG version 1.0. */
static readonly VERSION1PT0: number
/** FXG version 2.0. */
static readonly VERSION2PT0: number
}
declare class FiltersPreservePolicy {
  /** Preserve the appearance of filters by expanding it. */
static readonly EXPANDFILTERS: number
/** Preserve the appearance of filters by rasterizing it. */
static readonly RASTERIZEFILTERS: number
/** Preserve the editability of filters. */
static readonly KEEPFILTERSEDITABLE: number
}
declare class TextPreservePolicy {
  /** Preserve the appearance of text by outlining it. */
static readonly OUTLINETEXT: number
/** Preserve the appearance of text by rasterizing it. */
static readonly RASTERIZETEXT: number
/** Preserve the editability of text. */
static readonly KEEPTEXTEDITABLE: number
/** Automatically convert text. */
static readonly AUTOMATICALLYCONVERTTEXT: number
}
declare class GradientsPreservePolicy {
  /** Preserve the editability of gradients. */
static readonly KEEPGRADIENTSEDITABLE: number
/** Automatically Convert Gradients. */
static readonly AUTOMATICALLYCONVERTGRADIENTS: number
}
declare class BlendsExpandPolicy {
  /** Automatically Convert Blends. */
static readonly AUTOMATICALLYCONVERTBLENDS: number
/** Expand Blends by Rasterizing. */
static readonly RASTERIZEBLENDS: number
}
declare class CoordinateSystem {
  /** Document coordinate system. */
static readonly DOCUMENTCOORDINATESYSTEM: number
/** Artboard coordinate system. */
static readonly ARTBOARDCOORDINATESYSTEM: number
}
declare class SymbolRegistrationPoint {
  /** Top left point of symbol bounding box. */
static readonly SYMBOLTOPLEFTPOINT: number
/** Top middle point of symbol bounding box. */
static readonly SYMBOLTOPMIDDLEPOINT: number
/** Top right point of symbol bounding box. */
static readonly SYMBOLTOPRIGHTPOINT: number
/** Middle left point of symbol bounding box. */
static readonly SYMBOLMIDDLELEFTPOINT: number
/** Center point of symbol bounding box. */
static readonly SYMBOLCENTERPOINT: number
/** Middle right point of symbol bounding box. */
static readonly SYMBOLMIDDLERIGHTPOINT: number
/** Bottom left point of symbol bounding box. */
static readonly SYMBOLBOTTOMLEFTPOINT: number
/** Bottom middle point of symbol bounding box. */
static readonly SYMBOLBOTTOMMIDDLEPOINT: number
/** Bottom right point of symbol bounding box. */
static readonly SYMBOLBOTTOMRIGHTPOINT: number
}
declare class PerspectiveGridPlaneType {
  /** Invalid Perspective Grid Plane Type. */
static readonly NOPLANE: number
/** Perspective Grid Left Plane Type. */
static readonly LEFTPLANE: number
/** Perspective Grid Right Plane Type. */
static readonly RIGHTPLANE: number
/** Perspective Grid Floor Plane Type. */
static readonly FLOORPLANE: number
}
declare class FirstBaselineType {
  /** First Baseline Ascent Type. */
static readonly BASELINEASCENT: number
/** First baseline Cap Height Type. */
static readonly BASELINECAPHEIGHT: number
/** First Baseline Leading Type. */
static readonly BASELINELEADING: number
/** First Baseline x Height Type. */
static readonly BASELINEXHEIGHT: number
/** First Baseline Em Box Height Type. */
static readonly BASELINEEMBOXHEIGHT: number
/** First Baseline Fixed Type. */
static readonly BASELINEFIXED: number
/** First Baseline Legacy Type. */
static readonly BASELINELEGACY: number
}
declare class DocumentLayoutStyle {
  /** Arranges document in cascaded style. */
static readonly CASCADE: number
/** Arranges documents as horizontal tiles. */
static readonly HORIZONTALTILE: number
/** Arranges documents as vertical tiles. */
static readonly VERTICALTILE: number
/** Arranges all documents floating layout. */
static readonly FLOATALL: number
/** Consolidates all documents. */
static readonly CONSOLIDATEALL: number
}
declare class Artboards {
  /**
 * Add artboard object.
* @param artboardRect - Size and position of artboard.
*/
static add(artboardRect: Rect): Artboard
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): Artboard
/**
 * Delete artboard object.
* @param index - Index of the crop area to be deleted.
*/
remove(index: Int32): void
/**
 * Get the first Artboard with specified name.
* @param artboardName - The name of the artboard.
*/
getByName(artboardName: string): Artboard
/**
 * Insert an Artboard at specified location.
* @param artboardRect - Size and position of artboard.
* @param index - Index position where artboard should be inserted.
*/
insert(artboardRect: Rect, index: Int32): void
/**
 * Retrieves the index position of the active artboard in the document's list.
*/
getActiveArtboardIndex(): Int32
/**
 * Makes a specific artboard active, and makes it current in the iteration order.
* @param index - The 0-based index position of the artboard in the document list.
*/
setActiveArtboardIndex(index: Int32): void
}
declare class Documents {
  /**
 * Create a new document from a preset.
* @param startupPreset - The name of a startup document preset.
* @param presetSettings - Custom settings to apply to the preset.
* @param showOptionsDialog - If false, do not show Options dialog.
*/
static addDocument(startupPreset: string, presetSettings?: DocumentPreset, showOptionsDialog?: boolean): Document
/**
 * Create a document from the preset with option to throw dialog to customize present settings.
* @param startupPreset - The name of startup document preset.
* @param showOptionsDialog - Argument controls if options Dialog is shown or not.
*/
static addDocumentWithDialogOption(startupPreset: string, showOptionsDialog?: boolean): Document
/**
 * A document.
* @param documentColorSpace - The color model used for the document.
* @param width - Width of the artboard.
* @param height - Height of the artboard.
* @param numArtboards - Number of artboards for new document.Range (1:100).
* @param artboardLayout - Layout of artboards for new document.
* @param artboardSpacing - Spacing between artboards for new document.
* @param artboardRowsOrCols - Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.
*/
static add(documentColorSpace?: DocumentColorSpace, width?: number, height?: number, numArtboards?: Int32, artboardLayout?: DocumentArtboardLayout, artboardSpacing?: number, artboardRowsOrCols?: Int32): Document
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): Document
/**
 * Arranges the documents in the specified style.
* @param layoutStyle - The document layout style.
*/
arrange(layoutStyle: DocumentLayoutStyle): boolean
}
declare class Layers {
  /**
 * Create a layer.
*/
static add(): Layer
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): Layer
}
declare class GroupItems {
  /**
 * Create a group item.
*/
static add(): GroupItem
/**
 * Create a group item from a vector graphics file.
* @param imageFile - The vector graphics file to be embedded.
*/
static createFromFile(imageFile: File): GroupItem
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): GroupItem
}
declare class PageItems {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): PageItem
}
declare class PathItems {
  /**
 * Create a path.
*/
static add(): PathItem
/**
 * Create an elliptical path item.
* @param top - The ellipse's bounds.
* @param left - The ellipse's bounds.
* @param width - The ellipse's bounds.
* @param height - The height of the ellipse.
* @param reversed - Is the ellipse path reversed?
* @param inscribed - Is the ellipse path inscribed?
*/
static ellipse(top?: number, left?: number, width?: number, height?: number, reversed?: boolean, inscribed?: boolean): PathItem
/**
 * Used to create a rectangular path item. Not for path item access.
* @param top - The top coordinate of the rectangle's bounds.
* @param left - The left coordinate of the rectangle's bounds.
* @param width - The width of the rectangle.
* @param height - The height of the rectangle.
* @param reversed - Is the rectangle path reversed?
*/
static rectangle(top: number, left: number, width: number, height: number, reversed?: boolean): PathItem
/**
 * Used to create a rounded-corner rectangular path item. Not for path item access.
* @param top - undefined
* @param left - undefined
* @param width - undefined
* @param height - undefined
* @param horizontalRadius - Horizontal corner radius.
* @param verticalRadius - Vertical corner radius.
* @param reversed - Is the rectangle path reversed?
*/
static roundedRectangle(top: number, left: number, width: number, height: number, horizontalRadius?: number, verticalRadius?: number, reversed?: boolean): PathItem
/**
 * Used to create a regular polygon path item. Not for path item access.
* @param centerX - undefined
* @param centerY - undefined
* @param radius - The radius of the polygon points.
* @param sides - The number of sides on the polygon.
* @param reversed - Is the polygon path reversed?
*/
static polygon(centerX?: number, centerY?: number, radius?: number, sides?: Int32, reversed?: boolean): PathItem
/**
 * Used to create a star-shaped path item. Not for path item access.
* @param centerX - undefined
* @param centerY - undefined
* @param radius - The outside radius of the star points.
* @param innerRadius - The inside radius of the star points.
* @param points - The number of points on the star.
* @param reversed - Is the star path reversed?
*/
static star(centerX?: number, centerY?: number, radius?: number, innerRadius?: number, points?: Int32, reversed?: boolean): PathItem
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): PathItem
}
declare class PathPoints {
  /**
 * Create a path point.
*/
static add(): PathPoint
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): PathPoint
}
declare class CompoundPathItems {
  /**
 * Create a compound path item.
*/
static add(): CompoundPathItem
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): CompoundPathItem
}
declare class Stories {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): Story
}
declare class TextFrameItems {
  /**
 * Create a point text frame item.
*/
static add(): TextFrameItem
/**
 * Create a point text frame item.
* @param anchor - The position (coordinates) of the anchor point.
* @param orientation - The orientation of the text.
*/
static pointText(anchor: Point, orientation?: TextOrientation): TextFrameItem
/**
 * Create an area text frame item.
* @param textPath - The path item associated with the text frame.
* @param orientation - The orientation of the text.
* @param baseFrame - The base text frame if it has one.
* @param postFix - Whether to postfix/prefix the new text frame to the specified base text frame.
*/
static areaText(textPath: PathItem, orientation?: TextOrientation, baseFrame?: TextFrameItem, postFix?: boolean): TextFrameItem
/**
 * Create an on-path text frame item.
* @param textPath - The path item associated with the text frame.
* @param startTValue - The start position of text along a path, as a value relative to the path's segments (path text only)
* @param endTValue - The end position of text along a path, as a value relative to the path's segments (path text only)
* @param orientation - The orientation of the text.
* @param baseFrame - The base text frame if it has one.
* @param postFix - Whether to postfix/prefix the new text frame to the specified base text frame.
*/
static pathText(textPath: PathItem, startTValue?: number, endTValue?: number, orientation?: TextOrientation, baseFrame?: TextFrameItem, postFix?: boolean): TextFrameItem
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): TextFrameItem
}
declare class LegacyTextItems {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): LegacyTextItem
/**
 * Create text frames from all legacy text items. The original legacy text items will be deleted.
*/
convertToNative(): boolean
}
declare class TextRanges {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): TextRange
}
declare class InsertionPoints {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): InsertionPoint
}
declare class Characters {
  /**
 * Create a character.
* @param contents - The text string.
*/
static add(contents: string): TextRange
/**
* @param contents - The text string.
*/
static addBefore(contents: string): TextRange
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): TextRange
}
declare class Words {
  /**
 * Create a word.
* @param contents - The text string.
*/
static add(contents: string): TextRange
/**
* @param contents - The text string.
*/
static addBefore(contents: string): TextRange
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): TextRange
}
declare class Lines {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): TextRange
}
declare class Paragraphs {
  /**
 * Create a text art item.
* @param contents - The text string.
*/
static add(contents: string): TextRange
/**
* @param contents - The text string.
*/
static addBefore(contents: string): TextRange
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): TextRange
}
declare class CharacterStyles {
  /**
 * Create a named character style.
* @param name - The character style name.
*/
static add(name: string): CharacterStyle
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): CharacterStyle
}
declare class ParagraphStyles {
  /**
 * Create a named paragraph style.
* @param name - The paragraph style name.
*/
static add(name: string): ParagraphStyle
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): ParagraphStyle
}
declare class Spots {
  /**
 * Create a spot color.
*/
static add(): Spot
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): Spot
}
declare class Swatches {
  /**
 * Create a swatch.
*/
static add(): Swatch
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): Swatch
/**
 * Get selected swatches in the document.
* @param includeSwatchInGroup - The selected element should include swatches in group.
*/
getSelected(includeSwatchInGroup?: boolean): Swatch
}
declare class SwatchGroups {
  /**
 * Create a Swatch group.
*/
static add(): SwatchGroup
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): SwatchGroup
/**
 * Get selected swatchGroups in the document.
*/
getSelected(): SwatchGroup
}
declare class Gradients {
  /**
 * Create a gradient.
*/
static add(): Gradient
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): Gradient
}
declare class GradientStops {
  /**
 * Create a gradient stop.
*/
static add(): GradientStop
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): GradientStop
}
declare class Patterns {
  /**
 * Create a pattern.
*/
static add(): Pattern
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): Pattern
}
declare class Symbols {
  /**
 * Create a symbol.
* @param sourceArt - The art item from which to make this symbol.
* @param registrationPoint - The symbol registration point.
*/
static add(sourceArt: PageItem, registrationPoint?: SymbolRegistrationPoint): Symbol
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): Symbol
}
declare class SymbolItems {
  /**
 * An instance of a symbol item.
* @param symbol - The symbol to make an instance of.
*/
static add(symbol: Symbol): SymbolItem
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): SymbolItem
}
declare class Brushes {
  /**
 * Create a brush.
* @param brushDefinition - The brush definition from which the brush would be created.
* @param brushName - The name of the brush.
*/
static add(brushDefinition: File, brushName?: string): Brush
/**
 * Create a brush, select the brush tool and load the created brush in the brush tool.
* @param brushDefinition - The brush definition from which the brush would be created.
*/
static addAndLoad(brushDefinition: File): Brush
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): Brush
}
declare class ArtStyles {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): ArtStyle
}
declare class TextFonts {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): TextFont
/**
 * Get the Text Font with the font name , if not avaiable it will create the substitute font.
* @param fontName - The name of the font to find or create substitute.
*/
getFontByName(fontName: string): TextFont
/**
 * Check if any original font is present with the given name.
* @param fontName - The name of the font to find.
*/
isFontAvailable(fontName: string): boolean
/**
 * Returns the current font name.
*/
getCurrentFont(): string
}
declare class Tags {
  /**
 * Create a tag.
*/
static add(): Tag
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): Tag
}
declare class RasterItems {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): RasterItem
}
declare class PlacedItems {
  /**
 * Create a placed item.
*/
static add(): PlacedItem
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): PlacedItem
}
declare class EmbeddedItems {
  /**
 * Create an embedded item.
*/
static add(): EmbedItem
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): EmbedItem
}
declare class MeshItems {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): MeshItem
}
declare class GraphItems {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): GraphItem
}
declare class PluginItems {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): PluginItem
}
declare class NonNativeItems {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): NonNativeItem
}
declare class Views {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): View
}
declare class Variables {
  /**
 * Create a variable.
*/
static add(): Variable
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): Variable
}
declare class DataSets {
  /**
 * Create a data set.
*/
static add(): DataSet
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): DataSet
}
declare class OpenOptions {
  /** Choose to update all text objects for documents saved with legacy texts (pre-Illustrator 11) */
static updateLegacyText: boolean
/** Choose to preserve the spot colors in the gradient mesh objects for legacy documents (pre-Illustrator CS3) */
static updateLegacyGradientMesh: boolean
/** Open the file as library. */
static openAs: LibraryType
/** Preserve Legacy Artboard (pre-Illustrator CS4) when opening in CS4 or later. */
static preserveLegacyArtboard: boolean
/** Convert crop area to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later. If false then crop areas are discarded. */
static convertCropAreaToArtboard: boolean
/** Create Artboard with dimentions of artwork bounding box when opening legacy document (pre-Illustrator CS4) in CS4 or later. */
static createArtboardWithArtworkBoundingBox: boolean
/** Convert print tiles to Artboard when opening legacy document (pre-Illustrator CS4) in CS4 or later. */
static convertTilesToArtboard: boolean
/** Add this file to the list of recently opened files. */
static addToRecentFiles: boolean
}
declare class FXGSaveOptions {
  /** All the artboards or range of the artboards will be saved. */
static saveMultipleArtboards: boolean
/** If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
static artboardRange: string
/** The version of the FXG file format to create. */
static version: FXGVersion
/** Choose to preserve the editing capabilities of FXG. */
static preserveEditingCapabilities: boolean
/** Choose to include unused symbols. */
static includeUnusedSymbols: boolean
/** Choose to downsample the linked images(72ppi) */
static downsampleLinkedImages: boolean
/** Choose to include metadata (XMP) */
static includeMetadata: boolean
/** The policy used by FXG to preserve filters. */
static filtersPolicy: FiltersPreservePolicy
/** The policy used by FXG to preserve text. */
static textPolicy: TextPreservePolicy
/** The policy used by FXG to preserve gradients. */
static gradientsPolicy: GradientsPreservePolicy
/** The policy used by FXG to expand blends. */
static blendsPolicy: BlendsExpandPolicy
}
declare class EPSSaveOptions {
  /** What Illustrator file format version to create. */
static compatibility: Compatibility
/** EPS preview format. */
static preview: EPSPreview
/** Are linked image files to be included in the saved document. */
static embedLinkedFiles: boolean
/** Include thumbnail image of the EPS artwork. */
static includeDocumentThumbnails: boolean
/** Embed all fonts used by the document in the saved file (version 7 or later) */
static embedAllFonts: boolean
/** Use CMYK PostScript. */
static cmykPostScript: boolean
/** PostScript level to use (level 1 valid for file format version 8 or older) */
static postScript: EPSPostScriptLevelEnum
/** How should transparency be flattened for older file format versions (pre-version 9) */
static flattenOutput: OutputFlattening
/** Create a raster item of the gradient or gradient mesh so that PostScript Level 2 printers can print the object. */
static compatibleGradientPrinting: boolean
static overprint: PDFOverprint
/** All the artboards or range of the artboards will be saved. */
static saveMultipleArtboards: boolean
/** If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
static artboardRange: string
}
declare class PDFSaveOptions {
  /** The max string length is 255 bytes. Name of PDF preset to use. */
static pDFPreset: string
/** The version of the Acrobat file format to create. */
static compatibility: PDFCompatibility
/** This control includes the None option for when the user is not complying with any PDF standard. */
static pDFXStandard: PDFXStandard
/** This displays the description from the selected preset. */
static pDFXStandardDescription: string
/** Preserve Illustrator editing capabilities when saving the document. */
static preserveEditability: boolean
/** Generate thumbnails for the saved document. */
static generateThumbnails: boolean
/** Should the PDF document be optimized for fast web viewing. */
static optimization: boolean
/** View PDF after saving. */
static viewAfterSaving: boolean
/** How should color bitmap images be compressed. */
static colorCompression: CompressionQuality
/** Tile size when compressing with JPEG2000. */
static colorTileSize: Int32
/** How should color bitmap images be resampled. */
static colorDownsamplingMethod: DownsampleMethod
/** If zero, no downsampling, otherwise, the resolution to downsample color bitmap images to. */
static colorDownsampling: number
/** Downsample if the image's resolution is above this value. */
static colorDownsamplingImageThreshold: number
/** How should grayscale bitmap images be compressed. */
static grayscaleCompression: CompressionQuality
/** Tile size when compressing with JPEG2000. */
static grayscaleTileSize: Int32
/** How should grayscale bitmap images be resampled. */
static grayscaleDownsamplingMethod: DownsampleMethod
/** If zero, no downsampling, otherwise, the resolution to downsample grayscale images to. */
static grayscaleDownsampling: number
/** Downsample if the image's resolution is above this value. */
static grayscaleDownsamplingImageThreshold: number
/** How should monochrome bitmap images be compressed. */
static monochromeCompression: MonochromeCompression
/** How should monochrome bitmap images be resampled. */
static monochromeDownsamplingMethod: DownsampleMethod
/** If zero, no downsampling, otherwise, the resolution to downsample images to. */
static monochromeDownsampling: number
/** Downsample if the image's resolution is above this value. */
static monochromeDownsamplingImageThreshold: number
/** Should line art and text be compressed? */
static compressArt: boolean
/** Draw trim marks. */
static trimMarks: boolean
/** Draw registration marks. */
static registrationMarks: boolean
/** Draw color bars. */
static colorBars: boolean
/** Draw page information. */
static pageInformation: boolean
/** The page marks style. */
static pageMarksType: PageMarksTypes
/** Trim mark weight. */
static trimMarkWeight: PDFTrimMarkWeight
/** Custom offset (in points) for using the custom paper. */
static offset: number
/** The bleed offset rect. */
static bleedOffsetRect: Rect
/** Link 4 bleed values. */
static bleedLink: boolean
/** PDF color conversion policy. Three choices are available: (1)No Color Conversion (2) Repurpose (3) Convert to Destination. */
static colorConversionID: ColorConversion
/** When NoColorConversion is specified for Color Conversion, NoColorDestination is set. */
static colorDestinationID: ColorDestination
/** If CMS is off, Don't Include Profiles is set. */
static colorProfileID: ColorProfile
/** When CMS is on, the output intent profile is the same profile selected for Destination in the Color group box. */
static outputIntentProfile: string
/** This is an optional comment which, if present, is added to the PDF file and describes the intended printing condition. */
static outputCondition: string
/** If selected for Output Intent Profile Name, you can set the name of a registered printing condition. */
static outputConditionID: string
/** URL to the site where the specified output condition is registered. No validation is performed on the URL. */
static registryName: string
/** This indicates if manual trapping has been prepared in the document. */
static trapped: boolean
/** Include a subset of fonts when less than this percentage of characters are used. */
static fontSubsetThreshold: number
/** The transparency flattener preset name. */
static flattenerPreset: string
/** The printing flattener options. */
static flattenerOptions: PrintFlattenerOptions
/** Flattening printer resolution. */
static printerResolution: number
/** Create acrobat layers from top-level layers - acrobat 6 only option. */
static acrobatLayers: boolean
/** Require a password to open the document. */
static requireDocumentPassword: boolean
/** A password string to open the document. */
static documentPassword: string
/** Use a password to restrict editing security settings. */
static requirePermissionPassword: boolean
/** A password string to restrict editing security settings. */
static permissionPassword: string
/** PDF security printing permission. */
static pDFAllowPrinting: PDFPrintAllowedEnum
/** PDF security changes allowed. */
static pDFChangesAllowed: PDFChangesAllowedEnum
/** Enable copying of text 128-bit. */
static enableCopy: boolean
/** Enable accessing 128-bit. */
static enableAccess: boolean
/** Enable plaintext metadata 128-bit - available only for acrobat 6. */
static enablePlainText: boolean
/** Enable copying and accessing 40-bit. */
static enableCopyAccess: boolean
/** Considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
static artboardRange: string
}
declare class IllustratorSaveOptions {
  /** What Illustrator file format version to create. */
static compatibility: Compatibility
/** Include a subset of fonts when less than this percentage of characters are used (version 9 or later) */
static fontSubsetThreshold: number
/** Embed the document's ICC profile in the saved file (version 9 or later) */
static embedICCProfile: boolean
/** Are linked image files to be included in the saved document (versions 7 or later) */
static embedLinkedFiles: boolean
/** How should transparency be flattened for older file format versions (pre-version 9) */
static flattenOutput: OutputFlattening
/** Save as a PDF compatible file (version 10 or later) */
static pdfCompatible: boolean
/** Should the saved file be compressed (version 10 or later) */
static compressed: boolean
/** All the artboards or range of the artboards will be saved. */
static saveMultipleArtboards: boolean
/** If SaveMultipleArtboards is true ,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
static artboardRange: string
}
declare class Matrix {
  static mValueA: number
static mValueB: number
static mValueC: number
static mValueD: number
static mValueTX: number
static mValueTY: number
}
declare class ExportOptionsJPEG {
  /** Quality of resulting image. */
static qualitySetting: Int32
/** Should the image be optimized for web viewing. */
static optimization: boolean
/** Blur the resulting image this much. */
static blurAmount: number
/** Should the artboard be matted with a color. */
static matte: boolean
/** The color to use when matting the artboard (default: white) */
static matteColor: RGBColor
/** Horizontal scaling factor. */
static horizontalScale: number
/** Vertical scaling factor. */
static verticalScale: number
/** Should the resulting image be antialiased. */
static antiAliasing: boolean
/** Should the resulting image be clipped to the artboard. */
static artBoardClipping: boolean
/** Should the resulting image be saved as HTML. */
static saveAsHTML: boolean
}
declare class ExportOptionsPNG8 {
  /** Number of colors in exported color table. */
static colorCount: Int32
/** Method used to reduce the number of colors. */
static colorReduction: ColorReductionMethod
/** Method used to dither colors. */
static colorDither: ColorDitherMethod
/** How much should the colors be dithered. */
static ditherPercent: Int32
/** How much should the color table be changed to match the web palette. */
static webSnap: Int32
/** Should the resulting image use transparency. */
static transparency: boolean
/** Should the resulting image be interlaced. */
static interlaced: boolean
/** Should the artboard be matted with a color. */
static matte: boolean
/** The color to use when matting the artboard (default: white) */
static matteColor: RGBColor
/** Horizontal scaling factor. */
static horizontalScale: number
/** Vertical scaling factor. */
static verticalScale: number
/** Should the resulting image be antialiased. */
static antiAliasing: boolean
/** Should the resulting image be clipped to the artboard. */
static artBoardClipping: boolean
/** Should the resulting image be saved as HTML. */
static saveAsHTML: boolean
}
declare class ExportOptionsPNG24 {
  /** Should the resulting image use transparency. */
static transparency: boolean
/** Should the artboard be matted with a color. */
static matte: boolean
/** The color to use when matting the artboard (default: white) */
static matteColor: RGBColor
/** Horizontal scaling factor. */
static horizontalScale: number
/** Vertical scaling factor. */
static verticalScale: number
/** Should the resulting image be antialiased. */
static antiAliasing: boolean
/** Should the resulting image be clipped to the artboard. */
static artBoardClipping: boolean
/** Should the resulting image be saved as HTML. */
static saveAsHTML: boolean
/** Dimensions in which to contain the resulting raster. */
static dimensions: Dimensions
}
declare class ExportOptionsGIF {
  /** Number of colors in exported color table. */
static colorCount: Int32
/** Method used to reduce the number of colors. */
static colorReduction: ColorReductionMethod
/** Level of information loss during compression. */
static infoLossPercent: Int32
/** Method used to dither colors. */
static colorDither: ColorDitherMethod
/** How much should the colors be dithered. */
static ditherPercent: Int32
/** How much should the color table be changed to match the web pallet. */
static webSnap: Int32
/** Should the resulting image use transparency. */
static transparency: boolean
/** Should the resulting image be interlaced. */
static interlaced: boolean
/** Should the artboard be matted with a color. */
static matte: boolean
/** The color to use when matting the artboard (default: white) */
static matteColor: RGBColor
/** Horizontal scaling factor. */
static horizontalScale: number
/** Vertical scaling factor. */
static verticalScale: number
/** Should the resulting image be antialiased. */
static antiAliasing: boolean
/** Should the resulting image be clipped to the artboard. */
static artBoardClipping: boolean
/** Should the resulting image be saved as HTML. */
static saveAsHTML: boolean
}
declare class ExportOptionsPhotoshop {
  /** The color space of the exported file. */
static imageColorSpace: ImageColorSpace
/** The resolution of the exported file. */
static resolution: number
/** Should the resulting image be antialiased. */
static antiAliasing: boolean
/** Preserve document layers when exporting. */
static writeLayers: boolean
/** Export text objects as editable text layers. */
static editableText: boolean
/** Embed an ICC profile when exporting. */
static embedICCProfile: boolean
/** Should a warning dialog be displayed because of conflicts in the export settings. */
static warnings: boolean
/** Preserve as much of the original document's structure as possible when exporting. */
static maximumEditability: boolean
/** All the artboards or range of the artboards will be exported. */
static saveMultipleArtboards: boolean
/** If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
static artboardRange: string
}
declare class ExportOptionsSVG {
  /** The version of DTD that the exported file should be conforming to. */
static DTD: SVGDTDVersion
/** The type of font that should be included in the exported file. */
static fontType: SVGFontType
/** What font glyphs should be included in the exported file. */
static fontSubsetting: SVGFontSubsetting
/** Should the raster images in the exported file be included. */
static embedRasterImages: boolean
/** Decimal precision for element coordinate values. */
static coordinatePrecision: Int32
/** How should the text in the document be encoded. */
static documentEncoding: SVGDocumentEncoding
/** How should the CSS properties of the document be included in the document. */
static cssProperties: SVGCSSPropertyLocation
/** Should the exported file be compressed. */
static compressed: boolean
static optimizeForSVGViewer: boolean
static includeVariablesAndDatasets: boolean
static includeFileInfo: boolean
static includeUnusedStyles: boolean
/** Preserve slice data in exported document. */
static slices: boolean
/** Preserve Illustrator editing capabilities when exporting the document. */
static preserveEditability: boolean
/** Is SVG auto kerning allowed? */
static sVGAutoKerning: boolean
/** Is SVG text-on-path construct allowed? */
static sVGTextOnPath: boolean
/** All the artboards or range of the artboards will be saved. */
static saveMultipleArtboards: boolean
/** If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
static artboardRange: string
}
declare class ExportOptionsWebOptimizedSVG {
  /** The type of font that should be included in the exported file. */
static fontType: SVGFontType
/** Decimal precision for element coordinate values. */
static coordinatePrecision: Int32
/** How should the CSS properties of the document be included in the document. */
static cssProperties: SVGCSSPropertyLocation
/** How object names (IDs) are generated in exported SVG. */
static svgId: SVGIdType
/** Reduces the size of the svg. */
static svgMinify: boolean
/** Makes the SVG Responsive. */
static svgResponsive: boolean
/** Should the raster images in the exported file be included. */
static rasterImageLocation: RasterImageLocation
/** All the artboards or range of the artboards will be saved. */
static saveMultipleArtboards: boolean
/** If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
static artboardRange: string
}
declare class ExportOptionsFlash {
  /** How should the Flash file be created. */
static exportStyle: FlashExportStyle
/** Which version of SWF to export. */
static exportVersion: FlashExportVersion
/** When exporting layers to Flash frames. */
static frameRate: number
/** Should the Flash file be set to loop when run. */
static looping: boolean
/** Prevent the exported file from being imported by other applications. */
static readOnly: boolean
/** How should the arts be clipped during the output. */
static artClipping: ArtClippingOption
/** How much curve information should be preserved. */
static curveQuality: Int32
/** How should the images in the exported Flash file be compressed. */
static imageFormat: FlashImageFormat
/** Level of compression. */
static jpegQuality: Int32
/** What method to use. */
static jpegMethod: FlashJPEGMethod
/** What access should the SWF file have - local or network access. */
static playbackAccess: FlashPlaybackSecurity
/** Pixels per inch. */
static resolution: number
/** If a file with the same name already exists, should it be replaced? */
static replacing: SaveOptions
/** Should all text be converted to outlines. */
static convertTextToOutlines: boolean
/** Should the exported file be compressed. */
static compressed: boolean
/** The background color. */
static backgroundColor: RGBColor
/** A list of layers to be included as the static background in all exported Flash frames. */
static backgroundLayers: Layer
/** The order in which the layers will be exported to Flash frames. */
static layerOrder: LayerOrderType
/** Controls how the blend art objects are animated when export to Flash frames. */
static blendAnimation: BlendAnimationType
/** Should the kerning information for text objects be ignored. */
static ignoreTextKerning: boolean
/** Should all symbol definitions in the palette be exported to the SWF File. */
static exportAllSymbols: boolean
/** Choose whether to preserve artwork appearance or editability (default) during export. */
static preserveAppearance: boolean
/** If true, include minimal XMP metadata in the exported file. */
static includeMetadata: boolean
/** All the artboards or range of the artboards will be exported. */
static saveMultipleArtboards: boolean
/** If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
static artboardRange: string
}
declare class ExportOptionsAutoCAD {
  /** Which format to export the file as. */
static exportFileFormat: AutoCADExportFileFormat
/** Release of AutoCAD to export to. */
static version: AutoCADCompatibility
/** Ratio by which to scale the output. */
static unitScaleRatio: number
/** Units from which to map. */
static unit: AutoCADUnit
/** Number of colors to export into the AutoCAD file. */
static colors: AutoCADColors
/** Raster format in which to export raster art. */
static rasterFormat: AutoCADRasterFormat
/** Whether to preserve appearance or editability during export. */
static exportOption: AutoCADExportOption
/** Export selected art only. */
static exportSelectedArtOnly: boolean
/** Alter paths for appearance. */
static alterPathsForAppearance: boolean
/** Whether to convert text to outlines. */
static convertTextToOutlines: boolean
/** Whether to scale lineweights by the same amount as rest of the drawing. */
static scaleLineweights: boolean
}
declare class ExportOptionsTIFF {
  /** The color space of the exported file. */
static imageColorSpace: ImageColorSpace
/** The resolution of the exported file. */
static resolution: number
/** Should the resulting image be antialiased. */
static antiAliasing: AntiAliasingMethod
/** Compress TIFF file with LZW Compression when exporting. */
static lZWCompression: boolean
/** Mac or PC byte order when exporting. */
static byteOrder: TIFFByteOrder
/** Embed an ICC profile when exporting. */
static embedICCProfile: boolean
/** All the artboards or range of the artboards will be exported. */
static saveMultipleArtboards: boolean
/** If SaveMultipleArtboards is true,this will be considered for multi-asset extraction which specifies artboard range.Empty string will extracts all the artboards.Default is empty string. */
static artboardRange: string
}
declare class Color {
  
}
declare class LabColor extends Color {
  /** The L color value (between 0.0 and 100.0) */
static l: number
/** The a color value (between -128.0 and 127.0) */
static a: number
/** The b color value (between -128.0 and 127.0) */
static b: number
}
declare class Dimensions {
  /** The Width parameter. */
static width: number
/** The Height parameter. */
static height: number
}
declare class RGBColor extends Color {
  /** The red color value (between 0.0 and 255.0) */
static red: number
/** The green color value (between 0.0 and 255.0) */
static green: number
/** The blue color value (between 0.0 and 255.0) */
static blue: number
}
declare class CMYKColor extends Color {
  /** The cyan color value (between 0.0 and 100.0) */
static cyan: number
/** The magenta color value (between 0.0 and 100.0) */
static magenta: number
/** The yellow color value (between 0.0 and 100.0) */
static yellow: number
/** The black color value (between 0.0 and 100.0) */
static black: number
}
declare class GrayColor extends Color {
  /** The gray value (between 0.0 and 100.0) */
static gray: number
}
declare class NoColor extends Color {
  
}
declare class SpotColor extends Color {
  /** Percentage level of tint to be applied to the spot color. */
static tint: number
static spot: Spot
}
declare class PatternColor extends Color {
  /** The distance to translate the (unscaled) prototype before filling. */
static shiftDistance: number
/** The angle to translate the (unscaled) prototype before filling. */
static shiftAngle: number
/** The fraction to scale the prototype before filling. */
static scaleFactor: Point
/** The angle to rotate the before filling. */
static rotation: number
/** Whether or not the prototype is reflected before filling. */
static reflect: boolean
/** The axis around which to reflect. */
static reflectAngle: number
/** The angle to slant the shear by. */
static shearAngle: number
/** The axis to shear with respect to. */
static shearAxis: number
/** Additional transformation arising from manipulating the path. */
static matrix: Matrix
static pattern: Pattern
}
declare class GradientColor extends Color {
  /** The gradient vector origin. */
static origin: Point
/** The gradient vector angle. */
static angle: number
/** The gradient vector length. */
static length: number
/** The gradient hilite vector angle. */
static hiliteAngle: number
/** The gradient hilite vector length. */
static hiliteLength: number
/** Additional transformation arising from manipulating the path. */
static matrix: Matrix
/** Reference to the object defining the gradient. */
static gradient: Gradient
}
declare class TabStopInfo {
  /** The alignment of the tab stop. */
static alignment: TabStopAlignment
/** The character used for decimal tab stops. */
static decimalCharacter: string
/** The position of the tab stop expressed in points. */
static position: number
/** The leader dot. */
static leader: string
}
declare class Printer {
  /** The printer name. */
static name: string
/** The printer information. */
static printerInfo: PrinterInfo
}
declare class PrinterInfo {
  /** The printer type. */
static printerType: PrinterTypeEnum
/** The PostScript level. */
static postScriptLevel: PrinterPostScriptLevelEnum
/** The printer color capability. */
static colorSupport: PrinterColorMode
/** The printer default resolution. */
static deviceResolution: number
/** The printer maximum device resolution. */
static maxDeviceResolution: number
/** Does the printer support InRIP color separation? */
static inRIPSeparationSupport: boolean
/** Does the printer support binary printing? */
static binaryPrintingSupport: boolean
/** The list of supported paper sizes. */
static paperSizes: Paper
/** Does the printer support custom paper size? */
static customPaperSupport: boolean
/** Does the printer support custom paper transverse? */
static customPaperTransverseSupport: boolean
/** Custom paper's minimum width. */
static minPaperWidth: number
/** Custom paper's maximum width. */
static maxPaperWidth: number
/** Custom paper's minimum height. */
static minPaperHeight: number
/** Custom paper's maximum height. */
static maxPaperHeight: number
/** Custom paper's minimum height offset. */
static minPaperHeightOffset: number
/** Custom paper's maximum height offset. */
static maxPaperHeightOffset: number
/** Custom paper's minimum width offset. */
static minPaperWidthOffset: number
/** Custom paper's maximum width offset. */
static maxPaperWidthOffset: number
}
declare class PPDFile {
  /** The PPD model name. */
static name: string
/** The PPD file information. */
static PPDInfo: PPDFileInfo
}
declare class PPDFileInfo {
  /** The PostScript language level. */
static languageLevel: string
/** Path specification for the PPD file. */
static PPDFilePath: File
/** List of color separation screens. */
static screenList: Screen
/** List of color separation screen spot functions. */
static screenSpotFunctionList: ScreenSpotFunction
}
declare class Paper {
  /** The paper name. */
static name: string
/** The paper information. */
static paperInfo: PaperInfo
}
declare class PaperInfo {
  /** The paper's width (in points) */
static width: number
/** The paper's height (in points) */
static height: number
/** The imageable area. */
static imageableArea: Rect
/** Is it a custom paper? */
static customPaper: boolean
}
declare class Screen {
  /** The color separation screen name. */
static name: string
/** The color separation screen information. */
static screenInfo: ScreenInfo
}
declare class ScreenInfo {
  /** Is it the default screen? */
static defaultScreen: boolean
/** The screen's frequency. */
static frequency: number
/** The screen's angle (in degrees) */
static angle: number
}
declare class ScreenSpotFunction {
  /** The color separation screen spot function name. */
static name: string
/** The spot function in terms of the PostScript commands. */
static spotFunction: string
}
declare class Ink {
  /** The ink's name. */
static name: string
/** The ink information. */
static inkInfo: InkInfo
}
declare class InkInfo {
  /** The ink printing status. */
static printingStatus: InkPrintStatus
/** The ink type. */
static kind: InkType
/** The trapping type. */
static trapping: TrappingType
/** The order of trapping for the ink. */
static trappingOrder: Int32
/** The neutral density. */
static density: number
/** The ink's frequency. */
static frequency: number
/** The ink's screen angle (in degrees) */
static angle: number
/** The color of the custom ink. */
static customColor: Color
/** The dot shape name. */
static dotShape: string
}
declare class DocumentPreset {
  /** The title for the new document. */
static title: string
/** The width for the new document. */
static width: number
/** The height for the new document. */
static height: number
/** Number of artboards for new document.Range (1:100). */
static numArtboards: Int32
/** Layout for artboards. */
static artboardLayout: DocumentArtboardLayout
/** Spacing between artboards. */
static artboardSpacing: number
/** Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts. */
static artboardRowsOrCols: Int32
/** The color mode for the new document. */
static colorMode: DocumentColorSpace
/** The units for the new document. */
static units: RulerUnits
/** The preview mode for the new document. */
static previewMode: DocumentPreviewMode
/** The raster resolution for the new document. */
static rasterResolution: DocumentRasterResolution
/** The transparency grid for the new document. */
static transparencyGrid: DocumentTransparencyGrid
}
declare class PrintOptions {
  /** The name of the printer to print to. */
static printerName: string
/** The name of the PPD to use. */
static PPDName: string
/** The name of a print preset to use. */
static printPreset: string
/** The transparency flattener preset name. */
static flattenerPreset: string
/** The paper options. */
static paperOptions: PrintPaperOptions
/** The printing job options. */
static jobOptions: PrintJobOptions
/** The printing color separation options. */
static colorSeparationOptions: PrintColorSeparationOptions
/** The printing coordinate options. */
static coordinateOptions: PrintCoordinateOptions
/** The printing page marks options. */
static pageMarksOptions: PrintPageMarksOptions
/** The printing font options. */
static fontOptions: PrintFontOptions
/** The printing PostScript options. */
static postScriptOptions: PrintPostScriptOptions
/** The printing color management options. */
static colorManagementOptions: PrintColorManagementOptions
/** The printing flattener options. */
static flattenerOptions: PrintFlattenerOptions
}
declare class PrintPaperOptions {
  /** The paper's name. */
static name: string
/** The custom width (in points) for using the custom paper. */
static width: number
/** The custom height (in points) for using the custom paper. */
static height: number
/** Custom offset (in points) for using the custom paper. */
static offset: number
/** Whether to transverse the artwork (rotate 90 degrees) on the custom paper. */
static transverse: boolean
}
declare class PrintJobOptions {
  /** The layers/objects to be printed. */
static designation: PrintArtworkDesignation
/** The printing bounds. */
static printArea: PrintingBounds
/** The number of copies to print. */
static copies: Int32
/** Print pages in reverse order. */
static reversePages: boolean
/** Whether to collate print pages. */
static collate: boolean
/** The file to be printed to. */
static file: File
/** Whether to print as bitmap. */
static printAsBitmap: boolean
/** The bitmap resolution. */
static bitmapResolution: number
/** The print job name. */
static name: string
/** Whether to print all artboards. */
static printAllArtboards: boolean
/** Artboard Range to be printed if PrintAllArtboards is false. */
static artboardRange: string
}
declare class PrintColorSeparationOptions {
  /** The color separation type. */
static colorSeparationMode: PrintColorSeparationMode
/** Whether to convert all spot colors to process colors. */
static convertSpotColors: boolean
/** Whether to overprint in black. */
static overPrintBlack: boolean
/** The list of inks for color separation. */
static inkList: Ink
}
declare class PrintCoordinateOptions {
  /** The artwork orientation. */
static orientation: PrintOrientation
/** Whether to flip artwork horizontally. */
static emulsion: boolean
/** The artwork position on media. */
static position: PrintPosition
/** Whether to proportionally scale the artwork to fit on the page. */
static fitToPage: boolean
/** The horizontal scaling factor expressed as a percentage (100 = 100%) */
static horizontalScale: number
/** The vertical scaling factor expressed as a percentage (100 = 100%) */
static verticalScale: number
/** The page tiling mode. */
static tiling: PrintTiling
}
declare class PrintPageMarksOptions {
  /** The page marks style. */
static pageMarksType: PageMarksTypes
/** Stroke weight of trim marks. */
static trimMarksWeight: number
/** Whether to enable trim marks printing. */
static trimMarks: boolean
/** Whether to enable registration marks printing. */
static registrationMarks: boolean
/** Whether to enable color bars printing. */
static colorBars: boolean
/** Whether to enable page info marks printing. */
static pageInfoMarks: boolean
/** The bleed offset rect. */
static bleedOffsetRect: Rect
/** The page marks offset rect. */
static marksOffsetRect: Rect
}
declare class PrintFontOptions {
  /** The font download mode. */
static downloadFonts: PrintFontDownloadMode
/** The font substitution policy. */
static fontSubstitution: FontSubstitutionPolicy
}
declare class PrintPostScriptOptions {
  /** The PostScript language level. */
static postScriptLevel: PrinterPostScriptLevelEnum
/** Whether to print in binary mode. */
static binaryPrinting: boolean
/** Whether to print in negative mode. */
static negativePrinting: boolean
/** The image compression type. */
static imageCompression: PostScriptImageCompressionType
/** Whether to force continuous tone. */
static forceContinuousTone: boolean
/** Use PostScript level 1 compatible gradient and gradient mesh printing. */
static compatibleShading: boolean
/** The shading resolution. */
static shadingResolution: number
}
declare class PrintColorManagementOptions {
  /** The color management profile mode. */
static colorProfileMode: PrintColorProfile
/** The color management intent type. */
static intent: PrintColorIntent
/** The color management profile name. */
static name: string
}
declare class PrintFlattenerOptions {
  /** The flattening balance. */
static flatteningBalance: Int32
/** The rasterization resolution. */
static rasterizationResolution: number
/** The gradient resolution. */
static gradientResolution: number
/** Whether to convert all text to outlines. */
static convertTextToOutlines: boolean
/** Whether to convert all strokes to outlines. */
static convertStrokesToOutlines: boolean
/** Whether to clip complex regions. */
static clipComplexRegions: boolean
/** Overprint. */
static overprint: PDFOverprint
}
declare class ImageCaptureOptions {
  /** The resolution of the captured image file. */
static resolution: number
/** Should the resulting image use transparency. */
static transparency: boolean
/** Should the artboard be matted with a color. */
static matte: boolean
/** The color to use when matting the artboard (default: white) */
static matteColor: RGBColor
/** Should the resulting image be antialiased. */
static antiAliasing: boolean
}
declare class RasterEffectOptions {
  /** The color model for the rasterization. */
static colorModel: RasterizationColorModel
/** The rasterization resolution in dots-per-inch (dpi) */
static resolution: number
/** Should the resulting image use transparency. */
static transparency: boolean
/** Should the resulting image be antialiased. */
static antiAliasing: boolean
/** Should a clipping mask be created for the resulting image. */
static clippingMask: boolean
/** Whether to convert all spot colors to process colors in the resulting image. */
static convertSpotColors: boolean
/** The amount of white space (in points) to be added around the object during rasterization. */
static padding: number
}
declare class RasterizeOptions {
  /** The color model for the rasterization. */
static colorModel: RasterizationColorModel
/** The rasterization resolution in dots-per-inch (dpi) */
static resolution: number
/** Should the resulting image use transparency. */
static transparency: boolean
/** The type of antialiasing method. */
static antiAliasingMethod: AntiAliasingMethod
/** Should a clipping mask be created for the resulting image. */
static clippingMask: boolean
/** Whether to convert all spot colors to process colors in the resulting image. */
static convertSpotColors: boolean
/** Should all text be converted to outlines before rasterization. */
static convertTextToOutlines: boolean
/** Should the resulting image incorporates the layer attributes (such as opacity and blend mode) */
static includeLayers: boolean
/** Should rasterize against a black background instead of white. */
static backgroundBlack: boolean
/** The amount of white space (in points) to be added around the object during rasterization. */
static padding: number
}
declare class Application {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The application's name. */
readonly name: string
/** Path specification for the application. */
readonly path: File
/** The active document. */
activeDocument: Document
/** The current users adobe id. */
readonly userAdobeID: string
/** The current user's GUID. */
readonly userGUID: string
/** The version of the Adobe Illustrator application. */
readonly version: string
/** The build number of the Adobe Illustrator application. */
readonly buildNumber: string
/** The Locale of the Adobe Illustrator application. */
readonly locale: string
/** The version of the Scripting plugin. */
readonly scriptingVersion: string
/** The amount of unused memory within the Adobe Illustrator partition. */
readonly freeMemory: Int32
/** Is a web browser available? */
readonly browserAvailable: boolean
/** The selection visible to the user. */
selection: any
/** Is the application visible. */
readonly visible: boolean
/** What level of interaction with the user should be allowed when handling script commands. */
userInteractionLevel: UserInteractionLevel
/** Coordinate System used by script. */
coordinateSystem: CoordinateSystem
/** Preferences for Illustrator. */
readonly preferences: Preferences
/** The list of installed printers. */
readonly printerList: Printer
/** The list of PPD files currently available for use. For performance reasons, the PPDFile entry only contains the model name and file spec of each PPD file. */
readonly PPDFileList: PPDFile
/** The list of print preset names currently available for use. */
readonly printPresetsList: string
/** The list of presets available for creating a new document. */
readonly startupPresetsList: string
/** The list of PDF preset names currently available for use. */
readonly PDFPresetsList: string
/** The list of flattener style names currently available for use. */
readonly flattenerPresetsList: string
/** The list of tracing preset names currently available for use. */
readonly tracingPresetsList: string
/** The list of color settings files currently available for use. */
readonly colorSettingsList: File
/** The default color settings file for the current application locale. */
readonly defaultColorSettings: File
/** Does paste operation remember layers structure? */
pasteRemembersLayers: boolean
/** The open documents. */
readonly documents: Documents
/** Installed fonts. */
readonly textFonts: TextFonts/**
 * Returns the JSON Data required by Hello.
*/
getHelloJSONData(): string
/**
 * Returns the JSON Data required by CCX Welcome.
* @param mode - Mode for which the data is to be provided.
*/
getCCXUserJSONData(mode?: string): string
/**
 * Launch cep Extension given its ID.
* @param extensionID - Arguments for Launching Extension - ID of extension in manifest.xml of corresponding extension.
*/
launchExtension(extensionID: string): Int32
/**
 * Runs API Tests from the TestAPI Plug-in.
* @param testName - Arguments for Running Tests - eg. Name of Test/Suite.
*/
runAPITest(testName: string): void
/**
 * Loads the aat model to the editor.
*/
aATLoadModel(): string
/**
 * Loads a UI description as an extension to the editor.
*/
aATLoadUIExtension(): string
/**
 * Loads a session file as an extension to the editor.
*/
aATLoadLibExtension(): string
/**
 * Executes the active session in the sequencer.
*/
aATExecuteSession(): void
/**
 * Executes the active session in the sequencer.
* @param file - Execute a session file.
*/
aATExecuteSessionFromFile(file: File): void
/**
 * Retrieves a file path to the AAT editor swf.
*/
aATGetEditorDialogFile(): File
/**
 * Retrieves a string representing the AAT version.
*/
getVersionString(): string
/**
 * Retrieves a file path to the AAT error dialog swf.
*/
aATGetErrorDialogFile(): File
/**
 * Retrieves a boolean indicating the presence of errors in the last script to execute.
*/
aATErrorsExist(): boolean
/**
 * Retrieves a string containing the results of the last script to execute.
*/
getExecutionOutput(): string
/**
 * Clear the sequencer.
*/
aATClear(): string
/**
 * Get the active session for the sequncer.
*/
aATGetSession(): string
/**
 * Saves the active session in the sequencer to a file.
*/
aATSaveSession(): string
/**
 * Saves the active session in the sequencer to a new file.
*/
aATSaveAsSession(): string
/**
 * Loads a session into the sequencer.
*/
aATLoadSessionFile(): string
/**
 * Add the specified to the sequencer.
* @param sessionIndex - The index in the session of the top-most sequence for the item to add.
* @param destinationSequenceID - The UID for the owning sequence.
* @param destinationIndex - The item UID where to insert.
* @param srcItemIDData - The item ID of the item to construct.
* @param type - The source of the item to construct.
*/
aATAddItem(sessionIndex: Int32, destinationSequenceID: Int32, destinationIndex: Int32, srcItemIDData: string, type: string): string
/**
 * Moves the specified in the sequencer.
* @param sessionIndex - The index in the session of the top-most sequence for the item to move.
* @param moveThisID - The UID of the item to replace.
* @param newSessionIndex - The index in the session of the destination top-most sequence.
* @param destinationSequenceID - The UID for the owning sequence.
* @param destinationIndex - The index where to insert.
*/
aATMoveItem(sessionIndex: Int32, moveThisID: string, newSessionIndex: Int32, destinationSequenceID: string, destinationIndex: Int32): string
/**
 * Replaces the specified to the sequencer.
* @param sessionIndex - The index in the session of the top-most sequence for the item to add.
* @param replaceThisID - The UID of the item to replace.
* @param srcItemIDData - The item ID of the item to construct.
* @param type - The source of the item to construct.
*/
aATReplaceItem(sessionIndex: Int32, replaceThisID: Int32, srcItemIDData: string, type: string): string
/**
 * Removes the specified item from the sequencer.
* @param sessionIndex - The index in the session of the top-most sequence for the item to add.
* @param item - The item UID.
*/
aATRemoveItem(sessionIndex: Int32, item: string): string
/**
 * Duplicates the specified item(s) from the sequencer.
* @param sessionIndex - The index in the session of the top-most sequence for the item to add.
* @param item - The item UID(s)
*/
aATDuplicateItem(sessionIndex: Int32, item: string): string
/**
 * Opens the specified item from the sequencer in the item editor.
* @param sessionIndex - The index in the session of the top-most sequence for the item to add.
* @param item - The item UID.
*/
aATEditItem(sessionIndex: Int32, item: string): string
/**
 * Applies the data used in the item editor to the item.
* @param sessionIndex - The index in the session of the top-most sequence for the item to edit.
* @param item - The item UID.
* @param data - The data to apply in XML format.
*/
applyDataToItem(sessionIndex: Int32, item: string, data: string): string
/**
 * Applies data to the specified item from the sequencer in the item editor.
* @param sessionIndex - The index in the session of the top-most sequence for the item to add.
* @param item - The item UID.
* @param dataID - The data to apply in XML format.
* @param data - The data to apply in XML format.
*/
applySingleDataPointToItem(sessionIndex: Int32, item: string, dataID: string, data: string): boolean
/**
 * Returns a string translated from the key and source data passed in.
* @param key - The string to translate.
* @param source - The plugin name from the source of the key.
*/
translateString(key: string, source: string): string
/**
 * Prompts the user to save a file or choose a file or directory and returns a relative path string to the file.
* @param path - The path relative to the folder specified by Relative.
* @param relative - The current relative path token.
* @param type - The type of dialog to show in string format.
*/
aATFileSaveDialog(path: string, relative: string, type: string): string
/**
 * Switches a files relative token and path.
* @param path - The path relative to the folder specified by Relative.
* @param relative - The current relative path token.
* @param newRelative - The new relative path token.
*/
aATFileRelativeChanged(path: string, relative: string, newRelative: string): string
/**
 * Gets an XML string listing the relative paths and the UI strings to display them.
*/
aATGetListOfRelativePaths(): string
/**
 * Starts the automation tests for the Sync Settings feature.
*/
beginSyncSettingsAutomationTest(): boolean
/**
 * Starts the automation tests for the Typekit Font feature.
*/
beginTypekitFontAutomationTest(): boolean
/**
 * Cut current selection to the clipboard.
*/
cut(): void
/**
 * Copy current selection to the clipboard.
*/
copy(): void
/**
 * Paste clipboard into the current document.
*/
paste(): void
/**
 * Checks if fill is active or not.
*/
isFillActive(): boolean
/**
 * Checks if stroke is active or not.
*/
isStrokeActive(): boolean
/**
 * Invokes application's color picker.
* @param color - The color to load in the color picker initially.
*/
showColorPicker(color: Color): Color
/**
 * For Internal Use.
* @param assetURL - For Internal use.
* @param thumbnailURL - For Internal use.
* @param options - For internal use.
*/
openCloudLibraryAssetForEditing(assetURL: File, thumbnailURL: File, options?: any): Document
/**
 * For Internal Use.
* @param options - Options for the PNG24 export.
*/
setThumbnailOptionsForCloudLibrary(options: any): void
/**
 * Undo the last transaction.
*/
undo(): void
/**
 * Redo the last transaction.
*/
redo(): void
/**
 * Play an action from the Actions Palette.
* @param action - The name of the action to play (note that the case of letters in the Action name is important and must match the case of the name in the Actions palette)
* @param from - The name of the action set containing the action being played (note that the case of letters in the Action Set name is important and must match the case of the name in the Actions palette)
* @param dialogs - Are dialog boxes associated with the action to be presented?
*/
doScript(action: string, from: string, dialogs?: boolean): void
/**
 * Executes a menu command using the menu shortcut string.
* @param menuCommandString - Menu command shortcut.
*/
executeMenuCommand(menuCommandString: string): void
/**
 * Given a preset type, returns the full path to the application's default document profile for the type.
* @param presetType - The preset type.
*/
getPresetFileOfType(presetType: DocumentPresetType): File
/**
 * Load an action into action palette.
* @param actionFilePath - The path on the system of the action file to be loaded.
*/
loadAction(actionFilePath: File): void
/**
 * Unloads an action into action palette.
* @param setName - Name of the set to be unloaded.
* @param actionName - Name of the action to be unloaded.
*/
unloadAction(setName: string, actionName: string): void
/**
 * Sends the script message to the required plugin.
* @param pluginName - Plugin to which message needs to be sent.
* @param messageSelector - Functionality that is to be executed.
* @param inputString - Pass any data encoded in a string.
*/
sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string
/**
 * Given a preset name, tries and retrieves the settings from the preset template.
* @param preset - The name of the preset.
*/
getPresetSettings(preset: string): DocumentPreset
/**
 * Force Illustrator to redraw its window(s)
*/
redraw(): void
/**
 * Invert a matrix.
* @param matrix - The matrix to invert.
*/
invertMatrix(matrix: Matrix): Matrix
/**
 * Tests if a matrix is singular (cannot be inverted)
* @param matrix - The matrix to check.
*/
isSingularMatrix(matrix: Matrix): boolean
/**
 * Concatenate a translation to a transformation matrix.
* @param matrix - The matrix that is to be added to.
* @param deltaX - Horizontal transformation.
* @param deltaY - Vertical transformation.
*/
concatenateTranslationMatrix(matrix: Matrix, deltaX?: number, deltaY?: number): Matrix
/**
 * Concatenate a scale matrix to a transformation matrix.
* @param matrix - The matrix that is to be added to.
* @param scaleX - Horizontal scaling factor expressed as a percentage (100 = 100%)
* @param scaleY - Vertical scaling factor expressed as a percentage (100 = 100%)
*/
concatenateScaleMatrix(matrix: Matrix, scaleX?: number, scaleY?: number): Matrix
/**
 * Concatenate a rotation matrix to a transformation matrix.
* @param matrix - The matrix that is to be added to.
* @param angle - Angle of rotation (in degrees)
*/
concatenateRotationMatrix(matrix: Matrix, angle: number): Matrix
/**
 * Concatenate two transformation matrices.
* @param matrix - The matrix that is to be added to.
* @param secondMatrix - Second transformation matrix.
*/
concatenateMatrix(matrix: Matrix, secondMatrix: Matrix): Matrix
/**
 * Compares two matrices for equality.
* @param matrix - First transformation matrix to compare.
* @param secondMatrix - Second transformation matrix.
*/
isEqualMatrix(matrix: Matrix, secondMatrix: Matrix): boolean
/**
 * Returns an identity matrix.
*/
getIdentityMatrix(): Matrix
/**
 * Returns a rotation transformation matrix.
* @param angle - Angle of rotation (in degrees)
*/
getRotationMatrix(angle?: number): Matrix
/**
 * Returns a scale transformation matrix.
* @param scaleX - Horizontal scaling factor expressed as a percentage (100 = 100%)
* @param scaleY - Vertical scaling factor expressed as a percentage (100 = 100%)
*/
getScaleMatrix(scaleX?: number, scaleY?: number): Matrix
/**
 * Returns a translation matrix.
* @param deltaX - Horizontal transformation.
* @param deltaY - Vertical transformation.
*/
getTranslationMatrix(deltaX?: number, deltaY?: number): Matrix
/**
 * Open the specified document file.
* @param file - The file to be opened.
* @param documentColorSpace - Choose color space only for documents saved with multiple color models (pre-Illustrator 9)
* @param options - Options for opening a particular type of file.
*/
open(file: File, documentColorSpace?: DocumentColorSpace, options?: any): Document
/**
 * Dump the PGF portion of ai file to txt file.
* @param file - The AI file to be opened.
* @param documentColorSpace - Choose color space only for documents saved with multiple color models (pre-Illustrator 9)
* @param pGFFile - Folder to save the output PGF file.
*/
dumpPGFFile(file: File, documentColorSpace?: DocumentColorSpace, pGFFile: File): boolean
/**
 * Quit the application.
*/
quit(): void
/**
*/
beep(): void
/**
 * Translate the placeholder text to regular text. A method to enter unicode points in hex values.
* @param text - The placeholder text to be translated.
*/
translatePlaceholderText(text: string): string
/**
 * Get presets from the file.
* @param fileSpec - File spec to import from.
*/
showPresets(fileSpec: File): string
/**
 * Load the color settings from the file. If the file is an empty file spec, the color management will be turned off.
* @param fileSpec - File spec for the color settings.
*/
loadColorSettings(fileSpec: File): void
/**
 * Get detailed info from the specified PPD file.
* @param name - The model name of the PPD file.
*/
getPPDFileInfo(name: string): PPDFileInfo
/**
 * Get the scriptable help group object that represents the search widget in the app bar.
*/
getScriptableHelpGroup(): any
/**
 * Converts a sample-component color from one color space to another.
* @param sourceColorSpace - The source color space.
* @param sourceColor - The color to convert, an array of color components. First location of the array should contain alpha if source-has-alpha is true.
* @param destColorSpace - The destination color space.
* @param colorConvertPurpose - The parameter which passes the purpose of conversion.
* @param sourceHasAlpha - True if alpha channel is present in source color.
* @param destHasAlpha - True if alpha channel is present in destination color.
*/
convertSampleColor(sourceColorSpace: ImageColorSpace, sourceColor: number, destColorSpace: ImageColorSpace, colorConvertPurpose: ColorConvertPurpose, sourceHasAlpha?: boolean, destHasAlpha?: boolean): number
/**
 * Generate Creative Suite ActionScript Wrappers in specified directory.
* @param outputFolder - Location for the output files.
*/
reflectCSAW(outputFolder: File): void
/**
 * Switches between workspaces.
* @param workspaceName - Workspace Name.
*/
switchWorkspace(workspaceName: string): boolean
/**
 * Deletes an existing workspace.
* @param workspaceName - Workspace Name.
*/
deleteWorkspace(workspaceName: string): boolean
/**
 * Saves a new workspace.
* @param workspaceName - Workspace Name.
*/
saveWorkspace(workspaceName: string): boolean
/**
 * Resets the current workspace.
*/
resetWorkspace(): boolean
/**
 * Is In Touch Workspace.
*/
isTouchWorkspace(): boolean
/**
 * Is user sharing the application usage data.
*/
isUserSharingAppUsageData(): boolean
}
declare class Document {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Is the file a stationery file? */
readonly stationery: boolean
/** The file associated with the document. */
readonly fullName: File
/** The active layer. */
activeLayer: Layer
/** The document's current view. */
readonly activeView: View
/** The bounds of the illustration excluding stroke width. */
readonly geometricBounds: Rect
/** The visible bounds of the illustration including stroke width. */
readonly visibleBounds: Rect
rulerOrigin: Point
readonly rulerUnits: RulerUnits
pageOrigin: Point
cropBox: Rect
cropStyle: CropOptions
readonly width: number
readonly height: number
readonly showPlacedImages: boolean
readonly outputResolution: number
readonly printTiles: boolean
/** The selection within the document. */
selection: any
readonly splitLongPaths: boolean
readonly tileFullPages: boolean
readonly useDefaultScreen: boolean
/** The color space used for the document. */
readonly documentColorSpace: DocumentColorSpace
/** The document's name. */
readonly name: string
/** Path specification for the document. */
readonly path: File
/** Has the document been saved? */
saved: boolean
/** Should a new path be filled? */
defaultFilled: boolean
/** Default fill color. */
defaultFillColor: Color
/** Will art beneath a filled object be overprinted by default? */
defaultFillOverprint: boolean
/** Should a new path be stroked? */
defaultStroked: boolean
/** Default stroke color. */
defaultStrokeColor: Color
/** Will art beneath a stroked object be overprinted by default? */
defaultStrokeOverprint: boolean
/** Default width of stroke. */
defaultStrokeWidth: number
/** Default dash lengths (set to {} for a solid line) */
defaultStrokeDashes: number
/** The default distance into the dash pattern at which the pattern should be started. */
defaultStrokeDashOffset: number
/** Default type of line capping. */
defaultStrokeCap: StrokeCap
/** Default type of joints. */
defaultStrokeJoin: StrokeJoin
/** Specifies whether a join is mitered (pointed) or beveled (squared-off) by default. */
defaultStrokeMiterLimit: number
/** The active data set. */
activeDataSet: DataSet
/** The locked variables. */
variablesLocked: boolean
/** The XMP packet string associated with the document. */
XMPString: string
/** The document raster effects settings. */
rasterEffectSettings: RasterEffectOptions
/** The name of the color profile of the document. */
readonly colorProfileName: string
/** All artboards in the document. */
readonly artboards: Artboards
/** The compound path artwork in this collection. */
readonly compoundPathItems: CompoundPathItems
/** The layers in this document. */
readonly layers: Layers
/** All the artwork in this document. */
readonly pageItems: PageItems
/** The path artwork in this document. */
readonly pathItems: PathItems
/** The tags in this document. */
readonly tags: Tags
/** The views in this document. */
readonly views: Views
/** The raster art items in this document. */
readonly rasterItems: RasterItems
/** The placed art items in this document. */
readonly placedItems: PlacedItems
/** The embedded art items in this layer. */
readonly embeddedItems: EmbeddedItems
/** The mesh art items in this document. */
readonly meshItems: MeshItems
/** The plugin art items in this document. */
readonly pluginItems: PluginItems
/** The graph art items in this document. */
readonly graphItems: GraphItems
/** The non-native art items in this document. */
readonly nonNativeItems: NonNativeItems
/** The group items in this document. */
readonly groupItems: GroupItems
/** The text frame items in this document. */
readonly textFrames: TextFrameItems
/** The story items in this document. */
readonly stories: Stories
/** The list of character styles in this document. */
readonly characterStyles: CharacterStyles
/** The list of paragraph styles in this document. */
readonly paragraphStyles: ParagraphStyles
/** The Kinsoku set. */
readonly kinsokuSet: string
/** The Mojikumi set. */
readonly mojikumiSet: string
/** The swatches in this document. */
readonly swatches: Swatches
/** The Swatch Groups in this document. */
readonly swatchGroups: SwatchGroups
/** The gradients available in this document. */
readonly gradients: Gradients
/** The patterns available in this document. */
readonly patterns: Patterns
/** The custom spot colors available in this document. */
readonly spots: Spots
/** The symbols defined in this document. */
readonly symbols: Symbols
/** The symbol items in this document. */
readonly symbolItems: SymbolItems
/** The brushes defined in this document. */
readonly brushes: Brushes
/** The graphic styles defined in this document. */
readonly graphicStyles: ArtStyles
/** The variables defined in this document. */
readonly variables: Variables
/** The list of inks in this document. */
readonly inkList: Ink
/** The data sets defined in this document. */
readonly dataSets: DataSets
/** The text frame items in this story. */
readonly legacyTextItems: LegacyTextItems/**
 * Close the specified document(s)
* @param saving - Specifies whether changes should be saved before closing.
*/
close(saving?: SaveOptions): void
/**
 * Process a gesture based on input points.
* @param gesturePointsFile - File Path containing points constituting the gesture.
*/
processGesture(gesturePointsFile: string): void
/**
 * Save the document.
*/
save(): void
/**
 * Save the document with specific save options.
* @param saveIn - The file to save the document in.
* @param options - Options for the file type specified.
*/
saveAs(saveIn: File, options?: any): void
/**
 * Print the document.
* @param options - Print options.
*/
print(options?: PrintOptions): void
/**
 * Export the specified document(s)
* @param exportFile - The file to export the document to.
* @param exportFormat - The file type to export the document as.
* @param options - Options for the file type specified.
*/
exportFile(exportFile: File, exportFormat: ExportType, options?: any): void
/**
 * Export the selection as PNG file.
* @param exportFile - The file to export the selection to.
* @param options - Options for the PNG24 export.
*/
exportSelectionAsPNG(exportFile: File, options?: any): void
/**
 * Export the selection as Ai file.
* @param exportFile - The file to export the selection to.
*/
exportSelectionAsAi(exportFile: File): void
/**
 * Import the file into current Ai document.
* @param importFile - The file to import in the current document.
* @param isLinked - Is AssetLiveLinked.
* @param libraryName - For Internal Use.
* @param itemName - For Internal Use.
* @param elementRef - For Internal Use.
* @param modifiedTime - For Internal Use.
* @param creationTime - For Internal Use.
* @param adobeStockId - For Internal Use.
* @param adobeStockLicense - For Internal Use.
*/
importFile(importFile: File, isLinked: boolean, libraryName?: string, itemName?: string, elementRef?: string, modifiedTime?: number, creationTime?: number, adobeStockId?: string, adobeStockLicense?: string): void
/**
 * Activate the first window associated with the document.
*/
activate(): void
/**
 * Import a library containing datasets, variables and their associated dynamic data. Importing variables will overwrite existing variables and datasets.
* @param fileSpec - File spec to import from.
*/
importVariables(fileSpec: File): void
/**
 * Save datasets into an XML library. The datasets contain variables and their associated dynamic data.
* @param file - File spec to export to.
*/
exportVariables(file: File): void
/**
 * Load the character styles from the Illustrator file.
* @param fileSpec - File spec to import from.
*/
importCharacterStyles(fileSpec: File): void
/**
 * Load the paragraph styles from the Illustrator file.
* @param fileSpec - File spec to import from.
*/
importParagraphStyles(fileSpec: File): void
/**
 * Apply the named print preset from the file to the current print setting.
* @param printPreset - The name of a print preset to import.
* @param fileSpec - File to import from.
*/
importPrintPreset(printPreset: string, fileSpec: File): void
/**
 * Export the current print setting to the preset file.
* @param file - File to export to.
*/
exportPrintPreset(file: File): void
/**
 * Load all PDF presets from a file.
* @param fileSpec - File to import from.
* @param replacingPreset - Should existing editable presets be replaced?
*/
importPDFPreset(fileSpec: File, replacingPreset?: boolean): void
/**
 * Save all PDF presets to a file.
* @param file - File to export to.
*/
exportPDFPreset(file: File): void
/**
 * Loads mentioned perspective grid preset, if preset name is specified, else loads all(if no preset name is specified) presets, from the specified file.
* @param fileSpec - File to import from.
* @param perspectivePreset - Name of perspective grid preset.
*/
importPerspectiveGridPreset(fileSpec: File, perspectivePreset?: string): void
/**
 * Saves all perspective grid presets to a file.
* @param file - File to export to.
*/
exportPerspectiveGridPreset(file: File): void
/**
 * Capture the artwork content inside the clip bound as raster image, and write out the captured image data into the target image file.
* @param imageFile - The file to which the captured image should be written.
* @param clipBounds - The rectangular region of the artwork for image capture. If the parameter is omitted, the entire artwork bound is captured.
* @param options - Describes the image capture options.
*/
imageCapture(imageFile: File, clipBounds?: Rect, options?: ImageCaptureOptions): void
/**
 * Capture the current document window to the target TIFF image file.
* @param imageFile - The TIFF file to which the captured image should be written.
* @param windowSize - The size to make the window before capture.
*/
windowCapture(imageFile: File, windowSize: Point): void
/**
 * Rasterize the source art(s) within the specified clip bounds. The source art(s) are disposed as a result of the rasterization.
* @param sourceArt - The page item(s) to be rasterized.
* @param clipBounds - The rectangular region of the artwork for the rasterization. If the parameter is omitted, the bounds of the source art(s) is used instead.
* @param options - Describes the rasterization options.
*/
rasterize(sourceArt: any, clipBounds?: Rect, options?: RasterizeOptions): PageItem
/**
 * Rearrange Artboards in the document.
* @param artboardLayout - Layout of artboards for rearrangement.
* @param artboardRowsOrCols - Number of rows (for rows layout) OR column(for column layouts)of artboards.Range is 1 to (docNumArtboards - 1) or 1 for single row or column layouts.
* @param artboardSpacing - Spacing between artboards.
* @param artboardMoveArtwork - Whether to move artwork with artboards.
*/
rearrangeArtboards(artboardLayout?: DocumentArtboardLayout, artboardRowsOrCols?: Int32, artboardSpacing?: number, artboardMoveArtwork?: boolean): boolean
/**
 * Select art objects in active artboard.
*/
selectObjectsOnActiveArtboard(): boolean
/**
 * Change the artboard to selected art bounds.
* @param index - The index of the artboard to update.
*/
fitArtboardToSelectedArt(index?: Int32): boolean
/**
 * Converts the coordinate system of a single point from one coordinate system to another.
* @param coordinate - The Coordinate to convert.
* @param source - The source coordinate system.
* @param destination - The destination coordinate system.
*/
convertCoordinate(coordinate: Point, source: CoordinateSystem, destination: CoordinateSystem): Point
/**
 * Selects a predefined preset to define grid for the current document.
* @param perspectivePreset - Name of perspective grid preset.
*/
selectPerspectivePreset(perspectivePreset: string): boolean
/**
 * Shows the current active perspective grid for the document, if no active perspective grid then shows the default perspective grid for the document.
*/
showPerspectiveGrid(): boolean
/**
 * Hides the current active perspective grid for the document, if there is visible perspective grid.
*/
hidePerspectiveGrid(): boolean
/**
 * Gets the active plane of the active perspective grid of the document.
*/
getPerspectiveActivePlane(): PerspectiveGridPlaneType
/**
 * Sets the active perspective plane for the active grid of the document.
* @param perspectiveGridPlane - Type of perspective grid plane.
*/
setPerspectiveActivePlane(perspectiveGridPlane: PerspectiveGridPlaneType): boolean
}
declare class Layer {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Is the layer visible? */
visible: boolean
/** Is the layer editable? */
locked: boolean
/** Is the layer printable? */
printable: boolean
/** Is any artwork in this layer selected? Setting this property to false deselects all artwork in the layer. */
hasSelectedArtwork: boolean
/** Is the layer rendered in preview mode? */
preview: boolean
/** Is rendered as dimmed in this layer? */
dimPlacedImages: boolean
/** Color used when outlining artwork in this layer. */
color: RGBColor
/** The layer's name. */
name: string
/** The layer's opacity (between 0.0 and 100.0) */
opacity: number
/** The drawing order of the layer. */
readonly zOrderPosition: Int32
/** The absolute drawing order of the layer. */
readonly absoluteZOrderPosition: Int32
/** Is the layer sliced (default: false) */
sliced: boolean
/** The mode used when compositing an object. */
blendingMode: BlendModes
/** Is the artwork isolated. */
isIsolated: boolean
/** Is the artwork used to create a knockout. */
artworkKnockout: KnockoutState
/** The compound path artwork in this layer. */
readonly compoundPathItems: CompoundPathItems
/** All the artwork in this layer. */
readonly pageItems: PageItems
/** The path artwork in this layer. */
readonly pathItems: PathItems
/** The raster art items in this layer. */
readonly rasterItems: RasterItems
/** The placed art items in this layer. */
readonly placedItems: PlacedItems
/** The mesh art items in this layer. */
readonly meshItems: MeshItems
/** The plugin art items in this layer. */
readonly pluginItems: PluginItems
/** The graph art items in this layer. */
readonly graphItems: GraphItems
/** The non-native art items in this layer. */
readonly nonNativeItems: NonNativeItems
/** The group items in this layer. */
readonly groupItems: GroupItems
/** The text frame items in this layer. */
readonly textFrames: TextFrameItems
/** Nested layers. */
readonly layers: Layers
/** The symbol items in this layer. */
readonly symbolItems: SymbolItems
/** The text frame items in this story. */
readonly legacyTextItems: LegacyTextItems/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): Layer
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Arranges the layer relative to other layers.
* @param zOrderCmd - How to arrange the layer.
*/
zOrder(zOrderCmd: ZOrderMethod): void
}
declare class View {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The bounding rectangle of this view. */
readonly bounds: Rect
/** The center point of this view. */
centerPoint: Point
/** The zoom factor of this view. */
zoom: number
/** The mode of display. */
screenMode: ScreenMode
}
declare class Gradient {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The gradient type. */
type: GradientType
/** The gradient's name. */
name: string
/** The stops in this gradient. */
readonly gradientStops: GradientStops/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class GradientStop {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Midpoint key value in percent. */
midPoint: number
/** Location of color in the blend (in percent) */
rampPoint: number
/** The color linked to this gradient stop. */
color: Color
/** The opacity (between 0.0 and 100.0) value for the gradient stop. */
opacity: number/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class Preferences {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Options to use when opening or placing a Photoshop file. */
readonly photoshopFileOptions: OpenOptionsPhotoshop
/** Options to use when opening or placing a PDF file. */
readonly PDFFileOptions: OpenOptionsPDF
/** Options to use when opening or placing a AutoCAD file. */
readonly AutoCADFileOptions: OpenOptionsAutoCAD/**
 * Retrieve the value of the application preference key as boolean.
* @param key - The preference key.
*/
getBooleanPreference(key: string): boolean
/**
 * Set the value of the application preference key as boolean.
* @param key - The preference key.
* @param value - The boolean value of the preference key.
*/
setBooleanPreference(key: string, value: boolean): void
/**
 * Retrieve the value of the application preference key as integer.
* @param key - The preference key.
*/
getIntegerPreference(key: string): Int32
/**
 * Set the value of the application preference key as integer.
* @param key - The preference key.
* @param value - The boolean value of the preference key.
*/
setIntegerPreference(key: string, value: Int32): void
/**
 * Retrieve the value of the application preference key as real number.
* @param key - The preference key.
*/
getRealPreference(key: string): number
/**
 * Set the value of the application preference key as real number.
* @param key - The preference key.
* @param value - The real value of the preference key.
*/
setRealPreference(key: string, value: number): void
/**
 * Retrieve the value of the application preference key as string type.
* @param key - The preference key.
*/
getStringPreference(key: string): string
/**
 * Set the value of the application preference key as string type.
* @param key - The preference key.
* @param value - The string value of the preference key.
*/
setStringPreference(key: string, value: string): void
/**
 * Delete the application preference key.
* @param key - The preference key.
*/
removePreference(key: string): void
}
declare class Spot {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The custom color's name. */
name: string
color: Color
/** Type of the custom color. */
colorType: ColorModel
/** Kind of the spot color (i.e. RGB, CMYK or LAB), it is the name of color kind contained in spot. */
readonly spotKind: SpotColorKind/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Gets the internal color of a spot.
*/
getInternalColor(): number
}
declare class Variable {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The variable's type. */
kind: VariableKind
/** The name of this variable. */
name: string
/** All the artwork in this document. */
readonly pageItems: PageItems/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class DataSet {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The name of this dataset. */
name: string/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Displays the dynamic data that has been captured in the dataset.
*/
display(): void
/**
 * Re-apply the dynamic data of the active dataset to the artboard.
*/
update(): void
}
declare class Swatch {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The swatch's name. */
name: string
/** The color information of the swatch. */
color: Color/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class SwatchGroup {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Name of the swatch group. */
name: string/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Add a swatch to the group.
* @param swatch - The swatch to be added to the group.
*/
addSwatch(swatch: Swatch): void
/**
 * Get all swatches in the swatch group.
*/
getAllSwatches(): Swatch
/**
 * Add a spot swatch to the group.
* @param spot - The spot swatch to be added to the group.
*/
addSpot(spot: Spot): void
}
declare class Pattern {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The pattern's name. */
name: string/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class Symbol {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The symbol's name. */
name: string/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): Symbol
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class Brush {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The brush's name. */
name: string/**
 * Apply a brush or art style to object(s)
* @param artItem - The page item(s) to apply to.
*/
applyTo(artItem: any): void
}
declare class ArtStyle {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The art style's name. */
name: string/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Apply a brush or art style to object(s)
* @param artItem - The page item(s) to apply to.
*/
applyTo(artItem: any): void
/**
 * Merge an art style to object(s) current style(s)
* @param artItem - The page item(s) to merge to.
*/
mergeTo(artItem: any): void
}
declare class TextFont {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The font's full name. */
readonly name: string
/** The font's family name. */
readonly family: string
/** The font's style name. */
readonly style: string
}
declare class PageItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The value of the Adobe URL tag assigned to this artwork item. */
URL: string
/** The note assigned to this artwork item. */
note: string
/** The layer to which this artwork belongs. */
readonly layer: Layer
/** Is this artwork item locked? */
locked: boolean
/** Is this artwork item hidden? */
hidden: boolean
/** Is this artwork item selected? */
selected: boolean
/** The position of the top left corner of the art item. */
position: Point
/** The width of the art item. */
width: number
/** The height of the art item. */
height: number
/** The bounds of the artwork excluding stroke width. */
readonly geometricBounds: Rect
/** The visible bounds of the artwork including stroke width. */
readonly visibleBounds: Rect
/** The bounds of the artwork including stroke width and controls. */
readonly controlBounds: Rect
/** The item's name. */
name: string
/** The mode used when compositing an object. */
blendingMode: BlendModes
/** The object's opacity (between 0.0 and 100.0) */
opacity: number
/** Is the artwork isolated. */
isIsolated: boolean
/** Is the artwork used to create a knockout. */
artworkKnockout: KnockoutState
/** The drawing order of the art within it's group or layer. */
readonly zOrderPosition: Int32
/** The absolute drawing order of the layer. */
readonly absoluteZOrderPosition: Int32
/** Can the art item be modified. */
readonly editable: boolean
/** Is the art item sliced (default: false) */
sliced: boolean
/** The top position of the art item. */
top: number
/** The left position of the art item. */
left: number
/** The visibility variable bound to this page item. */
visibilityVariable: any
/** The collection of tags associated with this page item. */
readonly tags: Tags
/** Is this artwork item aligned to Pixel Grid? */
pixelAligned: boolean
/** Wrap text frame objects around this object (text frame must be above the object) */
wrapped: boolean
/** Use this offset when wrapping text around this object. */
wrapOffset: number
/** Should the text frame object be wrapped inside this object? */
wrapInside: boolean/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): PageItem
/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): PageItem
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Reposition art object(s)
* @param deltaX - Horizontal transformation.
* @param deltaY - Vertical transformation.
* @param transformObjects - Are art object positions and orientations affected?
* @param transformFillPatterns - Are the fill patterns assigned to paths to be transformed?
* @param transformFillGradients - Are the fill gradients assigned to paths to be transformed?
* @param transformStrokePattern - Are the stroke patterns assigned to paths to be transformed?
*/
translate(deltaX?: number, deltaY?: number, transformObjects?: boolean, transformFillPatterns?: boolean, transformFillGradients?: boolean, transformStrokePattern?: boolean): void
/**
 * Scale art object(s)
* @param scaleX - Horizontal scaling factor expressed as a percentage (100 = 100%)
* @param scaleY - Vertical scaling factor expressed as a percentage (100 = 100%)
* @param changePositions - Are art object positions and orientations effected?
* @param changeFillPatterns - Are the fill patterns assigned to paths to be transformed?
* @param changeFillGradients - Are the fill gradients assigned to paths to be transformed?
* @param changeStrokePattern - Are the stroke patterns assigned to paths to be transformed?
* @param changeLineWidths - The amount line widths are to be scaled (expressed as a percentage)
* @param scaleAbout - The point on the art item's bounding box to which the scale is applied.
*/
resize(scaleX: number, scaleY: number, changePositions?: boolean, changeFillPatterns?: boolean, changeFillGradients?: boolean, changeStrokePattern?: boolean, changeLineWidths?: number, scaleAbout?: Transformation): void
/**
 * Rotate art object(s)
* @param angle - Angle of rotation (in degrees). Rotation is performed counter-clock wise.
* @param changePositions - Are art object positions and orientations effected?
* @param changeFillPatterns - Are the fill patterns assigned to paths to be transformed?
* @param changeFillGradients - Are the fill gradients assigned to paths to be transformed?
* @param changeStrokePattern - Are the stroke patterns assigned to paths to be transformed?
* @param rotateAbout - The point on the art item's bounding box to which the rotation is applied.
*/
rotate(angle: number, changePositions?: boolean, changeFillPatterns?: boolean, changeFillGradients?: boolean, changeStrokePattern?: boolean, rotateAbout?: Transformation): void
/**
 * Transform art object(s) using a transformation matrix.
* @param transformationMatrix - The transformation matrix to be applied to the objects.
* @param changePositions - Are art object positions and orientations effected?
* @param changeFillPatterns - Are the fill patterns assigned to paths to be transformed?
* @param changeFillGradients - Are the fill gradients assigned to paths to be transformed?
* @param changeStrokePattern - Are the stroke patterns assigned to paths to be transformed?
* @param changeLineWidths - The amount line widths are to be scaled (expressed as a percentage)
* @param transformAbout - The point on the art item's bounding box to which scale and rotation operations apply.
*/
transform(transformationMatrix: Matrix, changePositions?: boolean, changeFillPatterns?: boolean, changeFillGradients?: boolean, changeStrokePattern?: boolean, changeLineWidths?: number, transformAbout?: Transformation): void
/**
 * Place art object(s)in perspective grid at spedified perspective plane and coordinate.
* @param positionX - Position towards X direction of specified or active perspective grid plane.
* @param positionY - Position towards Y direction of specified or active perspective grid plane.
* @param perspectiveGridPlane - Type of perspective grid plane.
*/
bringInPerspective(positionX: number, positionY: number, perspectiveGridPlane: PerspectiveGridPlaneType): void
/**
 * Arranges the art relative to other art in the group or layer.
* @param zOrderCmd - How to arrange the art.
*/
zOrder(zOrderCmd: ZOrderMethod): void
/**
 * Apply effect to selected artItem.
* @param liveEffectXML - undefined
*/
applyEffect(liveEffectXML: string): void
/**
 * Sends the script message to the required plugin.
* @param pluginName - Plugin to which message needs to be sent.
* @param messageSelector - Functionality that is to be executed.
* @param inputString - Pass any data encoded in a string.
*/
sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string
}
declare class CompoundPathItem extends PageItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The path artwork in this compound path. */
readonly pathItems: PathItems/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): CompoundPathItem
/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): CompoundPathItem
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class Tag {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The tag's name. */
name: string
/** The data stored in this tag. */
value: string/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class PathItem extends PageItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Is this path closed? */
closed: boolean
/** The area of this path in square points. */
readonly area: number
/** The length of this path in points. */
readonly length: number
/** Is this path a guide object? */
guides: boolean
/** Should the path be filled? */
filled: boolean
/** Fill color. */
fillColor: Color
/** Will art beneath a filled object be overprinted? */
fillOverprint: boolean
/** Should the path be stroked? */
stroked: boolean
/** Stroke color. */
strokeColor: Color
/** Will art beneath a stroked object be overprinted? */
strokeOverprint: boolean
/** Width of stroke. */
strokeWidth: number
/** Dash lengths (set to {} for a solid line) */
strokeDashes: number
/** The default distance into the dash pattern at which the pattern should be started. */
strokeDashOffset: number
/** Type of line capping. */
strokeCap: StrokeCap
/** Type of joints. */
strokeJoin: StrokeJoin
/** Whether a join is mitered (pointed) or beveled (squared-off) */
strokeMiterLimit: number
/** Should this be used as a clipping path? */
clipping: boolean
/** Should the even-odd rule be used to determine insideness? */
evenodd: boolean
/** The resolution of the path. */
resolution: number
/** All the selected points in the path. */
readonly selectedPathPoints: ObjectArray
/** The polarity the path. */
polarity: PolarityValues
readonly pathPoints: PathPoints/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): PathItem
/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): PathItem
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Set the path using the provided array of path point (x, y) coordinate pairs.
* @param pathPoints - Array of (x, y) coordinate pairs for the path points.
*/
setEntirePath(pathPoints: any): void
}
declare class PathPoint {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The position (coordinates) of the anchor point. */
anchor: Point
/** Location of the left direction point (in position) */
leftDirection: Point
/** Location of the right direction point (out position) */
rightDirection: Point
/** The type of point: smooth/corner. */
pointType: PointType
/** The path point selected state. */
selected: PathPointSelection/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class RasterItem extends PageItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The file containing the raster artwork. */
readonly file: File
/** The transformation matrix of the raster art object. */
matrix: Matrix
/** Dimensions of raster art object regardless of transformations. */
boundingBox: Rect
/** The color space of the raster image. */
readonly imageColorSpace: ImageColorSpace
/** Is the raster art embedded within the illustration? */
embedded: boolean
/** Is the raster art overprinting? */
overprint: boolean
/** Is the raster art a colorized grayscale image? */
readonly colorizedGrayscale: boolean
/** Is the raster art transparent? */
readonly transparent: boolean
/** The number of image channels. */
readonly channels: Int32
/** The number of bits per channel. */
readonly bitsPerChannel: Int32
/** List of colorant names. */
readonly colorants: string
/** Status of the linked image. */
readonly status: RasterLinkState
/** The content variable bound to this raster art object. */
contentVariable: any/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): RasterItem
/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): RasterItem
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Colorize the RasterItem with a CMYK or RGB Color.
* @param rasterColor - The color to use for coloring the TIFF image.
*/
colorize(rasterColor: Color): void
/**
 * Trace this raster object using default options. Reorders this raster to the source art.
*/
trace(): PluginItem
}
declare class PlacedItem extends PageItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The file containing the placed artwork. */
file: File
/** The transformation matrix of the placed art object. */
matrix: Matrix
/** Dimensions of placed art object, regardless of transformations. */
readonly boundingBox: Rect
/** The content variable bound to this placed art object. */
contentVariable: any/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): PlacedItem
/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): PlacedItem
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Embed the placed art within the illustration.
*/
embed(): void
/**
 * Trace this raster object using default options. Reorders this placed to the source art.
*/
trace(): PluginItem
/**
 * Relink the placed art with supplied art from file.
* @param fileSpec - File spec to relink from.
*/
relink(fileSpec: File): void
}
declare class EmbedItem extends PageItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The file containing the placed artwork. */
file: File/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): EmbedItem
/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): EmbedItem
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class GraphItem extends PageItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The content variable bound to this graph. */
contentVariable: any/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): GraphItem
/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): GraphItem
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class NonNativeItem extends PageItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): NonNativeItem
/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): NonNativeItem
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class MeshItem extends PageItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): MeshItem
/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): MeshItem
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class PluginItem extends PageItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Is the plugin group a tracing? */
readonly isTracing: boolean
/** The tracing object associated with this plugin item. */
readonly tracing: TracingObject/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): PluginItem
/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): PluginItem
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class GroupItem extends PageItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Are the group elements clipped to the clipping path? */
clipped: boolean
/** The group items in this group. */
readonly groupItems: GroupItems
/** All the artwork in this group. */
readonly pageItems: PageItems
/** The compound path artwork in this group. */
readonly compoundPathItems: CompoundPathItems
/** The path artwork in this group. */
readonly pathItems: PathItems
/** The raster art items in this group. */
readonly rasterItems: RasterItems
/** The placed art items in this group. */
readonly placedItems: PlacedItems
/** The mesh art items in this group. */
readonly meshItems: MeshItems
/** The plugin art items in this group. */
readonly pluginItems: PluginItems
/** The graph art items in this group. */
readonly graphItems: GraphItems
/** The non-native art items in this group. */
readonly nonNativeItems: NonNativeItems
/** The text frame items in this group. */
readonly textFrames: TextFrameItems
/** The symbol items in this group. */
readonly symbolItems: SymbolItems
/** The text frame items in this story. */
readonly legacyTextItems: LegacyTextItems/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): GroupItem
/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): GroupItem
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class SymbolItem extends PageItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The symbol that was used to create this symbol item. */
symbol: Symbol/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): SymbolItem
/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): SymbolItem
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Break link to the symbol.
*/
breakLink(): void
}
declare class TextPath {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The position of the top left corner of the text path. */
position: Point
/** The width of the text path. */
width: number
/** The height of the text path. */
height: number
/** The mode used when compositing an object. */
blendingMode: BlendModes
/** The object's opacity (between 0.0 and 100.0) */
opacity: number
/** Can the text path be modified. */
readonly editable: boolean
/** The top position of the text path. */
top: number
/** The left position of the text path. */
left: number
/** Is this path closed? */
closed: boolean
/** The area of this path in square points. */
readonly area: number
/** Is this path a guide object? */
guides: boolean
/** Should the path be filled? */
filled: boolean
/** Fill color. */
fillColor: Color
/** Will art beneath a filled object be overprinted? */
fillOverprint: boolean
/** Should the path be stroked? */
stroked: boolean
/** Stroke color. */
strokeColor: Color
/** Will art beneath a stroked object be overprinted? */
strokeOverprint: boolean
/** Width of stroke. */
strokeWidth: number
/** Dash lengths (set to {} for a solid line) */
strokeDashes: number
/** The default distance into the dash pattern at which the pattern should be started. */
strokeDashOffset: number
/** Type of line capping. */
strokeCap: StrokeCap
/** Type of joints. */
strokeJoin: StrokeJoin
/** Whether a join is mitered (pointed) or beveled (squared-off) */
strokeMiterLimit: number
/** Should this be used as a clipping path? */
clipping: boolean
/** Should the even-odd rule be used to determine insideness? */
evenodd: boolean
/** The resolution of the path. */
resolution: number
/** Note assigned to the path. */
note: string
/** All the selected points in the path. */
readonly selectedPathPoints: ObjectArray
/** The polarity the path. */
polarity: PolarityValues
readonly pathPoints: PathPoints/**
 * Set the path using the provided array of anchor points.
* @param pathPoints - Array of anchor values for the path points.
*/
setEntirePath(pathPoints: any): void
}
declare class Story {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The text range of the story. */
readonly textRange: TextRange
/** The text frame items in this story. */
readonly textFrames: TextFrameItems
/** The selected text (ranges) in the story. */
readonly textSelection: TextRange
/** All the characters in this text range. */
readonly characters: Characters
/** All the words in this text range. */
readonly words: Words
/** All the lines in this text range. */
readonly lines: Lines
/** All the paragraphs in this text range. */
readonly paragraphs: Paragraphs
/** All the text in this text range. */
readonly textRanges: TextRanges
/** All the insertion points in this text range. */
readonly insertionPoints: InsertionPoints
/** The number of characters in the story. */
readonly length: Int32
}
declare class TextFrameItem extends PageItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The story of the text frame. */
readonly story: Story
/** The text contents of this text frame. */
contents: string
/** The text range of the text frame. */
readonly textRange: TextRange
/** The selected text (ranges) in the story. */
readonly textSelection: TextRange
/** The row count in the text frame (area text only) */
rowCount: Int32
/** The column count in the text frame (area text only) */
columnCount: Int32
/** The row gutter in the text frame (area text only) */
rowGutter: number
/** The column gutter in the text frame (area text only) */
columnGutter: number
/** Flow text between linked frame horizontally first. (area text only) */
flowLinksHorizontally: boolean
/** The amount of spacing (path text only) */
spacing: number
/** Is the optical alignment active? */
opticalAlignment: boolean
/** The type of a text frame item. */
readonly kind: TextType
/** The content variable bound to this text art item. */
contentVariable: any
/** The orientation of the text in the frame. */
orientation: TextOrientation
/** The path for the text frame (area and path text) */
readonly textPath: TextPath
/** The position of the anchor point (start of base line for point text) */
anchor: Point
/** The start position of text along a path, as a value relative to the path's segments (path text only) */
startTValue: number
/** The end position of text along a path, as a value relative to the path's segments (path text only) */
endTValue: number
/** The linked text frame preceding this one. */
previousFrame: TextFrameItem
/** The linked text frame following this one. */
nextFrame: TextFrameItem
/** The transformation matrix of the text frame object. */
readonly matrix: Matrix
/** The type of a text anti-aliasing on text frame item. */
antialias: TextAntialias
/** The first baseline offset type for text frame item (for Area Text only) */
firstBaseline: FirstBaselineType
/** The first baseline offset minimum value for text frame item (for Area Text only) */
firstBaselineMin: number
/** All the characters in this text range. */
readonly characters: Characters
/** All the words in this text range. */
readonly words: Words
/** All the lines in this text range. */
readonly lines: Lines
/** All the paragraphs in this text range. */
readonly paragraphs: Paragraphs
/** All the text in this text range. */
readonly textRanges: TextRanges
/** All the insertion points in this text range. */
readonly insertionPoints: InsertionPoints/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): TextFrameItem
/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): TextFrameItem
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Convert text item to path items.
*/
createOutline(): GroupItem
/**
 * Convert Area Type Text Object To Point Type Object.
*/
convertAreaObjectToPointObject(): TextFrameItem
/**
 * Convert Point Type Text Object To Area Type Object.
*/
convertPointObjectToAreaObject(): TextFrameItem
/**
 * Generates the thumbnail with the properties of first character in the text frame.
* @param textString - The text string which is to be used in the thumbnail generation.
* @param fontSize - The size in points of the text string.
* @param textColor - The color of the text string.
* @param destinationPath - The location at which the thumbnail is to be stored.
*/
generateThumbnailWithTextFrameProperties(textString: string, fontSize: number, textColor: Color, destinationPath: File): void
}
declare class LegacyTextItem extends PageItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Has the legacy text item been updated to a native text frame item? */
readonly converted: boolean/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): LegacyTextItem
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Create a native text frame from a legacy text item. The original legacy text item is deleted.
*/
convertToNative(): GroupItem
}
declare class TextRange {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Offset of the first character of the range from the beginning of the story, in characters. */
characterOffset: Int32
/** Length of text range. */
length: Int32
/** The text string. */
contents: string
/** Controls the spacing between two characters (in milli-ems) */
kerning: Int32
/** The story of the text range. */
readonly story: Story
/** The selected text (ranges) in the text range. */
readonly textSelection: TextRange
/** All the characters in this text range. */
readonly characters: Characters
/** All the words in this text range. */
readonly words: Words
/** All the lines in this text range. */
readonly lines: Lines
/** All the paragraphs in this text range. */
readonly paragraphs: Paragraphs
/** All the text in this text range. */
readonly textRanges: TextRanges
/** All the insertion points in this text range. */
readonly insertionPoints: InsertionPoints
/** List of referenced character styles in the text range. */
readonly characterStyles: CharacterStyles
/** List of referenced paragraph styles in the text range. */
readonly paragraphStyles: ParagraphStyles
/** The character properties for the text range. */
readonly characterAttributes: CharacterAttributes
/** The paragraph properties for the text range. */
readonly paragraphAttributes: ParagraphAttributes/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): TextRange
/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): TextRange
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Select the text range.
* @param addToDocument - Whether to add the text range to the document text selection.
*/
select(addToDocument?: boolean): void
/**
 * Deselect the text range.
*/
deSelect(): void
/**
 * Change the capitalization of text.
* @param type - The type of case.
*/
changeCaseTo(type: CaseChangeType): void
}
declare class InsertionPoint {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The story of the text range. */
readonly story: Story
/** All the characters in this text range. */
readonly characters: Characters
/** All the words in this text range. */
readonly words: Words
/** All the lines in this text range. */
readonly lines: Lines
/** All the paragraphs in this text range. */
readonly paragraphs: Paragraphs
/** All the text in this text range. */
readonly textRanges: TextRanges
}
declare class CharacterStyle {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The character style's name. */
name: string
/** The character properties for the text range. */
readonly characterAttributes: CharacterAttributes/**
 * Adds an element.
*/
add(): CharacterStyle
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Apply the character style to text object(s)
* @param textItem - The text object(s) to apply the style to.
* @param clearingOverrides - Whether to clear any text attributes before apply the style.
*/
applyTo(textItem: any, clearingOverrides?: boolean): void
/**
 * Remove all the attributes from this character style.
*/
clear(): void
}
declare class ParagraphStyle {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The paragraph style's name. */
name: string
/** The character properties for the text range. */
readonly characterAttributes: CharacterAttributes
/** The paragraph properties for the text range. */
readonly paragraphAttributes: ParagraphAttributes/**
 * Adds an element.
*/
add(): ParagraphStyle
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Apply the paragraph style to text object(s)
* @param textItem - The text object(s) to apply the style to.
* @param clearingOverrides - Whether to clear any text attributes before apply the style.
*/
applyTo(textItem: any, clearingOverrides?: boolean): void
/**
 * Remove all the attributes from this paragraph style.
*/
clear(): void
}
declare class CharacterAttributes {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The text font. */
textFont: TextFont
/** Font size in points. */
size: number
/** Character horizontal scaling factor expressed as a percentage (100 = 100%) */
horizontalScale: number
/** Character vertical scaling factor expressed as a percentage (100 = 100%) */
verticalScale: number
/** Whether to use automatic leading. */
autoLeading: boolean
/** The amount of space between two lines of text (in points) */
leading: number
/** The tracking or range kerning amount in thousands of an em. */
tracking: Int32
/** The amount of shift (in points) of the text baseline. */
baselineShift: number
/** The character rotation angle (in degrees) */
rotation: number
/** The automatic kerning method to use. */
kerningMethod: AutoKernType
/** The case of text. */
capitalization: FontCapsOption
/** The baseline position of text. */
baselinePosition: FontBaselineOption
/** The OpenType baseline position. */
openTypePosition: FontOpenTypePositionOption
/** Whether the ligature should be used. */
ligature: boolean
/** Whether the discretionary ligature should be used. */
discretionaryLigature: boolean
/** Whether the contextual ligature should be used. */
contextualLigature: boolean
/** Whether the OpenType fractions should be used. */
fractions: boolean
/** Whether the OpenType ordinals should be used. */
ordinals: boolean
/** Whether the OpenType swash should be used. */
swash: boolean
/** Whether the OpenType titling alternates should be used. */
titling: boolean
/** Whether the OpenType connection forms should be used. */
connectionForms: boolean
/** Whether the OpenType stylistic alternates should be used. */
stylisticAlternates: boolean
/** Whether the OpenType ornaments should be used. */
ornaments: boolean
/** Which figure style to use in OpenType font. */
figureStyle: FigureStyleType
/** Does the Japanese OpenType support proportional font? */
proportionalMetrics: boolean
/** Does the Japanese OpenType support italics? */
italics: boolean
/** The Japanese text baseline direction. */
baselineDirection: BaselineDirectionType
/** The language of text. */
language: LanguageType
/** The alternate glyphs form. */
alternateGlyphs: AlternateGlyphsForm
/** The percentage of space reduction around a Japanese character (100 = 100%) */
Tsume: number
/** The character alignment type. */
alignment: StyleRunAlignmentType
/** Whether WariChu is enabled. */
wariChuEnabled: boolean
/** The number of Wari-Chu (multiple text lines fit into a space meant for one) lines. */
wariChuLines: Int32
/** The Wari-Chu line gap. */
wariChuLineGap: Int32
/** The Wari-Chu scale. */
wariChuScale: number
wariChuCharactersBeforeBreak: Int32
wariChuCharactersAfterBreak: Int32
wariChuJustification: WariChuJustificationType
/** The Tate-Chu-Yoko vertical adjustment in points. */
tateChuYokoVertical: Int32
/** The Tate-Chu-Yoko horizontal adjustment in points. */
tateChuYokoHorizontal: Int32
/** The em amount of left aki. */
akiLeft: number
/** The em amount of right aki amount. */
akiRight: number
/** Whether line breaks are allowed. */
noBreak: boolean
/** The color of the text fill. */
fillColor: Color
/** The color of the text stroke. */
strokeColor: Color
/** Whether to overprint the stroke of the text. */
overprintStroke: boolean
/** Whether to overprint the fill of the text. */
overprintFill: boolean
/** Line width of stroke. */
strokeWeight: number
/** Whether to underline the text. */
underline: boolean
/** Whether to draw a strike through line over the text. */
strikeThrough: boolean
}
declare class ParagraphAttributes {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Paragraph justification. */
justification: Justification
/** First line left indent expressed in points. */
firstLineIndent: number
/** Left indent of margin expressed in points. */
leftIndent: number
/** Right indent of margin expressed in points. */
rightIndent: number
/** Spacing before paragraph in points. */
spaceBefore: number
/** Spacing after paragraph in points. */
spaceAfter: number
/** Is hyphenation enabled for the paragraph? */
hyphenation: boolean
/** Minimum hyphenated word size. */
minimumHyphenatedWordSize: Int32
/** Minimum number of characters before a hyphen. */
minimumBeforeHyphen: Int32
/** Minimum number of characters after a hyphen. */
minimumAfterHyphen: Int32
/** Maximum number of consecutive hypenated lines. */
maximumConsecutiveHyphens: Int32
/** Size of the hyphenation zone. */
hyphenationZone: number
/** Is hyphenation enabled for the capitalized words? */
hyphenateCapitalizedWords: boolean
/** Hyphenation preference scale for better spacing (0) or fewer hyphens (1) */
hyphenationPreference: number
/** Desired word spacing expressed as a percentage. */
desiredWordSpacing: number
/** Maximum word spacing expressed as a percentage. */
maximumWordSpacing: number
/** Minimum word spacing expressed as a percentage. */
minimumWordSpacing: number
/** Desired letter spacing expressed as a percentage. */
desiredLetterSpacing: number
/** Maximum letter spacing expressed as a percentage. */
maximumLetterSpacing: number
/** Minimum letter spacing expressed as a percentage. */
minimumLetterSpacing: number
/** Desired glyph scaling expressed as a percentage. */
desiredGlyphScaling: number
/** Maximum glyph scaling expressed as a percentage. */
maximumGlyphScaling: number
/** Minimum glyph scaling expressed as a percentage. */
minimumGlyphScaling: number
/** Single word justification. */
singleWordJustification: Justification
/** Auto leading amount (in percentage) */
autoLeadingAmount: number
/** Auto leading type. */
leadingType: AutoLeadingType
/** Tab stop settings. */
tabStops: TabStopInfo
/** Is Roman hanging punctuation enabled? */
romanHanging: boolean
/** Is BunriKinshi enabled? */
bunriKinshi: boolean
/** The Burasagari type. */
burasagariType: BurasagariTypeEnum
/** The preferred Kinsoku order. */
kinsokuOrder: KinsokuOrderEnum
/** Is KurikaeshiMojiShori enabled? */
kurikaeshiMojiShori: boolean
/** The Kinsoku Shori name. */
kinsoku: string
/** The Mojikumi name. */
mojikumi: string
/** Whether to enable every line composer (as opposed to single line composer)? */
everyLineComposer: boolean
}
declare class OpenOptionsPhotoshop {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Should layers be Preserve when the document is converted (default: true) */
preserveLayers: boolean
/** Should image maps be preserved when the document is converted (default: true) */
preserveImageMaps: boolean
/** Should slices be preserved when the document is converted (default: true) */
preserveSlices: boolean
/** Should hidden layers be preserved when the document is converted (default: false) */
preserveHiddenLayers: boolean
/** Should use the specified LayerComp. */
layerComp: string
}
declare class OpenOptionsPDF {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** What page should be used when opening a multipage document (default: 1) */
pageToOpen: Int32
/** What box should be used when placing a multipage document (default: PDF media box) */
pDFCropToBox: PDFBoxType
}
declare class OpenOptionsAutoCAD {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** How to scale the AutoCAD drawing on import (default: Fit Artboard) */
globalScaleOption: AutoCADGlobalScaleOption
/** Percentage scaling to apply globally on the AutoCAD drawing (default: 1.0) */
globalScalePercent: number
/** Ratio by which to scale while mapping the units (default: 1.0) */
unitScaleRatio: number
/** Units to which to map (default: Millimeters) */
unit: AutoCADUnit
/** Name of layout in the AutoCAD drawing to import. */
selectedLayoutName: string
/** To center the created artwork on the artboard (default: true) */
centerArtwork: boolean
/** To merge the layers of the artwork (default: false) */
mergeLayers: boolean
/** To scale lineweights by the same amount as rest of the drawing (default: false) */
scaleLineweights: boolean
}
declare class TracingOptions {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The name of the preset in use. Read-only. */
readonly preset: string
/** The visualization mode. */
viewMode: ViewType
/** The tracing mode: color, gray, black and white. */
tracingMode: TracingModeType
/** Color Type used for tracing, TracingLimitedColor or TracingFullColor . */
tracingColorTypeValue: TracingColorType
/** The color palette (Library) name used for tracing. Use 'Document Library' or any other imported library name. */
palette: string
/** The color group name used for tracing. Use 'All' or any color group name available in color Palette (library). */
colorGroup: string
/** Maximum number of colors allowed for tracing when TracingColorTypeValue is TracingLimitedColor. */
tracingColors: Int32
/** ColorFidelity when TracingColorTypeValue is TracingFullColor. */
colorFidelity: number
/** The threshold value for a black and white mode tracing. */
threshold: Int32
/** The gray levels for a grayscale mode tracing.. */
grayLevels: Int32
/** Path fidelity for tracing. */
pathFidelity: number
/** Corner fidelity for tracing. */
cornerFidelity: number
/** Specifies minimum area of pixels to be vectorized. */
noiseFidelity: number
/** Method for tracing, either abutting or adjoining paths. */
tracingMethod: TracingMethodType
/** Tracing with fills. Fills, Strokes or both must be on. */
fills: boolean
/** Tracing with strokes. Fills, Strokes or both must be on. */
strokes: boolean
/** Maximum stroke weight (stroke only). */
maxStrokeWeight: number
/** Controls whether to snap curve to lines. */
snapCurveToLines: boolean
/** Controls whether to ignore white fill color. Works only if TracingMethod is TracingMethodAbutting and mode is Black and white. */
ignoreWhite: boolean/**
 * Load options from preset.
* @param presetName - The name of the preset.
*/
loadFromPreset(presetName: string): boolean
/**
 * Store options to a preset kAiVectorizeSuite. Will overwrite an existing (unlocked) preset if names match.
* @param presetName - The name of the preset.
*/
storeToPreset(presetName: string): boolean
}
declare class TracingObject {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The source art used when creating a new tracing object. */
readonly sourceArt: PageItem
/** The options used when tracing the artwork. */
readonly tracingOptions: TracingOptions
/** The number of paths in the tracing result. */
readonly pathCount: Int32
/** The number of anchors in the tracing result. */
readonly anchorCount: Int32
/** The number of colors used in the tracing result. */
readonly usedColorCount: Int32/**
 * Release the source artwork for the tracing object. Deletes this tracing object.
*/
releaseTracing(): PageItem
/**
 * Expand the tracing to paths. Deletes this tracing object.
* @param viewed - Expand as viewed with the raster and vector view modes.
*/
expandTracing(viewed?: boolean): GroupItem
}
declare class Artboard {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Size and position of artboard. */
artboardRect: Rect
/** Pixel aspect ratio, used in ruler visualization if the units are pixels. */
rulerPAR: number
/** Show center mark. */
showCenter: boolean
/** Show cross hairs. */
showCrossHairs: boolean
/** Show title and action safe areas (for video) */
showSafeAreas: boolean
/** Ruler origin of artboard.It is relative to left-bottom corner of the Artboard. */
rulerOrigin: Point
/** The name of the artboard. */
name: string/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class Point {
  /** The left coordinate. */
x: number
/** The top coordinate. */
y: number
/** The left coordinate. */
left: number
/** The top coordinate. */
top: number
/** The array length. */
readonly length: number
}
declare class Rectangle {
  /** The left coordinate. */
x: number
/** The top coordinate. */
y: number
/** The width. */
width: number
/** The height. */
height: number
/** The left coordinate. */
left: number
/** The right coordinate. */
right: number
/** The top coordinate. */
top: number
/** The bottom coordinate. */
bottom: number
/** The array length. */
readonly length: number
}