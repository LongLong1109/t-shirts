interface RadioButtonProps {
  id: string
  name: string
  value: string
  isChecked: boolean
  onChange: (value: string) => void
  inputStyle?: string
}

const RadioButton = ({ id, name, value, isChecked, onChange, inputStyle }: RadioButtonProps) => {
  const handleChange = () => {
    onChange(value)
  }

  return (
    <label className='flex items-center cursor-pointer'>
      <input
        type='radio'
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={handleChange}
        className={`appearance-none ${inputStyle} w-6 h-6 rounded-full border border-gray-300 `}
      />
      <span
        className={`absolute w-3 h-3 rounded-full ${isChecked ? 'bg-blue-500' : 'bg-transparent'} ml-[6px]`}
      ></span>
    </label>
  )
}

export default RadioButton
