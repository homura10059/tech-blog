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
    { title: 'title1', hash: '' },
    { title: 'title2', hash: '' },
    { title: 'title3', hash: '' },
    { title: 'title4', hash: '' },
    { title: 'title5', hash: '' }
  ]
}
