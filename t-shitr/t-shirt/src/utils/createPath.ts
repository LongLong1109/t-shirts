import { PATH_NAME } from '@/constants/paths'
import { PAGE_URL } from '@/constants/pageUrl'

interface Path {
  name: string
  link: string
}

export const createPaths = (name: string, link: string, additionalPath?: Path): Path[] => {
  const paths = [
    { name: PATH_NAME.HOME, link: PAGE_URL.HOME },
    { name: name, link: link },
  ]

  if (additionalPath) {
    paths.push(additionalPath)
  }

  return paths
}

export const loginPaths = createPaths(PATH_NAME.LOGIN, PAGE_URL.SIGN_IN)
export const signUpPaths = createPaths(PATH_NAME.SIGN_UP, PAGE_URL.SIGN_UP)
