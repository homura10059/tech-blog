import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Layout from './index'

export default {
  title: 'components/domain/layout/index',
  component: Layout
} as ComponentMeta<typeof Layout>

const Template: ComponentStory<typeof Layout> = args => (
  <Layout {...args}>ここにmainが入る</Layout>
)

export const Default = Template.bind({})
Default.args = {
  og: {
    url: 'url',
    type: 'website',
    title: 'title',
    description: 'description',
    site_name: 'string',
    image: 'string'
  }
}
