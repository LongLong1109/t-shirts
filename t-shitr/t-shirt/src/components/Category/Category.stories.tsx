import type { Meta, StoryObj } from '@storybook/react'

import Category from '.'

const meta = {
  title: 'Components/Category',
  component: Category,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Category>

export default meta
type Story = StoryObj<typeof Category>

export const CategoryPrimary: Story = {
  args: {},
}
