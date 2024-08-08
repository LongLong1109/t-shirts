import type { Meta, StoryObj } from '@storybook/react'

import ModelList from '.'

const meta = {
  title: 'Components/ModelList',
  component: ModelList,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ModelList>

export default meta
type Story = StoryObj<typeof ModelList>

export const ModelListPrimary: Story = {
  args: {},
}
