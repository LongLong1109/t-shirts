// constants
import { PATH_NAME } from '@/constants/paths'
import { PAGE_URL } from '@/constants/pageUrl'

// utils
import { createPaths } from '@/utils/createPath'

// components
import { Breadcrumb } from '@/components'
import { Paragraph } from '@/components/common'

const AboutUs = () => {
  const path = createPaths(PATH_NAME.ABOUT_US, PAGE_URL.CART)

  return (
    <section className='bg-gradient-to-b from-purpleLinear-50 to-purpleLinear-100 p-10'>
      <div className='max-w-[1440px] mx-auto'>
        <Breadcrumb paths={path} />
        <div className='flex flex-col md:w-1/2 pt-10 w-full'>
          <h2 className='text-white-100 text-[24px] md:text-md font-bold pb-6'>About Us</h2>
          <Paragraph
            color='white-100'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.'
          />
        </div>
      </div>
    </section>
  )
}

export default AboutUs
