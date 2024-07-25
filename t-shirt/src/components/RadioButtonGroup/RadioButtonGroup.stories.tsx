import type { Meta, StoryObj } from '@storybook/react'

import RadioButtonGroup from '.'

// mocks
import { radioButtonOptionsMock } from '@/mocks/radioButtonOptions'

const meta = {
  title: 'Components/RadioButtonGroup',
  component: RadioButtonGroup,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RadioButtonGroup>

export default meta
type Story = StoryObj<typeof RadioButtonGroup>

export const RadioButtonGroupPrimary: Story = {
  args: {
    options: radioButtonOptionsMock,
    name: 'radioGroup',
    selectedValue: 'white',
    onChange: () => {},
  },
}
