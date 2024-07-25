'use client'
import { useState } from 'react'
import Image from 'next/image'

// components
import { Carousel } from '@/components'

// mocks
import { modelList } from '@/mocks'

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

      <div className='absolute bottom-0 pb-4'>
        <Carousel
          images={modelList}
          size={50}
          currentIndex={currentModel}
          setCurrentIndex={setCurrentModel}
          style='max-w-44'
        />
      </div>
    </>
  )
}

export default ModelList
