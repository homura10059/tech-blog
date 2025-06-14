import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Warning from './warning'

const meta: Meta<typeof Warning> = {
  title: 'components/domain/banners/warning',
  component: Warning,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Warning>

export const Default: Story = {
  args: {
    text: 'この記事は最終更新日から3年以上が経過しています。'
  }
}
