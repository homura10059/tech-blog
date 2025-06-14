import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { mockedPosts } from './__mocks__/post'
import PostCards from './post-card'

const meta: Meta<typeof PostCards> = {
  title: 'components/domain/post/post-card',
  component: PostCards
}

export default meta
type Story = StoryObj<typeof PostCards>

export const Default: Story = {
  args: {
    posts: mockedPosts
  },
  render: args => (
    <div className="w-full bg-background-dark text-surface">
      <PostCards {...args} />
    </div>
  )
}
