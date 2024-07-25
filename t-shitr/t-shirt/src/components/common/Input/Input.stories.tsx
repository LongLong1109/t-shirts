import type { Meta, StoryObj } from '@storybook/react'

import Input from '@/components/common/Input'
import HiddenIcon from '@/icons/hiddenIcon'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

export const InputPrimary: Story = {
  args: {
    value: 'Your Email',
    type: 'email',
    placeholder: 'Email address',
    onChange: () => {},
    icon: <HiddenIcon />,
  },
}
