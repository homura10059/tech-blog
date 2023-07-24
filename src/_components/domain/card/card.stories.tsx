import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Card from './card'

export default {
  title: 'components/domain/card',
  component: Card,
  argTypes: {}
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => (
  <div className="h-screen bg-background-dark p-4">
    <Card {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  meta: {
    title: 'EdgeRouter X',
    description:
      '宅内の routing とインターネット接続を一挙に受け持つルーター。無線機のは無いので別の機器を無線APとしている',
    image:
      'https://images-na.ssl-images-amazon.com/images/P/B010MZFH5A.09.LZZZZZZZ.jpg',
    url: 'https://www.amazon.co.jp/dp/B010MZFH5A?tag=homura10059-22'
  }
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true
}
