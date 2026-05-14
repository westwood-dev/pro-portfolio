import { visit } from 'unist-util-visit';
import sizeOf from 'image-size';
import path from 'path';
import type { Root, Element } from 'hast';
import type { Plugin } from 'unified';

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
      } catch {
        // image not on disk — skip
      }
    });
  };
};

export default rehypeImgSizeDecoded;
