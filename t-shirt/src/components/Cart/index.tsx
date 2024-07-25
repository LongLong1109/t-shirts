import React, { useCallback } from 'react'
import Image from 'next/image'

// components
import { IconButton, Button } from '@/components/common'
import { Quantity } from '@/components'
import DeleteIcon from '@/icons/deleteIcon'

import { ProductProps } from '@/interfaces/product'

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

  return (
    <div className='max-w-[1440px] mx-auto'>
      <h2 className='text-[36px] font-bold'>Cart Product</h2>
      <div className='flex gap-10'>
        <div className='flex flex-col flex-1 max-h-[767px] overflow-y-scroll gap-6'>
          {cart.map(({ id, image, name, blurDataURL, color, price, inStock, quantity }, index) => (
            <div key={index} className='p-10 bg-white-90'>
              <div className='flex items-center justify-between gap-10'>
                <div className='w-20 h-20'>
                  <Image
                    src={image}
                    alt={name}
                    className='w-full h-full'
                    width={80}
                    height={80}
                    placeholder='blur'
                    blurDataURL={blurDataURL}
                  />
                </div>
                <div>
                  <h2 className='font-bold text-[24px]'>{name}</h2>
                  <p className='text-dark-90 text-[18px]'>{color}</p>
                </div>

                <div className='px-10'>
                  <h2 className='font-bold text-[24px]'>$ {price} USD</h2>
                  <p className='text-dark-90 text-[18px]'>Price</p>
                </div>

                <div>
                  <h2 className='font-bold text-[24px]'>{inStock}</h2>
                  <p className='text-dark-90 text-[18px]'>In Stock</p>
                </div>

                <div>
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

        <div className='w-1/5 p-6 bg-white-90 max-h-[248px]'>
          <div className='flex justify-between'>
            <div>
              <h2 className='font-bold text-[18px]'>Subtotal</h2>
              <p className='text-dark-90 text-[18px]'>4 product</p>
            </div>

            <div>
              <p className='text-dark-90 text-[18px]'>$ 160 USD</p>
            </div>
          </div>

          <div className='flex justify-between py-8'>
            <div>
              <h2 className='font-bold text-[18px]'>Total</h2>
            </div>

            <div>
              <p className='text-dark-90 text-[18px]'>$ 160 USD</p>
            </div>
          </div>

          <Button
            text='Checkout'
            className='bg-gradient-to-b from-purpleLinear-50 to-purpleLinear-100 text-white-100 px-12 py-2 h-12 font-bold'
          />
        </div>
      </div>
    </div>
  )
}

export default Cart
