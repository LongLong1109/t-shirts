'use client'
import { memo } from 'react'
import isEqual from 'react-fast-compare'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// constants
import { PAGE_URL } from '@/constants/pageUrl'

// components
import { ProductProps } from '@/interfaces/product'
import Star from '@/components/Star'

const Product = ({ id, name, price, image }: ProductProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`${PAGE_URL.PRODUCT_DETAIL}/${id}`)
  }

  return (
    <div className='flex flex-col w-64 shadow-md cursor-pointer' onClick={handleClick}>
      <div className='h-[248px]'>
        <Image
          src={image}
          alt={name}
          objectFit='cover'
          style={{
            width: '100%',
            height: '100%',
          }}
          width={300}
          height={248}
          priority
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

export default memo(Product, isEqual)
