'use client'
import { useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { Breadcrumb, Cart } from '@/components'
import { Paragraph } from '@/components/common'

// utils
import { splitPath } from '@/utils/splitPath'

const CartProduct = () => {
  const pathName = usePathname()
  const paths = splitPath(pathName)

  const handleInCrease = useCallback(() => {
    //TODO: will handle it later
  }, [])

  const handleDeCrease = useCallback(() => {
    //TODO: will handle it later
  }, [])

  const handleDeleteProduct = useCallback(() => {
    //TODO: will handle it later
  }, [])

  const productsMock = [
    {
      id: '1',
      image:
        'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/926/products/789478255402240601566376674779.png?v=1633577887370',
      name: 'Smart T-shirt',
      color: 'White',
      price: '40',
      inStock: '1305',
      blurDataURL:
        'Imh0dHBzOi8vYml6d2ViLmRrdGNkbi5uZXQvdGh1bWIvMTAyNHgxMDI0LzEwMC80MzgvOTI2L3Byb2R1Y3RzLzc4OTQ3ODI1NTQwMjI0MDYwMTU2NjM3NjY3NDc3OS5wbmc/dj0xNjMzNTc3ODg3MzcwIg==',
    },
    {
      id: '2',
      image:
        'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/926/products/789478255402240601566376674779.png?v=1633577887370',
      name: 'Smart T-shirt',
      color: 'White',
      price: '40',
      inStock: '1305',
      blurDataURL:
        'Imh0dHBzOi8vYml6d2ViLmRrdGNkbi5uZXQvdGh1bWIvMTAyNHgxMDI0LzEwMC80MzgvOTI2L3Byb2R1Y3RzLzc4OTQ3ODI1NTQwMjI0MDYwMTU2NjM3NjY3NDc3OS5wbmc/dj0xNjMzNTc3ODg3MzcwIg==',
    },
  ]

  return (
    <section>
      <div className='bg-gradient-to-b from-purpleLinear-50 to-purpleLinear-100 p-10'>
        <div className='max-w-[1440px] mx-auto'>
          <Breadcrumb paths={paths} />
          <div className='flex flex-col w-1/2 pt-10'>
            <h2 className='text-white-100 text-md font-bold pb-6'>Cart</h2>
            <Paragraph
              color='white-100'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.'
            />
          </div>
        </div>
      </div>
      <div className='p-20 bg-white-100'>
        <Cart
          cart={productsMock}
          onDelete={handleDeleteProduct}
          onIncrease={handleInCrease}
          onDecrease={handleDeCrease}
        />
      </div>
    </section>
  )
}

export default CartProduct
