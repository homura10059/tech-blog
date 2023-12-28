import { rehype } from 'rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeDocument from 'rehype-document'

export const processor = rehype()
  .use(remarkParse)
  .use(remarkMath)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeHighlight)
  .use(rehypeDocument, {
    // Get the latest one from: <https://katex.org/docs/browser>.
    css: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css'
  })
  .use(rehypeKatex)
  .use(rehypeStringify)

export default async function markdownToHtml(markdown: string) {
  const result = await processor.process(markdown)
  return result.toString()
}
