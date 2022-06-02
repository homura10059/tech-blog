import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Tag from './tag'

export default {
  title: 'components/domain/tags/tag',
  component: Tag
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = args => (
  <div className="bg-background-dark h-screen p-4">
    <Tag {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  text: 'tag'
}
