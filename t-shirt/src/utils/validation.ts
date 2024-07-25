export const emailValidation = {
  required: 'Email is required',
  pattern: {
    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    message: 'Invalid Email',
  },
}

export const passwordValidation = {
  required: 'Password is required',
  minLength: { value: 8, message: 'min length is 8' },
}

export const fieldEmpty = {
  required: 'This field is required',
}

export const confirmPassword = (password: string) => ({
  validate: (value: string) => value === password || 'Passwords do not match',
})
