import { useForm, Controller } from 'react-hook-form'

// interfaces
import { SignInInput } from '@/interfaces/user'

// utils
import { emailValidation, passwordValidation } from '@/utils/validation'

// components
import { Button, Input, Paragraph } from '@/components/common'

interface SignInProps {
  onSignIn: (signInInput: SignInInput) => void
  error?: string
}

const SignIn = ({ onSignIn, error }: SignInProps) => {
  const signInInput = (signInInput: SignInInput) => onSignIn(signInInput)

  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  return (
    <form className='form-group w-[350px] md:w-[588px]' onSubmit={handleSubmit(signInInput)}>
      <label htmlFor='email' className='pb-2 text-white-100 font-bold'>
        Email
      </label>

      <Controller
        render={({ field, fieldState }) => (
          <Input
            type='email'
            id='email'
            placeholder='Email'
            helperText={fieldState.error?.message}
            styleInput='w-full mt-2'
            className='mb-4'
            {...field}
          />
        )}
        rules={emailValidation}
        control={control}
        name='email'
      />

      <label htmlFor='password' className='pb-2 text-white-100 font-bold'>
        Password
      </label>

      <Controller
        render={({ field, fieldState }) => (
          <Input
            type='password'
            id='password'
            placeholder='Password'
            helperText={fieldState.error?.message}
            styleInput='w-full mt-2'
            className='mb-10'
            {...field}
          />
        )}
        rules={passwordValidation}
        control={control}
        name='password'
      />

      <div className='flex justify-end'>
        <Button type='submit' text='Login' />
      </div>
      <div className='flex justify-center pt-4'>
        {error && <Paragraph text={error} color='primary-100' />}
      </div>
    </form>
  )
}

export default SignIn
