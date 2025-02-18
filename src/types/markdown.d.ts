declare module '*.md' {
  const content: {
    frontmatter: {
      title: string;
      description?: string;
      date?: string;
    };
    default: string;
  };
  export default content;
}

declare module '*.md?raw' {
  const content: string;
  export default content;
}