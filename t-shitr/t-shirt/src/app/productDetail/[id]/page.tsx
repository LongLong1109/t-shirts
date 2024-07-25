'use client'
import React, { useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

// components
import { Color, SizeChart, Quantity, Breadcrumb, ProductList } from '@/components'
import { Paragraph, Button } from '@/components/common'
import CartIcon from '@/icons/cartIcon'

// mocks
import { radioButtonOptionsMock } from '@/mocks/radioButtonOptions'
import { sizeOptionsMock } from '@/mocks/radioButtonOptions'
import { productListMock } from '@/mocks/productList'

// utils
import { splitPath } from '@/utils/splitPath'

const ProductDetail = () => {
  const pathName = usePathname()
  const paths = splitPath(pathName)
  const [selectedColor, setSelectedColor] = useState('white')
  const [selectedSize, setSelectedSize] = useState('s')
  const [quantity, setQuantity] = useState(1)

  const handleColorChange = useCallback((color: string) => {
    setSelectedColor(color)
  }, [])

  const handleSizeChange = useCallback((size: string) => {
    setSelectedSize(size)
  }, [])

  const handleInCrease = useCallback(() => {
    setQuantity((prev) => prev + 1)
  }, [])

  const handleDeCrease = useCallback(() => {
    setQuantity((prev) => prev - 1)
  }, [])

  const imageData = [
    {
      src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/926/products/789478255402240601566376674779.png?v=1633577887370',
      alt: 'White T-Shirt',
      blurData:
        'Imh0dHBzOi8vYml6d2ViLmRrdGNkbi5uZXQvdGh1bWIvMTAyNHgxMDI0LzEwMC80MzgvOTI2L3Byb2R1Y3RzLzc4OTQ3ODI1NTQwMjI0MDYwMTU2NjM3NjY3NDc3OS5wbmc/dj0xNjMzNTc3ODg3MzcwIg==',
    },
    {
      src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/926/products/789478255402240601566376674779.png?v=1633577887370',
      alt: 'White T-Shirt',
      blurData:
        'Imh0dHBzOi8vYml6d2ViLmRrdGNkbi5uZXQvdGh1bWIvMTAyNHgxMDI0LzEwMC80MzgvOTI2L3Byb2R1Y3RzLzc4OTQ3ODI1NTQwMjI0MDYwMTU2NjM3NjY3NDc3OS5wbmc/dj0xNjMzNTc3ODg3MzcwIg==',
    },
    {
      src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/926/products/789478255402240601566376674779.png?v=1633577887370',
      alt: 'White T-Shirt',
      blurData:
        'Imh0dHBzOi8vYml6d2ViLmRrdGNkbi5uZXQvdGh1bWIvMTAyNHgxMDI0LzEwMC80MzgvOTI2L3Byb2R1Y3RzLzc4OTQ3ODI1NTQwMjI0MDYwMTU2NjM3NjY3NDc3OS5wbmc/dj0xNjMzNTc3ODg3MzcwIg==',
    },
  ]

  return (
    <div className=' bg-white-100 py-10'>
      <div className='px-10'>
        <div className='max-w-[1440px] mx-auto pb-20'>
          <Breadcrumb paths={paths} styleLink='text-dark-100' />
          <div className='flex justify-center gap-10 pt-10'>
            <div className='w-1/2'>
              <div className='w-[588px] h-[400px] pb-6'>
                <Image
                  src='https://bizweb.dktcdn.net/thumb/1024x1024/100/438/926/products/789478255402240601566376674779.png?v=1633577887370'
                  alt='White T-Shirt'
                  className='w-full h-full'
                  width={500}
                  height={100}
                  blurDataURL='Imh0dHBzOi8vYml6d2ViLmRrdGNkbi5uZXQvdGh1bWIvMTAyNHgxMDI0LzEwMC80MzgvOTI2L3Byb2R1Y3RzLzc4OTQ3ODI1NTQwMjI0MDYwMTU2NjM3NjY3NDc3OS5wbmc/dj0xNjMzNTc3ODg3MzcwIg=='
                />
              </div>
              <div className='flex gap-6'>
                {imageData.map(({ src, alt, blurData }, index) => (
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
            <div className='w-1/2'>
              <h1 className='text-md font-bold mb-4'>Smart T-Shirt</h1>
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
                    <p className='text-dark-10'>(1234)</p>
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
                  <Quantity
                    value={quantity}
                    onInCrease={handleInCrease}
                    onDeCrease={handleDeCrease}
                  />
                  <p className='text-dark-5 text-md font-medium'>$40 USD</p>
                </div>
              </div>

              <Button
                text='Checkout'
                onClick={() => {}}
                className='bg-gradient-to-b from-indigo-600 to-fuchsia-600 text-white-100 px-12 py-2 mt-6 h-12 w-full font-bold'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white-90 p-10'>
        <h2 className='font-bold text-[24px] text-center pb-10'>Description</h2>
        <div className='max-w-[1440px] mx-auto'>
          <h3 className='font-bold text-sm'>Detail product</h3>
          <ul className='list-disc pl-10 text-dark-10'>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col items-center gap-10 pt-10'>
        <h4 className='font-bold text-[24px] text-center pb-10 capitalize'>same product</h4>
        <div className='w-[1200px]'>
          <ProductList productList={productListMock} />
        </div>
        <Button
          text='See More'
          className='bg-gradient-to-b from-purpleLinear-50 to-purpleLinear-100 text-white-100 px-12 py-2 h-12 font-bold'
        />
      </div>
    </div>
  )
}

export default ProductDetail
