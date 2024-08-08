'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// components
import { ProductProps } from '@/interfaces/product'
import Star from '@/components/Star'

// constants
import { PAGE_URL } from '@/constants/pageUrl'

const Product = ({ id, name, price, image }: ProductProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`${PAGE_URL.PRODUCT_DETAIL}/${id}`)
  }

  return (
    <div className='flex flex-col w-64 shadow-md cursor-pointer' onClick={handleClick}>
      <div>
        <Image
          src={image}
          alt={name}
          className='w-48 h-48'
          objectFit='cover'
          style={{
            width: '100%',
            height: '248px',
          }}
          width={300}
          height={248}
        />
      </div>
      <div className='bg-white-100 p-4 pb-6'>
        <div className='flex justify-between items-center'>
          <h3 className='text-xs font-bold text-dark-100'>{name}</h3>
          <p className='text-xs font-bold text-dark-100'>{price}$</p>
        </div>
        <div className='pt-1'>
          <p className='text-dark-90'>Best quality</p>
          <Star />
        </div>
      </div>
    </div>
  )
}

export default Product
