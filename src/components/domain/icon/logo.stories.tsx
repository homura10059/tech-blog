import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Logo from './logo'

export default {
  title: 'components/domain/icon/logo',
  component: Logo,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' }
  }
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = args => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {
  width: 50,
  height: 50
}
