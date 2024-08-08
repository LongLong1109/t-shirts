import { useEffect } from 'react'
import { createContext, useContext, useState, ReactNode } from 'react'

// components
import { ToastType } from '@/types/toast'
import { Toast } from '@/components'

// constants
import { TOAST_ERROR } from '@/constants/toast'

interface ToastContextProps {
  showToast: (toast: ToastType) => void
  hideToast: () => void
}

const ToastContext = createContext<ToastContextProps | null>(null)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error(TOAST_ERROR)
  }
  return context
}

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastType | null>(null)

  const showToast = (newToast: ToastType) => {
    setToast(newToast)
  }

  const hideToast = () => {
    setToast(null)
  }

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null)
      }, toast.timeOut)

      return () => clearTimeout(timer)
    }
  }, [toast])

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {toast && (
        <div className='toast-container'>
          <Toast message={toast.message} type={toast.type} onClose={hideToast} />
        </div>
      )}
    </ToastContext.Provider>
  )
}

export default ToastProvider
