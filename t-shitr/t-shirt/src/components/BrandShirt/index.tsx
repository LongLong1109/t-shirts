import Image from 'next/image'

// constants
import { brandList } from '@/constants/brandList'

const BrandShirt = () => (
  <section className='h-[100px] w-full flex items-center justify-center gap-10 bg-white-90'>
    {brandList.map((image, index) => (
      <div key={index}>
        <Image src={image.src} alt={image.alt} width={154} height={57} />
      </div>
    ))}
  </section>
)

export default BrandShirt
