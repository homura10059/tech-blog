import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Tags from './'

export default {
  title: 'components/domain/tags/index',
  component: Tags
} as ComponentMeta<typeof Tags>

const Template: ComponentStory<typeof Tags> = args => (
  <div className="h-screen bg-background-dark p-4">
    <Tags {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  tags: ['tag1', 'tag2', 'tag3', 'tag4']
}
