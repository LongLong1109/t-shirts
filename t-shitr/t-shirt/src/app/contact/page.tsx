// constants
import { PATH_NAME } from '@/constants/paths'
import { PAGE_URL } from '@/constants/pageUrl'

// utils
import { createPaths } from '@/utils/createPath'

// components
import { Breadcrumb } from '@/components'
import { Paragraph } from '@/components/common'

const Contact = () => {
  const paths = createPaths(PATH_NAME.CONTACT, PAGE_URL.CONTACT)

  return (
    <section className='bg-gradient-to-b from-purpleLinear-50 to-purpleLinear-100 p-10'>
      <div className='max-w-[1440px] mx-auto'>
        <Breadcrumb paths={paths} />
        <div className='flex flex-col w-full pt-10 md:w-1/2'>
          <h2 className='text-white-100 dark:text-dark-100 text-[24px] md:text-md font-bold pb-6'>
            Contact
          </h2>
          <Paragraph
            style='text-white-100 dark:text-dark-100'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.'
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
