'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Product from '@/components/Product'
import RadioButtonGroup from '@/components/RadioButtonGroup'
import Quantity from '@/components/Quantity'
import Toast from '@/components/Toast'
import { ToastType } from '@/types/toast'
import Carousel from '@/components/Carousel'
import SignIn from '@/components/common/Form/SignIn'

export default function Home() {
  const mockImages = [
    {
      src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/926/products/789478255402240601566376674779.png?v=1633577887370',
      alt: 'aaa',
    },
    {
      src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/926/products/789478255402240601566376674779.png?v=1633577887370',
      alt: 'bbb',
    },
    {
      src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/926/products/789478255402240601566376674779.png?v=1633577887370',
      alt: 'bbb',
    },
    {
      src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/926/products/789478255402240601566376674779.png?v=1633577887370',
      alt: 'bbb',
    },
    {
      src: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/926/products/789478255402240601566376674779.png?v=1633577887370',
      alt: 'bbb',
    },
  ]
  const [toast, setToast] = useState<ToastType | null>(null)

  const showToast = (newToast: ToastType) => {
    setToast(newToast)
  }

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null)
      }, toast.timeOut)

      return () => clearTimeout(timer)
    }
  }, [toast])

  const radioButtonOptions = [
    {
      id: 'black',
      value: 'black',
      style: 'bg-dark-100',
    },
    {
      id: 'white',
      value: 'white',
      style: 'bg-white-100',
    },
    {
      id: 'green',
      value: 'green',
      style: 'bg-green-100',
    },
  ]

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Select Component Example</h1>
      <SignIn onSignIn={() => {}} />
      <Carousel
        images={[]}
        currentIndex={0}
        setCurrentIndex={function (value: React.SetStateAction<number>): void {
          throw new Error('Function not implemented.')
        }}
      />
      <div>
        <button
          onClick={() =>
            showToast({
              message: 'Success!',
              type: 'success',
              timeOut: 3000,
            })
          }
        >
          Show Success Toast
        </button>
        <button
          onClick={() =>
            showToast({
              message: 'Error!',
              type: 'error',
              timeOut: 3000,
            })
          }
        >
          Show Error Toast
        </button>
        <button onClick={() => showToast({ message: 'Info!', type: 'info', timeOut: 3000 })}>
          Show Info Toast
        </button>

        {toast && (
          <div className='toast-container'>
            <Toast message={toast.message} type={toast.type} onClose={() => {}} />
          </div>
        )}
      </div>
      <Quantity
        value={1}
        onInCrease={function (): void {
          throw new Error('Function not implemented.')
        }}
        onDeCrease={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
      <Product
        name={'asd'}
        image={
          'https://s3-alpha-sig.figma.com/img/a7c6/3a77/983cac32e022a211f0eef2a6487a1d96?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nhG2yAzU-2qiqhUtVLhfbFNIwzxa9Rn7m9IfqO0DPzMchiOGK0pnJX4icSugFbIdir~EvoFYgG1dLvJlQm9cCLyG2UfcPTrq05jANLQUSDe-8tpjy92kABwyZPfmeIMDbTmXc8DcWJhpGyabVMqgbJdjlHvmGjYaBHCYJCYR9nXJZHZ5h8BWZKA1cwog7poVA~2vx2EFlAA3TF5VFnQJUSMneYXix7aX~sEagl0XeCeuZjNo0fiSzioo9owRsELK9MBIz3q7dLCLhgg892nn8nwo9FsgoRWihSPSp~6k~CMPvVz9xLbR2D6yl9IqwdLzuZA7vPtz4dWEmg7Cfig11Q__'
        }
        price={'40'}
        id={''}
      />
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          Get started by editing&nbsp;
          <code className='font-mono font-bold'>src/app/page.tsx</code>
        </p>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            By{' '}
            <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              className='dark:invert'
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </div>

      <div className='mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left'>
        <a
          href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            Docs{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            Learn{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            Templates{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            Deploy{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] text-balance text-sm opacity-50'>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
