import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Tags from './'

const meta: Meta<typeof Tags> = {
  title: 'components/domain/tags/index',
  component: Tags
}

export default meta
type Story = StoryObj<typeof Tags>

export const Default: Story = {
  args: {
    tags: [
      { title: 'tag1', hash: 'hash1' },
      { title: 'tag2', hash: 'hash2' },
      { title: 'tag3', hash: 'hash3' },
      { title: 'tag4', hash: 'hash4' }
    ]
  },
  render: args => (
    <div className="h-screen bg-background-dark p-4">
      <Tags {...args} />
    </div>
  )
}
