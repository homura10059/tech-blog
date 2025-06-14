import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { mockedPost } from '../posts/__mocks__/post'
import HeroImage from './hero-image'

const meta: Meta<typeof HeroImage> = {
  title: 'components/domain/image/hero-image',
  component: HeroImage
}

export default meta
type Story = StoryObj<typeof HeroImage>

export const Default: Story = {
  args: {
    ...mockedPost
  },
  render: args => (
    <div className="h-screen w-full bg-background-dark text-surface">
      <HeroImage {...args} />
    </div>
  )
}
