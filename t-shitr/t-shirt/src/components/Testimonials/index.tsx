import Image from 'next/image'
import Link from 'next/link'

// components
import { Star } from '@/components'
import { Paragraph } from '@/components/common'
import { user, shirts } from '@/assets/images'
import { PAGE_URL } from '@/constants/pageUrl'

const Testimonials = () => (
  <section className='bg-white-100 dark:bg-gray-900'>
    <div className='mx-auto max-w-[1440px] flex flex-col items-center lg:p-20 sm:p-4'>
      <h2 className='capitalize lg:text-lg font-bold sm:text-sm'>testimonials</h2>
      <div className='flex justify-center'>
        <div className='flex flex-col gap-10'>
          <div className='flex justify-center gap-6 sm:flex-col md:flex-row'>
            <div className='w-2/5 p-10 shadow-xl bg-white-100 dark:bg-gray-900 sm:w-full'>
              <div className='flex gap-4 pb-3'>
                <Image
                  src={user}
                  alt='user'
                  width={48}
                  height={48}
                  className='rounded-full'
                  loading='lazy'
                />

                <div>
                  <Paragraph text='Friskidia' weight='bold' style='text-sm' />
                  <Paragraph text='Client' size='xs' color='dark-90' />
                </div>
              </div>
              <Star />
              <Paragraph
                text='“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus. “ '
                color='dark-10 dark:text-white-100 text-xs lg:text-sm'
                style='pt-6'
              />
            </div>

            <div className='w-2/5 p-10 shadow-xl bg-white-100 dark:bg-gray-900 sm:w-full'>
              <div className='flex gap-4 pb-3'>
                <Image
                  src={user}
                  alt='user'
                  width={48}
                  height={48}
                  className='rounded-full'
                  loading='lazy'
                />

                <div>
                  <Paragraph text='Friskidia' weight='bold' style='text-sm' />
                  <Paragraph text='Client' size='xs' color='dark-90' />
                </div>
              </div>
              <Star />
              <Paragraph
                text='“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus. “ '
                color='dark-10 dark:text-white-100 text-sm'
                style='pt-6'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-6 lg:pt-20 sm:pt-10 sm:flex-col sm:items-center md:flex-row'>
        <div className='flex flex-col w-2/5 sm:w-full sm:items-center lg:items-start'>
          <h2 className='capitalize text-md font-bold pb-3 sm:text-sm md:text-md'>
            look for models now
          </h2>
          <div className='w-[90%]'>
            <Paragraph
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.'
              style='text-dark-10 sm:text-xs md:text-sm dark:text-white-100'
              size='sm'
            />
          </div>
          <div className='flex pt-10'>
            <Link
              href={PAGE_URL.SIGN_IN}
              className='flex items-center bg-gradient-to-b from-purpleLinear-50 to-purpleLinear-100 text-white-100 px-12 py-2 h-12 font-bold'
            >
              Login Now
            </Link>
          </div>
        </div>
        <div className='w-2/5 pb-20 sm:w-full'>
          <Image src={shirts} alt='shirts' width={590} height={349} loading='lazy' />
        </div>
      </div>
    </div>
  </section>
)

export default Testimonials
