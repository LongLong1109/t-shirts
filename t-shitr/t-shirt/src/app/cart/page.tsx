import type { Metadata } from 'next'

import CartWrapper from '@/components/CartWrapper'

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Cart Product',
}

const CartProduct = () => <CartWrapper />

export default CartProduct
