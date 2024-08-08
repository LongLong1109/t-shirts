import { ProductProps } from '@/interfaces/product'

// services
import { postProductApi, patchProductApi, deleteProductApi } from '@/services/productApi'

export const addProduct = (
  cart: ProductProps[],
  product: ProductProps,
  amount: number,
  color: string,
  size: string,
) => {
  const existingProductIndex = cart.findIndex((item: ProductProps) => item.id === product.id)

  if (existingProductIndex !== -1) {
    const updatedProduct = {
      ...cart[existingProductIndex],
      amount,
      color,
      size,
    }

    const updatedCart = [...cart]
    updatedCart[existingProductIndex] = updatedProduct

    patchProductApi(updatedProduct.id, {
      ...product,
      quantity: updatedProduct.amount,
      color,
      size,
    })

    return updatedCart
  }

  const newProductList = [...cart, { ...product, quantity: amount, color, size }]
  postProductApi({ ...product, quantity: amount, color, size })

  return newProductList
}

export const removeProduct = (id: string, cart: ProductProps[]) => {
  const removeProduct = cart.filter((item) => item.id !== id)
  deleteProductApi(id)
  return removeProduct
}

export const increaseQuantityProduct = (id: string, cart: ProductProps[]): ProductProps[] => {
  const index = cart.findIndex((item) => item.id === id)

  if (index === -1) return cart

  const updatedCart = [...cart]
  const item = updatedCart[index]
  const updatedItem = { ...item, quantity: (item.quantity ?? 0) + 1 }

  patchProductApi(updatedItem.id, updatedItem)
  updatedCart[index] = updatedItem

  return updatedCart
}

export const decreaseQuantityProduct = (id: string, cart: ProductProps[]) => {
  const index = cart.findIndex((item) => item.id === id)

  if (index === -1) return cart

  const updatedCart = [...cart]
  const item = updatedCart[index]
  const updatedItem = { ...item, quantity: (item.quantity ?? 1) - 1 }

  patchProductApi(updatedItem.id, updatedItem)
  updatedCart[index] = updatedItem

  return updatedCart
}
