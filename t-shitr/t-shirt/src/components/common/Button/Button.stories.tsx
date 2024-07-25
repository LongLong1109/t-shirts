import type { Meta, StoryObj } from '@storybook/react'

import Button from '@/components/common/Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const ButtonPrimary: Story = {
  args: {
    text: 'Shop Now',
    onClick: () => alert('Clicked'),
  },
}

export const ButtonSecondary: Story = {
  args: {
    text: 'Login Now',
    onClick: () => alert('Login now'),
    className:
      'bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white-100 px-12 py-2 h-12 font-bold',
  },
}
