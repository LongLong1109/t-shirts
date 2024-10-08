# T-SHIRT WEB

## OVERVIEW

- This document provides planning for requirements and estimation detail for NextJs practice. This method creates a T-shirts website with the goals that I can apply my knowledge of NextJs.

## TARGETS

- Understand and apply knowledge of Next.js to build an application.
- App Router
- Caching Data
- Rendering
- Streaming
- Revalidate
- Using file default(error.tsx, not-found.tsx, layout.tsx, loading.tsx, ...)
- GenerateViewport
- TurboPack
- Built-in image optimizer
- Improved SEO support
- Improvements to metadata handling
- Next.js compiler
- Apply some hooks:
  - useSearchParams
  - usePathname
  - userRouter
  - useFormStatus
  - useFormState
- Apply storybook
- Apply React Hook Form for validate form
- Apply Unit test

## FEATURES

- Login, Register
- Validate form, handle error
- Show list product
- Add product to cart, delete product from cart
- Calculate items prices
- Show product detail
- Chose size, color, increase or decrease the number of products
- Show user full name when login or register
- Loading more product

## TECHNICAL

- [React v18](https://react.dev/): ReactJS is a JavaScript library for building user interfaces.
- [NextJs v14](https://nextjs.org/docs): Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
- [Typescript](https://www.typescriptlang.org): TypeScript is a typed subset of Javascript that compiles to plain JavaScript. Any browser, any host, any OS. Open source.
- [React hook form](https://www.react-hook-form.com/): Simple form validation with React Hook Form.
- [Deploy with Vercel](https://vercel.com/longtran1109s-projects): Vercel’s Frontend Cloud provides the developer experience and infrastructure to build, scale, and secure a faster, more personalized Web.
- [Tailwind css](https://tailwindcss.com/): Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
- [Storybook](https://storybook.js.org/): Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It's open source and free.
- [Jest, React testing library]: Simple and complete testing utilities that encourage good testing practices.
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction): Zustand is a state management library for React applications that aims to simplify and enhance the management of application state.

## EDITOR

- Visual studio code

## TEAM SIZE

- 1 developer

## TIMELINE

- Original Estimate: Jul 8, 2024 to Aug 8, 2024.

## DESIGN

- [Figma](<https://www.figma.com/design/gk1hjQfiDVrINES2HjNlfW/T-Shirt-Website-(Community)-(Community)?node-id=0-1&t=mWqIlO1XPsQpguwF-0>)

## GETTING STARTED

Run command step by step

| Command                                                                                         | Action                        |
| :---------------------------------------------------------------------------------------------- | :---------------------------- |
| `$ git clone -b feature/practice-one git@gitlab.asoft-python.com:long.tran/nextjs-training.git` | Clone Repository              |
| `$ cd practice-one/t-shirt`                                                                     | Redirect to folder            |
| `$ npm i pnpm` or `$ pnpm install`                                                              | Install packages dependencies |
| `$ pnpm dev`                                                                                    | Run webpage                   |
| `$ pnpm test`                                                                                   | Run unit test                 |

## STORYBOOK

- Storybook: [link](https://66b474e58d07814a439cbeba-vrpjbunrqy.chromatic.com/)

## PRODUCTION

- Product: [t-shirts-project.vercel.app](https://t-shirts-project.vercel.app/)
