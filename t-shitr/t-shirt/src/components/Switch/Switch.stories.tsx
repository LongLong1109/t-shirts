import type { Meta, StoryObj } from '@storybook/react'

import Switch from '.'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof Switch>

export const SwitchPrimary: Story = {
  args: {},
}
