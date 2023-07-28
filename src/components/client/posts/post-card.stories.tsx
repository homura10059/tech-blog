import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { mockedPosts } from './__mocks__/post'
import PostCards from './post-card'

export default {
  title: 'components/domain/post/post-card',
  component: PostCards
} as ComponentMeta<typeof PostCards>

const Template: ComponentStory<typeof PostCards> = args => (
  <div className="w-full bg-background-dark text-surface">
    <PostCards {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  posts: mockedPosts
}
