import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { mockedPosts } from './__mocks__/post'
import AllPosts from './all-posts'

export default {
  title: 'components/pages/all-posts',
  component: AllPosts
} as ComponentMeta<typeof AllPosts>

const Template: ComponentStory<typeof AllPosts> = args => (
  <div className="text-surface bg-background-dark">
    <AllPosts {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  allPosts: mockedPosts
}
