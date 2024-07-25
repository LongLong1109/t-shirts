import type { Meta, StoryObj } from '@storybook/react'

// components
import ProductList from '@/components/ProductList'

// mocks
import { productListMock } from '@/mocks/productList'

const meta = {
  title: 'Components/ProductList',
  component: ProductList,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProductList>

export default meta
type Story = StoryObj<typeof ProductList>

export const ProductListPrimary: Story = {
  args: {
    productList: productListMock,
  },
}
