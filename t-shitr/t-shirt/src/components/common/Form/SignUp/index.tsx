import { useForm, Controller, useWatch } from 'react-hook-form'

// utils
import {
  emailValidation,
  passwordValidation,
  fieldEmpty,
  confirmPassword,
} from '@/utils/validation'

// interface
import { SignUpInput } from '@/interfaces/user'

// components
import { Button, Input, Paragraph } from '@/components/common'

interface SignUpProps {
  onSignUp: (signUpInput: SignUpInput) => void
  error?: string
}

const SignUp = ({ onSignUp, error }: SignUpProps) => {
  const signUpInput = (signUpInput: SignUpInput) => onSignUp(signUpInput)
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      entryPassword: '',
    },
  })

  const password = useWatch({
    control,
    name: 'password',
  })

  return (
    <form onSubmit={handleSubmit(signUpInput)}>
      <div className='w-[350px] md:w-[588px]'>
        <div className='w-[350px] md:w-full flex justify-between flex-col md:flex-row'>
          <div>
            <label htmlFor='firstName' className='pb-2 text-white-100 font-bold'>
              First Name
            </label>

            <Controller
              render={({ field, fieldState }) => (
                <Input
                  type='text'
                  id='firstName'
                  placeholder='First Name'
                  helperText={fieldState.error?.message}
                  styleInput='md:w-72 mt-2 w-full'
                  className='mb-4'
                  {...field}
                />
              )}
              rules={fieldEmpty}
              control={control}
              name='firstName'
            />
          </div>
          <div>
            <label htmlFor='lastName' className='pb-2 text-white-100 font-bold'>
              Last Name
            </label>

            <Controller
              render={({ field, fieldState }) => (
                <Input
                  type='text'
                  id='lastName'
                  placeholder='Last Name'
                  helperText={fieldState.error?.message}
                  styleInput='md:w-72 mt-2 w-full'
                  className='mb-4'
                  {...field}
                />
              )}
              rules={fieldEmpty}
              control={control}
              name='lastName'
            />
          </div>
        </div>
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
              className='mb-4'
              {...field}
            />
          )}
          rules={passwordValidation}
          control={control}
          name='password'
        />

        <label htmlFor='entry-password' className='pb-2 text-white-100 font-bold'>
          Entry Password Again
        </label>

        <Controller
          render={({ field, fieldState }) => (
            <Input
              type='password'
              id='entry-password'
              placeholder='Entry Password Again'
              helperText={fieldState.error?.message}
              styleInput='w-full mt-2'
              className='mb-10'
              {...field}
            />
          )}
          rules={confirmPassword(password)}
          control={control}
          name='entryPassword'
        />

        <div className='flex justify-end'>
          <Button type='submit' text='Sign Up' />
        </div>
        <div className='flex justify-center pt-4'>
          {error && <Paragraph text={error} color='primary-100' />}
        </div>
      </div>
    </form>
  )
}

export default SignUp
