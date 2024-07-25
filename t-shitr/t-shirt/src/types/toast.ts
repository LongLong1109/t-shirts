export type ToastStatus = 'success' | 'error' | 'info'

export type ToastType = {
  message: string
  type: ToastStatus
  timeOut: number
}

export enum TOAST {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
}
