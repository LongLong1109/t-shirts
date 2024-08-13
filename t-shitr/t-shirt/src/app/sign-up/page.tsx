import Link from 'next/link'
import type { Metadata } from 'next'

// constants
import { HEADER_HEIGHT, FOOTER_HEIGHT } from '@/constants/height'
import { PAGE_URL } from '@/constants/pageUrl'

// utils
import { loginPaths } from '@/utils/createPath'

// components
import { Breadcrumb, SignUp as SignUpComponent } from '@/components'
import { Paragraph } from '@/components/common'

export const metadata: Metadata = {
  title: 'SignUp',
  description: 'SignUp to the app',
}

const SignUp = () => (
  <section className='bg-gradient-with-image bg-no-repeat bg-cover bg-center p-4 md:p-10'>
    <div
      className='max-w-[1440px] mx-auto'
      style={{ height: `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})` }}
    >
      <Breadcrumb paths={loginPaths} />
      <div className='flex flex-col w-full md:w-1/2 pt-6'>
        <h2 className='text-white-100 dark:text-dark-100 text-sm md:text-md font-bold pb-10'>
          My Account
        </h2>

        <h3 className='text-white-100 dark:text-dark-100 text-sm md:text-[36px] font-bold pb-6'>
          Sign Up
        </h3>
        <div className='flex gap-2 pb-10'>
          <Paragraph text='You have account?' color='white-100 dark:text-dark-100' />
          <Link className='text-white-100 dark:text-dark-100 font-bold' href={PAGE_URL.SIGN_IN}>
            Sign In
          </Link>
        </div>
        <SignUpComponent />
      </div>
    </div>
  </section>
)

export default SignUp
