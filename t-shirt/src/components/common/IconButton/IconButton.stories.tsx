import type { Meta, StoryObj } from '@storybook/react'

// components
import IconButton from '.'

// icons
import PlusIcon from '@/icons/plusIcon'
import MinusIcon from '@/icons/minusIcon'
import DeleteIcon from '@/icons/deleteIcon'

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof IconButton>

export const MinusButtonPrimary: Story = {
  args: {
    icon: <MinusIcon />,
    onClick: () => alert('Decrease value'),
    className: 'bg-white-100 p-2',
    color: 'black',
  },
}

export const PlusButtonSecondary: Story = {
  args: {
    icon: <PlusIcon />,
    onClick: () => alert('Increase value'),
    className: 'bg-white-100 p-2',
    color: 'black',
  },
}

export const DeleteButtonSecondary: Story = {
  args: {
    icon: <DeleteIcon />,
    onClick: () => alert('Delete value'),
    className: 'p-2',
    color: 'black',
  },
}
