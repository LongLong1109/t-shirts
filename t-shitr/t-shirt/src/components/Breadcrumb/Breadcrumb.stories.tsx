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
  { name: 'Home', link: '/' },
  { name: 'Shop', link: '/shop' },
]

export const BreadcrumbPrimary: Story = {
  args: {
    paths: breadcrumbPaths,
    styleLink: 'text-dark-90',
  },
}
