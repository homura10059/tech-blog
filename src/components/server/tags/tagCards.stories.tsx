import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import TagsCards from './tagCards'

const meta: Meta<typeof TagsCards> = {
  title: 'components/domain/tags/tagCards',
  component: TagsCards
}

export default meta
type Story = StoryObj<typeof TagsCards>

export const Default: Story = {
  args: {
    tags: [
      { title: 'title1', hash: '' },
      { title: 'title2', hash: '' },
      { title: 'title3', hash: '' },
      { title: 'title4', hash: '' },
      { title: 'title5', hash: '' }
    ]
  },
  render: args => (
    <div className="h-screen bg-background-dark p-4">
      <TagsCards {...args} />
    </div>
  )
}
