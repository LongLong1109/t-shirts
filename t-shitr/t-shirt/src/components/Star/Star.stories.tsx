import type { Meta, StoryObj } from '@storybook/react'

import Star from '.'

const meta = {
  title: 'Components/Star',
  component: Star,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Star>

export default meta
type Story = StoryObj<typeof Star>

export const StarPrimary: Story = {
  args: {},
}
