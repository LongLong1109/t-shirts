import '@/wdyr'
import type { Viewport } from 'next'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import PublicLayout from '@/components/PublicLayout'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/svg+xml' href='logo.svg' />
      </head>
      <body className={`${inter.className}`}>
        <div className='flex flex-col bg-white-100 dark:bg-gray-900 text-black dark:text-white-100 min-h-screen'>
          <PublicLayout>{children}</PublicLayout>
        </div>
      </body>
    </html>
  )
}
