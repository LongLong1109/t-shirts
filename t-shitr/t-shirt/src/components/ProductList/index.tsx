import Product from '../Product'
import { ProductListProps } from '@/interfaces/product'

const ProductList = ({ productList }: ProductListProps) => {
  return (
    <div className='flex flex-wrap justify-center gap-10 px-10'>
      {productList.map(({ id, name, image, price }, index) => (
        <Product key={index} name={name} image={image} price={price} id={id} />
      ))}
    </div>
  )
}

export default ProductList
