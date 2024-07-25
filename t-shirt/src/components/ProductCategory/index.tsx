'use client'
import { useEffect, useState, Suspense, lazy } from 'react'

// components
import { Paragraph } from '@/components/common'
import { Category } from '@/components'
import ProductSkeleton from '@/components/ProductCategory/productSkeleton'

// services
import { getProducts } from '@/services/productApi'

// constants
import { BASE_URL } from '@/constants/baseUrl'

const ProductCategory = () => {
  const ProductList = lazy(() => import('@/components/ProductList'))
  const [productList, setProductList] = useState([])

  useEffect(() => {
    const getProductList = async () => {
      const response = await getProducts(`${BASE_URL}/products`)
      setProductList(response)
      return response
    }
    getProductList()
  }, [])

  return (
    <section className='bg-white-100'>
      <div className='mx-auto max-w-[1440px]'>
        <div className='flex justify-between p-20'>
          <div className='w-1/3'>
            <Paragraph text='choose your category' style='uppercase pb-4 text-sm text-dark-50' />
            <Paragraph text='Categories Style' style='text-lg pb-6' weight='bold' />
            <Paragraph
              style='text-dark-10'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.'
            />
          </div>

          <div className='w-1/2'>
            <Category />
          </div>
        </div>

        <div className='flex flex-col items-center pb-20'>
          <Paragraph
            text='choose from the best products'
            color='dark-50'
            style='uppercase text-sm'
          />

          <h2 className='capitalize text-lg font-bold'>out best seller product</h2>
          <Suspense fallback={<ProductSkeleton />}>
            <ProductList productList={productList} />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
export default ProductCategory
