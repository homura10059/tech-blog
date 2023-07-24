import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { mockedPosts } from './__mocks__/post'
import AllPosts from './all-posts'

export default {
  title: 'components/pages/all-posts',
  component: AllPosts
} as ComponentMeta<typeof AllPosts>

const Template: ComponentStory<typeof AllPosts> = args => (
  <div className="bg-background-dark text-surface">
    <AllPosts {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  allPosts: mockedPosts
}
