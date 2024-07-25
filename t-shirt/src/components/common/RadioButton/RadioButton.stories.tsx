import type { Meta, StoryObj } from '@storybook/react'

import RadioButton from '.'

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof RadioButton>

export const RadioButtonPrimary: Story = {
  args: {
    id: 'option1',
    name: 'example',
    value: 'option1',
    isChecked: true,
  },
}
