// icons
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '@/icons'

export const navData = [
  {
    title: 'Home',
    links: [
      { name: 'Product', url: '' },
      { name: 'Categories', url: '' },
      { name: 'Shop', url: '' },
      { name: 'Login', url: '' },
    ],
  },
  {
    title: 'Shop',
    links: [
      { name: 'T-shirt', url: '' },
      { name: 'Jacket', url: '' },
      { name: 'Shirt', url: '' },
      { name: 'Jeans', url: '' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { name: 'Men', url: '' },
      { name: 'Children', url: '' },
      { name: 'Women', url: '' },
    ],
  },
  {
    title: 'Contact',
    links: [],
    contact: 'mangcoding@gmail.com',
    social: [
      { icon: <FacebookIcon />, url: '' },
      { icon: <TwitterIcon />, url: '' },
      { icon: <LinkedinIcon />, url: '' },
      { icon: <InstagramIcon />, url: '' },
    ],
  },
]
