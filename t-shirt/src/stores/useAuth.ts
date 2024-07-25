import { createWithEqualityFn } from 'zustand/traditional'
import { persist } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'

// services
import { userSignIn, userSignUp } from '@/services/authApi'

import { SignInInput, SignUpInput, UserAction } from '@/interfaces/user'

const INITIAL_USER = {
  userAuth: null,
}

const useAuth = createWithEqualityFn(
  persist<UserAction>(
    (set) => ({
      ...INITIAL_USER,

      signIn: async (signInData: SignInInput) => {
        const response = await userSignIn(signInData)

        set({ userAuth: response })
        return response
      },
      signUp: async (signUpData: SignUpInput) => {
        const response = await userSignUp(signUpData)

        set({ userAuth: response })
        return response
      },
      logout: async () => {
        set({ userAuth: null })
      },
    }),
    {
      name: 'user',
    },
  ),
  shallow,
)

export default useAuth
