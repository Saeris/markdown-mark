import markPlugin from "markdown-it-mark";

export const activate = () => ({
  extendMarkdownIt: (md) => md.use(markPlugin),
});
