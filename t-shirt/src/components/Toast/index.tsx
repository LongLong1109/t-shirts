import './toast.css'
import { ToastStatus } from '@/types/toast'
import CloseIcon from '@/icons/closeIcon'
import IconButton from '../common/IconButton'

interface ToastProps {
  message: string
  type: ToastStatus
  onClose: () => void
}

const Toast = ({ message, type, onClose }: ToastProps) => (
  <div className={`toast ${type}`}>
    <span>{message}</span>
    <IconButton icon={<CloseIcon />} onClick={onClose} />
  </div>
)

export default Toast
