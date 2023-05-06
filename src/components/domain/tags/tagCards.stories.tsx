import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import TagsCards from './tagCards'

export default {
  title: 'components/domain/tags/tagCards',
  component: TagsCards
} as ComponentMeta<typeof TagsCards>

const Template: ComponentStory<typeof TagsCards> = args => (
  <div className="h-screen bg-background-dark p-4">
    <TagsCards {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  tags: [
    { tag: 'tag1', hash: '', count: 0 },
    { tag: 'tag2', hash: '', count: 10 },
    { tag: 'tag3', hash: '', count: 100 },
    { tag: 'tag4', hash: '', count: 200 },
    { tag: 'tag5', hash: '', count: 1000 }
  ]
}
