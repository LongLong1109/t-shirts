import type { Meta, StoryObj } from '@storybook/react'

// components
import Carousel from '.'

// mocks
import { imageListMock } from '@/mocks/imageList'

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof Carousel>

export const CarouselPrimary: Story = {
  args: {
    images: imageListMock,
    size: '64',
  },
}
