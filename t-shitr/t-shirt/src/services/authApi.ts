import { SignUpInput, SignInInput } from '@/interfaces/user'
import { BASE_URL } from '@/constants/baseUrl'

const postAuth = async (endpoint: string, userData: SignInInput | SignUpInput) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`)
  }

  if (response.status === 400) {
    throw new Error('Email or password not found')
  }

  return response.json()
}

export const userSignIn = (userSignIn: SignInInput) => {
  return postAuth('login', userSignIn)
}

export const userSignUp = (userSignUp: SignUpInput) => {
  return postAuth('register', userSignUp)
}
