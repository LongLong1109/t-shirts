import { FontSize, FontWeight } from '@/constants/fontStyle'

interface ParagraphProps {
  text: string
  size?: FontSize
  weight?: FontWeight
  color?: string
  style?: string
}

const Paragraph = ({ text, size, weight, color, style }: ParagraphProps) => {
  return <p className={`text-${size} font-${weight} text-${color} ${style}`}>{text}</p>
}

export default Paragraph
