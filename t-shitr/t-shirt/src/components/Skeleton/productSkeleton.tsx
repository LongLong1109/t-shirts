import Skeleton from '.'

const ProductSkeleton = () => (
  <div className='flex flex-wrap justify-center gap-10 px-[20px] mx-auto max-w-[1440px]'>
    {Array.from({ length: 8 }).map((_, index) => (
      <div className='p-4 border rounded-md w-60' key={index}>
        <Skeleton className='w-full h-40 rounded-md' />
        <Skeleton className='mt-4 w-3/4 h-6' />
        <Skeleton className='mt-2 w-1/2 h-6' />
      </div>
    ))}
  </div>
)

export default ProductSkeleton
