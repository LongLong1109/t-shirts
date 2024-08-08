export const generateQueryString = (page: number, limit: number) => {
  const queryObject = {
    _page: page,
    _limit: limit,
  }
  return `products?${Object.entries(queryObject)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')}`
}
