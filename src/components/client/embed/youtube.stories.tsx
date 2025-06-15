import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Youtube from './youtube'

const meta: Meta<typeof Youtube> = {
  title: 'components/domain/embed/youtube',
  component: Youtube,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Youtube>

export const Default: Story = {
  args: {
    href: 'https://www.youtube.com/watch?v=7USNL5Mqnrk'
  }
}
