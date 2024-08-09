import Link from 'next/link'

// constants
import { navData } from '@/constants/navData'

// icons
import { LogoIcon } from '@/icons'

// components
import { Paragraph, Button } from '@/components/common'

const Footer = () => (
  <footer className='bg-dark-75 py-10 px-8 md:p-10 w-full'>
    <div className='flex flex-col md:flex-row justify-between items-start'>
      <div className='w-full md:w-1/3 mb-10 md:mb-0'>
        <div className='flex items-center gap-2 pb-6'>
          <LogoIcon />
          <Paragraph size='xs' text='mangcoding Store' weight='bold' color='white-100' />
        </div>
        <Paragraph
          size='xs'
          color='white-100'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor dolor augue et lectus. '
        />
        <div className='pt-10'>
          <Button type='submit' text='Login Now' />
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-10 md:gap-10 w-full md:flex-wrap md:justify-between md:w-1/2'>
        {navData.map((section, index) => (
          <div key={index} className='w-full md:w-auto'>
            <Paragraph text={section.title} size='sm' color='white-100' weight='bold' />
            {section.links.length > 0 && (
              <nav className='pt-6'>
                <ul className='flex gap-3 flex-col'>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link className='text-white-100 font-thin text-xs' href={link.url}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            {section.contact && (
              <address className='pt-6 not-italic'>
                <Paragraph text={section.contact} size='xs' color='white-100' />
              </address>
            )}
            {section.social && (
              <div>
                <nav className='pt-4'>
                  <ul className='list-none flex gap-2'>
                    {section.social.map((socialLink, socialIndex) => (
                      <li key={socialIndex}>
                        <Link href={socialLink.url} aria-label='social-icon'>
                          {socialLink.icon}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </footer>
)

export default Footer
