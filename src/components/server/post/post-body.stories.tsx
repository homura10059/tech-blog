import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import PostBody from './post-body'
import markdownToHtml, { processor } from '../../../lib/markdownToHtml'

export default {
  title: 'components/server/post/post-body',
  component: PostBody,
  argTypes: {}
} as Meta<typeof PostBody>

const Template: StoryFn<typeof PostBody> = args => (
  <div className="h-screen bg-background-dark p-4">
    <PostBody {...args} />
  </div>
)

const md = processor
  .processSync(`
# h1

## h2

### markdown syntax

- [link](https://example.com)

### mathjax syntax

このメソッドは $O(n)$ で処理される

次のブロックは
$$
O(n^2)
$$
で処理される
`)
  .toString()

export const Default = Template.bind({})
Default.args = {
  content: md
}
