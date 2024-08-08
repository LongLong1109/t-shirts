import type { Metadata } from 'next'

// components
import { Oblongers, Introduction, BrandShirt, ProductCategory, Testimonials } from '@/components'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Get the Latest Dress Models From Us',
}

const Home = () => (
  <div>
    <Introduction />

    <BrandShirt />

    <ProductCategory />

    <Oblongers />

    <Testimonials />
  </div>
)

export default Home
