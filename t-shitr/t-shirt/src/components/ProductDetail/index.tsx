import ProductDetailWrapper from '@/components/ProductDetailWrapper'

// services
import { getProductById } from '@/services/productApi'

interface ProductDetailProps {
  id: number
}

const ProductDetail = async ({ id }: ProductDetailProps) => {
  const response = await getProductById(id.toString())

  return <ProductDetailWrapper product={response} />
}

export default ProductDetail
