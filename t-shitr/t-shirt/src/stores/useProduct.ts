import { createWithEqualityFn } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'
import { persist } from 'zustand/middleware'
import { ProductProps } from '@/interfaces/product'

import {
  addProduct,
  decreaseQuantityProduct,
  increaseQuantityProduct,
  removeProduct,
} from '@/utils/productAction'

export interface AddProduct {
  product: ProductProps
  amount: number
  color: string
  size: string
}

interface ProductActions {
  cart: ProductProps[]
  setCart: (data: ProductProps[]) => void
  addToCart: ({ product, amount, color, size }: AddProduct) => void
  onIncrement: (id: string) => void
  onDecrement: (id: string) => void
  onDelete: (id: string) => void
}

const useProduct = createWithEqualityFn(
  persist<ProductActions>(
    (set) => ({
      cart: [],

      setCart: (cart) => {
        set({ cart })
      },
      addToCart: ({ product, amount, color, size }: AddProduct) => {
        set((state) => {
          const cart = addProduct(state.cart, product, amount, color, size)
          return { cart }
        })
      },
      onDelete: (id) => {
        set((state) => {
          const cart = removeProduct(id, state.cart)
          return { cart }
        })
      },
      onIncrement: (id) => {
        set((state) => {
          const cart = increaseQuantityProduct(id, state.cart)
          return { cart }
        })
      },
      onDecrement: (id) => {
        set((state) => {
          const cart = decreaseQuantityProduct(id, state.cart)
          return { cart }
        })
      },
    }),
    {
      name: 'cart',
    },
  ),
  shallow,
)

export default useProduct
