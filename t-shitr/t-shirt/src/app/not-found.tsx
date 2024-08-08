'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter()

  const handleGoHome = () => {
    router.push('/home')
  }

  return (
    <div className='flex flex-col items-center justify-center p-20'>
      <h1 className='text-6xl font-bold text-gray-800 dark:text-white-100'>404</h1>
      <p className='text-2xl text-gray-600 mb-4 dark:text-white-100'>Page Not Found</p>
      <button
        onClick={handleGoHome}
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        Go Home
      </button>
    </div>
  )
}

export default NotFound
