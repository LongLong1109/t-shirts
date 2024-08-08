// interface
import { ProductProps } from '@/interfaces/product'

export const INITIAL_PRODUCT: ProductProps = {
  id: '',
  name: '',
  image: '',
  price: '',
  color: '',
  size: '',
  inStock: '',
  quantity: 1,
  blurDataURL: '',
}

export const PRODUCT_IMAGES = [
  {
    src: 'https://s3-alpha-sig.figma.com/img/4cac/1c46/34e9b98b924cfd8fd8d82561815b9ba6?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UjpZI3n-ctvOxZA-vRbJ5oIJCPbxovMSFAHD1KZ3Iy~87Ix7W3YkE4WWR9HOCt0d6TW5~P69RrX0uk~blW-~b3N2J2N2ZYDpA3bJcHQtoRr-ewHhz7fM57kXZsMBLZFl-Vl40Kp6y0GQuzOBo2YIKeFY0Zu9OZgtqmg3KX7wsw7m0nuuCoi1tHGH8XFvhSP-aefHS5QqhDHe0~ALls-B0EgkaKjgu2jGYVhAfaE2U1e~ie67HY3NRUl4quNuN0eoJ6cNwhK0KRQIRwMxt-uflH6q1KZp9rhLWu2fC2prdT8zc53WvSc4QdaUHML2xld4cLv-tPg8-Uq5EA6N4uhW5w__',
    alt: 'White T-Shirt',
    blurData:
      'Imh0dHBzOi8vYml6d2ViLmRrdGNkbi5uZXQvdGh1bWIvMTAyNHgxMDI0LzEwMC80MzgvOTI2L3Byb2R1Y3RzLzc4OTQ3ODI1NTQwMjI0MDYwMTU2NjM3NjY3NDc3OS5wbmc/dj0xNjMzNTc3ODg3MzcwIg==',
  },
  {
    src: 'https://s3-alpha-sig.figma.com/img/acbb/0249/a1432b26fadbdae44b7595dff2bf552b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QeHasBekOFrYbzy7etchog-1Uw328D5EeP4aDU6JBSuoGGlSWUcVvm4dn4UyhHYExQSlv2QN7peCj9gja989rlNMv9xxDAVwG58hwejs6x1~z1WpY9jNRwLjKiIzUuDbOenEWxUy3K7P~4LnoKtW45Shs1J1fz~nahdgcnuO9xUDr9aOOsKypE6dtQfssZpD7RGeD9s~Pq7p5XDb~mbqTNBsQ8HrDHkNYYQ-FNcMted7prvxB-FFr-OyAG-DfLu588624BG9z8SJfxJbyBNpp6pzmumI9BZ-d24PFJelnLiXqiWcHF2pRz5flfyoKvGcmFBaTpqIbPWYjzjMnElnAA__',
    alt: 'White T-Shirt',
    blurData:
      'Imh0dHBzOi8vYml6d2ViLmRrdGNkbi5uZXQvdGh1bWIvMTAyNHgxMDI0LzEwMC80MzgvOTI2L3Byb2R1Y3RzLzc4OTQ3ODI1NTQwMjI0MDYwMTU2NjM3NjY3NDc3OS5wbmc/dj0xNjMzNTc3ODg3MzcwIg==',
  },
  {
    src: 'https://s3-alpha-sig.figma.com/img/f1c8/187f/5de17f4586499f62c3a89ae9fb05327c?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KOpK14ahjzbl6bYej01DXh6KjZsm1Tfpx58RxH053fI9jORVv6IPKvLkTzxyQOnO8V9sbshNRQ0L4-O8ccP0iXu48Nl7X47NKNQQ3t~I60dzDJ-DMAjt7RGl9KdkjnqpPfz9~Wonjhifwzd5U7v400VVtvXrG3lRxYahMDspFlTSNtsQ-SH9mg6cgY7kkbfO5UF9g8LM9gcNK9NkDJdbd25U1pkf82wzQ3PildSceWVpEw6bkmxCfL0DRBADblhVvJ-g77KYCS7orb3momx88hltfnGivn0BHddgEcyJ~9BqJ6tVTP~LsYJAhiS0YhnFvnl4Jq1gHZ~3oaP0k-txdw__',
    alt: 'White T-Shirt',
    blurData:
      'Imh0dHBzOi8vYml6d2ViLmRrdGNkbi5uZXQvdGh1bWIvMTAyNHgxMDI0LzEwMC80MzgvOTI2L3Byb2R1Y3RzLzc4OTQ3ODI1NTQwMjI0MDYwMTU2NjM3NjY3NDc3OS5wbmc/dj0xNjMzNTc3ODg3MzcwIg==',
  },
]
