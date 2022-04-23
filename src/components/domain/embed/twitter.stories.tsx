import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Twitter from './twitter'

export default {
  title: 'components/domain/embed/twitter',
  component: Twitter,
  argTypes: {}
} as ComponentMeta<typeof Twitter>

const Template: ComponentStory<typeof Twitter> = args => <Twitter {...args} />

export const Default = Template.bind({})
Default.args = {
  href: 'https://twitter.com/homura10059/status/1511701621901717510'
}
