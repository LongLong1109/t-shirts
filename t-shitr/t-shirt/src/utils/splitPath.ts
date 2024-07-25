export const splitPath = (path: string) => {
  const parts = path.split('/').filter(Boolean)
  let accumulatedPath = ''

  return parts.map((part) => {
    accumulatedPath += `/${part}`
    return {
      name: part.charAt(0).toUpperCase() + part.slice(1),
      link: accumulatedPath,
    }
  })
}
