import { PRODUCT_URL, BASE_URL, CART_URL } from '@/constants/baseUrl'
import { ProductProps } from '@/interfaces/product'

export const getProductList = async () => {
  const response = await fetch(`${PRODUCT_URL}`, {
    next: { revalidate: 5000, tags: ['products'] }, // 5000 seconds is about 83 minutes
  })
  return response.json()
}

export const getProductById = async (id: string) => {
  const response = await fetch(`${PRODUCT_URL}/${id}`, {
    next: { revalidate: 5000, tags: ['product'] },
  })
  return response.json()
}

export const postProductApi = async (data: ProductProps) => {
  const response = await fetch(`${CART_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`message: ${errorText}`)
  }

  return response.json()
}

export const patchProductApi = async (id: string, data: ProductProps) => {
  const response = await fetch(`${CART_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`message: ${errorText}`)
  }

  return response.json()
}

export const deleteProductApi = async (id: string) => {
  const response = await fetch(`${CART_URL}/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`message: ${errorText}`)
  }

  return response.json()
}

export const productLoadMore = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    next: { revalidate: 5000, tags: ['products'] },
  })
  return response.json()
}

export const getCart = async () => {
  const response = await fetch(`${PRODUCT_URL}`, {
    next: { revalidate: 5000, tags: ['products'] },
  })
  return response.json()
}
