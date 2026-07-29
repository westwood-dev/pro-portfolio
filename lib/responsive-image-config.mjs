// Shared between scripts/generate-responsive-images.mjs (which creates the
// variant files) and lib/rehype-img-size-decoded.ts (which reads them back
// out to build a srcset). Keep both in sync via this file rather than
// duplicating the naming scheme.

export const RESPONSIVE_WIDTHS = [480, 768, 1080, 1440];

export function getVariantDir(sourceDir) {
  return `${sourceDir}/.responsive`;
}

export function getVariantFileName(baseName, width, ext) {
  return `${baseName}-${width}w${ext}`;
}
