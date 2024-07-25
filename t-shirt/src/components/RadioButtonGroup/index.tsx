// components
import RadioButton from '../common/RadioButton'
import Paragraph from '../common/Text'

interface ValueOption {
  id: string
  value: string
  style: string
}

interface RadioButtonGroupProps {
  options: ValueOption[]
  name: string
  selectedValue: string
  color?: string
  onChange: (value: string) => void
}

const RadioButtonGroup = ({
  options,
  name,
  selectedValue,
  onChange,
  color,
}: RadioButtonGroupProps) => (
  <div>
    <Paragraph text='Color' size='sm' weight='bold' color={color} />
    <div className='flex gap-3 pt-4'>
      {options.map(({ id, value, style }) => (
        <RadioButton
          key={id}
          id={id}
          name={name}
          value={value}
          isChecked={selectedValue === value}
          onChange={onChange}
          inputStyle={style}
        />
      ))}
    </div>
  </div>
)

export default RadioButtonGroup
