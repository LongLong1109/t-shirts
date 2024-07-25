import { ReactNode } from 'react'

interface IconButtonProps {
  icon: ReactNode
  onClick: () => void
  color?: string
  disabled?: boolean
  className?: string
}

const IconButton = ({
  icon,
  onClick,
  color,
  disabled = false,
  className = '',
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center ${className}`}
      style={{ color }}
      disabled={disabled}
      data-testid='icon-btn'
    >
      {icon}
    </button>
  )
}

export default IconButton
