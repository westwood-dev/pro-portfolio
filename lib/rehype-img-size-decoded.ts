import { visit } from 'unist-util-visit';
import sizeOf from 'image-size';
import path from 'path';
import { existsSync } from 'fs';
import type { Root, Element } from 'hast';
import type { Plugin } from 'unified';
import { RESPONSIVE_WIDTHS, getVariantDir, getVariantFileName } from './responsive-image-config.mjs';

const PROSE_IMAGE_SIZES = '(max-width: 768px) 100vw, 720px';

const rehypeImgSizeDecoded: Plugin<[{ dir: string }], Root> = ({ dir }) => {
  return (tree) => {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName !== 'img') return;
      const src = node.properties?.src;
      if (typeof src !== 'string' || src.startsWith('http')) return;
      const decoded = decodeURIComponent(src);
      const fullPath = path.join(process.cwd(), dir, decoded);
      try {
        const { width, height } = sizeOf(fullPath);
        if (width) node.properties.width = width;
        if (height) node.properties.height = height;
        if (width) {
          const srcSet = buildSrcSet(decoded, fullPath, width);
          if (srcSet) {
            node.properties.srcSet = srcSet;
            node.properties.sizes = PROSE_IMAGE_SIZES;
          }
        }
      } catch {
        // image not on disk — skip
      }
    });
  };
};

function buildSrcSet(urlPath: string, fullPath: string, originalWidth: number): string | null {
  const urlDir = path.posix.dirname(urlPath);
  const fullDir = path.dirname(fullPath);
  const ext = path.posix.extname(urlPath);
  const base = path.posix.basename(urlPath, ext);

  const entries = RESPONSIVE_WIDTHS.filter((w) => w < originalWidth)
    .filter((w) => existsSync(path.join(getVariantDir(fullDir), getVariantFileName(base, w, '.webp'))))
    .map((w) => `${getVariantDir(urlDir)}/${getVariantFileName(base, w, '.webp')} ${w}w`);

  if (entries.length === 0) return null;
  entries.push(`${urlPath} ${originalWidth}w`);
  return entries.join(', ');
}

export default rehypeImgSizeDecoded;
