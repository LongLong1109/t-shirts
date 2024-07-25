'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// components
import { SignInForm } from '@/components/common'

// interfaces
import { SignInInput } from '@/interfaces/user'

import { PAGE_URL } from '@/constants/pageUrl'

// store
import useAuth from '@/stores/useAuth'

const Login = () => {
  const signIn = useAuth((state) => state.signIn)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSignIn = async (signInData: SignInInput) => {
    try {
      await signIn(signInData)
      router.push(PAGE_URL.HOME)
    } catch (error) {
      setError((error as Error).message)
    }
  }
  return <SignInForm onSignIn={handleSignIn} error={error} />
}

export default Login
