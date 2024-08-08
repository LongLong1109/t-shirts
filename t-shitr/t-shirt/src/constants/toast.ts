import { TOAST } from '@/types/toast'

export const DELETE_PRODUCT = {
  message: 'Product has been deleted!',
  type: TOAST.SUCCESS,
  timeOut: 3000,
}

export const TOAST_ERROR = 'useToast must be used within a ToastProvider'
