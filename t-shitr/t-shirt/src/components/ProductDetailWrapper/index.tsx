'use client'
import React, { useState, useCallback, memo } from 'react'
import Image from 'next/image'
import isEqual from 'react-fast-compare'
import { useRouter } from 'next/navigation'

// constants
import { PRODUCT_IMAGES } from '@/constants/product'
import { PATH_NAME } from '@/constants/paths'
import { PAGE_URL } from '@/constants/pageUrl'

// mocks
import { radioButtonOptionsMock } from '@/mocks/radioButtonOptions'
import { sizeOptionsMock } from '@/mocks/radioButtonOptions'

// interfaces
import { ProductProps } from '@/interfaces/product'

// utils
import { createPaths } from '@/utils/createPath'

// store
import useProduct from '@/stores/useProduct'
import useAuth from '@/stores/useAuth'

// components
import { Breadcrumb } from '@/components'
import { Color, SizeChart, Quantity } from '@/components'
import { Paragraph, Button } from '@/components/common'
import CartIcon from '@/icons/cartIcon'

const ProductDetailWrapper = ({ product }: { product: ProductProps }) => {
  const router = useRouter()
  const { name, image, price, color, size, inStock, quantity } = product
  const [selectedColor, setSelectedColor] = useState(color || 'white')
  const [selectedSize, setSelectedSize] = useState(size || 's')
  const [amount, setAmount] = useState(quantity || 1)

  const addToCart = useProduct((state) => state.addToCart)
  const userAuth = useAuth((state) => state.userAuth)

  const handleAddToCart = () => {
    if (userAuth) {
      addToCart({ product, amount, color: selectedColor, size: selectedSize })
      router.push(PAGE_URL.CART)
      return
    }
    return router.push(PAGE_URL.SIGN_IN)
  }

  const productDetailPath = createPaths(PATH_NAME.SHOP, PAGE_URL.SHOP, {
    name,
    link: '',
  })

  const handleColorChange = useCallback((color: string) => {
    setSelectedColor(color)
  }, [])

  const handleSizeChange = useCallback((size: string) => {
    setSelectedSize(size)
  }, [])

  const handleInCrease = useCallback(() => {
    setAmount((prev) => prev + 1)
  }, [])

  const handleDeCrease = useCallback(() => {
    setAmount((prev) => prev - 1)
  }, [])

  return (
    <>
      <Breadcrumb paths={productDetailPath} styleLink='dark:text-white-100' />
      <div className='flex lg:justify-center lg:gap-10 gap-4 pt-10 flex-wrap lg:flex-nowrap'>
        <div className='md:w-1/2 w-full'>
          <div className='w-[340px] md:w-[688px] lg:w-[588px] md:h-[400px] pb-0 lg:pb-6'>
            <Image
              src={image}
              alt='White T-Shirt'
              className='w-full h-full'
              width={500}
              height={100}
              blurDataURL='Imh0dHBzOi8vYml6d2ViLmRrdGNkbi5uZXQvdGh1bWIvMTAyNHgxMDI0LzEwMC80MzgvOTI2L3Byb2R1Y3RzLzc4OTQ3ODI1NTQwMjI0MDYwMTU2NjM3NjY3NDc3OS5wbmc/dj0xNjMzNTc3ODg3MzcwIg=='
            />
          </div>
          <div className='gap-6 hidden lg:flex'>
            {PRODUCT_IMAGES.map(({ src, alt, blurData }, index) => (
              <div key={index} className='w-[180px] h-[180px]'>
                <Image
                  src={src}
                  alt={alt}
                  className='w-full h-full'
                  width={100}
                  height={100}
                  blurDataURL={blurData}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='lg:w-1/2 w-full'>
          <h1 className='text-md font-bold mb-4'>{name}</h1>
          <p className='text-dark-90 mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec
            iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
          </p>

          <div className='flex items-center mb-5 mt-10 justify-between'>
            <Color
              options={radioButtonOptionsMock}
              name='Color'
              selectedValue={selectedColor}
              onChange={handleColorChange}
            />

            <div>
              <Paragraph text='Stock' size='sm' weight='bold' />
              <div className='flex pt-4 gap-4'>
                <p className='text-dark-10'>({inStock})</p>
                <CartIcon />
              </div>
            </div>
          </div>

          <div className='flex items-center mb-5'>
            <SizeChart
              sizeValue={sizeOptionsMock}
              name='Size'
              selectedValue={selectedSize}
              onChange={handleSizeChange}
            />
          </div>

          <div className='mb-5'>
            <div className='flex flex-col '>
              <Paragraph text='Quantity' size='sm' weight='bold' />
            </div>

            <div className='flex justify-between items-center mt-4'>
              <Quantity value={amount} onInCrease={handleInCrease} onDeCrease={handleDeCrease} />
              <p className='text-dark-5 dark:text-white-100 text-md font-medium'>${price} USD</p>
            </div>
          </div>

          <Button
            text='Checkout'
            onClick={handleAddToCart}
            className='bg-gradient-to-b from-indigo-600 to-fuchsia-600 text-white-100 px-12 py-2 mt-6 h-12 w-full font-bold'
          />
        </div>
      </div>
    </>
  )
}

export default memo(ProductDetailWrapper, isEqual)
