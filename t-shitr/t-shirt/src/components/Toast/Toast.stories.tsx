import type { Meta, StoryObj } from '@storybook/react'

// components
import Toast from '.'

// types
import { TOAST } from '@/types/toast'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof Toast>

export const ToastPrimary: Story = {
  args: {
    message: 'Success',
    type: TOAST.SUCCESS,
    onClose: () => {},
  },
}

export const ToastSecondary: Story = {
  args: {
    message: 'Error',
    type: TOAST.ERROR,
    onClose: () => {},
  },
}

export const ToastInfo: Story = {
  args: {
    message: 'Info',
    type: TOAST.INFO,
    onClose: () => {},
  },
}
