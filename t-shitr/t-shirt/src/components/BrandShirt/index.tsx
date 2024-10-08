import Image from 'next/image'

// constants
import { brandList } from '@/constants/brandList'

const BrandShirt = () => (
  <section className='w-full flex-wrap items-center justify-center gap-10 bg-white-90 sm:flex sm:flex-col sm:gap-10 sm:items-center sm:p-10 md:flex-row'>
    {brandList.map((image, index) => (
      <div key={index} className='w-[154px]'>
        <Image src={image.src} alt={image.alt} priority />
      </div>
    ))}
  </section>
)

export default BrandShirt
