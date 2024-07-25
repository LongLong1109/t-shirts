import type { Meta, StoryObj } from '@storybook/react'

import SignIn from '.'

const meta = {
  title: 'Components/SignIn',
  component: SignIn,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof SignIn>

export const SignInPrimary: Story = {
  args: {
    onSignIn: () => {},
    error: 'Login failed',
  },
}
