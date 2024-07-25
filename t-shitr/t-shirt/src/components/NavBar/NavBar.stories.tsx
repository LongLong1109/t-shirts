import type { Meta, StoryObj } from '@storybook/react'

// components
import NavBar from '@/components/NavBar'

// mocks
import { navBarListMock } from '@/mocks/navBarList'

const meta = {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavBar>

export default meta
type Story = StoryObj<typeof NavBar>

export const NavBarPrimary: Story = {
  args: {
    navBarList: navBarListMock,
  },
}
