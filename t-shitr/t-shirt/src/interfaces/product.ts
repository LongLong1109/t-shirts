export interface ProductProps {
  id: string
  name: string
  image: string
  price: string
  color?: string
  size?: string
  inStock?: string
  quantity?: number
  blurDataURL?: string
}

export interface ProductListProps {
  productList: ProductProps[]
}
