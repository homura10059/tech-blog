import { createElement } from 'react'
import rehypeParse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import { unified } from 'unified'

import CustomLink from '../components/headless/custom-link'

export const processor = unified()
  .use(rehypeParse, { fragment: true }) // fragmentは必ずtrueにする
  .use(rehypeReact, {
    createElement,
    components: {
      a: CustomLink
    }
  })
