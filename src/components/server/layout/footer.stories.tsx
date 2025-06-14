import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import Footer from './footer'

const meta: Meta<typeof Footer> = {
  title: 'components/domain/layout/footer',
  component: Footer
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {}
