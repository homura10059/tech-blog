import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Tag from './tag'

const meta: Meta<typeof Tag> = {
  title: 'components/domain/tags/tag',
  component: Tag
}

export default meta
type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: {
    title: 'tag',
    hash: 'hash'
  },
  render: args => (
    <div className="h-screen bg-background-dark p-4">
      <Tag {...args} />
    </div>
  )
}
