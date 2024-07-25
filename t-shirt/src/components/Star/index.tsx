// icons
import StarIcon from '@/icons/starIcon'

const Star = () => {
  const stars = Array(5).fill(0)

  return (
    <div className='flex pt-3 gap-2'>
      {stars.map((_, index) => (
        <span key={index}>
          <StarIcon />
        </span>
      ))}
    </div>
  )
}

export default Star
