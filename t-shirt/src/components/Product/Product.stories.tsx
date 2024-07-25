import type { Meta, StoryObj } from '@storybook/react'

import Product from '@/components/Product'

const meta = {
  title: 'Components/Product',
  component: Product,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Product>

export default meta
type Story = StoryObj<typeof Product>

export const ProductPrimary: Story = {
  args: {
    name: 'Smart T-shirt',
    price: '40',
    image:
      'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/926/products/789478255402240601566376674779.png?v=1633577887370',
  },
}
