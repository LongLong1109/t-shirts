'use client'
import { useState } from 'react'
import Image from 'next/image'

// components
import Carousel from '@/components/Carousel'

// mock
import { categoriesStyle } from '@/mocks'

const Category = () => {
  const [currentCategory, setCurrentCategory] = useState(0)

  return (
    <div className='flex justify-end items-center gap-4 sm:flex-col md:flex-row'>
      <Carousel
        images={categoriesStyle}
        style='max-w-[360px] max-h-[230px]'
        currentIndex={currentCategory}
        setCurrentIndex={setCurrentCategory}
      />

      <Image
        src={categoriesStyle[(currentCategory + 1) % categoriesStyle.length].src}
        alt={
          categoriesStyle[(currentCategory - 1 + categoriesStyle.length) % categoriesStyle.length]
            .alt
        }
        width={250}
        height={150}
      />
    </div>
  )
}

export default Category
