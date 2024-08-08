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
    src: 'https://s3-alpha-sig.figma.com/img/4cac/1c46/34e9b98b924cfd8fd8d82561815b9ba6?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lkcJLxlAnIGv8DDEHGIXmYfCye6JIvu70hJvyQya8ZFYxk7Jrloo5AauPPmlFa9hxxYtX4wP4dqCGprfI-YUWVwjlqhLz3~yXq4jQgAl~NgI6MscnBDqzho-0FhQJyO4EnUg~AjCMH5wKS9b8wSEW9JdOTOq6jszq3jlxGLZZ17i29DGeWJpX3Q5aAHofs-PkuJwmswbfOs6RgvxXzVBs3JsqkSdv9AwJ9XdRg1XCl4pTu5WPyKUyBkNKlYC~U3hMVisD~t0~xRnaXdArd1RwdqnB4k7IU3Xo4pUiPK3QPM5EOMKbBo92h-W4MRKPoogurhbDbr4A2-WGIiEsekx1g__',
    alt: 'White T-Shirt',
    blurData:
      'Imh0dHBzOi8vYml6d2ViLmRrdGNkbi5uZXQvdGh1bWIvMTAyNHgxMDI0LzEwMC80MzgvOTI2L3Byb2R1Y3RzLzc4OTQ3ODI1NTQwMjI0MDYwMTU2NjM3NjY3NDc3OS5wbmc/dj0xNjMzNTc3ODg3MzcwIg==',
  },
  {
    src: 'https://s3-alpha-sig.figma.com/img/acbb/0249/a1432b26fadbdae44b7595dff2bf552b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qus4Mg6ioa~aHB5WnEHfZG-~UllJaCDU2nRodKOhD85526CiJVOPB9gRBvaLOu6JqvkEdYm1OVs0O~hYNjqyPoVP1va~U7HXLq1M~gb2dhQF4swnBUshIHWxSTskbQ486t9hAuserk0b4gR286~c1VIR98tgoPJP~lmlgMkgnJyrvGy4HGs-POqL36OXxTZrzOcZFBYVLfapbwgMUcP1~xATqT5WbyKAGslapkcob1JMv6gy2KT38ulcwL-LIqTIvVEFVfHdMtLIymE8nGLVrpTcDpi7SDTkplFjjmvHtOlPqJ3fw5EYIcXzUG30Cs-H8wGUaZSEK~cjAxzvubMp0A__',
    alt: 'White T-Shirt',
    blurData:
      'Imh0dHBzOi8vYml6d2ViLmRrdGNkbi5uZXQvdGh1bWIvMTAyNHgxMDI0LzEwMC80MzgvOTI2L3Byb2R1Y3RzLzc4OTQ3ODI1NTQwMjI0MDYwMTU2NjM3NjY3NDc3OS5wbmc/dj0xNjMzNTc3ODg3MzcwIg==',
  },
  {
    src: 'https://s3-alpha-sig.figma.com/img/f1c8/187f/5de17f4586499f62c3a89ae9fb05327c?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPIo5pIzj5HAIzSs-Xa4TWmsARCnc9YwqaTQ1yygfc6T~ypwEXHYLzBHYJHnM7a6jphp2mdLZoJtlHJG0yTGBk4q-Qe5OSHpcaGwZWyU-C2g5uFskUWVFoh4Z3fL9HJQc09Fra5XeybNEbefJR45GqyQ7crMjymbftuYp9QvB8R7IRB-VrEA4qYXCJxCZTlb4caFwFs6IB84xd5z5XiA29bP1QsXW9r3R1trwDLJLmb6iDZgT6sLxSNxJiXBzndIIvHSdq7NJOvMNq3qaplK~FqNkWzM3yhr8Xy2sK68D4EExZc1aT0Lz7lBUCw6zX1ZZWWrAnOB014fIa09TE4Umw__',
    alt: 'White T-Shirt',
    blurData:
      'Imh0dHBzOi8vYml6d2ViLmRrdGNkbi5uZXQvdGh1bWIvMTAyNHgxMDI0LzEwMC80MzgvOTI2L3Byb2R1Y3RzLzc4OTQ3ODI1NTQwMjI0MDYwMTU2NjM3NjY3NDc3OS5wbmc/dj0xNjMzNTc3ODg3MzcwIg==',
  },
]
