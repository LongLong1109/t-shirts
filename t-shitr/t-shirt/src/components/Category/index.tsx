'use client'
import { useState } from 'react'
import Image from 'next/image'

// mock
import { categoriesStyle } from '@/mocks'

// components
import Carousel from '@/components/Carousel'

const Category = () => {
  const [currentCategory, setCurrentCategory] = useState(0)

  return (
    <div className='flex justify-center items-center gap-4 sm:flex-col md:flex-row'>
      <div>
        <Carousel
          images={categoriesStyle}
          style='max-w-[360px] max-h-[230px]'
          currentIndex={currentCategory}
          setCurrentIndex={setCurrentCategory}
          size={330}
        />
      </div>

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
