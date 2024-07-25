import type { Meta, StoryObj } from '@storybook/react'

import SignUp from '.'

const meta = {
  title: 'Components/SignUp',
  component: SignUp,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof SignUp>

export const SignUpPrimary: Story = {
  args: {
    onSignUp: () => {},
    error: 'Login failed',
  },
}
