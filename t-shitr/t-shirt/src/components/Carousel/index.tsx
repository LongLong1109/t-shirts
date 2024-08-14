'use client'
import Image, { StaticImageData } from 'next/image'

// icons
import LeftIcon from '@/icons/leftIcon'
import RightIcon from '@/icons/rightIcon'

interface ImageProps {
  src: StaticImageData
  alt: string
}

interface CarouselProps {
  images: ImageProps[]
  size?: number
  style?: string
  isVisibleImages?: boolean
  currentIndex: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
}

const Carousel = ({
  images,
  size,
  style,
  currentIndex,
  setCurrentIndex,
  isVisibleImages,
}: CarouselProps) => {
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const visibleImages = isVisibleImages ? images.length : 1

  return (
    <div className={`relative mx-auto overflow-hidden ${style}`}>
      <div
        className={`flex transition-transform ease-in-out duration-1000 ${isVisibleImages && 'h-[80px]'}`}
        style={{
          transform: `translateX(-${(currentIndex * 100) / visibleImages}%)`,
          width: isVisibleImages ? `${(images.length * 100) / visibleImages}%` : 'auto',
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className='flex-shrink-0 flex justify-center'
            style={{ width: `${100 / visibleImages}%` }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className={`w-${size}`}
              width={size}
              style={{ padding: isVisibleImages ? '8px' : '0' }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className={`absolute top-1/2 transform -translate-y-1/2 bg-blue-500 text-white-100 ${size ? 'p-0' : 'p-2'} z-40`}
        data-testid='left-btn'
        aria-label='left-btn'
      >
        <LeftIcon />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white-100 ${size ? 'p-0' : 'p-2'}`}
        data-testid='right-btn'
        aria-label='right-btn'
      >
        <RightIcon />
      </button>
    </div>
  )
}

export default Carousel
