import React from 'react'
import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  link?: string
}

interface BreadcrumbProps {
  paths: BreadcrumbItem[]
  styleLink?: string
}

const Breadcrumb = ({ paths, styleLink }: BreadcrumbProps) => (
  <nav aria-label='breadcrumb'>
    <ol className='flex'>
      {paths.map(({ name, link }, index) => (
        <li key={index} className='breadcrumb-item mr-2 '>
          {link ? (
            <Link className={styleLink ?? 'text-white-100 dark:text-dark-100'} href={link}>
              {name}
            </Link>
          ) : (
            <span>{name}</span>
          )}
          {index < paths.length - 1 && (
            <span className={`separator px-4 ${styleLink ?? 'text-white-100 dark:text-dark-100'}`}>
              {' '}
              /{' '}
            </span>
          )}
        </li>
      ))}
    </ol>
  </nav>
)

export default Breadcrumb
