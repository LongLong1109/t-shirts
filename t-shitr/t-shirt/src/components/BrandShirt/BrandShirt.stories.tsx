import type { Meta, StoryObj } from '@storybook/react'

import BrandShirt from '.'

const meta = {
  title: 'Components/BrandShirt',
  component: BrandShirt,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BrandShirt>

export default meta
type Story = StoryObj<typeof BrandShirt>

export const BrandShirtPrimary: Story = {}
