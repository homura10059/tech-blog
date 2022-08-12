import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { mockedPost } from '../../pages/__mocks__/post'
import HeroImage from './hero-image'

export default {
  title: 'components/domain/image/hero-image',
  component: HeroImage
} as ComponentMeta<typeof HeroImage>

const Template: ComponentStory<typeof HeroImage> = args => (
  <div className="w-full h-screen text-surface bg-background-dark">
    <HeroImage {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  ...mockedPost
}
