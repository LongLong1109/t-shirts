import Product from '../Product'
import { ProductProps } from '@/interfaces/product'
import { productLoadMore } from '@/services/productApi'

const LoadMoreList = async ({ query }: { query: string }) => {
  const product: ProductProps[] = await productLoadMore(query)

  return (
    <div className='flex flex-wrap gap-20 justify-center max-w-[1440px]'>
      {product.map(({ id, name, image, price }, index) => (
        <Product key={index} name={name} image={image} price={price} id={id} />
      ))}
    </div>
  )
}

export default LoadMoreList
