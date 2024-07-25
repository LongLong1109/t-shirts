import type { Meta, StoryObj } from '@storybook/react'

import Quantity from '.'

const meta = {
  title: 'Components/Quantity',
  component: Quantity,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Quantity>

export default meta
type Story = StoryObj<typeof Quantity>

export const QuantityPrimary: Story = {
  args: {
    value: 1,
    onDeCrease: () => alert('Decrease value'),
    onInCrease: () => alert('Increase value'),
  },
}
