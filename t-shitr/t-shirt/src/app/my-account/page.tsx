'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// constants
import { PATH_NAME } from '@/constants/paths'
import { PAGE_URL } from '@/constants/pageUrl'

// utils
import { createPaths } from '@/utils/createPath'

// icons
import { avatar } from '@/assets/images'

// store
import useAuth from '@/stores/useAuth'

// components
import { Breadcrumb } from '@/components'
import { Paragraph, Button } from '@/components/common'

const MyAccount = () => {
  const [userAuth, logout] = useAuth((state) => [state.userAuth, state.logout])
  const firstName = userAuth?.user?.firstName || ''
  const lastName = userAuth?.user?.lastName
  const userName = firstName + lastName
  const email = userAuth?.user.email
  const paths = createPaths(PATH_NAME.MY_ACCOUNT, PAGE_URL.MY_ACCOUNT)
  const router = useRouter()

  const signOut = () => {
    router.push(PAGE_URL.SIGN_IN)
    logout()
  }

  return (
    <section className='bg-gradient-to-b from-purpleLinear-50 to-purpleLinear-100 p-10'>
      <div className='max-w-[1440px] mx-auto'>
        <Breadcrumb paths={paths} />
        <div className='flex pt-6 justify-between'>
          <div className='flex flex-col w-1/2 '>
            <h2 className='text-white-100 text-md font-bold pb-10'>My Account</h2>

            <Paragraph
              color='white-100'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.'
            />
          </div>

          <div className='flex flex-col p-10 bg-white-100 shadow-xl items-center min-w-96 gap-2'>
            <div className=''>
              <Image src={avatar} alt='avatar' />
            </div>
            <h2 className='text-[24px] font-bold capitalize'>{userName}</h2>
            <p className='text-xs'>{email}</p>
            <Button text='Sign out' onClick={signOut} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyAccount
