import type { Meta, StoryObj } from '@storybook/react'

import Size from '.'

const meta = {
  title: 'Components/Size',
  component: Size,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Size>

export default meta
type Story = StoryObj<typeof Size>

export const SizePrimary: Story = {
  args: {
    id: 'option1',
    name: 'example',
    value: 'option1',
    isChecked: false,
    label: 'S',
  },
}
