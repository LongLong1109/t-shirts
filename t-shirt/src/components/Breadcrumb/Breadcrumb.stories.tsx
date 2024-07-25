import type { Meta, StoryObj } from '@storybook/react'

import Breadcrumb from '.'

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof Breadcrumb>

const breadcrumbPaths = [
  { name: 'Home', link: '/home' },
  { name: 'Shop', link: '/home/shop' },
]

export const BreadcrumbPrimary: Story = {
  args: {
    paths: breadcrumbPaths,
  },
}
