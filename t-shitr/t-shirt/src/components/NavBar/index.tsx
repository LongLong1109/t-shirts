'use client'
import { memo, useCallback, useState } from 'react'
import isEqual from 'react-fast-compare'

import DotIcon from '@/icons/dotIcon'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// mocks
import { navBarListMock } from '@/mocks/navBarList'

const NavBar = () => {
  const [navBarList, setNavBarList] = useState(navBarListMock)
  const router = useRouter()

  const handleNavItemClick = useCallback(
    (url: string) => {
      setNavBarList((prevList) =>
        prevList.map((item) =>
          item.url === url ? { ...item, isActive: true } : { ...item, isActive: false },
        ),
      )
      router.push(url)
    },
    [router],
  )

  return (
    <nav className='flex'>
      <ul className='flex gap-10'>
        {navBarList.map(({ url, isActive, name }, index) => (
          <li key={index}>
            <Link
              onClick={() => handleNavItemClick(url)}
              href={url}
              className={`${isActive ? 'active font-bold flex flex-col items-center' : ''} text-sm `}
              style={{ color: isActive ? 'blue' : 'black' }}
            >
              <p>{name}</p>
              {isActive && <DotIcon />}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default memo(NavBar, isEqual)
