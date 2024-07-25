import Size from '../Size'
import Paragraph from '../common/Text'

interface SizeValue {
  id: string
  value: string
  label: string
}

interface SizeGroupProps {
  sizeValue: SizeValue[]
  name: string
  selectedValue: string
  color?: string
  onChange: (value: string) => void
}

const SizeChart = ({ sizeValue, name, selectedValue, color, onChange }: SizeGroupProps) => (
  <div>
    <Paragraph text='Size' size='sm' weight='bold' color={color} />
    <div className='flex gap-3 pt-4'>
      {sizeValue.map(({ id, value, label }) => (
        <Size
          key={id}
          id={id}
          name={name}
          value={value}
          isChecked={selectedValue === value}
          onChange={onChange}
          label={label}
        />
      ))}
    </div>
  </div>
)

export default SizeChart
