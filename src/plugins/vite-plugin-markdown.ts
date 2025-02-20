import { Plugin } from 'vite';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import matter from 'gray-matter';

export default function markdownPlugin(): Plugin {
  return {
    name: 'vite-plugin-markdown',
    transform(code: string, id: string) {
      if (!id.endsWith('.md')) return null;

      const { data: frontmatter, content } = matter(code);

      console.log('Frontmatter:', frontmatter);
      
      // Pre-process custom components before markdown conversion
      let processedContent = content
        .replace(/::Grid(\d)x(\d)\n([\s\S]*?)(?=::(?:\n|$))/g, (_, cols, rows, content) => {
          const gridStyle = `grid-template-columns: repeat(${cols}, 1fr); grid-template-rows: repeat(${rows}, auto)`;
          return `<div class="md-grid" style="${gridStyle}">${content}</div>`;
        })
        .replace(/::Spacer\n/g, '<div class="md-spacer"></div>\n')
        .replace(/^::\s*$/gm, '');

      // Process markdown to HTML
      const htmlContent = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeStringify)
        .processSync(processedContent)
        .toString();

      // Add required classes to HTML elements
      const processedHtml = htmlContent
        .replace(/<h[2-5]/g, match => `${match} class="text-colour"`)
        .replace(
          /<a\s+href="(http[^"]+)"/g,
          (_, url) => `<a href="${url}" class="text-colour" target="_blank" rel="noopener noreferrer"`
        );

      // Return as a JavaScript module with named exports
      return {
        code: `
          const frontmatter = ${JSON.stringify(frontmatter)};
          const html = ${JSON.stringify(processedHtml)};
          export { frontmatter, html };
          export default { frontmatter, html };
        `,
        map: null
      };
    }
  };
}