import type { Meta, StoryObj } from '@storybook/react'

import Header from '.'

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof Header>

export const HeaderPrimary: Story = {
  args: {
    searchValue: '',
    onSearchValue: () => {},
  },
}
