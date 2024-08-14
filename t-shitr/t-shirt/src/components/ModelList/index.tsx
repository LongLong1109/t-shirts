'use client'
import { useState } from 'react'
import Image from 'next/image'

// mocks
import { modelList } from '@/mocks'

// components
import Carousel from '@/components/Carousel'

const ModelList = () => {
  const [currentModel, setCurrentModel] = useState(0)

  return (
    <>
      <Image
        src={modelList[currentModel].src}
        alt={modelList[currentModel].alt}
        width={400}
        height={520}
        className='rounded-r-[100px] rounded-t-[100px]'
        style={{
          height: '520px',
        }}
      />

      <div className='absolute bottom-8 pb-4 max-w-[400px]'>
        <Carousel
          images={modelList}
          size={80}
          currentIndex={currentModel}
          setCurrentIndex={setCurrentModel}
          style='w-[300px] bg-black bg-opacity-50 rounded-md'
          isVisibleImages
        />
      </div>
    </>
  )
}

export default ModelList
