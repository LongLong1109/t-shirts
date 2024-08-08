'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

// components
import { Breadcrumb } from '@/components'
import { Paragraph } from '@/components/common'

// utils
import { splitPath } from '@/utils/splitPath'

// icons
import { avatar } from '@/assets/images'

// store
import useAuth from '@/stores/useAuth'

const MyAccount = () => {
  const userAuth = useAuth((state) => state.userAuth)
  const firstName = userAuth?.user?.firstName || ''
  const lastName = userAuth?.user?.lastName
  const userName = firstName + lastName
  const email = userAuth?.user.email
  const pathName = usePathname()
  const paths = splitPath(pathName)

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
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyAccount
