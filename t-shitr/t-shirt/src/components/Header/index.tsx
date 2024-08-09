'use client'
import { ChangeEvent, useState, useEffect } from 'react'
import { LogoIcon, BagIcon, HeartIcon, UserIcon, MenuIcon } from '@/icons'
import Link from 'next/link'

// components
import { Input } from '@/components/common'
import NavBar from '@/components/NavBar'
import SwitchTheme from '@/components/Switch'

// store
import useAuth from '@/stores/useAuth'

// constants
import { PAGE_URL } from '@/constants/pageUrl'
import SignIn from '@/components/common/Form/SignIn'

const Header = () => {
  const userAuth = useAuth((state) => state.userAuth)
  const [isEnabled, setIsEnabled] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const [isNavBarOpen, setIsNavBarOpen] = useState(false)

  useEffect(() => {
    if (isEnabled) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isEnabled])

  const handleClose = () => {
    setIsNavBarOpen(false)
  }

  const handleOpenNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen)
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  return (
    <header className='fixed top-0 left-0 z-50 flex items-center lg:justify-between sm:justify-around lg:px-32 sm:px-4 bg-white-100 h-20 w-full'>
      <div className='flex items-center gap-2'>
        <LogoIcon />
        <h2 className='text-dark-100 font-bold'>mangcoding Store</h2>
      </div>

      <div className='flex items-center gap-4'>
        <div className='hidden md:block'>
          <NavBar />
        </div>

        <div className='block md:hidden'>
          <button onClick={handleOpenNavBar} name='menu-icon'>
            <MenuIcon />
          </button>
        </div>

        {isNavBarOpen && (
          <div className='absolute top-0 left-0 w-full h-full bg-white-100 z-50'>
            <NavBar />
            <button onClick={handleClose} className='bg-white-100 absolute top-0 right-0 p-5'>
              Close
            </button>
          </div>
        )}

        <div className='px-6 gap-6 items-center sm:hidden lg:flex'>
          <Link href={userAuth ? PAGE_URL.CART : PAGE_URL.SIGN_IN}>
            <BagIcon />
          </Link>
          <HeartIcon />
          <Link href={userAuth ? PAGE_URL.MY_ACCOUNT : PAGE_URL.SIGN_IN}>
            <UserIcon />
          </Link>
        </div>

        <div className='hidden lg:block'>
          <Input
            value={searchValue}
            type='search'
            placeholder='Search'
            onChange={handleSearch}
            styleInput='outline border border-dark-90 rounded-xl bg-white-100'
          />
        </div>

        <div className='sm:hidden md:block'>
          <SwitchTheme isEnabled={isEnabled} onChange={setIsEnabled} />
        </div>
      </div>
    </header>
  )
}

export default Header
