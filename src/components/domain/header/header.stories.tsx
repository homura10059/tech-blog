import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Header from './header'

export default {
  title: 'components/domain/header',
  component: Header
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => <Header {...args} />

export const Default = Template.bind({})
