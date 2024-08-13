import { Suspense, lazy } from 'react'

// components
import { ProductLoadMore } from '@/components'
import ProductDetailSkeleton from '@/components/Skeleton/productDetailSkeleton'

const ProductDetailComponent = lazy(() => import('@/components/ProductDetail'))

interface ProductDetailProps {
  params: {
    id: number
  }
}

export const generateMetadata = async ({ params }: ProductDetailProps) => {
  return {
    title: `Product Detail ${params.id}`,
    description: 'Product Detail',
  }
}

const ProductDetail = ({ params }: ProductDetailProps) => {
  return (
    <div className='bg-white-100 dark:bg-gray-900 py-10'>
      <div className='px-4 md:px-10'>
        <div className='max-w-[1440px] mx-auto pb-20'>
          <Suspense fallback={<ProductDetailSkeleton />}>
            <ProductDetailComponent id={params.id} />
          </Suspense>
        </div>
      </div>

      <div className='bg-white-90 dark:bg-gray-900 p-10'>
        <h2 className='font-bold text-[24px] text-center pb-10'>Description</h2>
        <div className='max-w-[1440px] mx-auto'>
          <h3 className='font-bold text-sm'>Detail product</h3>
          <ul className='list-disc pl-10 text-dark-10'>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
        </div>
      </div>
      <ProductLoadMore />
    </div>
  )
}

export default ProductDetail
