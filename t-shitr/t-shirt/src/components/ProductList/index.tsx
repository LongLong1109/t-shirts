import Product from '../Product'
import { ProductProps } from '@/interfaces/product'

// services
import { getProductList } from '@/services/productApi'

const ProductList = async () => {
  const productList: ProductProps[] = await getProductList()

  return (
    <div className='flex flex-wrap gap-20 justify-center'>
      {productList.map(({ id, name, image, price }, index) => (
        <Product key={index} name={name} image={image} price={price} id={id} />
      ))}
    </div>
  )
}

export default ProductList
