'use client'
import { ChangeEvent } from 'react'
import { LogoIcon, BagIcon, HeartIcon, UserIcon } from '@/icons'

// components
import { Paragraph, Input } from '@/components/common'
import NavBar from '@/components/NavBar'

interface HeaderProps {
  searchValue: string
  onSearchValue: (value: string) => void
}

const Header = ({ searchValue, onSearchValue }: HeaderProps) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchValue(event.target.value)
  }

  return (
    <header className='fixed top-0 left-0 z-50 flex items-center justify-between px-32 bg-white-100 h-20 w-full'>
      <div className='flex items-center gap-2'>
        <LogoIcon />
        <Paragraph text='mangcoding Store' weight='bold' />
      </div>

      <div className='flex items-center'>
        <NavBar />

        <div className='px-6 flex gap-6 items-center'>
          <BagIcon />
          <HeartIcon />
          <UserIcon />
        </div>

        <Input
          value={searchValue}
          type='search'
          placeholder='Search'
          onChange={handleSearch}
          styleInput='outline border border-dark-90 rounded-xl'
        />
      </div>
    </header>
  )
}

export default Header
