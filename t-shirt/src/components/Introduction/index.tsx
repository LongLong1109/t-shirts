import Image from 'next/image'

// components
import { Paragraph, Button } from '@/components/common'
import { ModelList } from '@/components'

import { suit, shirt } from '@/assets/images'

const Introduction = () => (
  <section className='flex justify-center bg-gradient-to-b from-purpleLinear-50 to-purpleLinear-100'>
    <div className='flex justify-between max-w-[1440px] p-20'>
      <div className='flex flex-col gap-6 w-2/5 justify-center'>
        <Paragraph
          text='Get the Latest Dress Models From Us'
          size='lg'
          color='white-100'
          weight='bold'
        />

        <Paragraph
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.'
          style='text-white-90'
          size='sm'
        />

        <div className='flex pt-4'>
          <Button text='Shop Now' />
        </div>
      </div>

      <div className='flex gap-10'>
        <div className='flex flex-col items-center gap-6'>
          <Paragraph color='white-100' size='sm' weight='bold' text='More list' />
          <div>
            <Image src={suit} alt='suit' width={172} height={286} />
          </div>

          <div>
            <Image src={shirt} alt='shirt' width={146} height={219} />
          </div>
        </div>
        <div className='relative w-[420px] h-[540px] bg-white-100 flex justify-center items-center rounded-t-[100px] rounded-r-[100px] px-2'>
          <ModelList />
        </div>
      </div>
    </div>
  </section>
)

export default Introduction
