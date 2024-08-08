import type { Meta, StoryObj } from '@storybook/react'

import Oblongers from '.'

const meta = {
  title: 'Components/Oblongers',
  component: Oblongers,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Oblongers>

export default meta
type Story = StoryObj<typeof Oblongers>

export const OblongersPrimary: Story = {
  args: {},
}
