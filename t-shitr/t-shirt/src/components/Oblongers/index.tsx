'use client'
import { useState, useCallback } from 'react'
import Image from 'next/image'

// component
import { Paragraph, Button } from '@/components/common'
import Carousel from '@/components/Carousel'
import Star from '@/components/Star'
import SizeChart from '@/components/SizeChart'
import Color from '@/components/RadioButtonGroup'

// mocks
import { oblongersShirt, sizeOptionsMock, radioButtonOptionsMock } from '@/mocks'

const Oblongers = () => {
  const [currentOblongers, setCurrentOblongers] = useState(0)
  const [selectedColor, setSelectedColor] = useState('black')
  const [selectedSize, setSelectedSize] = useState('s')

  const handleChangeColor = useCallback((color: string) => {
    setSelectedColor(color)
  }, [])

  const handleChangeSize = useCallback((size: string) => {
    setSelectedSize(size)
  }, [])

  return (
    <section className='bg-gradient-to-b from-purpleLinear-50 to-purpleLinear-100'>
      <div className='flex justify-between lg:p-20 max-w-[1440px] mx-auto lg:flex-row md:flex-row sm:flex-col sm:p-4 sm:items-center'>
        <div className='flex justify-between items-center gap-10 lg:w-1/3 md:w-1/3 sm:w-2/3'>
          <div className='w-40'>
            <Image
              src={oblongersShirt[(currentOblongers + 1) % oblongersShirt.length].src}
              alt={
                oblongersShirt[
                  (currentOblongers - 1 + oblongersShirt.length) % oblongersShirt.length
                ].alt
              }
              className={`w-${100}`}
              width={300}
              height={200}
            />
          </div>

          <Carousel
            images={oblongersShirt}
            style='max-w-[260px] max-h-[383px]'
            currentIndex={currentOblongers}
            setCurrentIndex={setCurrentOblongers}
          />
        </div>
        <div className='lg:w-1/2 mt-4 sm:w-full md:w-1/2'>
          <h2 className='capitalize lg:text-lg font-bold text-white-100 sm:text-sm dark:text-dark-100'>
            The Oblongers T-Shirt
          </h2>
          <div className='flex justify-between pt-2'>
            <Color
              options={radioButtonOptionsMock}
              name='Choose Color'
              selectedValue={selectedColor}
              onChange={handleChangeColor}
              color='white-100 dark:text-dark-100'
            />
            <Star />
          </div>

          <div className='flex justify-between pt-4 pb-6'>
            <SizeChart
              sizeValue={sizeOptionsMock}
              name='Choose Size'
              selectedValue={selectedSize}
              color='white-100 dark:text-dark-100'
              onChange={handleChangeSize}
            />

            <Paragraph
              text='50$'
              color='white-100 dark:text-dark-100'
              style='lg:text-lg font-bold sm:text-sm'
            />
          </div>
          <Paragraph
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor dolor augue et lectus. Proin et lacus blandit quam semper placerat.'
            style='text-white-90 sm:text-xs lg:text-sm'
            color='white-100 dark:text-dark-100'
          />
          <div className='flex pt-10 w-full'>
            <Button type='submit' text='Order Now' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Oblongers
