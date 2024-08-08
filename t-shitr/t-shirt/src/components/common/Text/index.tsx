import { FontSize, FontWeight } from '@/constants/fontStyle'

interface ParagraphProps {
  text: string
  size?: FontSize
  weight?: FontWeight
  color?: string
  style?: string
}

const Paragraph = ({ text, size, weight, color, style }: ParagraphProps) => {
  const sizeClass = size ? `text-${size}` : ''
  const weightClass = weight ? `font-${weight}` : ''
  const colorClass = color ? `text-${color}` : ''
  const styleClass = style ? style : ''

  return (
    <p
      className={`text-black dark:text-white-100 ${sizeClass} ${weightClass} ${colorClass} ${styleClass}`}
    >
      {text}
    </p>
  )
}

export default Paragraph
