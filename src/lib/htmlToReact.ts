import { createElement } from 'react'
import rehypeParse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import { unified } from 'unified'

import CustomLink from '../components/server/links/custom-link'

// biome-ignore lint/suspicious/noExplicitAny: unified plugin types are incompatible
const u = unified as any

export const processor = u()
  .use(rehypeParse, { fragment: true }) // fragmentは必ずtrueにする
  .use(rehypeReact, {
    createElement,
    components: {
      a: CustomLink
    }
  })
