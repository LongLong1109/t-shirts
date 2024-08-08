'use client'
import { useState, Suspense, lazy } from 'react'
// component
import { Button } from '@/components/common'
import ProductSkeleton from '@/components/Skeleton/productSkeleton'

// utils
import { generateQueryString } from '@/utils/generateQuery'

const LoadMoreList = lazy(() => import('@/components/ProductLoadMore/LoadMoreComponent'))

const ProductLoadMore = () => {
  const [limit, setLimit] = useState(3)
  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 3)
  }

  return (
    <div className='flex flex-col items-center gap-10 pt-10'>
      <h4 className='font-bold text-[24px] text-center pb-10 capitalize'>same product</h4>
      <div className=''>
        <Suspense fallback={<ProductSkeleton />}>
          <LoadMoreList query={generateQueryString(1, limit)} />
        </Suspense>
      </div>
      <Button
        text='See More'
        className='bg-gradient-to-b from-purpleLinear-50 to-purpleLinear-100 text-white-100 px-12 py-2 h-12 font-bold'
        onClick={handleLoadMore}
      />
    </div>
  )
}

export default ProductLoadMore
