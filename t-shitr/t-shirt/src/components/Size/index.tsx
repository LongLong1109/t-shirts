interface SizeProps {
  id: string
  name: string
  value: string
  isChecked: boolean
  onChange: (value: string) => void
  label: string
}

const Size = ({ id, name, value, isChecked, onChange, label }: SizeProps) => {
  const handleChange = () => {
    onChange(value)
  }

  return (
    <label className='flex items-center justify-center cursor-pointer relative'>
      <input
        aria-label={`${name}-radio`}
        type='radio'
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={handleChange}
        className={`appearance-none w-9 h-9 rounded-full ${isChecked ? 'bg-dark-50' : 'bg-white-75'} border border-gray-300`}
      />
      <span className='absolute inset-0 flex items-center justify-center pointer-events-none'>
        <p className={`${isChecked ? 'text-white-100 font-bold' : ''}`}>{label}</p>
      </span>
    </label>
  )
}

export default Size
