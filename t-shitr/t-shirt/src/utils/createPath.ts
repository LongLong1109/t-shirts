import { PATH_NAME } from '@/constants/paths'
import { PAGE_URL } from '@/constants/pageUrl'

const createPaths = (name: string, link: string) => [
  { name: PATH_NAME.HOME, link: PAGE_URL.HOME },
  { name: name, link: link },
]

export const loginPaths = createPaths(PATH_NAME.LOGIN, PAGE_URL.SIGN_IN)
export const signUpPaths = createPaths(PATH_NAME.SIGN_UP, PAGE_URL.SIGN_UP)
