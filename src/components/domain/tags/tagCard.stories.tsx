import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import TagCard from './tagCard'

export default {
  title: 'components/domain/tags/tagCard',
  component: TagCard
} as ComponentMeta<typeof TagCard>

const Template: ComponentStory<typeof TagCard> = args => (
  <div className="p-4 h-screen bg-background-dark">
    <TagCard {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  tag: 'tag',
  count: 20
}
