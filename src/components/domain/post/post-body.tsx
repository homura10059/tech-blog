import { processor } from '../../../lib/htmlToReact'
import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']}>
        {processor.processSync(content).result}
      </div>
    </div>
  )
}

export default PostBody
