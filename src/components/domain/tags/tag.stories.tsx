import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Tag from './tag'

export default {
  title: 'components/domain/tags/tag',
  component: Tag
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = args => (
  <div className="h-screen bg-background-dark p-4">
    <Tag {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  title: 'tag',
  hash: 'hash'
}
