import Image from 'next/image'

// components
import { ProductProps } from '@/interfaces/product'
import Start from '@/components/Star'

const Product = ({ id, name, price, image }: ProductProps) => (
  <div key={id} className='flex flex-col w-64 shadow-md cursor-pointer'>
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
        <h3 className='text-xs font-bold'>{name}</h3>
        <p className='text-xs font-bold'>{price}$</p>
      </div>
      <div className='pt-1'>
        <p className='text-dark-90'>Best quality</p>
        <Start />
      </div>
    </div>
  </div>
)

export default Product
