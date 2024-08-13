import Image from 'next/image'

// assets
import { suit, shirt } from '@/assets/images'

// components
import { Paragraph, Button } from '@/components/common'
import { ModelList } from '@/components'

const Introduction = () => (
  <section className='flex justify-center bg-gradient-to-b from-purpleLinear-50 to-purpleLinear-100'>
    <div className='flex lg:flex-row justify-between lg:max-w-[1440px] p-20 md:flex-col md:gap-4 md:p-10 md:max-w-[768px] sm:flex-col sm:p-10'>
      <div className='flex flex-col gap-6 lg:w-2/5 justify-center md:justify-normal sm:flex-col sm:w-4/5'>
        <Paragraph
          text='Get the Latest Dress Models From Us'
          size='lg'
          style='text-white-100 lg:text-lg dark:text-black sm:text-sm'
          weight='bold'
          color='white-100 dark:text-dark-100'
        />

        <Paragraph
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.'
          style='text-white-90 lg:text-sm dark:text-black sm:text-xs'
          size='sm'
          color='white-100 dark:text-dark-100'
        />

        <div className='flex pt-4'>
          <Button text='Shop Now' />
        </div>
      </div>

      <div className='flex md:flex-row gap-10 sm:flex-col sm:pt-10'>
        <div className='flex flex-col items-center gap-6'>
          <Paragraph color='white-100' size='sm' weight='bold' text='More list' />
          <div>
            <Image src={suit} alt='suit' width={172} height={286} />
          </div>

          <div>
            <Image src={shirt} alt='shirt' width={146} height={219} />
          </div>
        </div>
        <div className='relative lg:w-[420px] lg:h-[540px] bg-white-100 flex justify-center items-center rounded-t-[100px] rounded-r-[100px] px-2 md:w-[420px] sm:w-[320px] sm:h-[540px]'>
          <ModelList />
        </div>
      </div>
    </div>
  </section>
)

export default Introduction
