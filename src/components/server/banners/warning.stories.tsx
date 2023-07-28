import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Warning from './warning'

export default {
  title: 'components/domain/banners/warning',
  component: Warning,
  argTypes: {}
} as ComponentMeta<typeof Warning>

const Template: ComponentStory<typeof Warning> = args => <Warning {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'この記事は最終更新日から3年以上が経過しています。'
}
