import React from 'react'

import { SkeletonButton, SkeletonImage, SkeletonText } from './commonSkeleton'

const ProductDetailSkeleton = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 pt-10'>
        <div className='w-1/2'>
          <div className='w-[588px] h-[400px] pb-6'>
            <SkeletonImage width='w-full' height='h-full' />
          </div>
          <div className='flex gap-6'>
            {[...Array(4)].map((_, index) => (
              <div key={index} className='w-[180px] h-[180px]'>
                <SkeletonImage width='w-full' height='h-full' />
              </div>
            ))}
          </div>
        </div>
        <div className='w-1/2'>
          <SkeletonText width='w-1/2' />
          <SkeletonText width='w-3/4' />
          <div className='flex items-center mb-5 mt-10 justify-between'>
            <div>
              <SkeletonText width='w-20' />
            </div>
            <div className='flex pt-4 gap-4'>
              <SkeletonText width='w-10' />
              <SkeletonText width='w-5' />
            </div>
          </div>
          <div className='flex items-center mb-5'>
            <SkeletonText width='w-1/2' />
          </div>
          <div className='mb-5'>
            <SkeletonText width='w-1/4' />
            <div className='flex justify-between items-center mt-4'>
              <SkeletonText width='w-1/4' />
              <SkeletonText width='w-1/4' />
            </div>
          </div>
          <SkeletonButton width='w-full' />
        </div>
      </div>
    </div>
  )
}

export default ProductDetailSkeleton
