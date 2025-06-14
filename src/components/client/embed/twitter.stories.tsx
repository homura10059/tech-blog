import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Twitter from './twitter'

const meta: Meta<typeof Twitter> = {
  title: 'components/domain/embed/twitter',
  component: Twitter,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: 'https://twitter.com/homura10059/status/1511701621901717510'
  }
}
