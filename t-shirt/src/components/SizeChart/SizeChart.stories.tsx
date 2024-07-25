import type { Meta, StoryObj } from '@storybook/react'

import SizeChart from '.'

// mocks
import { sizeOptionsMock } from '@/mocks/radioButtonOptions'

const meta = {
  title: 'Components/SizeChart',
  component: SizeChart,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SizeChart>

export default meta
type Story = StoryObj<typeof SizeChart>

export const SizeChartPrimary: Story = {
  args: {
    sizeValue: sizeOptionsMock,
    name: 'sizeGroup',
    selectedValue: 'l',
    onChange: () => {},
  },
}
