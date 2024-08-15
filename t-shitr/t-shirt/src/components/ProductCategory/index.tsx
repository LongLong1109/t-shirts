import { Suspense, lazy } from 'react'

// components
import { Paragraph } from '@/components/common'
import { Category } from '@/components'
import ProductSkeleton from '@/components/Skeleton/productSkeleton'

// components
const ProductList = lazy(() => import('@/components/ProductList'))

const ProductCategory = () => (
  <section className='bg-white-100 dark:bg-gray-900'>
    <div className='mx-auto max-w-[1440px]'>
      <div className='flex lg:flex-row justify-between p-20 sm:flex-col sm:gap-10'>
        <div className='lg:w-1/3 sm:w-full'>
          <Paragraph
            text='choose your category'
            style='uppercase pb-4 text-sm dark:text-dark-50 text-dark-50'
          />
          <Paragraph text='Categories Style' style='lg:text-lg pb-6 sm:text-sm' weight='bold' />
          <Paragraph
            style='text-dark-10 dark:text-white-100 text-xs lg:text-sm'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.'
          />
        </div>

        <div className='lg:w-1/2 sm:w-full'>
          <Category />
        </div>
      </div>

      <div className='flex flex-col items-center pb-20'>
        <Paragraph
          text='choose from the best products'
          style='dark:text-dark-50 text-dark-50 uppercase text-sm'
        />

        <h2 className='capitalize lg:text-lg font-bold sm:text-sm pb-4'>out best seller product</h2>
        <Suspense fallback={<ProductSkeleton />}>
          <ProductList />
        </Suspense>
      </div>
    </div>
  </section>
)

export default ProductCategory
