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
  currentIndex: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
}

const Carousel = ({ images, size, style, currentIndex, setCurrentIndex }: CarouselProps) => {
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className={`relative mx-auto overflow-hidden ${style}`}>
      <div
        className='flex transition-transform ease-in-out duration-1000'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={`min-w-full flex justify-center gap-8`}>
            <Image
              src={image.src}
              alt={image.alt}
              className={`w-${size}`}
              width={size}
              height={400}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className={`absolute top-1/2 transform -translate-y-1/2 bg-blue-500 text-white-100 ${size ? 'p-0' : 'p-2'} z-40`}
        data-testid='left-btn'
        name='left-btn'
      >
        <LeftIcon />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-500 text-white-100 ${size ? 'p-0' : 'p-2'}`}
        data-testid='right-btn'
        name='right-btn'
      >
        <RightIcon />
      </button>
    </div>
  )
}

export default Carousel
