'use client'

// components
import { Header } from '@/components'
import Footer from '@/components/Footer'

// contexts
import ToastProvider from '@/contexts/toastProvider'

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastProvider>
      <Header />
      <div className='pt-20 flex-1'>{children}</div>
      <Footer />
    </ToastProvider>
  )
}

export default PublicLayout
