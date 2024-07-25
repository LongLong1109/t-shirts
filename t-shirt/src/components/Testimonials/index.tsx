import Image from 'next/image'

// components
import { Star } from '@/components'
import { Paragraph, Button } from '@/components/common'
import { user, shirts } from '@/assets/images'

const Testimonials = () => (
  <section className='bg-white-100'>
    <div className='mx-auto max-w-[1440px] flex flex-col items-center p-20'>
      <h2 className='capitalize text-lg font-bold'>testimonials</h2>
      <div className='flex justify-center'>
        <div className='flex flex-col gap-10'>
          <div className='flex justify-center gap-6'>
            <div className='w-2/5 p-10 shadow-xl'>
              <div className='flex gap-4 pb-3'>
                <Image src={user} alt='user' width={48} height={48} />

                <div>
                  <Paragraph text='Friskidia' weight='bold' style='text-sm' />
                  <Paragraph text='Client' size='xs' color='dark-90' />
                </div>
              </div>
              <Star />
              <Paragraph
                text='“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus. “ '
                color='dark-10'
                style='pt-6'
              />
            </div>

            <div className='w-2/5 p-10 shadow-xl'>
              <div className='flex gap-4 pb-3'>
                <Image src={user} alt='user' width={48} height={48} />

                <div>
                  <Paragraph text='Friskidia' weight='bold' style='text-sm' />
                  <Paragraph text='Client' size='xs' color='dark-90' />
                </div>
              </div>
              <Star />
              <Paragraph
                text='“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus. “ '
                color='dark-10'
                style='pt-6'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-6 pt-20'>
        <div className='flex flex-col w-2/5'>
          <h2 className='capitalize text-md font-bold pb-3'>look for models now</h2>
          <div className='w-[90%]'>
            <Paragraph
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.'
              style='text-dark-10'
              size='sm'
            />
          </div>
          <div className='flex pt-10'>
            <Button
              type='submit'
              text='Login Now'
              className='bg-gradient-to-b from-purpleLinear-50 to-purpleLinear-100 text-white-100 px-12 py-2 h-12 font-bold'
            />
          </div>
        </div>
        <div className='w-2/5 pb-20'>
          <Image src={shirts} alt='shirts' width={590} height={349} />
        </div>
      </div>
    </div>
  </section>
)

export default Testimonials
