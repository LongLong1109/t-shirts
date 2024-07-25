interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  onClick?: () => void
}

const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <button className='bg-white-100 px-12 py-2 h-12 text-purpleLinear-100 font-bold' {...props}>
      {text}
    </button>
  )
}

export default Button
