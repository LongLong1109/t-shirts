import type { Meta, StoryObj } from '@storybook/react'
import { FONT_SIZE, FONT_WEIGHT } from '@/constants/fontStyle'

import Text from '@/components/common/Text'

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof Text>

export const TextPrimary: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.',
    size: FONT_SIZE.XS,
    weight: FONT_WEIGHT.BOLD,
  },
}
