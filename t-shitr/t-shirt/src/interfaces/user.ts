export interface SignInInput {
  email: string
  password: string
}

export interface SignUpInput extends SignInInput {
  firstName: string
  lastName: string
  entryPassword: string
}

export interface BaseUserInfo extends Omit<SignUpInput, 'entryPassword'> {
  id: string
}

export interface UserResponse {
  accessToken: string
  user: BaseUserInfo
}

export interface UserAction {
  userAuth: UserResponse | null
  signUp: (data: SignUpInput) => Promise<UserResponse>
  signIn: (data: SignInInput) => Promise<UserResponse>
  logout: () => Promise<void>
}
