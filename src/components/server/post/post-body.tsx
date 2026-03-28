import cx from 'classnames'
import type { ReactNode } from 'react'

import { processor } from '../../../lib/htmlToReact'
import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className={cx([markdownStyles.markdown])}>
      {processor.processSync(content).result as ReactNode}
    </div>
  )
}

export default PostBody
