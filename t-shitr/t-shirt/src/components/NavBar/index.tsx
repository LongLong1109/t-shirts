'use client'
import { memo } from 'react'
import isEqual from 'react-fast-compare'

import DotIcon from '@/icons/dotIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// mocks
import { navBarListMock } from '@/mocks/navBarList'

const NavBar = () => {
  const pathname = usePathname()

  return (
    <nav className='flex sm:bg-white-100 sm:w-full'>
      <ul className='flex md:flex-row md:p-0 gap-10 sm:flex-col sm:p-10'>
        {navBarListMock.map(({ url, name }, index) => {
          const isActive = pathname.includes(url)
          return (
            <li key={index}>
              <Link
                href={url}
                className={`${isActive ? 'active font-bold flex flex-col items-center' : ''} text-sm`}
                style={{ color: isActive ? 'blue' : 'black' }}
              >
                <p>{name}</p>
                {isActive && <DotIcon />}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default memo(NavBar, isEqual)
