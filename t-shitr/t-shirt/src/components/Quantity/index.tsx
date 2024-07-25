// components
import IconButton from '../common/IconButton'
import Paragraph from '../common/Text'
// icons
import PlusIcon from '@/icons/plusIcon'
import MinusIcon from '@/icons/minusIcon'

interface QuantityProps {
  value: number
  onInCrease: () => void
  onDeCrease: () => void
}

const Quantity = ({ value, onInCrease, onDeCrease }: QuantityProps) => {
  const isDecrementDisabled = value <= 1

  return (
    <div className='flex justify-center items-center gap-8 border border-dark-90 p-2 h-12 bg-white-100'>
      <IconButton
        icon={<MinusIcon color={`${isDecrementDisabled ? '#969696' : ''}`} />}
        onClick={onDeCrease}
        disabled={isDecrementDisabled}
      />
      <Paragraph text={`${value}`} />
      <IconButton icon={<PlusIcon />} onClick={onInCrease} />
    </div>
  )
}

export default Quantity
