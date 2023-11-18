import cx from 'classnames'

import { processor } from '../../../lib/htmlToReact'
import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className={cx([markdownStyles.markdown])}>
      {processor.processSync(content).result}
    </div>
  )
}

export default PostBody
