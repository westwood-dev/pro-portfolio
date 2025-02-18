/// <reference types="vite/client" />

declare module '*.md?raw' {
  const content: string;
  export default content;
}

declare module '*.md' {
  const attributes: Record<string, unknown>;
  export default attributes;
}
