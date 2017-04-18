declare class OpenDocumentType {
  /** Photoshop format. */
static readonly PHOTOSHOP: number
/** BMP format. */
static readonly BMP: number
/** CompuServe GIF format. */
static readonly COMPUSERVEGIF: number
/** EPS document produced by Photoshop. */
static readonly PHOTOSHOPEPS: number
/** Filmstrip format. */
static readonly FILMSTRIP: number
/** JPEG format. */
static readonly JPEG: number
/** PCX format. */
static readonly PCX: number
/** PDF document produced by Photoshop. */
static readonly PHOTOSHOPPDF: number
/** Photo CD format. */
static readonly PHOTOCD: number
/** PICT file format. */
static readonly PICTFILEFORMAT: number
/** PICT resource format. */
static readonly PICTRESOURCEFORMAT: number
/** Pixar format. */
static readonly PIXAR: number
/** PNG format. */
static readonly PNG: number
/** Raw format. */
static readonly RAW: number
/** Scitex CT format. */
static readonly SCITEXCT: number
/** Targa format. */
static readonly TARGA: number
/** TIFF format. */
static readonly TIFF: number
/** Photoshop DCS 1.0 format. */
static readonly PHOTOSHOPDCS_1: number
/** Photoshop DCS 2.0 format. */
static readonly PHOTOSHOPDCS_2: number
/** Generic PDF format. */
static readonly PDF: number
/** Generic EPS format. */
static readonly EPS: number
/** EPS format with embedded PICT Preview. */
static readonly EPSPICTPREVIEW: number
/** EPS format with embedded TIFF Preview. */
static readonly EPSTIFFPREVIEW: number
/** Alias PIX format. */
static readonly ALIASPIX: number
/** Electric format. */
static readonly ELECTRICIMAGE: number
/** Portable Bitmap format. */
static readonly PORTABLEBITMAP: number
/** Wavefront RLA format. */
static readonly WAVEFRONTRLA: number
/** SGI RGB format. */
static readonly SGIRGB: number
/** SoftImage format. */
static readonly SOFTIMAGE: number
/** Wireless Bitmap format (WBMP) */
static readonly WIRELESSBITMAP: number
/** Camera RAW format. */
static readonly CAMERARAW: number
/** DICOM format. */
static readonly DICOM: number
}
declare class SaveDocumentType {
  /** Photoshop format. */
static readonly PHOTOSHOP: number
/** BMP format. */
static readonly BMP: number
/** CompuServe GIF format. */
static readonly COMPUSERVEGIF: number
/** EPS document produced by Photoshop. */
static readonly PHOTOSHOPEPS: number
/** JPEG format. */
static readonly JPEG: number
/** PCX format. */
static readonly PCX: number
/** PDF document produced by Photoshop. */
static readonly PHOTOSHOPPDF: number
/** PICT file format. */
static readonly PICTFileFORMAT: number
/** PICT resource format. */
static readonly PICTRESOURCEFORMAT: number
/** Pixar format. */
static readonly PIXAR: number
/** PNG format. */
static readonly PNG: number
/** Raw format. */
static readonly RAW: number
/** Scitex CT format. */
static readonly SCITEXCT: number
/** Targa format. */
static readonly TARGA: number
/** TIFF format. */
static readonly TIFF: number
/** Photoshop DCS 1.0 format. */
static readonly PHOTOSHOPDCS_1: number
/** Photoshop DCS 2.0 format. */
static readonly PHOTOSHOPDCS_2: number
/** Alias PIX format. */
static readonly ALIASPIX: number
/** Electric format. */
static readonly ELECTRICIMAGE: number
/** Portable Bitmap format. */
static readonly PORTABLEBITMAP: number
/** Wavefront RLA format. */
static readonly WAVEFRONTRLA: number
/** SGI RGB format. */
static readonly SGIRGB: number
/** SoftImage format. */
static readonly SOFTIMAGE: number
/** Wireless Bitmap format (WBMP) */
static readonly WIRELESSBITMAP: number
}
declare class SaveOptionsType {
  /** Save changes. */
static readonly SAVECHANGES: number
/** Do not save changes. */
static readonly DONOTSAVECHANGES: number
/** Ask the user whether to save. */
static readonly PROMPTTOSAVECHANGES: number
}
declare class DialogModes {
  /** Show all dialogs. */
static readonly ALL: number
/** Show only dialogs related to errors. */
static readonly ERROR: number
/** Show no dialogs. */
static readonly NO: number
}
declare class DocPositionStyle {
  /** Print image centered on page. */
static readonly PRINTCENTERED: number
/** Resize image to fit on page when printing. */
static readonly SIZETOFIT: number
/** Print using user defined spacing. */
static readonly USERDEFINED: number
}
declare class PrintColorHandling {
  /** Printer manages color conversions. */
static readonly PRINTERMANAGED: number
/** Photoshop manages color conversions. */
static readonly PHOTOSHOPMANAGED: number
/** Print each channel separately without color conversions. */
static readonly SEPARATIONS: number
}
declare class DocumentMode {
  /** Grayscale. */
static readonly GRAYSCALE: number
/** RGB. */
static readonly RGB: number
/** CMYK. */
static readonly CMYK: number
/** Lab. */
static readonly LAB: number
/** Bitmap, which uses one of two color values (black or white) to represent the pixels in an image. */
static readonly BITMAP: number
/** Indexed color, in which the number of colors in the image is at most 256, the standard number of colors supported by the GIF and PNG-8 formats and many multimedia applications. */
static readonly INDEXEDCOLOR: number
/** Image with multiple color channels. */
static readonly MULTICHANNEL: number
/** Duotone mode, which creates monotone, duotone (two-color), tritone (three-color), and quadtone (four-color) grayscale images using one to four custom inks. */
static readonly DUOTONE: number
}
declare class ChangeMode {
  /** Grayscale. */
static readonly GRAYSCALE: number
/** RGB. */
static readonly RGB: number
/** CMYK. */
static readonly CMYK: number
/** Lab. */
static readonly LAB: number
/** Bitmap. Note: Color images must be changed to Grayscale mode before you can change them to Bitmap mode. */
static readonly BITMAP: number
/** Indexed color, in which the number of colors in the image is reduced to at most 256, the standard number of colors supported by the GIF and PNG-8 formats and many multimedia applications. */
static readonly INDEXEDCOLOR: number
/** Image with multiple color channels. */
static readonly MULTICHANNEL: number
}
declare class ColorProfileType {
  /** The document is not color managed. */
static readonly NONE: number
/** Color manages this document using the working color profile. */
static readonly WORKING: number
/** Color manages this document using a custom color profile. */
static readonly CUSTOM: number
}
declare class DocumentFill {
  /** White. */
static readonly WHITE: number
/** The background color as displayed in the toolbox. */
static readonly BACKGROUNDCOLOR: number
/** Transparent. */
static readonly TRANSPARENT: number
}
declare class Urgency {
  /** No urgency. */
static readonly NONE: number
/** Low. */
static readonly LOW: number
/** Level 2 (second highest) */
static readonly TWO: number
/** Level 3 (third highest) */
static readonly THREE: number
/** Level 4 (fourth highest) */
static readonly FOUR: number
/** Medium urgency. */
static readonly NORMAL: number
/** Level 6 (third lowest) */
static readonly SIX: number
/** Level 7 (second lowest) */
static readonly SEVEN: number
/** Highest level of urgency. */
static readonly HIGH: number
}
declare class Orientation {
  /** Landscape. */
static readonly LANDSCAPE: number
/** Portrait. */
static readonly PORTRAIT: number
}
declare class Intent {
  /** Gives priority to colors for which the human eye has greater sensitivity. */
static readonly PERCEPTUAL: number
/** Tries to produce vivid colors in an image at the expense of color accuracy. */
static readonly SATURATION: number
/** Compares the extreme highlight of the source color space to that of the destination color space and shifts all colors accordingly. Out of gamut colors are shifted to the closest reproducible color in the destination color space. */
static readonly RELATIVECOLORIMETRIC: number
/** Aims to maintain color accuracy at the expense of preserving relationships between colors and is suitable for proofing to simulate the output of a particular device. This intent is particularly useful for previewing how paper color affects printed colors. */
static readonly ABSOLUTECOLORIMETRIC: number
}
declare class Direction {
  /** Horizontal. */
static readonly HORIZONTAL: number
/** Vertical. */
static readonly VERTICAL: number
}
declare class PurgeTarget {
  /** Clears the undo cache. */
static readonly UNDOCACHES: number
/** Deletes all history states from the History palette. */
static readonly HISTORYCACHES: number
/** Clears the clipboard. */
static readonly CLIPBOARDCACHE: number
/** Clears all caches. */
static readonly ALLCACHES: number
}
declare class AnchorPosition {
  /** The top left corner of the object. */
static readonly TOPLEFT: number
/** The middle point on the top of the object. */
static readonly TOPCENTER: number
/** The top right corner of the object. */
static readonly TOPRIGHT: number
/** The middle point on the left side of the object. */
static readonly MIDDLELEFT: number
/** The center of the object. */
static readonly MIDDLECENTER: number
/** The middle point on the right side of the object. */
static readonly MIDDLERIGHT: number
/** The bottom left corner of the object. */
static readonly BOTTOMLEFT: number
/** The middle point of the bottom of the object. */
static readonly BOTTOMCENTER: number
/** The bottom right corner of the object. */
static readonly BOTTOMRIGHT: number
}
declare class ResampleMethod {
  /** Does not resample. */
static readonly NONE: number
/** Chooses a pixel in the center of the sample area and replaces the entire area with that pixel color. Same as subsampling. */
static readonly NEARESTNEIGHBOR: number
/** Averages the pixels in a sample area and replaces the entire area with the average pixel color at the specified resolution. Same as average downsampling. */
static readonly BILINEAR: number
/** Uses a weighted average to determine pixel color, which usually yields better results than the simple averageing method of downsampling. */
static readonly BICUBIC: number
/** A good method for reducing the size of an image based on Bicubic interpolation with enhanced sharpening. Maintains the detail in a resampled image. */
static readonly BICUBICSHARPER: number
/** A good method for enlarging images based on Bicubic interpolation but designed to produce smoother results. */
static readonly BICUBICSMOOTHER: number
static readonly BICUBICAUTOMATIC: number
static readonly AUTOMATIC: number
static readonly PRESERVEDETAILS: number
}
declare class OperatingSystem {
  /** Mac OS/2 operating system. */
static readonly OS2: number
/** Windows operating system. */
static readonly WINDOWS: number
}
declare class ForcedColors {
  /** No forced colors. */
static readonly NONE: number
/** Forces pure black and white. */
static readonly BLACKWHITE: number
/** Forces red, green, blue, cyan, magenta, yellow, black, and white. */
static readonly PRIMARIES: number
/** Forces the 216 web-safe colors. */
static readonly WEB: number
}
declare class PaletteType {
  /** The palette uses the exact colors appearing in the RGB image; available only if the image uses 256 or fewer colors. */
static readonly EXACT: number
/** The Mac OS default 8-bit palette, whch is based on a uniform sampling of RGB colors. */
static readonly MACOSPALETTE: number
/** The Windows system's default 8-bit palette, whch is based on a uniform sampling of RGB colors. */
static readonly WINDOWSPALETTE: number
/** The 216-color palette that web browsers, regardless of platform, use to display images on a monitor limited to 256 colors. */
static readonly WEBPALETTE: number
/** Creates a palette by uniformly sampling colors from the RGB color cube. */
static readonly UNIFORM: number
/** Creates a custom palette by giving priority to colors for in the image which the human eye has greater sensitivity. */
static readonly LOCALPERCEPTUAL: number
/** Creates a color table similar to the Perceptual color table, but favoring broad areas of color in the image and the preservation of web colors. */
static readonly LOCALSELECTIVE: number
/** Creates a palette by sampling the colors from the spectrum appearing most commonly in the image. */
static readonly LOCALADAPTIVE: number
/** Creates a custom palette by giving priority to colors in a group of open images with the same color palette for which the human eye has greater sensitivity. */
static readonly MASTERPERCEPTUAL: number
/** Creates a color table similar to the Master Perceptual color table, but favoring broad areas of color and the preservation of web colors. */
static readonly MASTERSELECTIVE: number
/** Creates a palette by sampling the colors from the spectrum appearing most commonly in a group of open images that share the same color palette. */
static readonly MASTERADAPTIVE: number
/** Uses the custom palette from the previous conversion, making it easy to convert several images with the same custom palette. */
static readonly PREVIOUSPALETTE: number
}
declare class DitherType {
  /** No dither is used. */
static readonly NONE: number
/** Diffuses dither effects in random patterns across adjacent pixels. */
static readonly DIFFUSION: number
/** Applies a halftone-like square pattern. */
static readonly PATTERN: number
/** Applies a random pattern but without diffusing the pattern across adjacent pixels; prevents the appearance of seams. */
static readonly NOISE: number
}
declare class MacPreviewType {
  /** Does not use a preview. */
static readonly NONE: number
/** Monochrome TIFF. */
static readonly MONOCHROMETIFF: number
/** 8-bit TIFF. */
static readonly EIGHTBITTIFF: number
/** Monochrome. */
static readonly MACOSMONOCHROME: number
/** 8-bit. */
static readonly MACOSEIGHTBIT: number
/** JPEG. */
static readonly MACOSJPEG: number
}
declare class SaveEncoding {
  /** ASCII. */
static readonly ASCII: number
/** Binary. */
static readonly BINARY: number
/** Low quality JPEG encoding (high amount of compression). */
static readonly JPEGLOW: number
/** Medium quality JPEG encoding (medium compression). */
static readonly JPEGMEDIUM: number
/** High quality JPEG encoding. */
static readonly JPEGHIGH: number
/** Maximum quality JPEG encoding (very little compression). */
static readonly JPEGMAXIMUM: number
}
declare class FormatOptionsType {
  /** Baseline (Standard). Recognized by most web browsers. */
static readonly STANDARDBASELINE: number
/** Baseline (Optimized). Optimized color and a slightly reduced file size. */
static readonly OPTIMIZEDBASELINE: number
/** Displays a series of increasingly detailed scans as the image downloads. */
static readonly PROGRESSIVE: number
}
declare class PDFEncodingType {
  /** No encoding. */
static readonly NONE: number
/** Zip compression. */
static readonly PDFZIP: number
/** JPEG compression. */
static readonly JPEG: number
/** Zip compression with 4-bit image quality. */
static readonly PDFZIP4BIT: number
/** JPEG compression with high image quality. */
static readonly JPEGHIGH: number
/** JPEG compression with medium high image quality. */
static readonly JPEGMEDHIGH: number
/** JPEG compression with medium image quality. */
static readonly JPEGMED: number
/** JPEG compression with medium low image quality. */
static readonly JPEGMEDLOW: number
/** JPEG compression with low image quality. */
static readonly JPEGLOW: number
/** JPEG2000 compression with high image quality. */
static readonly JPEG2000HIGH: number
/** JPEG2000 compression with medium high image quality. */
static readonly JPEG2000MEDHIGH: number
/** JPEG2000 compression with medium image quality. */
static readonly JPEG2000MED: number
/** JPEG2000 compression with medium low image quality. */
static readonly JPEG2000MEDLOW: number
/** JPEG2000 compression with low image quality. */
static readonly JPEG2000LOW: number
/** JPEG2000 lossless compression. */
static readonly JPEG2000LOSSLESS: number
}
declare class PDFStandardType {
  /** The document does not use the PDF/X standard. */
static readonly NONE: number
/** PDF/X-1a standard, which requires all fonts to be embedded, the appropriate PDF bounding boxes to be specified, and color to appear as CMYK, spot colors, or both; can be opened in Acrobat 4.0 and Acrobat Reader 4.0 and later. */
static readonly PDFX1A2001: number
/** PDF/X-1a standard, which requires all fonts to be embedded, the appropriate PDF bounding boxes to be specified, and color to appear as CMYK, spot colors, or both; can be opened in Acrobat 4.0 and Acrobat Reader 4.0 and later. */
static readonly PDFX1A2003: number
/** PDF/X-3 standard, which requires all fonts to be embedded and the appropriate PDF bounding boxes to be specified, and for color allows either the use of color management and device-independent color (CIE L*a*b, ICC-based color spaces, CalRGB, and CalGray) or CMYK, spot colors, or both; can be opened in Acrobat 4.0 and Acrobat Reader 4.0 and later. */
static readonly PDFX32002: number
/** PDF/X-3 standard, which requires all fonts to be embedded and the appropriate PDF bounding boxes to be specified, and for color allows either the use of color management and device-independent color (CIE L*a*b, ICC-based color spaces, CalRGB, and CalGray) or CMYK, spot colors, or both; can be opened in Acrobat 4.0 and Acrobat Reader 4.0 and later. */
static readonly PDFX32003: number
/** PDF/X-4 standard, which requires all fonts to be embedded and the appropriate PDF bounding boxes to be specified, and for color allows either the use of color management and device-independent color (CIE L*a*b, ICC-based color spaces, CalRGB, and CalGray) or CMYK, spot colors, or both; can be opened in Acrobat 8.0 and Acrobat Reader 8.0 and later. */
static readonly PDFX42008: number
}
declare class PDFCompatibilityType {
  /** PDF 1.3 (Acrobat 4 or higher). */
static readonly PDF13: number
/** PDF 1.4 (Acrobat 5 or higher). */
static readonly PDF14: number
/** PDF 1.5 (Acrobat 6 or higher). */
static readonly PDF15: number
/** PDF 1.6 (Acrobat 7 or higher) */
static readonly PDF16: number
/** PDF 1.7 (Acrobat 9 or higher) */
static readonly PDF17: number
}
declare class PDFResampleType {
  /** Does not downsample. */
static readonly NONE: number
/** Averages the pixels in a sample area and replaces the entire area with the average pixel color at the specified resolution. */
static readonly PDFAVERAGE: number
/** Chooses a pixel in the center of the sample area and replaces the entire area with that pixel color; significantly reduces conversion time but results in images that are less smooth and continuous. */
static readonly PDFSUBSAMPLE: number
/** Uses a weighted average to determine pixel color, which usually yields better results than the simple averaging method of downsampling. The slowest but most precise method, resulting in the smoothest gradations. */
static readonly PDFBICUBIC: number
}
declare class PICTCompression {
  /** No compression. */
static readonly NONE: number
/** Low quality JPEG encoding (high amount of compression). */
static readonly JPEGLOWPICT: number
/** Medium quality JPEG encoding (medium amount of compression). */
static readonly JPEGMEDIUMPICT: number
/** High quality JPEG encoding. */
static readonly JPEGHIGHPICT: number
/** Maximum quality JPEG encoding (very little compression). */
static readonly JPEGMAXIMUMPICT: number
}
declare class MacExtensionType {
  /** Does not use an extension. */
static readonly NONE: number
/** The extension is in lowercase letters. */
static readonly LOWERCASE: number
/** The extension is in uppercase letters. */
static readonly UPPERCASE: number
}
declare class TiffEncodingType {
  /** No compression. */
static readonly NONE: number
/** LZW compression, which is lossless and most useful for images with large areas of single color. */
static readonly TIFFLZW: number
/** JPEG compression, which is lossy and recommended for continuous-tone images, such as photographs. */
static readonly JPEG: number
/** Zip compression, which is lossless and most effective for images that contain large areas of single color. */
static readonly TIFFZIP: number
}
declare class LayerCompressionType {
  /** Run Length Encoding, which is lossless. */
static readonly RLE: number
/** Zip compression, which is lossless and most effective for images that contain large areas of single color. */
static readonly ZIP: number
}
declare class ByteOrderType {
  /** IBM PC. */
static readonly IBM: number
/** Mac OS. */
static readonly MACOS: number
}
declare class DCSType {
  /** Does not create a composite file. */
static readonly NOCOMPOSITE: number
/** Creates a grayscale composite file in addition to DCS files. */
static readonly GRAYSCALECOMPOSITE: number
/** Creates a color composite file in addition to DCS files. */
static readonly COLORCOMPOSITE: number
}
declare class TrimType {
  /** Trims away transparency at the edges of the image, leaving the smallest image containing nontransparent pixels. */
static readonly TRANSPARENT: number
/** Removes from the image an area the color of the upper left pixel. */
static readonly TOPLEFT: number
/** Removes from the image an area the color of the lower right pixel. */
static readonly BOTTOMRIGHT: number
}
declare class ColorPicker {
  /** The Adobe Color Picker. */
static readonly ADOBE: number
/** The built-in Apple color picker. */
static readonly APPLE: number
/** The built-in Windows color picker. */
static readonly WINDOWS: number
/** An installed plug-in color picker. */
static readonly PLUGIN: number
}
declare class ResetTarget {
  /** Warning dialogs. */
static readonly ALLWARNINGS: number
/** Tools. */
static readonly ALLTOOLS: number
/** All targets. */
static readonly EVERYTHING: number
}
declare class SaveBehavior {
  /** Never save the item with the file. */
static readonly NEVERSAVE: number
/** Always save the item with the file. */
static readonly ALWAYSSAVE: number
/** Prompt the user whether to save the item with the file. */
static readonly ASKWHENSAVING: number
}
declare class PaintingCursors {
  /** Displays pointers as tool icons. */
static readonly STANDARD: number
/** Displays pointers as cross hairs. */
static readonly PRECISE: number
/** Displays cursors as brush shapes representing the size of the current brush. Valid only for painting cursors. */
static readonly BRUSHSIZE: number
}
declare class OtherPaintingCursors {
  /** Displays pointers as tool icons. */
static readonly STANDARDOTHER: number
/** Displays pointers as cross hairs. */
static readonly PRECISEOTHER: number
}
declare class GridSize {
  /** No grid is displayed. */
static readonly NONE: number
/** Small grid squares. */
static readonly SMALL: number
/** Medium grid squares. */
static readonly MEDIUM: number
/** Large grid squares. */
static readonly LARGE: number
}
declare class Units {
  /** Pixels. */
static readonly PIXELS: number
/** Inches. */
static readonly INCHES: number
/** Centimeters. */
static readonly CM: number
/** Millimeters. */
static readonly MM: number
/** Points. */
static readonly POINTS: number
/** Picas. */
static readonly PICAS: number
/** Percent. */
static readonly PERCENT: number
}
declare class TypeUnits {
  /** Pixels. */
static readonly PIXELS: number
/** Millimeters. */
static readonly MM: number
/** Points. */
static readonly POINTS: number
}
declare class PointType {
  /** 72 points per inch. */
static readonly POSTSCRIPT: number
/** 72.27 points per inch. */
static readonly TRADITIONAL: number
}
declare class GridLineStyle {
  /** Solid. */
static readonly SOLID: number
/** Dashed. */
static readonly DASHED: number
/** Dotted. */
static readonly DOTTED: number
}
declare class GuideLineStyle {
  /** Solid. */
static readonly SOLID: number
/** Dashed. */
static readonly DASHED: number
}
declare class BlendMode {
  /** Allows any blend modes, advanced blending options, and opacity and fill values applied to layers within a set to affect layers below the set in the Layers palette. */
static readonly PASSTHROUGH: number
/** Edits or paints each pixel to make it the result color. (Called "Threshold" when you’re working with a bitmapped or indexed-color image.) */
static readonly NORMAL: number
/** Edits or paints each pixel to make it the result color. However, the result color is a random replacement of the pixels with the base color or the blend color, depending on the opacity at any pixel location. */
static readonly DISSOLVE: number
/** Looks at the color information in each channel and selects the base or blend color—whichever is darker—as the result color. Pixels lighter than the blend color are replaced, and pixels darker than the blend color do not change. */
static readonly DARKEN: number
/** Looks at the color information in each channel and multiplies the base color by the blend color. The result color is always a darker color. Multiplying any color with black produces black. Multiplying any color with white leaves the color unchanged. When you’re painting with a color other than black or white, successive strokes with a painting tool produce progressively darker colors. The effect is similar to drawing on the image with multiple marking pens. */
static readonly MULTIPLY: number
/** Looks at the color information in each channel and darkens the base color to reflect the blend color by increasing the contrast. Blending with white produces no change. */
static readonly COLORBURN: number
/** Looks at the color information in each channel and darkens the base color to reflect the blend color by decreasing the brightness. Blending with white produces no change. */
static readonly LINEARBURN: number
/** Looks at the color information in each channel and selects the base or blend color—whichever is lighter—as the result color. Pixels darker than the blend color are replaced, and pixels lighter than the blend color do not change. */
static readonly LIGHTEN: number
/** Looks at each channel’s color information and multiplies the inverse of the blend and base colors. The result color is always a lighter color. Screening with black leaves the color unchanged. Screening with white produces white. The effect is similar to projecting multiple photographic slides on top of each other. */
static readonly SCREEN: number
/** Looks at the color information in each channel and brightens the base color to reflect the blend color by decreasing the contrast. Blending with black produces no change. */
static readonly COLORDODGE: number
/** Looks at the color information in each channel and brightens the base color to reflect the blend color by increasing the brightness. Blending with black produces no change. */
static readonly LINEARDODGE: number
/** Multiplies or screens the colors, depending on the base color. Patterns or colors overlay the existing pixels while preserving the highlights and shadows of the base color. The base color is not replaced but is mixed with the blend color to reflect the lightness or darkness of the original color. */
static readonly OVERLAY: number
/** Darkens or lightens the colors, depending on the blend color. The effect is similar to shining a diffused spotlight on the image. If the blend color (light source) is lighter than 50% gray, the image is lightened as if it were dodged. If the blend color is darker than 50% gray, the image is darkened as if it were burned in. Painting with pure black or white produces a distinctly darker or lighter area but does not result in pure black or white. */
static readonly SOFTLIGHT: number
/** Multiplies or screens the colors, depending on the blend color. The effect is similar to shining a harsh spotlight on the image. If the blend color (light source) is lighter than 50% gray, the image is lightened, as if it were screened. This is useful for adding highlights to an image. If the blend color is darker than 50% gray, the image is darkened, as if it were multiplied. This is useful for adding shadows to an image. Painting with pure black or white results in pure black or white. */
static readonly HARDLIGHT: number
/** Burns or dodges the colors by increasing or decreasing the contrast, depending on the blend color. If the blend color (light source) is lighter than 50% gray, the image is lightened by decreasing the contrast. If the blend color is darker than 50% gray, the image is darkened by increasing the contrast. */
static readonly VIVIDLIGHT: number
/** Burns or dodges the colors by decreasing or increasing the brightness, depending on the blend color. If the blend color (light source) is lighter than 50% gray, the image is lightened by increasing the brightness. If the blend color is darker than 50% gray, the image is darkened by decreasing the brightness. */
static readonly LINEARLIGHT: number
/** Replaces the colors, depending on the blend color. If the blend color (light source) is lighter than 50% gray, pixels darker than the blend color are replaced, and pixels lighter than the blend color do not change. If the blend color is darker than 50% gray, pixels lighter than the blend color are replaced, and pixels darker than the blend color do not change. This is useful for adding special effects to an image. */
static readonly PINLIGHT: number
/** Looks at the color information in each channel and subtracts either the blend color from the base color or the base color from the blend color, depending on which has the greater brightness value. Blending with white inverts the base color values; blending with black produces no change. */
static readonly DIFFERENCE: number
/** Creates an effect similar to but lower in contrast than the Difference mode. Blending with white inverts the base color values. Blending with black produces no change. */
static readonly EXCLUSION: number
static readonly SUBTRACT: number
static readonly DIVIDE: number
/** Creates a result color with the luminance and saturation of the base color and the hue of the blend color. */
static readonly HUE: number
/** Creates a result color with the luminance and hue of the base color and the saturation of the blend color. Painting with this mode in an area with no (0) saturation (gray) causes no change. */
static readonly SATURATION: number
/** Creates a result color with the luminance of the base color and the hue and saturation of the blend color. This preserves the gray levels in the image and is useful for coloring monochrome images and for tinting color images. */
static readonly COLORBLEND: number
/** Creates a result color with the hue and saturation of the base color and the luminance of the blend color. This mode creates an inverse effect from that of the Color mode. */
static readonly LUMINOSITY: number
/** Lighter colors lighten the result, and darker colors darken the result. 50% gray as a blend color has no effect on the result color. Lowering the fill opacity creates less posterization/thresholding. */
static readonly HARDMIX: number
/** Lighter colors lighten the result, and darker colors darken the result. 50% gray as a blend color has no effect on the result color. Lowering the fill opacity creates less posterization/thresholding. */
static readonly LIGHTERCOLOR: number
/** Lighter colors lighten the result, and darker colors darken the result. 50% gray as a blend color has no effect on the result color. Lowering the fill opacity creates less posterization/thresholding. */
static readonly DARKERCOLOR: number
}
declare class ColorBlendMode {
  /** Edits or paints each pixel to make it the result color. (Called "Threshold" when you’re working with a bitmapped or indexed-color image.) */
static readonly NORMAL: number
/** Edits or paints each pixel to make it the result color, which is a random replacement of the pixels with the base color or the blend color, depending on the opacity at any pixel location. */
static readonly DISSOLVE: number
/** Edits or paints only on the transparent part of a layer. Works only in layers in which transparent pixels locked = false and is analogous to painting on the back of transparent areas on a sheet of acetate. */
static readonly BEHIND: number
/** Edits or paints each pixel and makes it transparent. Works only in layers in which transparent pixels locked = false. */
static readonly CLEAR: number
/** Looks at the color information in each channel and selects the base or blend color—whichever is darker—as the result color. Pixels lighter than the blend color are replaced, and pixels darker than the blend color do not change. */
static readonly DARKEN: number
/** Looks at the color information in each channel and multiplies the base color by the blend color. The result color is always a darker color. Multiplying any color with black produces black. Multiplying any color with white leaves the color unchanged. When you’re painting with a color other than black or white, successive strokes with a painting tool produce progressively darker colors. The effect is similar to drawing on the image with multiple marking pens. */
static readonly MULTIPLY: number
/** Looks at the color information in each channel and darkens the base color to reflect the blend color by increasing the contrast. Blending with white produces no change. */
static readonly COLORBURN: number
/** Looks at the color information in each channel and darkens the base color to reflect the blend color by decreasing the brightness. Blending with white produces no change. */
static readonly LINEARBURN: number
/** Looks at the color information in each channel and selects the base or blend color—whichever is lighter—as the result color. Pixels darker than the blend color are replaced, and pixels lighter than the blend color do not change. */
static readonly LIGHTEN: number
/** Looks at each channel’s color information and multiplies the inverse of the blend and base colors. The result color is always a lighter color. Screening with black leaves the color unchanged. Screening with white produces white. The effect is similar to projecting multiple photographic slides on top of each other. */
static readonly SCREEN: number
/** Looks at the color information in each channel and brightens the base color to reflect the blend color by decreasing the contrast. Blending with black produces no change. */
static readonly COLORDODGE: number
/** Looks at the color information in each channel and brightens the base color to reflect the blend color by increasing the brightness. Blending with black produces no change. */
static readonly LINEARDODGE: number
/** Multiplies or screens the colors, depending on the base color. Patterns or colors overlay the existing pixels while preserving the highlights and shadows of the base color. The base color is not replaced but is mixed with the blend color to reflect the lightness or darkness of the original color. */
static readonly OVERLAY: number
/** Darkens or lightens the colors, depending on the blend color. The effect is similar to shining a diffused spotlight on the image. If the blend color (light source) is lighter than 50% gray, the image is lightened as if it were dodged. If the blend color is darker than 50% gray, the image is darkened as if it were burned in. Painting with pure black or white produces a distinctly darker or lighter area but does not result in pure black or white. */
static readonly SOFTLIGHT: number
/** Multiplies or screens the colors, depending on the blend color. The effect is similar to shining a harsh spotlight on the image. If the blend color (light source) is lighter than 50% gray, the image is lightened, as if it were screened. This is useful for adding highlights to an image. If the blend color is darker than 50% gray, the image is darkened, as if it were multiplied. This is useful for adding shadows to an image. Painting with pure black or white results in pure black or white. */
static readonly HARDLIGHT: number
/** Burns or dodges the colors by increasing or decreasing the contrast, depending on the blend color. If the blend color (light source) is lighter than 50% gray, the image is lightened by decreasing the contrast. If the blend color is darker than 50% gray, the image is darkened by increasing the contrast. */
static readonly VIVIDLIGHT: number
/** Burns or dodges the colors by decreasing or increasing the brightness, depending on the blend color. If the blend color (light source) is lighter than 50% gray, the image is lightened by increasing the brightness. If the blend color is darker than 50% gray, the image is darkened by decreasing the brightness. */
static readonly LINEARLIGHT: number
/** Replaces the colors, depending on the blend color. If the blend color (light source) is lighter than 50% gray, pixels darker than the blend color are replaced, and pixels lighter than the blend color do not change. If the blend color is darker than 50% gray, pixels lighter than the blend color are replaced, and pixels darker than the blend color do not change. This is useful for adding special effects to an image. */
static readonly PINLIGHT: number
/** Looks at the color information in each channel and subtracts either the blend color from the base color or the base color from the blend color, depending on which has the greater brightness value. Blending with white inverts the base color values; blending with black produces no change. */
static readonly DIFFERENCE: number
/** Creates an effect similar to but lower in contrast than the Difference mode. Blending with white inverts the base color values. Blending with black produces no change. */
static readonly EXCLUSION: number
static readonly SUBTRACT: number
static readonly DIVIDE: number
/** Creates a result color with the luminance and saturation of the base color and the hue of the blend color. */
static readonly HUE: number
/** Creates a result color with the luminance and hue of the base color and the saturation of the blend color. Painting with this mode in an area with no (0) saturation (gray) causes no change. */
static readonly SATURATION: number
/** Creates a result color with the luminance of the base color and the hue and saturation of the blend color. This preserves the gray levels in the image and is useful for coloring monochrome images and for tinting color images. */
static readonly COLOR: number
/** Creates a result color with the hue and saturation of the base color and the luminance of the blend color. This mode creates an inverse effect from that of the Color mode. */
static readonly LUMINOSITY: number
/** Lighter colors lighten the result, and darker colors darken the result. 50% gray as a blend color has no effect on the result color. Lowering the fill opacity creates less posterization/thresholding. */
static readonly HARDMIX: number
static readonly LIGHTERCOLOR: number
static readonly DARKERCOLOR: number
}
declare class RasterizeType {
  /** Rasterizes the type on a type layer. Doesn't rasterize any other vector data on the layer. */
static readonly TEXTCONTENTS: number
/** Rasterizes a shape layer. */
static readonly SHAPE: number
/** Rasterizes the fill of a shape layer, leaving the vector mask. */
static readonly FILLCONTENT: number
/** Rasterizes the vector mask of a shape layer, turning it into a layer mask. */
static readonly LAYERCLIPPINGPATH: number
/** Rasterizes all vector data on the layer. */
static readonly ENTIRELAYER: number
/** Rasterizes the selected layers. */
static readonly LINKEDLAYERS: number
}
declare class Justification {
  /** Aligns the left edges, leaving the right edge ragged. */
static readonly LEFT: number
/** Text is centered on each line. */
static readonly CENTER: number
/** Aligns the right edges, leaving the left edge ragged. */
static readonly RIGHT: number
/** Justifies all lines except the last, which is left-aligned. */
static readonly LEFTJUSTIFIED: number
/** Justifies all lines except the last, which is center-aligned. */
static readonly CENTERJUSTIFIED: number
/** Justifies all lines except the last, which is right-aligned. */
static readonly RIGHTJUSTIFIED: number
/** Justifies all lines including the last, which is force-justified. */
static readonly FULLYJUSTIFIED: number
}
declare class AntiAlias {
  /** Does not use anti-aliasing. */
static readonly NONE: number
/** Makes type appear its sharpest. */
static readonly SHARP: number
/** Makes type appear somewhat sharp. */
static readonly CRISP: number
/** Makes type appear heavier. */
static readonly STRONG: number
/** Makes type appear smoother. */
static readonly SMOOTH: number
}
declare class Case {
  /** Uses uppercase and lowercase letters. */
static readonly NORMAL: number
/** Uses all uppercase letters. */
static readonly ALLCAPS: number
/** Uses small caps for lowercase letters. */
static readonly SMALLCAPS: number
}
declare class Language {
  /** American English. */
static readonly ENGLISHUSA: number
/** British English. */
static readonly ENGLISHUK: number
/** French. */
static readonly FRENCH: number
/** Canadian French. */
static readonly CANADIANFRENCH: number
/** Finnish. */
static readonly FINNISH: number
/** German. */
static readonly GERMAN: number
/** Old German. */
static readonly OLDGERMAN: number
/** Swiss German. */
static readonly SWISSGERMAN: number
/** Italian. */
static readonly ITALIAN: number
/** Norwegian. */
static readonly NORWEGIAN: number
/** Nynorsk Norwegian. */
static readonly NYNORSKNORWEGIAN: number
/** Portuguese. */
static readonly PORTUGUESE: number
/** Brazillian Portuguese. */
static readonly BRAZILLIANPORTUGUESE: number
/** Spanish. */
static readonly SPANISH: number
/** Swedish. */
static readonly SWEDISH: number
/** Dutch. */
static readonly DUTCH: number
/** Danish. */
static readonly DANISH: number
}
declare class TextType {
  /** Text that does not wrap. */
static readonly POINTTEXT: number
/** Text that wraps within a bounding box. */
static readonly PARAGRAPHTEXT: number
}
declare class WarpStyle {
  /** No warp. */
static readonly NONE: number
/** The type is warped in the shape of an arc. */
static readonly ARC: number
/** Warp is heavier on the lower or left edge of the text than on the upper or right edge. */
static readonly ARCLOWER: number
/** Warp is heavier on the upper or right edge of the text than on the lower or left edge. */
static readonly ARCUPPER: number
/** Text is warped in the form of an arch. */
static readonly ARCH: number
/** Text is warped outward on both the upper and lower or right and left edges. */
static readonly BULGE: number
/** Text is warped downward or to the right in the shape of a fan-like seashell. */
static readonly SHELLLOWER: number
/** Text is warped upward or to the left in the shape of a fan-like seashell. */
static readonly SHELLUPPER: number
/** Text is warped in the shape of a waving flag. */
static readonly FLAG: number
/** Text is warped in the shape of a wave. */
static readonly WAVE: number
/** Text is warped in the shape of a fish. */
static readonly FISH: number
/** Text is warped in an undulating, rising pattern. */
static readonly RISE: number
/** Text bulges in the middle and is squeezed on the edges as if viewed through a fisheye lens. */
static readonly FISHEYE: number
/** Text is inflated. */
static readonly INFLATE: number
/** Text is squeezed. */
static readonly SQUEEZE: number
/** Text is twisted. */
static readonly TWIST: number
}
declare class TextComposer {
  /** Offers a traditional approach to composing type one line at a time. Useful if you prefer to have manual control over how lines break. */
static readonly ADOBESINGLELINE: number
/** Considers a network of break points for a range of lines and thus optimizes earlier lines in the paragraph to eliminate especially unattractive breaks later on. Results in more even spacing and fewer hyphens. */
static readonly ADOBEEVERYLINE: number
}
declare class AutoKernType {
  /** Allows manual kerning. */
static readonly MANUAL: number
/** Uses kern pairs, which contain information about the spacing of specific pairs of letters. */
static readonly METRICS: number
/** Adjusts the spacing between adjacent characters based on their shapes. */
static readonly OPTICAL: number
}
declare class StrikeThruType {
  /** No strikethrough. */
static readonly STRIKEOFF: number
/** (For vertical type) The strikethrough is through the height of the text. */
static readonly STRIKEHEIGHT: number
/** (For vertical type) The strikethrough is through the em box. */
static readonly STRIKEBOX: number
}
declare class UnderlineType {
  /** No underline. */
static readonly UNDERLINEOFF: number
/** (For vertical type) The underline is to the right of the text. */
static readonly UNDERLINERIGHT: number
/** (For vertical type) The underline is to the left of the text. */
static readonly UNDERLINELEFT: number
}
declare class SelectionType {
  /** Replace the selected area. */
static readonly REPLACE: number
/** Add the selection to an already selected area. */
static readonly EXTEND: number
/** Remove the selection from the already selected area. */
static readonly DIMINISH: number
/** Make the selection only the area where the new selection intersects the already selected area. */
static readonly INTERSECT: number
}
declare class ExportType {
  /** Exports Photoshop paths as Adobe Illustrator files. */
static readonly ILLUSTRATORPATHS: number
/** Uses the save for web export options. */
static readonly SAVEFORWEB: number
}
declare class IllustratorPathType {
  /** Exports the document bounds. */
static readonly DOCUMENTBOUNDS: number
/** Exports all paths. */
static readonly ALLPATHS: number
/** Exports the specified path. To specify the path, see the path name property of the illustrator export options object. */
static readonly NAMEDPATH: number
}
declare class ChannelType {
  /** The channel related to the document color model. */
static readonly COMPONENT: number
/** The apha channel where color indicates a masked area. */
static readonly MASKEDAREA: number
/** The lpha channel where color indicates a selected area. */
static readonly SELECTEDAREA: number
/** The alpha channel to store a spot color. */
static readonly SPOTCOLOR: number
}
declare class RadialBlurMethod {
  /** Blurs along concentric circular lines at the specified degree of rotation. */
static readonly SPIN: number
/** Blurs along radial lines, as if zooming into or out of the image. */
static readonly ZOOM: number
}
declare class RadialBlurQuality {
  /** Produces fast but grainy results. */
static readonly DRAFT: number
/** Produces good results. */
static readonly GOOD: number
/** Produces best results. */
static readonly BEST: number
}
declare class SmartBlurQuality {
  /** Low quality. */
static readonly LOW: number
/** Medium quality. */
static readonly MEDIUM: number
/** High quality. */
static readonly HIGH: number
}
declare class SmartBlurMode {
  /** Blur is applied to entire image. */
static readonly NORMAL: number
/** Blur is applied only to edges of color transitions. */
static readonly EDGEONLY: number
/** Blur is applied only to edges of color transitions. */
static readonly OVERLAYEDGE: number
}
declare class TextureType {
  /** The image appears as if viewed through glass blocks. */
static readonly BLOCKS: number
/** The image appears as if painted on canvas. */
static readonly CANVAS: number
/** The image appears as if frosted. */
static readonly FROSTED: number
/** The image appears as if viewed through an array of tiny lenses. */
static readonly TINYLENS: number
/** Texture from an existing document. */
static readonly FILE: number
}
declare class PolarConversionType {
  /** The selection is converted from its rectangular to polar coordinates. */
static readonly RECTANGULARTOPOLAR: number
/** The selection is converted from its polar to rectangular coordinates. */
static readonly POLARTORECTANGULAR: number
}
declare class RippleSize {
  /** Small. */
static readonly SMALL: number
/** Medium. */
static readonly MEDIUM: number
/** Large. */
static readonly LARGE: number
}
declare class UndefinedAreas {
  /** Fills the undefined space with content from the opposite edge of the image. */
static readonly WRAPAROUND: number
/** Extends the colors of pixels along the edge of the image in the direction specified. Banding may result if the edge pixels are different colors. */
static readonly REPEATEDGEPIXELS: number
}
declare class OffsetUndefinedAreas {
  /** For background layers, sets pixels to the background layer color. For nonbackground layers, sets the pixels to transparent. */
static readonly SETTOBACKGROUND: number
/** Fills the undefined space with content from the opposite edge of the image. */
static readonly WRAPAROUND: number
/** Extends the colors of pixels along the edge of the image in the direction specified. Banding may result if the edge pixels are different colors. */
static readonly REPEATEDGEPIXELS: number
}
declare class SpherizeMode {
  /** Distorts the image as if it is wrapped around a sphere. */
static readonly NORMAL: number
/** Distorts the image as if it is wrapped around a horizontal cylinder. */
static readonly HORIZONTAL: number
/** Distorts the image as if it is wrapped around a vertical cylinder. */
static readonly VERTICAL: number
}
declare class DisplacementMapType {
  /** The map is resized. */
static readonly STRETCHTOFIT: number
/** The selection is filled by repeating the map in a pattern. */
static readonly TILE: number
}
declare class WaveType {
  /** Rolling. */
static readonly SINE: number
/** Triangular. */
static readonly TRIANGULAR: number
/** Square. */
static readonly SQUARE: number
}
declare class ZigZagType {
  /** Pixels are rotated around the center of the selection. */
static readonly AROUNDCENTER: number
/** Pixels are displaced toward or away from the center of the selection. */
static readonly OUTFROMCENTER: number
/** Pixels are displaced to the upper left or lower right. */
static readonly PONDRIPPLES: number
}
declare class NoiseDistribution {
  /** Distributes color values of noise using random numbers between 0 and plus or minus the specified value, creating a subtle effect. */
static readonly UNIFORM: number
/** Distributes color values of noise along a bell-shaped curve, creating a speckled effect. */
static readonly GAUSSIAN: number
}
declare class LensType {
  /** 50-300mm Zoom. */
static readonly ZOOMLENS: number
/** 35mm Prime. */
static readonly PRIME35: number
/** 105mm Prime. */
static readonly PRIME105: number
/** Movie Prime. */
static readonly MOVIEPRIME: number
}
declare class EliminateFields {
  /** Eliminate odd interlaced lines in a video image. */
static readonly ODDFIELDS: number
/** Eliminate even interlaced lines in a video image. */
static readonly EVENFIELDS: number
}
declare class CreateFields {
  /** Duplicates existing pixels. */
static readonly DUPLICATION: number
/** Assigns color values to any new pixels that Photoshop creates based on the color values of existing pixels in the image. */
static readonly INTERPOLATION: number
}
declare class PhotoCDSize {
  /** 64x96 image. */
static readonly MINIMUM: number
/** 128x192 image. */
static readonly SMALL: number
/** 256x384 image. */
static readonly MEDIUM: number
/** 512x768 image. */
static readonly LARGE: number
/** 1024x1536 image. */
static readonly EXTRALARGE: number
/** 2048x3072 image. */
static readonly MAXIMUM: number
}
declare class BitsPerChannelType {
  /** 1 bit per channel. */
static readonly ONE: number
/** 8 bits per channel. */
static readonly EIGHT: number
/** 16 bits per channel. */
static readonly SIXTEEN: number
/** 32 bits per channel. */
static readonly THIRTYTWO: number
}
declare class PICTBitsPerPixels {
  /** 2 bits per pixel. */
static readonly TWO: number
/** 4 bits per pixel. */
static readonly FOUR: number
/** 8 bits per pixel. */
static readonly EIGHT: number
/** 16 bits per pixel. */
static readonly SIXTEEN: number
/** 32 bits per pixel. */
static readonly THIRTYTWO: number
}
declare class TargaBitsPerPixels {
  /** 16 bits per pixel. */
static readonly SIXTEEN: number
/** 24 bits per pixel. */
static readonly TWENTYFOUR: number
/** 32 bits per pixel. */
static readonly THIRTYTWO: number
}
declare class DescValueType {
  /** Integer. */
static readonly INTEGERTYPE: number
/** Double. */
static readonly DOUBLETYPE: number
/** Unit value of type double. */
static readonly UNITDOUBLE: number
/** String. */
static readonly STRINGTYPE: number
/** Boolean. */
static readonly BOOLEANTYPE: number
/** Action list. */
static readonly LISTTYPE: number
/** Object. */
static readonly OBJECTTYPE: number
/** Enumeration. */
static readonly ENUMERATEDTYPE: number
/** Reference. */
static readonly REFERENCETYPE: number
/** Class. */
static readonly CLASSTYPE: number
/** Alias. */
static readonly ALIASTYPE: number
/** Raw. */
static readonly RAWTYPE: number
static readonly LARGEINTEGERTYPE: number
}
declare class ReferenceFormType {
  /** Name. */
static readonly NAME: number
/** Index. */
static readonly INDEX: number
/** Identifier. */
static readonly IDENTIFIER: number
/** Offset. */
static readonly OFFSET: number
/** Enumerated. */
static readonly ENUMERATED: number
/** Property. */
static readonly PROPERTY: number
/** Class. */
static readonly CLASSTYPE: number
}
declare class BMPDepthType {
  /** 1 bit depth. */
static readonly ONE: number
/** 4 bits depth. */
static readonly FOUR: number
/** 8 bits depth. */
static readonly EIGHT: number
/** 16 bits depth. */
static readonly SIXTEEN: number
/** 24 bits depth. */
static readonly TWENTYFOUR: number
/** 32 bits depth. */
static readonly THIRTYTWO: number
/** X1 R5 G5 B5 advanced bit depth specification (same as normal 16 bit mode) */
static readonly BMP_X1R5G5B5: number
/** A1 R5 G5 B5 advanced bit depth specification. */
static readonly BMP_A1R5G5B5: number
/** R5 G6 B5 advanced bit depth specification. */
static readonly BMP_R5G6B5: number
/** X4 R4 G4 B4 advanced bit depth specification. */
static readonly BMP_X4R4G4B4: number
/** A4 R4 G4 B4 advanced bit depth specification. */
static readonly BMP_A4R4G4B4: number
/** R8 G8 B8 advanced bit depth specification (same as normal 24 bit mode) */
static readonly BMP_R8G8B8: number
/** X8 R8 G8 B8 advanced bit depth specification. */
static readonly BMP_X8R8G8B8: number
/** A8 R8 G8 B8 advanced bit depth specification (same as normal 32 bit mode) */
static readonly BMP_A8R8G8B8: number
}
declare class CopyrightedType {
  /** The document is copyrighted. */
static readonly COPYRIGHTEDWORK: number
/** The document is in the public domain. */
static readonly PUBLICDOMAIN: number
/** The copyright status is not indicated. */
static readonly UNMARKED: number
}
declare class BitmapConversionType {
  /** 50% Threshold. */
static readonly HALFTHRESHOLD: number
/** Applies a halftone-like square pattern to determine the value of pixels. */
static readonly PATTERNDITHER: number
/** Applies a random pattern that is usually less noticeable than pattern dither. The dither effects are diffused across adjacent pixels. If you select this algorithm, specify a dither percentage to control the amount of dithering applied to the image. */
static readonly DIFFUSIONDITHER: number
/** Lets you convert a grayscale image to simulated halftone dots. */
static readonly HALFTONESCREEN: number
/** Simulates the effect of printing a grayscale image through a custom halftone screen. This method lets you apply a screen texture, such as a wood grain, to an image. To use this option, you must first define a pattern. */
static readonly CUSTOMPATTERN: number
}
declare class BitmapHalfToneType {
  /** Round. */
static readonly ROUND: number
/** Diamond. */
static readonly DIAMOND: number
/** Ellipse. */
static readonly ELLIPSE: number
/** Line. */
static readonly LINE: number
/** Square. */
static readonly SQUARE: number
/** Cross. */
static readonly CROSS: number
}
declare class MatteType {
  /** None. */
static readonly NONE: number
/** The current foreground color. */
static readonly FOREGROUND: number
/** The current background color. */
static readonly BACKGROUND: number
/** White. */
static readonly WHITE: number
/** Black. */
static readonly BLACK: number
/** 50% gray. */
static readonly SEMIGRAY: number
/** Gray. */
static readonly NETSCAPE: number
}
declare class AdjustmentReference {
  /** A percentage of the existing color amount. */
static readonly RELATIVE: number
/** A percentage of the whole. */
static readonly ABSOLUTE: number
}
declare class OpenDocumentMode {
  /** Grayscale. */
static readonly GRAYSCALE: number
/** RGB. */
static readonly RGB: number
/** CMYK. */
static readonly CMYK: number
/** Lab. */
static readonly LAB: number
}
declare class NewDocumentMode {
  /** Grayscale. */
static readonly GRAYSCALE: number
/** RGB. */
static readonly RGB: number
/** CMYK. */
static readonly CMYK: number
/** Lab. */
static readonly LAB: number
/** Bitmap. */
static readonly BITMAP: number
}
declare class PhotoCDColorSpace {
  /** RGB with 8 bits per channel. */
static readonly RGB8: number
/** RGB with 16 bits per channel. */
static readonly RGB16: number
/** Lab with 8 bits per channel. */
static readonly LAB8: number
/** Lab with 16 bits per channel. */
static readonly LAB16: number
}
declare class StrokeLocation {
  /** The border is placed inside the selection or layer boundaries. */
static readonly INSIDE: number
/** The border is placed in the center of the the selection or layer boundaries. */
static readonly CENTER: number
/** The border is placed outside the selection or layer boundaries. */
static readonly OUTSIDE: number
}
declare class ColorModel {
  /** Grayscale. */
static readonly GRAYSCALE: number
/** RGB. */
static readonly RGB: number
/** CMYK. */
static readonly CMYK: number
/** Lab. */
static readonly LAB: number
/** HSB. */
static readonly HSB: number
/** The color model has not yet been assigned. */
static readonly NONE: number
}
declare class JavaScriptExecutionMode {
  /** Never show the JavaScript debugger. Treat runtime errors by throwing a JavaScript exceptions. */
static readonly NEVER: number
/** Show the JavaScript debugger if a runtime error occurs. */
static readonly ONRUNTIMEERROR: number
/** Show the JavaScript debugger when the first line of the JavaScript executes. */
static readonly BEFORERUNNING: number
}
declare class SourceSpaceType {
  /** The document color space. */
static readonly DOCUMENT: number
/** The proof color space. */
static readonly PROOF: number
}
declare class LayerKind {
  /** Normal. */
static readonly NORMAL: number
/** Text. */
static readonly TEXT: number
/** Solid color. */
static readonly SOLIDFILL: number
/** Gradient fill. */
static readonly GRADIENTFILL: number
/** Pattern fill. */
static readonly PATTERNFILL: number
/** Levels adjustment layer. */
static readonly LEVELS: number
/** Curves adjustment layer. */
static readonly CURVES: number
/** Color balance adjustment layer. */
static readonly COLORBALANCE: number
/** Brightness contrast adjustment layer. */
static readonly BRIGHTNESSCONTRAST: number
/** Hue saturation adjustment laye. */
static readonly HUESATURATION: number
/** Selective color adjustment layer. */
static readonly SELECTIVECOLOR: number
/** Channel mixer adjustment layer. */
static readonly CHANNELMIXER: number
/** Gradient map adjustment laye. */
static readonly GRADIENTMAP: number
/** Invert adjustment layer. */
static readonly INVERSION: number
/** Threshold adjustment layer. */
static readonly THRESHOLD: number
/** Posterize adjustment layer. */
static readonly POSTERIZE: number
/** Smart object layer. */
static readonly SMARTOBJECT: number
/** Photo filter layer. */
static readonly PHOTOFILTER: number
/** Exposure layer. */
static readonly EXPOSURE: number
/** 3D layer. */
static readonly LAYER3D: number
/** Video layer. */
static readonly VIDEO: number
/** Black and white layer. */
static readonly BLACKANDWHITE: number
/** Vibrance layer. */
static readonly VIBRANCE: number
/** Color lookup layer. */
static readonly COLORLOOKUP: number
}
declare class TransitionType {
  /** Images transition in horizontal stripes like Venetian blinds. */
static readonly BLINDSHORIZONTAL: number
/** Images transition in vertical stripes. */
static readonly BLINDSVERTICAL: number
/** One image dissolves into the next. */
static readonly DISSOLVE: number
/** Images transition using a shrinking box shape. */
static readonly BOXIN: number
/** Images transition using an expanding box shape. */
static readonly BOXOUT: number
/** Images dissolve top to bottom. */
static readonly GLITTERDOWN: number
/** Images dissolve left to right. */
static readonly GLITTERRIGHT: number
/** Images dissolve top-left to bottom-right. */
static readonly GLITTERRIGHTDOWN: number
/** Images change with no visible transition. */
static readonly NONE: number
/** Images transition using random effects. */
static readonly RANDOM: number
/** The new images roll in from the top and bottom of the screen. */
static readonly SPLITHORIZONTALIN: number
/** The new image spreads from the middle of the screen to the top and bottom of the screen. */
static readonly SPLITHORIZONTALOUT: number
/** The new image rolls in from the left and right edges of the screen. */
static readonly SPLITVERTICALIN: number
/** The new image rolls out from the middle of the screen to the left and right edges of the screen. */
static readonly SPLITVERTICALOUT: number
/** The new image rolls in from the top of the screen. */
static readonly WIPEDOWN: number
/** The new image rolls in from the right side of the screen. */
static readonly WIPELEFT: number
/** The new image rolls in from the left side of the screen. */
static readonly WIPERIGHT: number
/** The new image rolls in from the bottom of the screen. */
static readonly WIPEUP: number
}
declare class GalleryFontType {
  /** Arial font. */
static readonly ARIAL: number
/** Courier New font. */
static readonly COURIERNEW: number
/** Helvetica font. */
static readonly HELVETICA: number
/** Times New Roman font. */
static readonly TIMESNEWROMAN: number
}
declare class GalleryConstrainType {
  /** Constrain width. */
static readonly CONSTRAINWIDTH: number
/** Constrain the height of the image. */
static readonly CONSTRAINHEIGHT: number
/** Constrain both the height and the width of the image. */
static readonly CONSTRAINBOTH: number
}
declare class GalleryThumbSizeType {
  /** Small thumbnail. */
static readonly SMALL: number
/** Medium thumbnail. */
static readonly MEDIUM: number
/** Large thumbnail. */
static readonly LARGE: number
/** Custom thumbnail. */
static readonly CUSTOM: number
}
declare class GallerySecurityType {
  /** No security. */
static readonly NONE: number
/** Custom text security. */
static readonly CUSTOMTEXT: number
/** Filename security. */
static readonly FILENAME: number
/** Copyright security. */
static readonly COPYRIGHT: number
/** Caption security. */
static readonly CAPTION: number
/** Credit security. */
static readonly CREDIT: number
/** Title security. */
static readonly TITLE: number
}
declare class PicturePackageTextType {
  /** No text. */
static readonly NONE: number
/** The text is user defined. */
static readonly USER: number
/** The text is the filename. */
static readonly FILENAME: number
/** The text is the copyright. */
static readonly COPYRIGHT: number
/** The text is a caption. */
static readonly CAPTION: number
/** The text is the credit. */
static readonly CREDIT: number
/** The text is the origin. */
static readonly ORIGIN: number
}
declare class GallerySecurityTextColorType {
  /** Black text. */
static readonly BLACK: number
/** White text. */
static readonly WHITE: number
/** Custom color. */
static readonly CUSTOM: number
}
declare class GallerySecurityTextPositionType {
  /** Text is centered on each image. */
static readonly CENTERED: number
/** Text is in the upper left corner of each image. */
static readonly UPPERLEFT: number
/** Ltext is in the lower left corner of each image. */
static readonly LOWERLEFT: number
/** Text is in the upper right corner of each image. */
static readonly UPPERRIGHT: number
/** Text is in the lower right corner of each image. */
static readonly LOWERRIGHT: number
}
declare class GallerySecurityTextRotateType {
  /** No rotate. */
static readonly ZERO: number
/** Rotate 45 degrees clock wise. */
static readonly CLOCKWISE45: number
/** Rotate 90 degrees clock wise. */
static readonly CLOCKWISE90: number
/** Rotate 45 degrees counter clock wise. */
static readonly COUNTERCLOCKWISE45: number
/** Rotate 90 degrees counter clock wise. */
static readonly COUNTERCLOCKWISE90: number
}
declare class QueryStateType {
  /** Always maximize compatibility. */
static readonly ALWAYS: number
/** Always ask about maximize compatibility. */
static readonly ASK: number
/** Never ask about maximize compatibility. */
static readonly NEVER: number
}
declare class SaveLogItemsType {
  /** Save history log in file metadata. */
static readonly METADATA: number
/** Save history log in a text file. */
static readonly LOGFILE: number
/** Save history log in file metadata and a text file. */
static readonly LOGFILEANDMETADATA: number
}
declare class EditLogItemsType {
  /** Save a history for only for the session. */
static readonly SESSIONONLY: number
/** Save a concise history log. */
static readonly CONCISE: number
/** Save a detailed history log. */
static readonly DETAILED: number
}
declare class PathKind {
  /** Normal path. */
static readonly NORMALPATH: number
/** Clipping path. */
static readonly CLIPPINGPATH: number
/** Workpath. */
static readonly WORKPATH: number
/** Vector mask path. */
static readonly VECTORMASK: number
/** Text mask path. */
static readonly TEXTMASK: number
}
declare class ShapeOperation {
  /** Adds the shapes. */
static readonly SHAPEADD: number
/** Replaces the shape in the destination image with the loaded selection. */
static readonly SHAPEXOR: number
/** The resulting shape is the area of intersection between the two shapes. */
static readonly SHAPEINTERSECT: number
/** Subtracts the loaded shape from the selection is the destination image. */
static readonly SHAPESUBTRACT: number
}
declare class PointKind {
  /** The point can be a curve. */
static readonly SMOOTHPOINT: number
/** The point must be a corner. */
static readonly CORNERPOINT: number
}
declare class ToolType {
  /** Pencil. */
static readonly PENCIL: number
/** Brush. */
static readonly BRUSH: number
/** Eraser. */
static readonly ERASER: number
/** Background eraser. */
static readonly BACKGROUNDERASER: number
/** Clone stamp. */
static readonly CLONESTAMP: number
/** Pattern stamp. */
static readonly PATTERNSTAMP: number
/** Healing brush. */
static readonly HEALINGBRUSH: number
/** History brush. */
static readonly HISTORYBRUSH: number
/** Art history brush. */
static readonly ARTHISTORYBRUSH: number
/** Smudge. */
static readonly SMUDGE: number
/** Blur. */
static readonly BLUR: number
/** Sharpen. */
static readonly SHARPEN: number
/** Dodge. */
static readonly DODGE: number
/** Burn. */
static readonly BURN: number
/** Sponge. */
static readonly SPONGE: number
/** Color replacement tool. */
static readonly COLORREPLACEMENTTOOL: number
}
declare class BatchDestinationType {
  /** Leaves all files open. */
static readonly NODESTINATION: number
/** Saves changes and closes all files. */
static readonly SAVEANDCLOSE: number
/** Outputs files to a folder. */
static readonly FOLDER: number
}
declare class FileNamingType {
  /** Use the document name in mixed case. */
static readonly DOCUMENTNAMEMIXED: number
/** Use the document name in lower case. */
static readonly DOCUMENTNAMELOWER: number
/** Use the document name in UPPER case. */
static readonly DOCUMENTNAMEUPPER: number
/** Use a 1-digit serial number. */
static readonly SERIALNUMBER1: number
/** Use a 2-digit serial number. */
static readonly SERIALNUMBER2: number
/** Use a 3-digit serial number. */
static readonly SERIALNUMBER3: number
/** Use a 4-digit serial number. */
static readonly SERIALNUMBER4: number
/** Use letter serial number lower case (a, b, c, ...) */
static readonly SERIALLETTERLOWER: number
/** Use letter serial number UPPER case (A, B, C, ...) */
static readonly SERIALLETTERUPPER: number
/** Uses the date formatted as mmddyy. */
static readonly MMDDYY: number
/** Uses the date formatted as mmdd. */
static readonly MMDD: number
/** Uses the date formatted as yyyymmdd. */
static readonly YYYYMMDD: number
/** Uses the date formatted as yymmdd. */
static readonly YYMMDD: number
/** Uses the date formatted as yyddmm. */
static readonly YYDDMM: number
/** Uses the date formatted as ddmmyy. */
static readonly DDMMYY: number
/** Uses the date formatted as ddmm. */
static readonly DDMM: number
/** Use the extension of the file in lower case. */
static readonly EXTENSIONLOWER: number
/** Use the extension of the file in UPPER case. */
static readonly EXTENSIONUPPER: number
}
declare class DepthMapSource {
  /** No depth map in use. */
static readonly NONE: number
/** Uses the transparency channel for the depth map. */
static readonly TRANSPARENCYCHANNEL: number
/** Uses the layer mask for the depth map. */
static readonly LAYERMASK: number
/** Uses the image highlight for the depth map. */
static readonly IMAGEHIGHLIGHT: number
}
declare class Geometry {
  /** Triangle. */
static readonly TRIANGLE: number
/** Pentagon. */
static readonly PENTAGON: number
/** Hexagon. */
static readonly HEXAGON: number
/** Square. */
static readonly SQUARE: number
/** Heptagon. */
static readonly HEPTAGON: number
/** Octagon. */
static readonly OCTAGON: number
}
declare class ColorReductionType {
  /** Gives priority to colors for which the human eye has greater sensitivity. */
static readonly PERCEPTUAL: number
/** Gives priority to broad areas of color and the preservation of web colors; usually produces images with the greatest color integrity. */
static readonly SELECTIVE: number
/** Samples color from the spectrum appearing most commonly in the image. */
static readonly ADAPTIVE: number
/** Uses the standard 216-color color table common to Windows and Mac OS 8-bit (256-color or web-safe palette); ensures that no browser dither is applied when the image is displayed using 8-bit color. */
static readonly RESTRICTIVE: number
/** Uses a color palette that is created or modified by the user. If you open an existing GIF or PNG-8 file, it will have a custom color palette. */
static readonly CUSTOM: number
/** Uses a set palette of colors. */
static readonly BLACKWHITE: number
/** Uses a set palette of colors. */
static readonly GRAYSCALE: number
/** Uses a set palette of colors. */
static readonly MACINTOSH: number
/** Uses a set palette of colors. */
static readonly WINDOWS: number
}
declare class CameraRAWSettingsType {
  /** Use the settings of the camera. */
static readonly CAMERA: number
/** Use the settings of the selected image. */
static readonly SELECTEDIMAGE: number
/** Use the custom settings. */
static readonly CUSTOM: number
}
declare class WhiteBalanceType {
  /** Use the settings of the camera as shot. */
static readonly ASSHOT: number
/** Automatically use the white balance settings. */
static readonly AUTO: number
/** Use the settings as shot in daylight. */
static readonly DAYLIGHT: number
/** Use the settings as shot on a cloudy day. */
static readonly CLOUDY: number
/** Use the settings as shot in the shade. */
static readonly SHADE: number
/** Use the settings as shot with tungsten lighting. */
static readonly TUNGSTEN: number
/** Use the settings as shot with fluorescent lighting. */
static readonly FLUORESCENT: number
/** Use the settings as shot with a flash. */
static readonly FLASH: number
/** Use the custom settings for the shot parameters. */
static readonly CUSTOM: number
}
declare class ColorSpaceType {
  /** Use the Adobe RGB color space. */
static readonly ADOBERGB: number
/** Use the ColorMatch RGB color space. */
static readonly COLORMATCHRGB: number
/** Use the ProPhoto RGB color space. */
static readonly PROPHOTORGB: number
/** Use the sRGB color space. */
static readonly SRGB: number
}
declare class CameraRAWSize {
  /** 1536 x 1024 image. */
static readonly MINIMUM: number
/** 2048 x 1365 image. */
static readonly SMALL: number
/** 3072 x 2048 image. */
static readonly MEDIUM: number
/** 4096 x 2731 image. */
static readonly LARGE: number
/** 5120 x 3413 image. */
static readonly EXTRALARGE: number
/** 6144 x 4096 image. */
static readonly MAXIMUM: number
}
declare class MagnificationType {
  /** Displays the image at actual size. */
static readonly ACTUALSIZE: number
/** Fits the image to the page. */
static readonly FITPAGE: number
}
declare class CropToType {
  /** Crop to the bounding box. */
static readonly BOUNDINGBOX: number
/** Crop to the media box. */
static readonly MEDIABOX: number
/** Crop to the crop box. */
static readonly CROPBOX: number
/** Crop to the bleed box. */
static readonly BLEEDBOX: number
/** Crop to the trim box. */
static readonly TRIMBOX: number
/** Crop to the art box. */
static readonly ARTBOX: number
}
declare class FontPreviewType {
  /** No preview. */
static readonly NONE: number
/** Small type. */
static readonly SMALL: number
/** Medium type. */
static readonly MEDIUM: number
/** Large type. */
static readonly LARGE: number
/** Extra large preview. */
static readonly EXTRALARGE: number
/** Huge preview. */
static readonly HUGE: number
}
declare class FontSize {
  /** Small size. */
static readonly SMALL: number
/** Medium size. */
static readonly MEDIUM: number
/** Large size. */
static readonly LARGE: number
}
declare class MeasurementSource {
  /** The measure selection. */
static readonly MEASURESELECTION: number
/** The measure count tool. */
static readonly MEASURECOUNTTOOL: number
/** The measure ruler tool. */
static readonly MEASURERULERTOOL: number
}
declare class MeasurementRange {
  /** All measurements. */
static readonly ALLMEASUREMENTS: number
/** Only active measurements. */
static readonly ACTIVEMEASUREMENTS: number
}
declare class Documents {
  /**
 * A document.
* @param width - The width of the document.
* @param height - The height of the document.
* @param resolution - The resolution of the document (in pixels per inch)
* @param name - The name of the document.
* @param mode - The document mode.
* @param initialFill - The initial fill of the document.
* @param pixelAspectRatio - The initial pixel aspect ratio of the document.
* @param bitsPerChannel - The number of bits per channel.
* @param colorProfileName - The name of color profile for document.
*/
static add(width?: UnitValue, height?: UnitValue, resolution?: number, name?: string, mode?: NewDocumentMode, initialFill?: DocumentFill, pixelAspectRatio?: number, bitsPerChannel?: BitsPerChannelType, colorProfileName?: string): Document
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
[index:number]: Document
}
declare class Layers {
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
[index:number]: Layer
}
declare class LayerSets {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Adds an element.
*/
add(): LayerSet
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): LayerSet
[index:number]: LayerSet
}
declare class ArtLayers {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Adds an element.
*/
add(): ArtLayer
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): ArtLayer
[index:number]: ArtLayer
}
declare class Channels {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Adds an element.
*/
add(): Channel
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): Channel
[index:number]: Channel
}
declare class Guides {
  /**
 * A guide.
* @param direction - Indicates whether the guide is vertical or horizontal.
* @param coordinate - Location of the guide from origin of image.
*/
static add(direction: Direction, coordinate: UnitValue): Guide
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): Guide
}
declare class HistoryStates {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): HistoryState
[index:number]: HistoryState
}
declare class LayerComps {
  /**
 * Adds a layer comp.
* @param name - The name of the layer comp.
* @param comment - The description of the layer comp.
* @param appearance - If true, uses the layer appearance or style for this layer comp.
* @param position - If true, uses the layer position for this layer comp.
* @param visibility - If true, uses the layer visibility for this layer comp.
*/
static add(name: string, comment?: string, appearance?: boolean, position?: boolean, visibility?: boolean): LayerComp
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): LayerComp
[index:number]: LayerComp
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
[index:number]: TextFont
}
declare class PathItems {
  /**
 * Creates a new path item.
* @param name - The name for the new path.
* @param entirePath - The item's sub paths.
*/
static add(name: string, entirePath: SubPathInfo): PathItem
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): PathItem
[index:number]: PathItem
}
declare class SubPathItems {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): SubPathItem
[index:number]: SubPathItem
}
declare class PathPoints {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): PathPoint
[index:number]: PathPoint
}
declare class Notifiers {
  /**
 * Creates a notifier.
* @param event - The class id of the event, four characters or a unique string.
* @param eventFile - The script file to execute when the event occurs.
* @param eventClass - The class of the object the event is applied to, four characters or a unique string. When an event applies to multiple types of objects, you use the event class parameter to distinguish which object this Notifier applies to. For example, the Make event (“Mk“) applies to documents (“Dcmn”), channels (“Chnl”) and other objects.
*/
static add(event: string, eventFile: File, eventClass?: string): Notifier
/**
 * Deletes all elements.
*/
static removeAll(): void
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): Notifier
[index:number]: Notifier
}
declare class CountItems {
  /**
 * Creates a count item.
* @param position - The position of origin.
*/
static add(position: UnitValue[]): CountItem
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): CountItem
[index:number]: CountItem
}
declare class ColorSamplers {
  /**
 * Creates a color sampler.
* @param position - The horizontal and vertical (x,y) locations, respectively, of the color sampler.
*/
static add(position: UnitValue[]): ColorSampler
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Number of elements in the collection. */
readonly length: number/**
 * Get the first element in the collection with the provided name.
* @param name - undefined
*/
getByName(name: string): ColorSampler
[index:number]: ColorSampler
}
declare class OpenOptions {
  
}
declare class PhotoCDOpenOptions extends OpenOptions {
  /** The dimensions of the image. */
static pixelSize: PhotoCDSize
/** The profile to use when reading the image. */
static colorProfileName: string
/** The resolution of the image (in pixels per inch) */
static resolution: number
/** The color space for the image. */
static colorSpace: PhotoCDColorSpace
/** The image orientation. */
static orientation: Orientation
}
declare class RawFormatOpenOptions extends OpenOptions {
  /** The image height (in pixels) */
static height: number
/** The image width (in pixels) */
static width: number
/** The number of channels in the image. Valid only when 'bits per channel' = 16. Range: 1 to 56. */
static channelNumber: number
/** If true, color values are stored sequentially. */
static interleaveChannels: boolean
/** The number of bits for each channel. Valid values: 8 or 16. */
static bitsPerChannel: number
/** The order in which bytes will be read. Valid only when 'bits per channel' = 16. */
static byteOrder: ByteOrderType
/** The number of bytes of information that will appear in the file before actual image information begins; that is, the number of zeroes inserted at the beginning of the file as placeholders. Range: 0 to 1919999. */
static headerSize: number
/** If true, the header is retained when saving. */
static retainHeader: boolean
}
declare class GenericPDFOpenOptions extends OpenOptions {
  /** The resolution of the document (in pixels per inch) */
static resolution: number
/** The document mode. */
static mode: OpenDocumentMode
/** If true, anti-aliasing is used. */
static antiAlias: boolean
/** The number of the page or image to open. */
static page: number
/** The number of the 3d object to open. */
static object: number
/** DEPRECATED. */
static constrainProportions: boolean
/** DEPRECATED. */
static height: UnitValue
/** DEPRECATED. */
static width: UnitValue
/** The number of bits per channel. */
static bitsPerChannel: BitsPerChannelType
/** If true, the value specified in the page property refers to a page number. If false, the value specifies an image number. */
static usePageNumber: boolean
/** If true, the value specified in the page property refers to a page number. If false, the value specifies an image number. */
static use3DObjectNumber: boolean
/** The name of the document. */
static name: string
/** The cropping method to use. */
static cropPage: CropToType
/** If true, suppresses any warnings that may occur during opening. */
static suppressWarnings: boolean
}
declare class GenericEPSOpenOptions extends OpenOptions {
  /** The image height. */
static height: UnitValue
/** The image width. */
static width: UnitValue
/** The resolution of the document (in pixels per inch) */
static resolution: number
/** The document mode. */
static mode: OpenDocumentMode
/** If true, anti-aliasing is used. */
static antiAlias: boolean
/** If true, the image proportions are constrained. */
static constrainProportions: boolean
}
declare class DICOMOpenOptions extends OpenOptions {
  /** If true, patient information is anonymized. */
static anonymize: boolean
/** If true, overlays are shown (if present). */
static showOverlays: boolean
/** The number of rows in an n-up configuration. */
static rows: number
/** The number of columns in an n-up configuration. */
static columns: number
/** The brightness of the image in Houndsfield units. */
static windowWidth: number
/** The contrast of the image in Houndsfield units. */
static windowLevel: number
/** If true, the image is inverted. */
static reverse: boolean
}
declare class CameraRAWOpenOptions extends OpenOptions {
  /** The image color space. */
static colorSpace: ColorSpaceType
/** The number of bits per channel. */
static bitsPerChannel: BitsPerChannelType
/** The size of the new document. */
static size: CameraRAWSize
/** The resolution of the document (in pixels per inch) */
static resolution: number
/** The global settings for all Camera RAW options. */
static settings: CameraRAWSettingsType
/** The white balance options for the image. */
static whiteBalance: WhiteBalanceType
/** The temperature of the shot. Range: 2000 to 50000. */
static temperature: number
/** The tint of the shot. Range: -150 to 150. */
static tint: number
/** The exposure of the shot. Range: -4.0 to 4.0. */
static exposure: number
/** The shadows of the shot. Range: 0 to 100. */
static shadows: number
/** The brightness of the shot. Range: 0 to 150. */
static brightness: number
/** The constrast of the shot. Range: -50 to 100. */
static contrast: number
/** The saturation of the shot. Range: -100 to 100. */
static saturation: number
/** The sharpness of the shot. Range: 0 to 100. */
static sharpness: number
/** The luminance smoothing of the shot. Range: 0 to 100. */
static luminanceSmoothing: number
/** The color noise reduction of the shot. Range: 0 to 100. */
static colorNoiseReduction: number
/** The chromatic aberration R/C of the shot. Range: -100 to 100. */
static chromaticAberrationRC: number
/** The chromatic aberration B/Y of the shot. Range: -100 to 100. */
static chromaticAberrationBY: number
/** The vignetting amount of the shot. Range: -100 to 100. */
static vignettingAmount: number
/** The vignetting mid point of the shot. Range: -100 to 100. */
static vignettingMidpoint: number
/** The shadow tint of the shot. Range: -100 to 100. */
static shadowTint: number
/** The red hue of the shot. Range: -100 to 100. */
static redHue: number
/** The red saturation of the shot. Range: -100 to 100. */
static redSaturation: number
/** The green hue of the shot. Range: -100 to 100. */
static greenHue: number
/** The green saturation of the shot. Range: -100 to 100. */
static greenSaturation: number
/** The blue hue of the shot. Range: -100 to 100. */
static blueHue: number
/** The blue saturation of the shot. Range: -100 to 100. */
static blueSaturation: number
}
declare class SaveOptions {
  /** Save changes. */
static readonly SAVECHANGES: number
/** Do not save changes. */
static readonly DONOTSAVECHANGES: number
/** Ask the user whether to save. */
static readonly PROMPTTOSAVECHANGES: number
}
declare class PhotoshopSaveOptions extends SaveOptions {
  /** If true, the alpha channels are saved. */
static alphaChannels: boolean
/** If true, the layers are saved. */
static layers: boolean
/** If true, the annotations are saved. */
static annotations: boolean
/** If true, spot colors are saved. */
static spotColors: boolean
/** If true, the color profile is embedded in the document. */
static embedColorProfile: boolean
}
declare class BMPSaveOptions extends SaveOptions {
  /** If true, the alpha channels are saved. */
static alphaChannels: boolean
/** The target operating system. */
static osType: OperatingSystem
/** The number of bits per sample. */
static depth: BMPDepthType
/** If true, RLE compression is used. */
static rleCompression: boolean
/** If true, the image is written from bottom to top. */
static flipRowOrder: boolean
}
declare class GIFSaveOptions extends SaveOptions {
  /** The number of colors in palette. Not valid for all palette types. */
static colors: number
/** The type of dither. */
static dither: DitherType
/** The amount of dither. Valid only when 'dither type' is diffusion. Range: 1 to 100. */
static ditherAmount: number
/** The type of colors to force into the color palette. */
static forced: ForcedColors
/** If true, rows are interlaced. */
static interlaced: boolean
/** The color to use to fill anti-aliased edges adjacent to transparent areas of the image. Default: white. */
static matte: MatteType
/** The type of palette to use. */
static palette: PaletteType
/** If true, protects colors in the image that contain entries in the color table from being dithered. Valid only when 'dither' = diffusion. */
static preserveExactColors: boolean
/** If true, preserves transparent ares of the image during GIF conversion. */
static transparency: boolean
}
declare class EPSSaveOptions extends SaveOptions {
  /** If true, the color profile is embedded in the document. */
static embedColorProfile: boolean
/** The type of preview. */
static preview: MacPreviewType
/** The type of encoding to use for the document. */
static encoding: SaveEncoding
/** If true, includes the halftone screen. */
static halftoneScreen: boolean
/** If true, includes the transfer functions in the document to compensate for dot gain between the image and film. */
static transferFunction: boolean
/** If true, uses PostScript color management. */
static psColorManagement: boolean
/** If true, includes vector data. Valid only when the document contains vector data (un-rasterized text). */
static vectorData: boolean
/** If true, uses image interpolation. */
static interpolation: boolean
/** If true, displays white areas as transparent. Valid only for documents in BitMap mode. */
static transparentWhites: boolean
}
declare class JPEGSaveOptions extends SaveOptions {
  /** If true, the color profile is embedded in the document. */
static embedColorProfile: boolean
/** The download format to use. */
static formatOptions: FormatOptionsType
/** The color to use to fill anti-aliased edges adjacent to transparent areas of the image. Default: white. */
static matte: MatteType
/** The number of scans. Valid only for progressive type JPEG files. */
static scans: number
/** The quality of the produced image. */
static quality: number
}
declare class PDFSaveOptions extends SaveOptions {
  /** If true, the alpha channels are saved. */
static alphaChannels: boolean
/** If true, the layers are saved. */
static layers: boolean
/** If true, the annotations are saved. */
static annotations: boolean
/** If true, the spot colors are saved. */
static spotColors: boolean
/** If true, the color profile is embedded in the document. */
static embedColorProfile: boolean
/** DEPRECATED, ( should the embedded color profile be downgraded to version 2 ) */
static downgradeColorProfile: boolean
/** DEPRECATED. */
static transparency: boolean
/** DEPRECATED. ( use image interpolation? ) */
static interpolation: boolean
/** DEPRECATED. ( include vector data ) */
static vectorData: boolean
/** DEPRECATED. ( embed fonts? Only valid if a text layer is included ) */
static embedFonts: boolean
/** DEPRECATED. ( use outlines for text? Only valid if vector data is included ) */
static useOutlines: boolean
/** The encoding method to use. */
static encoding: PDFEncodingType
/** The quality of the produced image. Valid only for JPEG-encoded PDF documents. Range: 0 to 12. */
static jpegQuality: number
/** The preset file to use for settings; overrides other settings. */
static presetFile: string
/** The PDF standard to make the document compatible with. */
static PDFStandard: PDFStandardType
/** The PDF version to make the document compatible with. */
static PDFCompatibility: PDFCompatibilityType
/** Description of the save options in use. */
static description: string
/** If true, allows users to reopen the PDF in Photoshop with native Photoshop data intact. */
static preserveEditing: boolean
/** If true, includes a small preview image in Acrobat. */
static embedThumbnail: boolean
/** If true, improves performance of PDFs on Web servers. */
static optimizeForWeb: boolean
/** If true, opens the saved PDF in Acrobat. */
static view: boolean
/** The downsample method to use. */
static downSample: PDFResampleType
/** The size (in pixels per inch) to downsample images to if they exceed the value specified for 'down sample size limit'. */
static downSampleSize: number
/** Limits downsampling or subsampling to images that exceed this value (in pixels per inch). */
static downSampleSizeLimit: number
/** The compression option. Valid only when encoding is JPEG2000. */
static tileSize: number
/** If true, converts a 16-bit image to 8-bit for better compatibility with other applications. */
static convertToEightBit: boolean
/** If true, converts the color profile to the destination profile. */
static colorConversion: boolean
/** Describes the final RGB or CMYK output device, such as a monitor or press standard. */
static destinationProfile: string
/** If true, shows which profiles to include. */
static profileInclusionPolicy: boolean
/** An optional comment field for inserting descriptions of the output condition. The text is stored in the PDF/X file. */
static outputCondition: string
/** The identifier for the output condition. */
static outputConditionID: string
/** The URL where the output condition is registered. */
static registryName: string
}
declare class PICTFileSaveOptions extends SaveOptions {
  /** If true, the alpha channels are saved. */
static alphaChannels: boolean
/** If true, the color profile is embedded in the document. */
static embedColorProfile: boolean
/** The number of bits per pixel. */
static resolution: PICTBitsPerPixels
/** The compression method. */
static compression: PICTCompression
}
declare class PICTResourceSaveOptions extends SaveOptions {
  /** If true, the alpha channels are saved. */
static alphaChannels: boolean
/** If true, the color profile is embedded in the document. */
static embedColorProfile: boolean
/** The number of bits per pixel. */
static resolution: PICTBitsPerPixels
/** The compression type. */
static compression: PICTCompression
/** The ID of the PICT resource. */
static resourceID: number
/** The name of PICT resource. */
static name: string
}
declare class PixarSaveOptions extends SaveOptions {
  /** If true, the alpha channels are saved. */
static alphaChannels: boolean
}
declare class PNGSaveOptions extends SaveOptions {
  /** If true, rows are interlaced. */
static interlaced: boolean
/** Compression used on the image. */
static compression: number
}
declare class RawSaveOptions extends SaveOptions {
  /** If true, the alpha channels are saved. */
static alphaChannels: boolean
/** If true, spot colors are saved. */
static spotColors: boolean
}
declare class SGIRGBSaveOptions extends SaveOptions {
  /** If true, the alpha channels are saved. */
static alphaChannels: boolean
/** If true, the spot colors are saved. */
static spotColors: boolean
}
declare class TargaSaveOptions extends SaveOptions {
  /** The number of bits per pixel. */
static resolution: TargaBitsPerPixels
/** If true, RLE compression is used. */
static rleCompression: boolean
/** If true, the alpha channels are saved. */
static alphaChannels: boolean
}
declare class TiffSaveOptions extends SaveOptions {
  /** If true, the alpha channels are saved. */
static alphaChannels: boolean
/** If true, the layers are saved. */
static layers: boolean
/** If true, the annotations are saved. */
static annotations: boolean
/** If true, spot colors are saved. */
static spotColors: boolean
/** If true, the color profile is embedded in the document. */
static embedColorProfile: boolean
/** The compression type. */
static imageCompression: TiffEncodingType
/** The quality of the produced image, which is inversely proportionate to the amount of JPEG compression. Valid only for JPEG compressed TIFF documents. Range: 0 to 12. */
static jpegQuality: number
/** The order in which the bytes will be read. Default: Mac OS when running in Mac OS, and IBM PC when running in Windows. */
static byteOrder: ByteOrderType
/** If true, preserves multi-resolution information. */
static saveImagePyramid: boolean
/** If true, saves the transparency as an additional alpha channel when the file is opened in another application. */
static transparency: boolean
/** The method of compression to use when saving layers (as opposed to saving composite data). Valid only when 'layers' = true. */
static layerCompression: LayerCompressionType
/** If true, the channels in the image are interleaved. */
static interleaveChannels: boolean
}
declare class DCS1_SaveOptions extends SaveOptions {
  /** If true, the color profile is embedded in the document. */
static embedColorProfile: boolean
/** The type of preview. */
static preview: MacPreviewType
/** The DCS type. */
static DCS: DCSType
/** The type of encoding to use for the document. */
static encoding: SaveEncoding
/** If true, includes halftone screen. */
static halftoneScreen: boolean
/** If true, includes transfer functions in the document to compensate for dot gain between the image and film. */
static transferFunction: boolean
/** If true, includes vector data. Valid only if the document contains vector data (un-rasterized text). */
static vectorData: boolean
/** If true, image interpolation is used. */
static interpolation: boolean
}
declare class DCS2_SaveOptions extends SaveOptions {
  /** If true, the spot colors are saved. */
static spotColors: boolean
/** If true, the color profile is embedded in the document. */
static embedColorProfile: boolean
/** The type of preview. */
static preview: MacPreviewType
/** The DCS type. */
static DCS: DCSType
/** If true, saves color channels as multiple files. */
static multiFileDCS: boolean
/** The type of encoding to use for document. */
static encoding: SaveEncoding
/** If true, includes halftone screen. */
static halftoneScreen: boolean
/** If true, includes transfer functions in the document to compensate for dot gain between the image and film. */
static transferFunction: boolean
/** If true, includes vector data. Valid only if the document contains vector data (un-rasterized text). */
static vectorData: boolean
/** If true, image interpolation is used. */
static interpolation: boolean
}
declare class ExportOptions {
  
}
declare class ExportOptionsIllustrator extends ExportOptions {
  /** The path to export. */
static path: IllustratorPathType
/** The name of the path to export. Valid only for named paths. */
static pathName: string
}
declare class ExportOptionsSaveForWeb extends ExportOptions {
  /** The file format to use. Save For Web supports only Compuserve GIF, JPEG, PNG-8, PNG-24, and BMP formats. */
static format: SaveDocumentType
/** If true, uses 8 bits. If false, uses 24 bits. Valid only when 'format' = PNG. */
static PNG8: boolean
/** The amount of lossiness allowed. */
static lossy: number
/** The color reduction algorithm. */
static colorReduction: ColorReductionType
/** The number of colors in the palette. */
static colors: number
/** The type of dither. */
static dither: DitherType
/** The amount of dither. Valid only when 'dither' = diffusion. */
static ditherAmount: number
/** If true, transparent areas of the image are included in the saved image. */
static transparency: boolean
/** The transparency dither algorithm. */
static transparencyDither: DitherType
/** The amount of transparency dither. Valid only when 'transparency' = true. */
static transparencyAmount: number
/** If true, the image downloads in multiple passes, progressive. */
static interlaced: boolean
/** The colors to blend transparent pixels against. */
static matteColor: RGBColor
/** The tolerance amount within which to snap close colors to web palette colors. */
static webSnap: number
/** If true, creates smaller but less compatible files. */
static optimized: boolean
/** The quality of the produced image (as a percentage). Range: 0 to 100. */
static quality: number
/** If true, includes the document's embedded profile. */
static includeProfile: boolean
/** The amount of blur to apply to the image to reduce artifacts. */
static blur: number
}
declare class DocumentConversionOptions {
  
}
declare class BitmapConversionOptions extends DocumentConversionOptions {
  /** The output resolution (in pixels per inch) */
static resolution: number
/** The conversion method. */
static method: BitmapConversionType
/** The name of the pattern to use. Valid only when 'method' = custom. */
static patternName: string
/** The number of printer dots per inch. Valid only when 'method' = halftone screen. Range: 1.0 to 999.99. */
static frequency: number
/** The angle (in degrees) at which to orient individual dots. Valid only when 'method' = halftone screen. Range: -180 to 180. */
static angle: number
/** The dot shape. Valid only when 'method' = halftone screen. */
static shape: BitmapHalfToneType
}
declare class IndexedConversionOptions extends DocumentConversionOptions {
  /** The type of palette. */
static palette: PaletteType
/** The number of colors in the palette. Not valid for all palette types. */
static colors: number
/** The type of colors to force into the color palette. */
static forced: ForcedColors
/** If true, preserves transparent areas of the image during conversion to GIF format. */
static transparency: boolean
/** The type of dither. */
static dither: DitherType
/** The amount of dither. Valid only when 'dither' = diffusion. */
static ditherAmount: number
/** If true, protects colors in the image that contain entries in the color table from being dithered. Valid only when 'dither' = diffusion. */
static preserveExactColors: boolean
/** The color to use to fill anti-aliased edges adjacent to transparent areas of the image. When transparency = false, the matte color is applied to transparent areas. */
static matte: MatteType
}
declare class Color {
  
}
declare class SolidColor {
  /** The color model. */
static model: ColorModel
/** The RGB color model. */
static rgb: RGBColor
/** The grayscale color model. */
static gray: GrayColor
/** The CMYK color model. */
static cmyk: CMYKColor
/** The lab color model. */
static lab: LabColor
/** The HSB color model. */
static hsb: HSBColor
/** The nearest web color to the current color. */
static readonly nearestWebColor: RGBColor
  /** The color model. */
model: ColorModel
/** The RGB color model. */
rgb: RGBColor
/** The grayscale color model. */
gray: GrayColor
/** The CMYK color model. */
cmyk: CMYKColor
/** The lab color model. */
lab: LabColor
/** The HSB color model. */
hsb: HSBColor
/** The nearest web color to the current color. */
readonly nearestWebColor: RGBColor/**
 * Compares two colors.
* @param color - Another color to compare with.
*/
isEqual(color: SolidColor): boolean
}
declare class GrayColor extends Color {
  /** The gray value. Range: 0.0 to 100.0. */
static gray: number
  /** The gray value. Range: 0.0 to 100.0. */
gray: number
}
declare class RGBColor extends Color {
  /** The red color value. Range: 0.0 to 255.0. */
static red: number
/** The green color value. Range: 0.0 to 255.0. */
static green: number
/** The blue color value. Range: 0.0 to 255.0. */
static blue: number
/** The hex representation of this color. */
static hexValue: string
  /** The red color value. Range: 0.0 to 255.0. */
red: number
/** The green color value. Range: 0.0 to 255.0. */
green: number
/** The blue color value. Range: 0.0 to 255.0. */
blue: number
/** The hex representation of this color. */
hexValue: string
}
declare class CMYKColor extends Color {
  /** The cyan color value. Range: 0.0 to 100.0. */
static cyan: number
/** The magenta color value. Range: 0.0 to 100.0. */
static magenta: number
/** The yellow color value. Range: 0.0 to 100.0. */
static yellow: number
/** The black color value. Range: 0.0 to 100.0. */
static black: number
  /** The cyan color value. Range: 0.0 to 100.0. */
cyan: number
/** The magenta color value. Range: 0.0 to 100.0. */
magenta: number
/** The yellow color value. Range: 0.0 to 100.0. */
yellow: number
/** The black color value. Range: 0.0 to 100.0. */
black: number
}
declare class LabColor extends Color {
  /** The L-value. Range: 0.0 to 100.0. */
static L: number
/** The a-value. Range: -128.0 and 127.0. */
static A: number
/** The b-value. Range: -128.0 and 127.0. */
static B: number
  /** The L-value. Range: 0.0 to 100.0. */
L: number
/** The a-value. Range: -128.0 and 127.0. */
A: number
/** The b-value. Range: -128.0 and 127.0. */
B: number
}
declare class HSBColor extends Color {
  /** The hue value. Range: 0.0 to 360.0. */
static hue: number
/** The saturation value. Range: 0.0 to 100.0. */
static saturation: number
/** The brightness value. Range: 0.0 to 100.0. */
static brightness: number
  /** The hue value. Range: 0.0 to 360.0. */
hue: number
/** The saturation value. Range: 0.0 to 100.0. */
saturation: number
/** The brightness value. Range: 0.0 to 100.0. */
brightness: number
}
declare class NoColor extends Color {
  
}
declare class PresentationOptions {
  /** If true, the file type is presentation. If false, the file type is Multi-Page document. */
static presentation: boolean
/** If true, the presentation auto advances. */
static autoAdvance: boolean
/** The amount of time (in seconds) before auto advancing the view. Valid only when 'auto advance' is true. Range: 1 to 60. */
static interval: number
/** If true, the presentation loops after the last page. */
static loop: boolean
/** The image transition type. */
static transition: TransitionType
/** The magnification type when viewing the image. */
static magnification: MagnificationType
/** If true, includes the file name for the image. */
static includeFilename: boolean
/** Options for creating the PDF file. */
static PDFFileOptions: PDFSaveOptions
}
declare class GalleryOptions {
  /** The style to use for laying out the web page. */
static layoutStyle: string
/** The email address to show on the web page. */
static emailAddress: string
/** Short web page extension .htm or long web page extension .html. */
static useShortExtension: boolean
/** Web page should use UTF-8 encoding. */
static useUTF8Encoding: boolean
/** Include all files found in sub folders of the input folder. */
static includeSubFolders: boolean
/** Add width and height attributes for images. */
static addSizeAttributes: boolean
/** Save all of the metadata in the JPEG files. */
static preserveAllMetadata: boolean
/** Options related to banner settings. */
static bannerOptions: GalleryBannerOptions
/** Options related to images settings. */
static imagesOptions: GalleryImagesOptions
/** Options related to thumbnail settings. */
static thumbnailOptions: GalleryThumbnailOptions
/** Options related to custom color settings. */
static customColorOptions: GalleryCustomColorOptions
/** Options related to security settings. */
static securityOptions: GallerySecurityOptions
}
declare class GalleryBannerOptions {
  /** Web photo gallery site name. */
static siteName: string
/** Web photo gallery photographer. */
static photographer: string
/** Web photo gallery contact info. */
static contactInfo: string
/** Web photo gallery date. */
static date: string
/** The font setting for the banner text. */
static font: GalleryFontType
/** The size of the font for the banner text. */
static fontSize: number
}
declare class GalleryImagesOptions {
  /** Add numeric links. */
static numericLinks: boolean
/** Resize images data. */
static resizeImages: boolean
/** Resized image dimensions in pixels. */
static dimension: number
/** How should the image be constrained. */
static resizeConstraint: GalleryConstrainType
/** The quality setting for the JPEG image. */
static imageQuality: number
/** The amount of border pixels you want between your images. */
static border: number
/** Include the file name in the text for the gallery images. */
static includeFilename: boolean
/** Generate a caption for the images. */
static caption: boolean
/** Include the credits in the text for the gallery images. */
static includeCredits: boolean
/** Include the title in the text for the gallery images. */
static includeTitle: boolean
/** Include the copyright in the text for the gallery images. */
static includeCopyright: boolean
/** Font for the gallery images text. */
static font: GalleryFontType
/** Font size for the gallery images text. */
static fontSize: number
}
declare class GalleryThumbnailOptions {
  /** Include file name for thumbnail. */
static includeFilename: boolean
/** With caption. */
static caption: boolean
/** Include credits for thumbnail. */
static includeCredits: boolean
/** Include title for thumbnail. */
static includeTitle: boolean
/** Include copyright for thumbnail. */
static includeCopyright: boolean
/** Web photo gallery font. */
static font: GalleryFontType
/** The size of the font for the thumbnail images text. */
static fontSize: number
/** The size of the thumbnail images. */
static size: GalleryThumbSizeType
/** Web photo gallery thumbnail dimension in pixels. */
static dimension: number
/** Web photo gallery thumbnail columns. */
static columnCount: number
/** Web photo gallery thumbnail rows. */
static rowCount: number
/** The amount of border pixels you want around your thumbnail images. */
static border: number
}
declare class GalleryCustomColorOptions {
  /** Background color. */
static backgroundColor: RGBColor
/** Banner color. */
static bannerColor: RGBColor
/** Text color. */
static textColor: RGBColor
/** Active link color. */
static activeLinkColor: RGBColor
/** Link color. */
static linkColor: RGBColor
/** Visited link color. */
static visitedLinkColor: RGBColor
}
declare class GallerySecurityOptions {
  /** Web photo gallery security content. */
static content: GallerySecurityType
/** Web photo gallery security custom text. */
static text: string
/** Web photo gallery security font. */
static font: GalleryFontType
/** Web photo gallery security font size. */
static fontSize: number
/** Web page security text color. */
static textColor: RGBColor
/** Web page security opacity as a percent. */
static opacity: number
/** Web photo gallery security text position. */
static textPosition: GallerySecurityTextPositionType
/** Web photo gallery security text rotate. */
static textRotate: GallerySecurityTextRotateType
}
declare class ContactSheetOptions {
  /** The width (in pixels) of the resulting document. Range: 100 to 2900. */
static width: number
/** The height (in pixels) of the resulting document. Range: 100 to 2900. */
static height: number
/** The resolution of the document (in pixels per inch). Range: 35 to 1200. */
static resolution: number
/** The document color mode. */
static mode: NewDocumentMode
/** If true, flattens all layers in the final document. */
static flatten: boolean
/** If true, places the images horizontally first. */
static acrossFirst: boolean
/** If true, auto spaces the images in the contact sheet. */
static useAutoSpacing: boolean
/** The number of contact sheet columns. */
static columnCount: number
/** The number of contact sheet rows. */
static rowCount: number
/** The vertical spacing (in pixels) between images. Range: 0 to 29000. */
static vertical: number
/** The horizontal spacing (in pixels) between images. Range: 0 to 29000. */
static horizontal: number
/** If true, rotates images for best fit. */
static bestFit: boolean
/** If true, uses the filename as a caption for the image. */
static caption: boolean
/** The font used for the caption. */
static font: GalleryFontType
/** The caption font size. */
static fontSize: number
}
declare class PicturePackageOptions {
  /** The layout to use to generate the picture package. */
static layout: string
/** The resolution of the document (in pixels per inch) */
static resolution: number
/** The document color mode. */
static mode: NewDocumentMode
/** If true, flattens all layers in the final document. */
static flatten: boolean
/** The content information. */
static content: PicturePackageTextType
/** The picture package custom text. */
static text: string
/** The font used for security text. */
static font: GalleryFontType
/** The font size. */
static fontSize: number
/** The web page security text opacity (as a percentage) Range: 0 to 100. */
static opacity: number
/** The color of the security text. */
static textColor: RGBColor
/** The position of the security text. */
static textPosition: GallerySecurityTextPositionType
/** The orientation of the security text. */
static textRotate: GallerySecurityTextRotateType
}
declare class BatchOptions {
  /** If true, overrides action open commands. */
static overrideOpen: boolean
/** If true, suppresses file open options dialogs. */
static suppressOpen: boolean
/** If true, suppresses color profile warnings. */
static suppressProfile: boolean
/** The type of destination for the processed files. */
static destination: BatchDestinationType
/** The folder location for the processed files. Valid only when 'destination' = folder. */
static destinationFolder: File
/** If true, overrides save as action steps with the specified destination. */
static overrideSave: boolean
/** A list of file naming options. Maximum: 6. */
static fileNaming: FileNamingType
/** The starting serial number to use in naming files. */
static startingSerial: number
/** If true, the final file names are Windows compatible. */
static windowsCompatible: boolean
/** If true, the final file names are Macintosh compatible. */
static macintoshCompatible: boolean
/** If true, the final file names are Unix compatible. */
static unixCompatible: boolean
/** The file in which to log errors encountered. To display errors on the screen and stop batch processing when errors occur, leave blank. */
static errorFile: File
}
declare class SubPathInfo {
  /** The sub path operation on other sub paths. */
static operation: ShapeOperation
/** If true, the path is closed. */
static closed: boolean
/** All of the sub path item's path points. */
static entireSubPath: PathPointInfo
}
declare class PathPointInfo {
  /** The x and y coordinates of one end point of the path segment. */
static anchor: Point
/** The location of the left direction point ("in" position). */
static leftDirection: Point
/** The location of the right direction point ("out" position). */
static rightDirection: Point
/** The point type. */
static kind: PointKind
  /** The x and y coordinates of one end point of the path segment. */
anchor: Point
/** The location of the left direction point ("in" position). */
leftDirection: Point
/** The location of the right direction point ("out" position). */
rightDirection: Point
/** The point type. */
kind: PointKind
}
declare class ActionDescriptor {
  /** The number of keys contained in the descriptor. */
static readonly count: number
}
declare class ActionList {
  /** The number of commands that comprise the action. */
static readonly count: number
}
declare class ActionReference {
  
}
declare class Application {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The name of the selected color setting's set. */
colorSettings: any
/** The frontmost document. */
activeDocument: Document
/** The application name. */
readonly name: string
/** The full path of the location of the Adobe Photoshop application. */
readonly path: File
/** The application preference settings (equivalent to selecting Edit > Preferences in the Adobe Photoshop application in Windows or Photoshop > Preferences in Mac OS). */
readonly preferences: Preferences
/** The version of the Scripting interface. */
readonly scriptingVersion: string
/** The amount of unused memory available to Photoshop. */
readonly freeMemory: number
/** The version of Adobe Photoshop application that you are running. */
readonly version: string
/** The dialog mode for the document, which indicates whether or not Photoshop displays dialogs when the script runs. */
displayDialogs: DialogModes
/** The default foreground color (used to paint, fill, and stroke selections). */
foregroundColor: SolidColor
/** The default background color (used to paint, fill, and stroke selections). */
backgroundColor: SolidColor
/** The playback options, which indicate the speed at which Photoshop plays actions. */
playbackParameters: ActionDescriptor
/** The dialog mode for playback mode, which indicates whether or not Photoshop displays dialogs in playback mode. */
playbackDisplayDialogs: DialogModes
/** If true, notifiers are enabled. */
notifiersEnabled: boolean
/** A list of the image file extensions Photoshop can open. */
readonly windowsFileTypes: string
/** A list of the image file types Photoshop can open. */
readonly macintoshFileTypes: string
/** The full path to the preferences folder. */
readonly preferencesFolder: File
/** The language locale of the application. */
readonly locale: string
/** The collection of open documents. */
readonly documents: Documents
/** The fonts installed on this system. */
readonly fonts: TextFonts
/** The notifiers currently configured (in the Scripts Events Manager menu in the application). */
readonly notifiers: Notifiers
/** The build date of the scripting interface. */
readonly scriptingBuildDate: string
/** Files in the Recent Files list. */
readonly recentFiles: File[]
/** The build number of Adobe Photoshop application. */
readonly build: string
/** System information of the host application and machine. */
readonly systemInformation: string
/** The log of measurements taken. */
readonly measurementLog: MeasurementLog
/** Name of the current tool. */
currentTool: string/**
 * Check if the specified tool supports brushes.
* @param tool - The name of the tool to check.
*/
toolSupportsBrushes(tool: string): boolean
/**
 * PRIVATE - save the current tool brush to a file.
* @param file - File to save the brush to.
*/
saveToolBrushToFile(file: File): void
/**
 * PRIVATE - set the current tool brush from a file.
* @param file - Brush file to apply.
*/
applyToolBrushFromFile(file: File): void
/**
 * PRIVATE - write out a thumbnail file from a style file.
* @param file - Style file to read.
* @param dest - Thumb file to write.
* @param thumbnailSize - Size of thumbnail to save.
* @param backgroundValue - Background grayvalue.
*/
thumbnailStyleFile(file: File, dest: File, thumbnailSize?: number, backgroundValue?: number): void
/**
 * PRIVATE - write out a thumbnail file from text parameters.
* @param dest - Thumb file to write.
* @param text - Text to render.
* @param font - PostScript name of font.
* @param size - Size of type.
* @param color - Color of type.
*/
thumbnailText(dest: File, text?: string, font?: string, size?: number, color?: SolidColor): void
/**
 * Performs a task with a progress bar. Other progress APIs must be called periodically to update the progress bar and allow cancelling.
* @param progressString - String to show in the progress window.
* @param javaScriptString - JavaScriptString to execute.
*/
doProgress(progressString: string, javaScriptString: string): void
/**
 * Performs a task with a progress bar. Forces progress bar to display, ignoring the normal heuristics that keep it from showing unnecessarily (e.g. during very short tasks). Other progress APIs must be called periodically to update the progress bar and allow cancelling.
* @param progressString - String to show in the progress window.
* @param javaScriptString - JavaScriptString to execute.
*/
doForcedProgress(progressString: string, javaScriptString: string): void
/**
 * Changes the text that appears in the progress window.
* @param progressString - String to show in the progress window.
*/
changeProgressText(progressString: string): void
/**
 * Sections off a portion of the unused progress bar for execution of a subtask. Returns false on cancel.
* @param taskLength - Amount of the unused progress bar to section off, between 0.0 and 1.0.
* @param javaScriptString - JavaScriptString to execute.
*/
doProgressTask(taskLength: number, javaScriptString: string): boolean
/**
 * Sections off a portion of the unused progress bar for execution of a subtask. Returns false on cancel. Use when iterating a list of tasks with unequal run times.
* @param segmentLength - The length of the current task.
* @param done - The total length of all completed tasks.
* @param total - The total length of all tasks.
* @param javaScriptString - JavaScriptString to execute.
*/
doProgressSegmentTask(segmentLength: number, done: number, total: number, javaScriptString: string): boolean
/**
 * Sections off a portion of the unused progress bar for execution of a subtask. Returns false on cancel. Use when iterating a simple list of tasks with equal run times.
* @param index - The 0-based index of the current task.
* @param limit - The total number of tasks.
* @param javaScriptString - JavaScriptString to execute.
*/
doProgressSubTask(index: number, limit: number, javaScriptString: string): boolean
/**
 * Updates the progress bar started by doProgress. Use for manual non-task based progress updating. Returns false on cancel.
* @param done - The number of tasks completed.
* @param total - The total number of tasks.
*/
updateProgress(done: number, total: number): boolean
/**
 * Toggle palette visibility.
*/
togglePalettes(): void
/**
 * Plays the specified action from the Actions palette.
* @param action - The name of the action to play. (Note that the action name is case-sensitive and must match the name as it appears in the Actions palette.)
* @param from - The name of the action set containing the action being played. (Note that the Action Set name is case-sensitive and must match the name as it appears in the Actions palette.)
*/
doAction(action: string, from: string): void
/**
 * Loads a support document.
* @param document - The document to load.
*/
load(document: File): void
/**
 * Opens the specified document file(s).
* @param document - The document(s) to opend.
* @param as - The document type (The default is to let Photoshop deduce the format).
* @param asSmartObject - Creates a smart object around the document.
*/
open(document: File, as?: any, asSmartObject?: boolean): Document
/**
 * Purges one or more caches.
* @param target - The caches to purge.
*/
purge(target: PurgeTarget): void
/**
 * DEPRECATED. Creates a web photo gallery.
* @param inputFolder - Folder to process or an array of files to process.
* @param outputFolder - Location for output files.
* @param options - Options for the web photo gallery.
*/
makePhotoGallery(inputFolder: any, outputFolder: File, options?: GalleryOptions): string
/**
 * Creates a PDF presentation file.
* @param inputFiles - The input files to include in the presentation.
* @param outputFile - The location of the output file.
* @param options - Options for the PDF presentation.
*/
makePDFPresentation(inputFiles: File[], outputFile: File, options?: PresentationOptions): string
/**
 * DEPRECATED. Merges multiple files into one, user interaction required.
* @param inputFiles - List of input files to include.
*/
makePhotomerge(inputFiles: File[]): string
/**
 * Creates a contact sheet from multiple files.
* @param inputFiles - The files to include.
* @param options - Options for creating the contact sheet.
*/
makeContactSheet(inputFiles: File[], options?: ContactSheetOptions): string
/**
 * Creates a picture package from multiple files.
* @param inputFiles - The files to include.
* @param options - Options for creating a Picture Package.
*/
makePicturePackage(inputFiles: File[], options?: PicturePackageOptions): string
/**
 * Runs the batch automation routine; analogous to using the Batch command in Photoshop.
* @param inputFiles - The files to operate on.
* @param action - The name of the action to play (note that the Action name is case-sensitive and must match the name in the Actions palette).
* @param from - The name of the action set containing the action being played (note that the Action Set name is case-sensitive and must match the name in the Actions palette).
* @param options - Options for batch automation.
*/
batch(inputFiles: File[], action: string, from: string, options?: BatchOptions): string
/**
 * Makes Photoshop the active application.
*/
bringToFront(): void
/**
 * Pauses the script until the application refreshes.
*/
refresh(): void
/**
 * Force the font list to get refreshed.
*/
refreshFonts(): void
/**
 * Save user objects in the Photoshop registry.
* @param key - The unique string ID for the user object.
* @param customObject - The user-defined custom object to save in the registry.
* @param persistent - If true, the object persists after the script has finished.
*/
putCustomOptions(key: string, customObject: ActionDescriptor, persistent?: boolean): void
/**
 * Retrieves user objects from the Photoshop registry for the ID with value key.
* @param key - The unique string ID for the user object.
*/
getCustomOptions(key: string): ActionDescriptor
/**
 * Removes the specified user objects from the Photoshop registry.
* @param key - The unique string ID for user object(s) to remove.
*/
eraseCustomOptions(key: string): void
/**
 * If true, the specified feature is enabled.
* @param name - The name of the feature.
*/
featureEnabled(name: string): boolean
/**
 * Uses the Photoshop open dialog to select files.
*/
openDialog(): File[]
/**
 * Run a menu item.
* @param menuID - Id of menu to run.
*/
runMenuItem(menuID: number): void
/**
 * Perform a system call.
* @param callString - System call string.
*/
system(callString: string): number
/**
 * Plays an ActionManager event.
* @param eventID - The event to play.
* @param descriptor - The action descriptor to play.
* @param displayDialogs - The display permissions for dialogs and alert messages.
*/
executeAction(eventID: number, descriptor?: ActionDescriptor, displayDialogs?: DialogModes): ActionDescriptor
/**
 * Obtains an action descriptor.
* @param reference - The reference specification of the property.
*/
executeActionGet(reference: ActionReference): ActionDescriptor
/**
 * Converts from a string ID to a runtime ID.
* @param stringID - The ID to convert.
*/
stringIDToTypeID(stringID: string): number
/**
 * Converts from a runtime ID to a string ID.
* @param typeID - The ID to convert.
*/
typeIDToStringID(typeID: number): string
/**
 * Converts from a four character code to a runtime ID.
* @param charID - The ID to convert.
*/
charIDToTypeID(charID: string): number
/**
 * Converts from a runtime ID to a character ID.
* @param typeID - The ID to convert.
*/
typeIDToCharID(typeID: number): string
/**
 * Alerts the user.
*/
beep(): void
/**
 * Returns true if Quicktime is installed.
*/
isQuicktimeAvailable(): boolean
/**
 * Display color picker dialog. Returns false if dialog is cancelled, true otherwise.
* @param pickForeground - If true the foreground color is chosen, if false the background color is chosen.
*/
showColorPicker(pickForeground?: boolean): boolean
}
declare class Document {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The background layer for the document. */
readonly backgroundLayer: ArtLayer
/** The number of bits per channel. */
bitsPerChannel: BitsPerChannelType
/** The type of color model that defines the working space of the document. */
colorProfileType: ColorProfileType
/** The name of the color profile. Valid only when no value is specified for color profile kind (to indicate a custom color profile). */
colorProfileName: string
/** The color profile. */
readonly mode: DocumentMode
/** The color component channels for this document. */
readonly componentChannels: Channel
/** The current history state for this document. */
activeHistoryState: HistoryState
/** The history state to use with the history brush. */
activeHistoryBrushSource: HistoryState
/** The selected layer. */
activeLayer: Layer
/** The selected channels. */
activeChannels: Channel
/** Metadata about the document. */
readonly info: DocumentInfo
/** Document print settings. */
readonly printSettings: DocumentPrintSettings
/** The full path name of the document. */
readonly fullName: File
/** The height of the document. */
readonly height: UnitValue
/** If true, the document is a workgroup document. */
readonly managed: boolean
/** If true, the document been saved since the last change. */
readonly saved: boolean
/** The document name. */
readonly name: string
/** The path to the document. */
readonly path: File
/** If true, the document is in Quick Mask mode. */
quickMaskMode: boolean
/** The resolution of the document (in pixels per inch) */
readonly resolution: number
/** The selected area of the document. */
readonly selection: Selection
/** The width of the document. */
readonly width: UnitValue
/** A histogram showing the number of pixels at each color intensity level for the composite channel. */
readonly histogram: number
/** The (custom) pixel aspect ratio of the document. Range: 0.100 to 10.000. */
pixelAspectRatio: number
/** The XMP properties of the document. The Camera RAW settings are stored here. */
readonly xmpMetadata: XMPMetadata
/** The measurement scale of the document. */
readonly measurementScale: MeasurementScale
/** The unique ID of this document. */
readonly id: number
/** The layers collection in the document. */
readonly layers: Layers
/** The layer sets collection in the document. */
readonly layerSets: LayerSets
/** The art layers collection in the document. */
readonly artLayers: ArtLayers
/** The channels collection in this document. */
readonly channels: Channels
/** The guides in this document. */
readonly guides: Guides
/** The history states collection in this document. */
readonly historyStates: HistoryStates
/** The layer comps collection in this document. */
readonly layerComps: LayerComps
/** The path items collection in this document. */
readonly pathItems: PathItems
/** The current count items in the document. */
readonly countItems: CountItems
/** The current color samplers associated with the document. */
readonly colorSamplers: ColorSamplers/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): Document
/**
 * Closes the document.
* @param saving - Specifies whether changes should be saved before closing.
*/
close(saving?: SaveOptionsType): void
/**
 * Converts the document from using one color profile to using another.
* @param destinationProfile - The color profile to convert to. Either a string specifying a color profile, one of the working color spaces, or Lab color.
* @param intent - The conversion intent.
* @param blackPointCompensation - If true, black point compensation is used.
* @param dither - If true, dither is used.
*/
convertProfile(destinationProfile: string, intent: Intent, blackPointCompensation?: boolean, dither?: boolean): void
/**
 * Changes the mode of the document.
* @param destinationMode - The mode to change to.
* @param options - Options for changing the mode.
*/
changeMode(destinationMode: ChangeMode, options?: DocumentConversionOptions): void
/**
 * Crops the document.
* @param bounds - The area to crop.
* @param angle - The angle of cropping bounds.
* @param width - The width of the resulting document.
* @param height - The height of the resulting document.
*/
crop(bounds: UnitValue[], angle?: number, width?: UnitValue, height?: UnitValue): void
/**
 * Exports the document.
* @param exportIn - The file to export to.
* @param exportAs - The type of export.
* @param options - Options for the specified export type.
*/
exportDocument(exportIn: File, exportAs?: ExportType, options?: ExportOptions): void
/**
 * Flips the canvas horizontally or vertically.
* @param direction - The direction in which to flip the canvas.
*/
flipCanvas(direction: Direction): void
/**
 * Imports annotations into the document.
* @param file - The document to import annotations from.
*/
importAnnotations(file: File): void
/**
 * Flattens all layers.
*/
flatten(): void
/**
 * Flattens all visible layers in the document.
*/
mergeVisibleLayers(): void
/**
 * Pastes contents of the clipboard into the document.
* @param intoSelection - If true, contents are pasted into the current selection.
*/
paste(intoSelection?: boolean): ArtLayer
/**
 * Prints the document.
* @param sourceSpace - The color space for the source.
* @param printSpace - The color space for the printer. Can be "nothing" (meaning same as source); one of the working spaces or Lab color; or a string specifying a color space. Default: nothing.
* @param intent - The color conversion intent.
* @param blackPointCompensation - If true, black point compensation is used.
*/
print(sourceSpace?: SourceSpaceType, printSpace?: string, intent?: Intent, blackPointCompensation?: boolean): void
/**
 * Print one copy of the document.
*/
printOneCopy(): void
/**
 * Expands the document to show clipped sections.
*/
revealAll(): void
/**
 * Rasterizes all layers.
*/
rasterizeAllLayers(): void
/**
 * Records the measurements of document.
* @param source - The source of the measurements to record.
* @param dataPoints - An array of identifiers of data points to record. Any data points not appropriate for the specified source are ignored.
*/
recordMeasurements(source?: MeasurementSource, dataPoints?: string): void
/**
 * Rotates the canvas.
* @param angle - The number of degrees to rotate. A positive angle rotates the canvas clockwise; a negative value rotates the canvas counter-clockwise.
*/
rotateCanvas(angle: number): void
/**
 * Changes the size of the canvas.
* @param width - The desired width of the canvas.
* @param height - The desired height of the canvas.
* @param anchor - The anchor point to resize around.
*/
resizeCanvas(width?: UnitValue, height?: UnitValue, anchor?: AnchorPosition): void
/**
 * Changes the size of the image.
* @param width - The desired width of the image.
* @param height - The desired height of the image.
* @param resolution - The resolution (in pixels per inch)
* @param resampleMethod - The downsample method.
* @param amount - Amount of noise value when using preserve details (range: 0 - 100)
*/
resizeImage(width?: UnitValue, height?: UnitValue, resolution?: number, resampleMethod?: ResampleMethod, amount?: number): void
/**
 * Splits the channels of the document.
*/
splitChannels(): Document
/**
 * Saves the document.
*/
save(): void
/**
 * Saves the document with the specified save options.
* @param saveIn - The file to save to, specified as a string containing the full file path or an alias. If not specified, the document is saved to its existing file.
* @param options - Options for the specified file type.
* @param asCopy - Saves the document as a copy, leaving the original open.
* @param extensionType - Appends the specified extension to the file name.
*/
saveAs(saveIn: File, options?: any, asCopy?: boolean, extensionType?: MacExtensionType): void
/**
 * Provides a single history state for the entire script. Allows a single undo for all actions taken in the script.
* @param historyString - The string to use for the history state.
* @param javaScriptString - A string of JavaScript code to execute during the suspension of history.
*/
suspendHistory(historyString: string, javaScriptString: string): void
/**
 * Applies trapping to a CMYK document. Valid only when 'mode' = CMYK.
* @param width - The trap width in pixels.
*/
trap(width: number): void
/**
 * Trims the transparent area around the image on the specified sides of the canvas.
* @param type - The color or type of pixels to base the trim on.
* @param top - If true, trims away the top of the document.
* @param left - If true, trims away the left of the document.
* @param bottom - If true, trims away the bottom of the document.
* @param right - If true, trims away the right of the document.
*/
trim(type?: TrimType, top?: boolean, left?: boolean, bottom?: boolean, right?: boolean): void
/**
 * Creates a duplicate of the document object.
* @param name - The name of the new document.
* @param mergeLayersOnly - If ture, duplicates merged layers only.
*/
duplicate(name?: string, mergeLayersOnly?: boolean): Document
/**
 * Counts the objects in the document.
* @param channel - The channel to use for counting.
* @param threshold - Threshold to use for counting. Range: 0 to 255.
*/
autoCount(channel: Channel, threshold: number): void
}
declare class DocumentInfo {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The document title. */
title: string
/** The author. */
author: string
/** The author's position. */
authorPosition: string
/** The caption. */
caption: string
/** The caption author. */
captionWriter: string
/** The job name. */
jobName: string
/** The copyright status. */
copyrighted: CopyrightedType
/** The copyright notice. */
copyrightNotice: string
/** The url of the copyright info. */
ownerUrl: string
/** A list of keywords. */
keywords: string
/** The document category. */
category: string
/** Other categories. */
supplementalCategories: string
/** The creation date. */
creationDate: string
/** The city. */
city: string
/** The state or province. */
provinceState: string
/** The country. */
country: string
/** The author credit. */
credit: string
/** The source. */
source: string
/** The headline. */
headline: string
/** Instructions for using or processing the image. */
instructions: string
/** The transmission reference. */
transmissionReference: string
/** The document urgency. */
urgency: Urgency
/** For JPEG images, information stored with digital photographs including camera type, date and time of photo, and file size. */
readonly exif: any
}
declare class Preferences {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The color picker to use. */
colorPicker: ColorPicker
/** The method to use to assign color values to any new pixels created when an image is resampled or resized. */
interpolation: ResampleMethod
/** If true, retains Adobe Photoshop contents on the clipboard after you exit the application. */
exportClipboard: boolean
/** If true, pop-up definitions are displayed on mouseover. */
showToolTips: boolean
/** If true, automatically resizes the window when zooming in or out using keyboard shortcuts. */
keyboardZoomResizesWindows: boolean
/** If true, automatically updates open documents. */
autoUpdateOpenDocuments: boolean
/** If true, Asian text options are displayed in the Paragraph palette. */
showAsianTextOptions: boolean
/** If true, alerts the user when a process finishes. */
beepWhenDone: boolean
/** If true, dynamic color sliders appear in the Color palette. */
dynamicColorSliders: boolean
/** If true, makes new palette locations the default location. */
savePaletteLocations: boolean
/** If true, Asian font names are listed in English. */
showEnglishFontNames: boolean
/** If true, enables cycling through a set of hidden tools. */
useShiftKeyForToolSwitch: boolean
/** Size of the small font used in panels and dialogs. */
textFontSize: FontSize
/** The number of history states to preserve. Range: 1 to 100. */
numberOfHistoryStates: number
/** If true, automatically makes the first snapshot when a new document is created. */
createFirstSnapshot: boolean
/** If true, allows non-linear history. */
nonLinearHistory: boolean
/** If true, curly quote marks are used. */
smartQuotes: boolean
/** The behavior mode to use when saving files. */
imagePreviews: SaveBehavior
/** If true, shows the image preview as a thumbnail. */
iconPreview: boolean
/** If true, shows the image preview as a full size image. */
fullSizePreview: boolean
/** If true, creates a thumbnail when saving the image in Mac OS. */
macOSThumbnail: boolean
/** If true, creates a thumbnail when saving the image in Windows. (Requires hardware support.) */
windowsThumbnail: boolean
/** Save files with extensions on Windows. */
appendExtension: SaveBehavior
/** If true, the file extension is lowercase. */
useLowerCaseExtension: boolean
/** If true, asks the user to verify layer preservation options when saving a file in TIFF format. */
askBeforeSavingLayeredTIFF: boolean
/** The behavior to use to check whether to maximize compatibility when opening Adobe Photoshop (PSD) files. */
maximizeCompatibility: QueryStateType
/** The number of items in the recent file list. Range: 0 to 30. */
recentFileListLength: number
/** If true, displays component channels in the Channels palette in color. */
colorChannelsInColor: boolean
/** If true, uses diffusion dither. */
useDiffusionDither: boolean
/** If true, halves the resolution or (doubles the size of pixels) to make previews display more quickly. */
pixelDoubling: boolean
/** The type of pointer to use. */
paintingCursors: PaintingCursors
/** The type of pointer to use. */
otherCursors: OtherPaintingCursors
/** The size of grid squares. */
gridSize: GridSize
/** If true, enables Adobe Photoshop to send transparency information to your computer’s video board. (Requires hardware support.) */
useVideoAlpha: boolean
/** The opacity (as a percentage) of the warning color for out-of-gamut colors. Range: 0 to 100. */
gamutWarningOpacity: number
/** The unit that the scripting system uses when receiving and returning values. */
rulerUnits: Units
/** The unit type-size that the numeric inputs are assumed to represent. */
typeUnits: TypeUnits
/** The width of columns (in points) */
columnWidth: number
/** The gutter of columns (in points) */
columnGutter: number
/** The point/pica size. */
pointSize: PointType
/** The formatting style for non-printing guide lines. */
guideStyle: GuideLineStyle
/** The formatting style for non-printing grid lines. */
gridStyle: GridLineStyle
/** The value by which to subdivide the grid. */
gridSubDivisions: number
/** If true, displays slice numbers in the document window when using the Slice tool. */
showSliceNumber: boolean
/** If true, uses an additional folder for compatible plug-ins stored with a different application. */
useAdditionalPluginFolder: boolean
/** The path to the additional plug-in folder. Valid only when 'use additional plugin folder' = true. */
additionalPluginFolder: File
/** The number of images to hold in the cache. Range: 1 to 8. */
imageCacheLevels: number
/** If true, shows the current image cache used to create the histogram. */
imageCacheForHistograms: boolean
/** Maximum percentage of available RAM used by Photoshop. */
maxRAMuse: number
/** Turn on and off the history logging. */
useHistoryLog: boolean
/** Options for saving the history items. */
saveLogItems: SaveLogItemsType
/** Options for edit log items. */
editLogItems: EditLogItemsType
/** File to save the history log. */
saveLogItemsFile: File
/** Show font previews in the type tool font menus. */
fontPreviewSize: FontPreviewType
}
declare class DocumentPrintSettings {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Description field from File Info. */
caption: boolean
/** Prints the document title. */
labels: boolean
/** Print corner crop marks. */
cornerCropMarks: boolean
/** Print center crop marks. */
centerCropMarks: boolean
/** Print color calibration bars. */
colorBars: boolean
/** Print registration marks. */
registrationMarks: boolean
/** Invert the image colors. */
negative: boolean
/** Flip the image horizontally. */
flip: boolean
interpolate: boolean
/** Include vector data. */
vectorData: boolean
/** Background color of page. */
backgroundColor: SolidColor
/** Color conversion intent when print space is different from the source space. */
renderIntent: Intent
/** Print a hard proof. */
hardProof: boolean
/** Color space for printer. Can be nothing (meaning same as source) or a string specifying a specific color profile. */
printSpace: string
/** Map blacks. */
mapBlack: boolean
/** Width of the print border. */
printBorder: UnitValue
/** Bleed width. */
bleedWidth: UnitValue
/** Color handling. */
colorHandling: PrintColorHandling
/** Number of copies. */
copies: number
/** Position of image when printing. */
readonly docPosition: DocPositionStyle
/** Y position of image on page. */
readonly posY: UnitValue
/** X position of image on page. */
readonly posX: UnitValue
/** Name of printer. */
printerName: string
/** Scale of image on page. */
readonly scale: number
/** Currently selected printer. */
activePrinter: string
/** List of available printers. */
readonly printers: string/**
 * Set the position of the image on the page.
* @param docPosition - Position of the image on page when printing. Can be centered, scale to fit, or user defined.
* @param posX - X position of image on page.
* @param posY - Y position of image on page.
* @param scale - Position of the image on page when printing. Can be centered, scale to fit, or user defined.
*/
setPagePosition(docPosition: DocPositionStyle, posX?: UnitValue, posY?: UnitValue, scale?: number): void
}
declare class Selection {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The bounding rectangle of the entire selection. */
readonly bounds: UnitValue[]
/** If true, the bounding rectangle a solid rectangle. */
readonly solid: boolean/**
 * Clears the selection and does not copy it to the clipboard.
*/
clear(): void
/**
 * Copies the selection to the clipboard.
* @param merge - If true the copy includes all visible layers. If false, copies only from the current layer.
*/
copy(merge?: boolean): void
/**
 * Cuts the current selection to the clipboard.
*/
cut(): void
/**
 * Selects the selection border only (in the specified width); subsequent actions do not affect the selected area within the borders.
* @param width - The width of the border selection.
*/
selectBorder(width: UnitValue): void
/**
 * Contracts the selection.
* @param by - The amount to contract the selection.
*/
contract(by: UnitValue): void
/**
 * Fills the selection.
* @param fillType - The color or history state with which to fill the object.
* @param mode - The color blend mode.
* @param opacity - The opacity as a percentage. Range: 1 to 100.
* @param preserveTransparency - If true, perserves transparencies.
*/
fill(fillType: any, mode?: ColorBlendMode, opacity?: number, preserveTransparency?: boolean): void
/**
 * Strokes the selection.
* @param strokeColor - The color to stroke the selection with.
* @param width - The stroke width.
* @param location - The stroke location.
* @param mode - The color blend mode.
* @param opacity - The opacity of the stroke color as a percentage. Range: 1 to 100.
* @param preserveTransparency - If true, preserves transparency.
*/
stroke(strokeColor: any, width: number, location?: StrokeLocation, mode?: ColorBlendMode, opacity?: number, preserveTransparency?: boolean): void
/**
 * Selects the entire layer.
*/
selectAll(): void
/**
 * Deselects the current selection.
*/
deselect(): void
/**
 * Selects the specified region.
* @param region - Array of x and y coordinates that describe the corners of the selection, in the format [[x1, y1], [x2,y2],[x3, y3], [x4,y4]]
* @param type - The method for combining the new selection with the existing selection.
* @param feather - The feather amount.
* @param antiAlias - If true, anti-aliasing is used.
*/
select(region: any, type?: SelectionType, feather?: number, antiAlias?: boolean): void
/**
 * Expands the selection.
* @param by - The amount to expand the selection.
*/
expand(by: UnitValue): void
/**
 * Feathers the edges of the selection.
* @param by - The amount to feather the edge.
*/
feather(by: UnitValue): void
/**
 * Grows the selection to include all adjacent pixels falling within the specified tolerance range.
* @param tolerance - The tolerance range. Range: 0 to 255.
* @param antiAlias - If true, anti-aliasing is used.
*/
grow(tolerance: number, antiAlias: boolean): void
/**
 * Inverts the selection.
*/
invert(): void
/**
 * Grows the selection to include pixels throughout the image falling within the tolerance range.
* @param tolerance - The tolerance range. Range: 0 to 255.
* @param antiAlias - If true, anti-aliasing is used.
*/
similar(tolerance: number, antiAlias: boolean): void
/**
 * Cleans up stray pixels left inside or outside a color-based selection (within the radius specified in pixels).
* @param radius - The sample radius in pixels. Range: 0 to 100.
*/
smooth(radius: number): void
/**
 * Saves the selection as a channel.
* @param into - The channel to save the selection to.
* @param combination - How to add the selection to the existing contents of the channel.
*/
store(into: Channel, combination?: SelectionType): void
/**
 * Loads the selection from the specified channel.
* @param from - The channel to load the selection from.
* @param combination - How to combine the channel contents with the existing selection.
* @param inverting - If true, selects the inverse of the channel contents.
*/
load(from: Channel, combination?: SelectionType, inverting?: boolean): void
/**
 * Moves the object relative to its current position.
* @param deltaX - The amount to move the object horizontally.
* @param deltaY - The amount to move the object vertically.
*/
translate(deltaX?: UnitValue, deltaY?: UnitValue): void
/**
 * Moves the boundary of selection relative to its current position.
* @param deltaX - The amount to move the object horizontally.
* @param deltaY - The amount to move the object vertically.
*/
translateBoundary(deltaX?: UnitValue, deltaY?: UnitValue): void
/**
 * Rotates the object.
* @param angle - The number of degrees to rotate the object.
* @param anchor - The point to rotate about.
*/
rotate(angle: number, anchor?: AnchorPosition): void
/**
 * Rotates the boundary of the selection.
* @param angle - The rotation angle (in degrees)
* @param anchor - The point to rotate about.
*/
rotateBoundary(angle: number, anchor?: AnchorPosition): void
/**
 * Resizes the selected area to the specified dimensions and anchor position.
* @param horizontal - The amount to scale the selection horizontally (as a percentage).
* @param vertical - The amount to scale the selection vertically (as a percentage).
* @param anchor - The point to scale around.
*/
resize(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void
/**
 * Scales the boundary of the selection.
* @param horizontal - The amount to scale the object horizontally (as a percentage).
* @param vertical - The amount to scale the object vertically (as a percentage).
* @param anchor - The point to scale around.
*/
resizeBoundary(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void
/**
 * Makes this selection item the workpath for this document.
* @param tolerance - The tolerance in pixels.
*/
makeWorkPath(tolerance?: number): void
}
declare class LayerSet extends Layer {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The channels that are enabled for the layer set. Must be a list of component channels. */
enabledChannels: Channel
/** The layers in this layer set. */
readonly layers: Layers
/** The layer sets contained within the layer set. */
readonly layerSets: LayerSets
/** The art layers contained in this layer set. */
readonly artLayers: ArtLayers/**
 * Adds an element.
*/
add(): LayerSet
/**
 * Merges the layer set.
*/
merge(): ArtLayer
}
declare class ArtLayer extends Layer {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The interior opacity of the layer. Range: 0.0 to 100.0. */
fillOpacity: number
/** The density of the layer mask (between 0.0 and 100.0) */
layerMaskDensity: number
/** The feather of the layer mask (between 0.0 and 250.0) */
layerMaskFeather: number
/** The density of the vector mask (between 0.0 and 100.0) */
vectorMaskDensity: number
/** The feather of the vector mask (between 0.0 and 250.0) */
vectorMaskFeather: number
/** The density of the filter mask (between 0.0 and 100.0) */
filterMaskDensity: number
/** The feather of the filter mask (between 0.0 and 250.0) */
filterMaskFeather: number
/** If true, the layer is grouped with the layer below. */
grouped: boolean
/** If true, the layer is a background layer. */
isBackgroundLayer: boolean
/** If true, the pixels in the layer's image cannot be edited. */
pixelsLocked: boolean
/** If true, the pixels in the layer's image cannot be moved within the layer. */
positionLocked: boolean
/** If true, editing is confined to the opaque portions of the layer. */
transparentPixelsLocked: boolean
/** Sets the layer kind (such as 'text layer') for an empty layer. Valid only when the layer is empty and when 'is background layer ' is false. You can use the 'kind ' property to make a background layer a normal layer; however, to make a layer a background layer, you must set 'is background layer' to true. */
kind: LayerKind
/** The text that is associated with the layer. Valid only when 'kind' is text layer. */
readonly textItem: TextItem/**
 * Adds an element.
*/
add(): ArtLayer
/**
 * Applies the specified style to the layer.
* @param styleName - The layer style to apply.
*/
applyStyle(styleName: string): void
/**
* @param file - Style file to apply.
*/
applyStyleFile(file: File): void
/**
* @param file - File to save the style to.
* @param thumbnail - File to save the style thumbnail to.
* @param thumbnailSize - Size of thumbnail to save.
* @param backgroundValue - Background grayvalue.
*/
saveStyleFile(file: File, thumbnail?: File, thumbnailSize?: number, backgroundValue?: number): void
/**
 * Cuts the layer without moving it to the clipboard.
*/
clear(): void
/**
 * Copies the layer to the clipboard.
* @param merge - If true, the copy includes all visible layers. If false, the copy only copies from the current layer.
*/
copy(merge?: boolean): void
/**
 * Cuts the layer to the clipboard.
*/
cut(): void
/**
 * Merges the layer down, removing the layer from the document. Returns a reference to the art layer that this layer is merged into.
*/
merge(): ArtLayer
/**
 * Converts the targeted content in the layer into a flat, raster image.
* @param target - What to rasterize.
*/
rasterize(target: RasterizeType): void
/**
 * Applies the average filter.
*/
applyAverage(): void
/**
 * Applies the gaussian blur filter.
* @param radius - The blur width in pixels. Range: 1.0 to 250.0.
*/
applyGaussianBlur(radius: number): void
/**
 * Apply the lens blur filter.
* @param source - The source for the depth map.
* @param focalDistance - The blur focal distance (in pixels) for the depth map. RangeL 0 to 255. Valid only when 'source' is transparency or layer mask.
* @param invertDepthMap - If true, inverts the depth map.
* @param shape - The shape of the iris.
* @param radius - The radius of the iris. Range: 0 to 100.
* @param bladeCurvature - The blade curvature of the iris. Range: 0 to 100.
* @param rotation - The rotation of the iris (in degrees). Range: 0 to 360.
* @param brightness - The brightness for the specular highlights. Range: 0 to 100.
* @param threshold - The threshold for the specular highlights. Range: 0 to 255.
* @param amount - The amount of noise. Range: 0 to 100.
* @param distribution - The distribution value for the noise.
* @param monochromatic - If true, the noise is monochromatic.
*/
applyLensBlur(source?: DepthMapSource, focalDistance?: number, invertDepthMap?: boolean, shape?: Geometry, radius?: number, bladeCurvature?: number, rotation?: number, brightness?: number, threshold?: number, amount?: number, distribution?: NoiseDistribution, monochromatic?: boolean): void
/**
 * Applies the blur filter.
*/
applyBlur(): void
/**
 * Applies the blur more filter.
*/
applyBlurMore(): void
/**
 * Applies the motion blur filter.
* @param angle - The angle (in degrees). Range: -360 to 360.
* @param radius - The radius (in pixels). Range: 1 to 999.
*/
applyMotionBlur(angle: number, radius: number): void
/**
 * Applies the radial blur filter.
* @param amount - The amount of blur. Range: 1 to 100.
* @param blurMethod - The blur method to use.
* @param blurQuality - The smoothness or graininess of the blurred image.
* @param blurCenter - Position (unit value)
*/
applyRadialBlur(amount: number, blurMethod: RadialBlurMethod, blurQuality: RadialBlurQuality, blurCenter?: UnitValue[]): void
/**
 * Applies the smart blur filter.
* @param radius - The blur radius. Range: 0 - 1000.
* @param threshold - The blur threshold. Range: 0 - 1000.
* @param blurQuality - The smoothness or graininess of the blurred image.
* @param mode - The smart blur mode.
*/
applySmartBlur(radius: number, threshold: number, blurQuality: SmartBlurQuality, mode: SmartBlurMode): void
/**
 * Applies the diffuse glow filter.
* @param graininess - The amount of graininess. Range: 0 to 10.
* @param glowAmount - The glow amount. Range: 0 to 20.
* @param clearAmount - The clear amount. Range: 0 to 20.
*/
applyDiffuseGlow(graininess: number, glowAmount: number, clearAmount: number): void
/**
 * Applies the displace filter.
* @param horizontalScale - The amount of horizontal distortion. Range: -999 to 999.
* @param verticalScale - The amount of vertical distortion. Range: -999 to 999.
* @param displacementType - The displacement type.
* @param undefinedAreas - The treatment of undistorted areas.
* @param displacementMapFile - The distortion image map.
*/
applyDisplace(horizontalScale: number, verticalScale: number, displacementType: DisplacementMapType, undefinedAreas: UndefinedAreas, displacementMapFile: File): void
/**
 * Applies the glass filter.
* @param distortion - The amount of distortion. Range: 0 to 20.
* @param smoothness - The smoothness. Range: 1 to 15.
* @param scaling - The amount of scaling. Range: 50 to 200.
* @param invert - If true, the texture is inverted.
* @param texture - The type of texture.
* @param textureFile - The file from which to load the texture type.
*/
applyGlassEffect(distortion: number, smoothness: number, scaling: number, invert?: boolean, texture?: TextureType, textureFile?: File): void
/**
 * Applies the ocean ripple filter.
* @param size - The ripple size. Range: 1 to 15.
* @param magnitude - The ripple magnitude. Range: 0 to 20.
*/
applyOceanRipple(size: number, magnitude: number): void
/**
 * Applies the pinch filter.
* @param amount - The pinch amount. Range: -100 to 100.
*/
applyPinch(amount: number): void
/**
 * Applies the polar coordinates filter.
* @param conversion - The conversion type.
*/
applyPolarCoordinates(conversion: PolarConversionType): void
/**
 * Applies the ripple filter.
* @param amount - The ripple amount. Range: -999 to 999.
* @param size - The ripple size.
*/
applyRipple(amount: number, size: RippleSize): void
/**
 * Applies the shear filter.
* @param curve - Specification of the shear curve in points as x,y coordinate pairs in the format [[x1, y1],[x2, y2]]. Any number of coordinate pairs can be specified.
* @param undefinedAreas - The treatment of areas left blank by the distortion.
*/
applyShear(curve: any, undefinedAreas: UndefinedAreas): void
/**
 * Applies the spherize filter.
* @param amount - The amount of distortion. Range: -100 to 100.
* @param mode - The distortion mode.
*/
applySpherize(amount: number, mode: SpherizeMode): void
/**
 * Applies the twirl filter.
* @param angle - The twirl angle. Range: -999 to 999.
*/
applyTwirl(angle: number): void
/**
 * Applies the wave filter.
* @param generatorNumber - The number of generators. Range: 1 to 999.
* @param minimumWavelength - The minimum wave length. Range: 1 to 998.
* @param maximumWavelength - The maximum wave length. Range: 2 to (minimum wavelength + 1)
* @param minimumAmplitude - The minimum amplitude. Range: 1 to 998.
* @param maximumAmplitude - The maximum amplitude. Range: 2 to (minimum amplitude + 1)
* @param horizontalScale - The amount of horizontal scale (as a percentage). Range: 1 to 100.
* @param verticalScale - The amount of vertical scale (as a percentage). Range: 1 to 100.
* @param waveType - The wave type.
* @param undefinedAreas - The treatment of areas left blank by the distortion.
* @param randomSeed - The random seed.
*/
applyWave(generatorNumber: number, minimumWavelength: number, maximumWavelength: number, minimumAmplitude: number, maximumAmplitude: number, horizontalScale: number, verticalScale: number, waveType: WaveType, undefinedAreas: UndefinedAreas, randomSeed: number): void
/**
 * Applies the zigzag filter.
* @param amount - The amount of zigzag. Range: -100 to 100.
* @param ridges - The ridge length.
* @param style - The zigzag style.
*/
applyZigZag(amount: number, ridges: number, style: ZigZagType): void
/**
 * Applies the add noise filter.
* @param amount - The amount of noise (as a percentage). Range: 0.1 to 400.0.
* @param distribution - The noise distribution type.
* @param monochromatic - If true, applies the filter only to the tonal elements in the image without changing the colors.
*/
applyAddNoise(amount: number, distribution: NoiseDistribution, monochromatic: boolean): void
/**
 * Applies the despeckle filter.
*/
applyDespeckle(): void
/**
 * Applies the dust and scratches filter.
* @param radius - The size (in pixels) of the area searched for dissimilar pixels. Range: 1 to 16.
* @param threshold - Determines how dissimilar the pixels should be before they are eliminated. Range: 0 to 255.
*/
applyDustAndScratches(radius: number, threshold: number): void
/**
 * Applies the median noise filter.
* @param radius - The size of the area searched for pixels of similar brightness. Range: 0 to 100.
*/
applyMedianNoise(radius: number): void
/**
 * Applies the clouds filter.
*/
applyClouds(): void
/**
 * Applies the difference clouds filter.
*/
applyDifferenceClouds(): void
/**
 * Applies the lens flare filter.
* @param brightness - The flare brightness. Range: 10 to 300.
* @param flareCenter - The position of the flare center.
* @param lensType - The lens type.
*/
applyLensFlare(brightness: number, flareCenter: UnitValue[], lensType: LensType): void
/**
 * Applies the texture fill filter.
* @param textureFile - The texture file. Must be a grayscale Photoshop file.
*/
applyTextureFill(textureFile: File): void
/**
 * Applies the sharpen filter.
*/
applySharpen(): void
/**
 * Applies the sharpen edges filter.
*/
applySharpenEdges(): void
/**
 * Applies the sharpen more filter.
*/
applySharpenMore(): void
/**
 * Applies the unsharp mask filter.
* @param amount - The amount of sharpening (as a percentage). Range: 1 to 500.
* @param radius - The radius in pixels. Range: 0.1 to 250.0.
* @param threshold - The contrast threshold. Range: 0 to 255.
*/
applyUnSharpMask(amount: number, radius: number, threshold: number): void
/**
 * Applies the de-interlace filter.
* @param eliminateFields - The fields to eliminate.
* @param createFields - The method to use to replace eliminated fields.
*/
applyDeInterlace(eliminateFields: EliminateFields, createFields: CreateFields): void
/**
 * Applies the NTSC colors filter.
*/
applyNTSC(): void
/**
 * Applies the custom filter.
* @param characteristics - The custom filter characteristics. This is an array of 25 values that corresponds to a left-to-right, top-to- bottom traversal of the array presented in the Custom dialog in the user interface (Filter > Other > Custom).
* @param scale - The value by which to divide the sum of the brightness values of the pixels included in the calculation.
* @param offset - The value to be added to the result of the scale calculation.
*/
applyCustomFilter(characteristics: number, scale: number, offset: number): void
/**
 * Applies the high pass filter.
* @param radius - The width (in pixels) of the radius where edge details are retained.
*/
applyHighPass(radius: number): void
/**
 * Applies the maximum filter.
* @param radius - The choke area (in pixels). Range: 0 to 100.
*/
applyMaximum(radius: number): void
/**
 * Applies the minimum filter.
* @param radius - The spread area (in pixels). Range: 0 to 100.
*/
applyMinimum(radius: number): void
/**
 * Applies the offset filter.
* @param horizontal - The amount (in pixels) to move the selection horizontally (to the right). Range: -6144 to 6144.
* @param vertical - The amount (in pixels) to move the selection vertically (downward). Range: -6144 to 6144.
* @param undefinedAreas - The method for filling areas left blank by the offset.
*/
applyOffset(horizontal: UnitValue, vertical: UnitValue, undefinedAreas: OffsetUndefinedAreas): void
/**
 * Adjusts levels of the selected channels.
* @param inputRangeStart - The input levels minimum. Range: 0 to 253.
* @param inputRangeEnd - The input levels maximum. Range: (input range start + 2) to 253.
* @param inputRangeGamma - The input levels gamma. Range: 0.10 to 9.99.
* @param outputRangeStart - The output levels minimum. Range: 0 to 253.
* @param outputRangeEnd - The output levels maximum. Range: (output range start + 2) to 253.
*/
adjustLevels(inputRangeStart: number, inputRangeEnd: number, inputRangeGamma: number, outputRangeStart: number, outputRangeEnd: number): void
/**
 * Adjust the levels of the selected channels using the auto levels option.
*/
autoLevels(): void
/**
 * Adjusts the contrast of the selected channels automatically.
*/
autoContrast(): void
/**
 * Adjusts the tonal range of the selected channel using up to fourteen points.
* @param curveShape - The curve points. The number of points must be between 2 and 14.
*/
adjustCurves(curveShape: Point): void
/**
 * Adjusts the brightness and constrast.
* @param brightness - The brightness amount. Range: -100 to 100.
* @param contrast - The contrast amount. Range: -100 to 100.
*/
adjustBrightnessContrast(brightness: number, contrast: number): void
/**
 * Adjusts the color balance of the layer's component channels.
* @param shadows - The adjustments for the shadows. The array must include three values (in the range -100 to 100), which represent cyan or red, magenta or green, and yellow or blue, when the document mode is CMYK or RGB.
* @param midtones - The adjustments for the midtones. The array must include three values (in the range -100 to 100), which represent cyan or red, magenta or green, and yellow or blue, when the document mode is CMYK or RGB.
* @param highlights - The adjustments for the highlights. The array must include three values (in the range -100 to 100), which represent cyan or red, magenta or green, and yellow or blue, when the document mode is CMYK or RGB.
* @param preserveLuminosity - If true, luminosity is preserved.
*/
adjustColorBalance(shadows?: number, midtones?: number, highlights?: number, preserveLuminosity?: boolean): void
/**
 * Converts a color image to a grayscale image in the current color mode by assigning equal values of each component color to each pixel.
*/
desaturate(): void
/**
* @param selectionMethod - Modifies the amount of a process color in a specified primary color without affecting the other primary colors.
* @param reds - Array of 4 values: cyan, magenta, yellow, black.
* @param yellows - Array of 4 values: cyan, magenta, yellow, black.
* @param greens - Array of 4 values: cyan, magenta, yellow, black.
* @param cyans - Array of 4 values: cyan, magenta, yellow, black.
* @param blues - Array of 4 values: cyan, magenta, yellow, black.
* @param magentas - Array of 4 values: cyan, magenta, yellow, black.
* @param whites - Array of 4 values: cyan, magenta, yellow, black.
* @param neutrals - Array of 4 values: cyan, magenta, yellow, black.
* @param blacks - Array of 4 values: cyan, magenta, yellow, black.
*/
selectiveColor(selectionMethod: AdjustmentReference, reds?: number, yellows?: number, greens?: number, cyans?: number, blues?: number, magentas?: number, whites?: number, neutrals?: number, blacks?: number): void
/**
 * Modifies a targeted (output) color channel using a mix of the existing color channels in the image. (output channels = An array of channel specifications. For each component channel, specify a list of adjustment values (-200 to 200) followed by a 'constant' value (-200 to 200).) When monochrome = true, the maximum number of channel value specifications is 1. Valid only when 'document mode' = RGB or CMYK. RGB arrays must include four doubles. CMYK arrays must include five doubles.
* @param outputChannels - A list of channel specifications. For each component channel that the document has, you must specify a list of adjustment values followed by a 'constant' value.
* @param monochrome - If true, uses monochrome mixing. Note: If this is true, you can only specify one channel value.
*/
mixChannels(outputChannels: any, monochrome?: boolean): void
/**
 * Inverts the colors in the layer by converting the brightness value of each pixel in the channels to the inverse value on the 256-step color-values scale.
*/
invert(): void
/**
 * Redistributes the brightness values of pixels in an image to more evenly represent the entire range of brightness levels within the image.
*/
equalize(): void
/**
 * Converts grayscale or color images to high-contrast, B/W images by converting pixels lighter than the specified threshold to white and pixels darker than the threshold to black.
* @param level - The threshold level.
*/
threshold(level: number): void
/**
 * Specifies the number of tonal levels for each channel and then maps pixels to the closest matching level.
* @param levels - The tonal levels. Range: 2 to 255.
*/
posterize(levels: number): void
/**
 * Adjusts the layer's color balance and temperature as if a color filter had been applied.
* @param fillColor - The color to use for the fill.
* @param density - The density (as a percentage) of the filter effect. Range: 1 to 100.
* @param preserveLuminosity - If true, luminosity is preserved.
*/
photoFilter(fillColor?: SolidColor, density?: number, preserveLuminosity?: boolean): void
/**
 * Adjusts the range of tones in the shadows and highlights.
* @param shadowAmount - The shadow amount, as a percentage. Range: 0 to 100.
* @param shadowWidth - The shadow width, as a percentage. Range: 0 to 100 for tonal width (0 = narrow), (100 = broad).
* @param shadowRaduis - The shadow radius (in pixels). Range: 0 to 2500.
* @param highlightAmount - The highlight amount, as a percentage. Range: 0 to 100.
* @param highlightWidth - The highlight width. Range: 0 to 100 for tonal width (0 = narrow), (100 = broad).
* @param highlightRaduis - The highlight radius (in pixels). Range: 0 to 2500.
* @param colorCorrection - The amount to adjust the colors in the changed portion of the image. Range: -100 to 100.
* @param midtoneContrast - The amount of midtone contrast. Range: -100 to 100.
* @param blackClip - Fractions of whites to be clipped. Range: 0.000 to 50.000.
* @param whiteClip - Fractions of blacks to be clipped. Range: 0.000 to 50.000.
*/
shadowHighlight(shadowAmount?: number, shadowWidth?: number, shadowRaduis?: number, highlightAmount?: number, highlightWidth?: number, highlightRaduis?: number, colorCorrection?: number, midtoneContrast?: number, blackClip?: number, whiteClip?: number): void
}
declare class Layer {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The name of the layer. */
name: string
/** If true, the layer's contents and settings are locked. */
allLocked: boolean
/** The mode to use when compositing an object. */
blendMode: BlendMode
/** The layers linked to this layer. */
readonly linkedLayers: Layer
/** The layer's master opacity (as a percentage). Range: 0.0 to 100.0. */
opacity: number
/** If true, the layer is visible. */
visible: boolean
/** The unique ID of this layer. */
readonly id: number
/** The layer index sans layer groups, how Photoshop would index them. */
readonly itemIndex: number
/** If the Layer is a layer set, this property returns a reference to the corresponding layer set object. */
readonly bounds: UnitValue[]
/** Bounding rectangle of the Layer not including effects. */
readonly boundsNoEffects: UnitValue[]
/** XMP metadata associated with the Layer. */
readonly xmpMetadata: XMPMetadata/**
 * Move the object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
move(relativeObject: Object, insertionLocation: ElementPlacement): Layer
/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): Layer
/**
 * ...
* @param layerSet - undefined
*/
moveToEnd(layerSet?: LayerSet): void
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Unlinks the layer.
*/
unlink(): void
/**
 * Links the layer with the specified layer.
* @param with - The layer to link to.
*/
link(_with: Layer): void
/**
 * Moves the object relative to its current position.
* @param deltaX - The amount to move the object horizontally.
* @param deltaY - The amount to move the object vertically.
*/
translate(deltaX?: UnitValue, deltaY?: UnitValue): void
/**
 * Rotates the object.
* @param angle - The number of degrees to rotate the object.
* @param anchor - The point to rotate about.
*/
rotate(angle: number, anchor?: AnchorPosition): void
/**
 * Scales the object.
* @param horizontal - The amount to scale the object horizontally (as a percentage).
* @param vertical - The amount to scale the object vertically (as a percentage).
* @param anchor - The point to resize about.
*/
resize(horizontal?: number, vertical?: number, anchor?: AnchorPosition): void
}
declare class Channel {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** A histogram of the color of the channel. */
readonly histogram: number
/** The channel name. */
name: string
/** The type of channel. */
kind: ChannelType
/** The opacity of alpha channels (called solidity for spot channels). Range: 0 to 100. Valid only when 'type' = masked area or selected area. */
opacity: number
/** If true, the channel is visible. */
visible: boolean
/** The color of the channel. Not valid for component channels. */
color: SolidColor/**
 * Adds an element.
*/
add(): Channel
/**
 * Duplicate this object.
* @param relativeObject - undefined
* @param insertionLocation - undefined
*/
duplicate(relativeObject: Object, insertionLocation: ElementPlacement): Channel
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Merges a spot channel into the component channels.
*/
merge(): void
/**
 * Duplicates the channel.
* @param targetDocument - The document to duplicate the channel to.
*/
duplicate(targetDocument?: Document): Channel
}
declare class Guide {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** Indicates whether the guide is vertical or horizontal. */
direction: Direction
/** Location of the guide from origin of image. */
coordinate: UnitValue/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class HistoryState {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The history state name. */
readonly name: string
/** If true, the history state is a snapshot. */
readonly snapshot: boolean
}
declare class TextFont {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The font name. */
readonly name: string
/** The PostScript name of the font. */
readonly postScriptName: string
/** The font family. */
readonly family: string
/** The font style. */
readonly style: string
}
declare class TextItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The method of anti-aliasing to use. */
antiAliasMethod: AntiAlias
/** Options for auto kerning. */
autoKerning: AutoKernType
/** The text color. */
color: SolidColor
/** If true, uses the font's built-in leading information. */
useAutoLeading: boolean
/** The amount of uniform spacing between multiple characters. Range: -1000 to 10000. */
tracking: number
/** Character scaling (vertical) in proportion to horizontal scale. Range: 0 - 1000 as a percentage. */
verticalScale: number
/** Character scaling (horizontal) in proportion to horizontal scale. Range: 0 - 1000 as a percentage. */
horizontalScale: number
/** The amount of baseline offset of text. */
baselineShift: UnitValue
/** The actual text in the layer. */
contents: string
/** The text face of the character. */
font: string
/** The leading amount. */
leading: UnitValue
/** If true, ligatures are used. */
ligatures: boolean
/** If true, alternate ligatures are used. */
alternateLigatures: boolean
/** If true, old style is used. */
oldStyle: boolean
/** The position of the origin for the text. The array must contain two values. Setting this property is basically equivalent to clicking the text tool at a point in the document to create the point of origin for text. */
position: UnitValue[]
/** The text orientation. */
direction: Direction
/** The font size in points. */
size: UnitValue
/** If true, faux bold is used. */
fauxBold: boolean
/** If true, faux italic is used. */
fauxItalic: boolean
/** The case of the text. */
capitalization: Case
/** The strike through option to use. */
strikeThru: StrikeThruType
/** Options for underlining the text. */
underline: UnderlineType
/** The language. */
language: Language
/** If true, words are not allowed to break at the end of a line. When enacted on large amounts of consecutive characters, can prevent word wrap and thus may prevent some text from appearing on the screen. */
noBreak: boolean
/** The type of text. */
kind: TextType
/** The paragraph justification. */
justification: Justification
/** The amount to indent text from the left. Range: -1296 to 1296. */
leftIndent: UnitValue
/** The amount to indent the first line of paragraphs. Range: -1296 to 1296. */
firstLineIndent: UnitValue
/** The amount to indent text from the right. Range: -1296 to 1296. */
rightIndent: UnitValue
/** The amount of space before each paragraph. Range: -1296 to 1296. */
spaceBefore: UnitValue
/** The amount of space after each paragraph. Range: -1296 to 1296. */
spaceAfter: UnitValue
/** If true, uses Roman hanging punctuation. */
hangingPuntuation: boolean
/** The text composing engine to use. */
textComposer: TextComposer
/** If true, hyphenation is used. */
hyphenation: boolean
/** The minimum amount (as a percentage) to scale the horizontal size of the text letters. Range: 50 - 200; at 100, the width of characters is not scaled. Valid only for justified text. */
minimumGlyphScaling: number
/** The desired amount (as a percentage) to scale the horizontal size of the text letters. Range: 50 - 200; at 100, the width of characters is not scaled. Valid only for justified text. */
desiredGlyphScaling: number
/** The maximum amount (as a percentage) to scale the horizontal size of the text letters. Range: 50 - 200; at 100, the width of characters is not scaled. Valid only for justified text. */
maximumGlyphScaling: number
/** The minimum amount of space (as a percentage) between letters. Range: 100 to 500; at 0, no space is added between letters. Valid only for justified text. */
minimumLetterScaling: number
/** The amount of space (as a percentage) between letters. Range: 100 - 500; at 0, no space is added between letters. Valid only for justified text. */
desiredLetterScaling: number
/** The maximum amount (as a percentage) of space between letters. Range: 100 - 500; at 0, no space is added between letters. Valid only for justified text. */
maximumLetterScaling: number
/** The minimum amount (as a percentage) of space between words. Range: 0 -1000; at 100, no additional space is added between words. Valid only for justified text. */
minimumWordScaling: number
/** The amount (as a percentage) of space between words. Range: 0 -1000; at 100, no additional space is added between words. Valid only for justified text. */
desiredWordScaling: number
/** The maximum amount (as a percentage) of space between words (0 -1000; at 100, no additional space is added between words). Valid only for justified text. */
maximumWordScaling: number
/** The percentage to use for auto leading. Range: 0.01 to 5000.00. */
autoLeadingAmount: number
/** The minimum number of letters a word must have in order for hyphenation in word wrap to be allowed. Range: 2 to 25. */
hyphenateWordsLongerThan: number
/** The number of letters after which hyphenation in word wrap is allowed. Range: 1 to 15. */
hyphenateAfterFirst: number
/** The number of letters before which hyphenation in word wrap is allowed. Range: 1 to 15. */
hyphenateBeforeLast: number
/** The maximum number of consecutive lines that can end with a hyphenated word. */
hyphenLimit: number
/** The distance at the end of a line that will cause a word to break in unjustified type. Range: 0 - 720 picas. */
hyphenationZone: UnitValue
/** If true, capitalized words can be hyphenated. */
hyphenateCapitalWords: boolean
/** The width of the bounding box for paragraph text. */
width: UnitValue
/** The height of the bounding box for paragraph text. */
height: UnitValue
/** The style of warp. */
warpStyle: WarpStyle
/** The warp direction. */
warpDirection: Direction
/** The warp bend percentage. Range: -100 to 100. */
warpBend: number
/** The warp horizontal distortion percentage. Range: -100 to 100. */
warpHorizontalDistortion: number
/** The warp vertical distortion percentage. Range: -100 to 100. */
warpVerticalDistortion: number/**
 * Creates a clipping path from the outlines of the actual text items (such as letters or words).
*/
createPath(): void
/**
 * Converts the text object and its containing layer to a fill layer with the text changed to a clipping path.
*/
convertToShape(): void
}
declare class LayerComp {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The name of the layer comp. */
name: string
/** The description of the layer comp. */
comment: any
/** If true, uses layer appearance (layer styles) settings. */
appearance: boolean
/** If true, uses layer position. */
position: boolean
/** If true, the layer comp is visible. */
visibility: boolean
/** If true, the layer comp is currently selected. */
readonly selected: boolean/**
 * Adds an element.
*/
add(): LayerComp
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Applies the layer comp to the document.
*/
apply(): void
/**
 * Recaptures the current layer state(s) for this layer comp.
*/
recapture(): void
/**
 * Resets the layer comp state to the document state.
*/
resetFromComp(): void
}
declare class PathItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The name of the path item. */
name: string
/** The sub path objects for this path item. */
readonly subPathItems: SubPathItems
/** The type of path. */
kind: PathKind/**
 * Adds an element.
*/
add(): PathItem
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
 * Duplicates this path item.
* @param name - The name for the new path.
*/
duplicate(name?: string): PathItem
/**
 * Makes a selection object, whose border is the path, from this path item object.
* @param feather - The feather amount in pixels. Range: 0.0 to 250.0.
* @param antiAlias - If true, the selection uses anti-aliasing.
* @param operation - The selection behavior relative to the existing selection (when a selection already exists).
*/
makeSelection(feather?: number, antiAlias?: boolean, operation?: SelectionType): void
/**
 * Fills the area enclosed by the path.
* @param fillColor - The color of the fill for this path.
* @param mode - The blending mode of the fill for this path.
* @param opacity - The opacity of the fill for this path (as a percentage). Range: 0.0 to 100.0.
* @param preserveTransparency - If true, transparency is preserved.
* @param feather - The feather amount in pixels. Range: 0.0 to 250.0.
* @param antiAlias - If true, uses anti-aliasing for the selection.
* @param wholePath - If true, uses all subpaths when doing the fill.
*/
fillPath(fillColor?: any, mode?: ColorBlendMode, opacity?: number, preserveTransparency?: boolean, feather?: number, antiAlias?: boolean, wholePath?: boolean): void
/**
 * Strokes the path.
* @param tool - The tool to use when stroking the path.
* @param simulatePressure - If true, simulates the pressure when using the tool.
*/
strokePath(tool?: ToolType, simulatePressure?: boolean): void
/**
 * Makes this path item the clipping path for this document.
* @param flatness - Flatness in device pixels; tells the PostScript printer how to approximate curves. Range: 0.2 to 100).
*/
makeClippingPath(flatness?: number): void
/**
 * Makes this path item the active or selected path item.
*/
select(): void
/**
 * Unselects the selection, no path items are selected.
*/
deselect(): void
}
declare class SubPathItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** If true, the path is closed. */
readonly closed: boolean
/** The sub path operation on other sub paths. */
readonly operation: ShapeOperation
/** The path points collection in the sub path. */
readonly pathPoints: PathPoints
}
declare class PathPoint {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The position (coordinates) of the anchor point. */
readonly anchor: Point
/** The location of the left direction point (the "in" position). */
readonly leftDirection: Point
/** The location of the right direction point (the "out" position). */
readonly rightDirection: Point
/** The type of point. */
readonly kind: PointKind
}
declare class MeasurementLog {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string/**
 * Exports the specified measurements.
* @param file - The file to export to. If not specified, a 'file save' dialog is displayed.
* @param range - The measurements to export. Default: selected.
* @param dataPoints - An array of identifiers of data points to export. The order of the data points is respected in the exported file. Defaults to data points visible in Measurement Log palette.
*/
exportMeasurements(file?: File, range?: MeasurementRange, dataPoints?: string): void
/**
 * Deletes the specified measurements.
* @param range - The measurements to delete. Default: selected.
*/
deleteMeasurements(range?: MeasurementRange): void
}
declare class MeasurementScale {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The name of the scale. */
name: string
/** The length (in pixels) to which this scale equates. */
pixelLength: number
/** The logical length this scale equates to. */
logicalLength: number
/** The logical units for this scale. */
logicalUnits: string
}
declare class Notifier {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The event ID in four characters or a unique string that the notifier is associated with. */
readonly event: string
/** The path to the file to execute when the event occurs/activates the notifier. */
readonly eventFile: File
/** The class ID associated with the event for the Notifier object, four characters or a unique string. */
readonly eventClass: string/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class CountItem {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The position of count item in the document. */
readonly position: UnitValue[]/**
 * Adds an element.
*/
add(): CountItem
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
}
declare class ColorSampler {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The position of the color sampler in the document. */
readonly position: UnitValue[]
/** The color of the color sampler. */
readonly color: SolidColor/**
 * Adds an element.
*/
add(): ColorSampler
/**
 * Deletes this object.
*/
remove(): void
/**
 * Deletes all elements.
*/
removeAll(): void
/**
 * Moves the color sampler to a new location.
* @param position - Position of destination (unit value)
*/
move(position: UnitValue[]): void
}
declare class XMPMetadata {
  /** The object's container. */
readonly parent: Object
/** The class name of the object. */
readonly typename: string
/** The raw XML form of file information. */
rawData: string
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
* @param argument - Optional argument(s) to be merged into the string.
*/
declare function localize(what: string, argument?: any): string
/**
 * Returns true is the supplied string is a valid XML name.
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
declare function prompt(prompt: any, _default?: string, title?: string): string/** The application object */
declare var app: Application
/** The global BridgeTalk object. */
declare var BridgeTalk: BridgeTalk
declare class ElementPlacement {
  /** Place after an element. */
static readonly PLACEAFTER: number
/** Place before an element. */
static readonly PLACEBEFORE: number
/** Place an element at the end. */
static readonly PLACEATEND: number
}