'use client'
import { useCallback } from 'react'
import { Breadcrumb, Cart } from '@/components'
import { Paragraph } from '@/components/common'

// utils
import { createPaths } from '@/utils/createPath'

// constants
import { PATH_NAME } from '@/constants/paths'
import { PAGE_URL } from '@/constants/pageUrl'
import { DELETE_PRODUCT } from '@/constants/toast'

// store
import useProduct from '@/stores/useProduct'

// context
import { useToast } from '@/contexts/toastProvider'

const CartWrapper = () => {
  const { showToast } = useToast()

  const [cart, onIncrement, onDecrement, onDelete] = useProduct((state) => [
    state.cart,
    state.onIncrement,
    state.onDecrement,
    state.onDelete,
  ])
  const productCartPath = createPaths(PATH_NAME.CART, PAGE_URL.CART)

  const handleInCrease = useCallback(
    (id: string) => {
      onIncrement(id)
    },
    [onIncrement],
  )

  const handleDeCrease = useCallback(
    (id: string) => {
      onDecrement(id)
    },
    [onDecrement],
  )

  const handleDeleteProduct = useCallback(
    (id: string) => {
      onDelete(id)
      showToast(DELETE_PRODUCT)
    },
    [onDelete, showToast],
  )

  return (
    <section>
      <div className='bg-gradient-to-b from-purpleLinear-50 to-purpleLinear-100 p-10'>
        <div className='max-w-[1440px] mx-auto'>
          <Breadcrumb paths={productCartPath} />
          <div className='flex flex-col w-1/2 pt-10'>
            <h2 className='text-white-100 text-md font-bold pb-6'>Cart</h2>
            <Paragraph
              color='white-100'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.'
            />
          </div>
        </div>
      </div>
      <div className='lg:p-20 p-4 bg-white-100'>
        {cart.length ? (
          <Cart
            cart={cart}
            onDelete={handleDeleteProduct}
            onIncrease={handleInCrease}
            onDecrease={handleDeCrease}
          />
        ) : (
          <div>No product in cart</div>
        )}
      </div>
    </section>
  )
}

export default CartWrapper
