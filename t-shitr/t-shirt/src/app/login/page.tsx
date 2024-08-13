import Link from 'next/link'
import type { Metadata } from 'next'

// components
import { Breadcrumb, Login as LoginComponent } from '@/components'
import { Paragraph } from '@/components/common'

// constants
import { HEADER_HEIGHT, FOOTER_HEIGHT } from '@/constants/height'
import { PAGE_URL } from '@/constants/pageUrl'

// utils
import { signUpPaths } from '@/utils/createPath'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to the app',
}

const Login = () => (
  <section className='bg-gradient-with-image bg-no-repeat bg-cover bg-center p-4 md:p-10'>
    <div
      className='max-w-[1440px] mx-auto'
      style={{ height: `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})` }}
    >
      <Breadcrumb paths={signUpPaths} />
      <div className='flex flex-col pt-6 w-full md:w-1/2'>
        <h2 className='text-white-100 dark:text-dark-100 text-sm md:text-md font-bold pb-10'>
          My Account
        </h2>

        <h3 className='text-white-100 dark:text-dark-100 text-sm md:text-[36px] font-bold pb-6'>
          Login
        </h3>
        <div className='flex gap-2 pb-10'>
          <Paragraph text="Don't have an account?" color='white-100 dark:text-dark-100' />
          <Link className='text-white-100 dark:text-dark-100 font-bold' href={PAGE_URL.SIGN_UP}>
            Sign Up
          </Link>
        </div>
        <LoginComponent />
      </div>
    </div>
  </section>
)

export default Login
