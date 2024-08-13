import { ChangeEvent } from 'react'
import Paragraph from '../Text'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string
  type: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  icon?: JSX.Element
  helperText?: string
  className?: string
  styleInput?: string
}

const Input = ({ icon, className, helperText, styleInput, ...rest }: InputProps) => {
  return (
    <div className={className}>
      <div className='relative flex items-center'>
        <input
          className={`outline-none px-6 py-3 bg-white-100 ${icon ? 'pr-10' : ''} ${styleInput}`}
          {...rest}
        />
        {icon && <div className='absolute right-3 text-dark-90'>{icon}</div>}
      </div>
      {helperText && (
        <Paragraph text={helperText} style='text-primary-100 dark:text-primary-100 pt-2' />
      )}
    </div>
  )
}

export default Input
