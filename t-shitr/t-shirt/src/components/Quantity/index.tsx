// icons
import PlusIcon from '@/icons/plusIcon'
import MinusIcon from '@/icons/minusIcon'

// components
import IconButton from '../common/IconButton'
import Paragraph from '../common/Text'

interface QuantityProps {
  value: number
  onInCrease: () => void
  onDeCrease: () => void
}

const Quantity = ({ value, onInCrease, onDeCrease }: QuantityProps) => {
  const isDecrementDisabled = value <= 1

  return (
    <div className='flex justify-center items-center gap-8 border border-dark-90 p-2 h-12 bg-white-100 dark:bg-dark-100'>
      <IconButton
        className='w-6 h-6 text-dark-90'
        icon={<MinusIcon />}
        onClick={onDeCrease}
        disabled={isDecrementDisabled}
      />
      <Paragraph text={`${value}`} />
      <IconButton className='w-6 h-6 text-dark-90' icon={<PlusIcon />} onClick={onInCrease} />
    </div>
  )
}

export default Quantity
