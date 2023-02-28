import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { mockedPosts } from './__mocks__/post'
import Home from './home'

export default {
  title: 'components/pages/home',
  component: Home
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = args => (
  <div className="bg-background-dark text-surface">
    <Home {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  allPosts: mockedPosts
}
