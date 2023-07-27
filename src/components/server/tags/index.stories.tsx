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
  tags: [
    { title: 'tag1', hash: 'hash1' },
    { title: 'tag2', hash: 'hash2' },
    { title: 'tag3', hash: 'hash3' },
    { title: 'tag4', hash: 'hash4' }
  ]
}
