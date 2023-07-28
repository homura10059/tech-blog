import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Youtube from './youtube'

export default {
  title: 'components/domain/embed/youtube',
  component: Youtube,
  argTypes: {}
} as ComponentMeta<typeof Youtube>

const Template: ComponentStory<typeof Youtube> = args => <Youtube {...args} />

export const Default = Template.bind({})
Default.args = {
  href: 'https://www.youtube.com/watch?v=7USNL5Mqnrk'
}
