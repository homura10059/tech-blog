import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Header from './header'

const meta: Meta<typeof Header> = {
  title: 'components/domain/layout/header',
  component: Header
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {}
