import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import TagsCards from './tagCards'

export default {
  title: 'components/domain/tags/tagCards',
  component: TagsCards
} as ComponentMeta<typeof TagsCards>

const Template: ComponentStory<typeof TagsCards> = args => (
  <div className="bg-background-dark h-screen p-4">
    <TagsCards {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  tags: {
    tag1: 0,
    tag2: 10,
    tag3: 100,
    tag4: 200,
    tag5: 1000
  }
}
