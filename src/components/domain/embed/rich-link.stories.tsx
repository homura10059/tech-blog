import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import RichLink from './rich-link'

export default {
  title: 'components/domain/embed/rich-link',
  component: RichLink,
  argTypes: {}
} as ComponentMeta<typeof RichLink>

const Template: ComponentStory<typeof RichLink> = args => (
  <div className="bg-background-dark h-screen p-4">
    <RichLink {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  meta: {
    description:
      'Amazonで原 旅人のコンセプトから理解するRust。アマゾンならポイント還元本が多数。一度購入いただいた電子書籍は、KindleおよびFire端末、スマートフォンやタブレットなど、様々な端末でもお楽しみいただけます。',
    image:
      'https://images-na.ssl-images-amazon.com/images/P/B09RQGMYKZ.09.MZZZZZZZ.jpg',
    title: 'コンセプトから理解するRust',
    url: 'https://www.amazon.co.jp/dp/B09RQGMYKZ'
  }
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true
}
