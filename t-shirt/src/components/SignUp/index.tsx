'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// components
import { SignUpForm } from '@/components/common'

// interfaces
import { SignUpInput } from '@/interfaces/user'

// constants
import { PAGE_URL } from '@/constants/pageUrl'

// store
import useAuth from '@/stores/useAuth'

const SignUp = () => {
  const signUp = useAuth((state) => state.signUp)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSignUp = async (signUpData: SignUpInput) => {
    try {
      await signUp(signUpData)
      router.push(PAGE_URL.HOME)
    } catch (error) {
      setError((error as Error).message)
    }
  }

  return <SignUpForm onSignUp={handleSignUp} error={error} />
}

export default SignUp
