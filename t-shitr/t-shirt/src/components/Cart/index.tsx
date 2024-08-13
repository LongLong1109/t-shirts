import React, { useCallback, memo } from 'react'
import Image from 'next/image'
import isEqual from 'react-fast-compare'

// interfaces
import { ProductProps } from '@/interfaces/product'

// icons
import DeleteIcon from '@/icons/deleteIcon'

// components
import { IconButton, Button } from '@/components/common'
import { Quantity } from '@/components'

interface CartProps {
  cart: ProductProps[]
  onDelete: (id: string, cart: ProductProps[]) => void
  onIncrease: (id: string, cart: ProductProps[]) => void
  onDecrease: (id: string, cart: ProductProps[]) => void
}

const Cart = ({ cart, onDelete, onIncrease, onDecrease }: CartProps) => {
  const handleIncrement = useCallback(
    (id: string) => {
      onIncrease(id, cart)
    },
    [cart, onIncrease],
  )

  const handleDecrement = useCallback(
    (id: string) => {
      onDecrease(id, cart)
    },
    [cart, onDecrease],
  )

  const handleDeleteProduct = useCallback(
    (id: string) => {
      onDelete(id, cart)
    },
    [cart, onDelete],
  )

  const totalPrices = useCallback(() => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price)
      const quantity = item.quantity ?? 1
      return total + price * quantity
    }, 0)
  }, [cart])

  const totalQuantity = useCallback(() => {
    return cart.reduce((total, item) => {
      const quantity = item.quantity ?? 1
      return total + quantity
    }, 0)
  }, [cart])

  return (
    <div className='max-w-[1440px] mx-auto'>
      <h2 className='text-[36px] font-bold'>Cart Product</h2>
      <div className='flex gap-10 flex-wrap'>
        <div className='flex flex-col flex-1 max-h-[767px] overflow-y-scroll gap-6 w-full sm:w-full md:w-3/4 lg:flex-1'>
          {cart.map(({ id, image, name, blurDataURL, color, price, inStock, quantity }, index) => (
            <div key={index} className='p-10 bg-white-90 dark:bg-dark-10 mx-4'>
              <div className='flex items-center justify-between gap-10 flex-wrap'>
                <div className='w-full sm:w-auto'>
                  <Image
                    src={image}
                    alt={name}
                    style={{
                      width: '80%',
                      height: '80px',
                    }}
                    width={300}
                    height={100}
                    placeholder='blur'
                    blurDataURL={blurDataURL}
                  />
                </div>
                <div className='w-full sm:w-auto'>
                  <h2 className='font-bold text-[24px]'>{name}</h2>
                  <p className='text-dark-90 text-[18px]'>{color}</p>
                </div>
                <div className='lg:px-10 w-full sm:w-auto'>
                  <h2 className='font-bold text-[24px]'>$ {price} USD</h2>
                  <p className='text-dark-90 text-[18px]'>Price</p>
                </div>
                <div className='w-full sm:w-auto'>
                  <h2 className='font-bold text-[24px]'>{inStock}</h2>
                  <p className='text-dark-90 text-[18px]'>In Stock</p>
                </div>
                <div className='w-full sm:w-auto'>
                  <IconButton
                    icon={<DeleteIcon />}
                    onClick={() => handleDeleteProduct(id)}
                    className='p-2'
                    color='black'
                  />
                </div>
              </div>
              <div className='pt-10 flex justify-end'>
                <Quantity
                  value={quantity ?? 1}
                  onInCrease={() => handleIncrement(id)}
                  onDeCrease={() => handleDecrement(id)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className='w-full sm:w-full md:w-1/4 lg:w-1/5 p-6 bg-white-90 dark:bg-dark-100 max-h-[248px]'>
          <div className='flex justify-between'>
            <div>
              <h2 className='font-bold text-[18px]'>Subtotal</h2>
              <p className='text-dark-90 text-[18px]'>{totalQuantity()} product</p>
            </div>
            <div>
              <p className='text-dark-90 text-[18px]'>$ {totalPrices()} USD</p>
            </div>
          </div>
          <div className='flex justify-between py-8'>
            <div>
              <h2 className='font-bold text-[18px]'>Total</h2>
            </div>
            <div>
              <p className='text-dark-90 text-[18px]'>$ {totalPrices()} USD</p>
            </div>
          </div>
          <Button
            text='Checkout'
            className='bg-gradient-to-b from-purpleLinear-50 to-purpleLinear-100 text-white-100 lg:px-12 px-6 py-2 h-12 font-bold'
          />
        </div>
      </div>
    </div>
  )
}

export default memo(Cart, isEqual)
