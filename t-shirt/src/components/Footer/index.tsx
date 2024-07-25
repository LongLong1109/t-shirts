import Link from 'next/link'

// constants
import { navData } from '@/constants/navData'

// icons
import { LogoIcon } from '@/icons'

// components
import { Paragraph, Button } from '@/components/common'

const Footer = () => (
  <footer className='flex bg-dark-75 py-20 px-32 w-full justify-between h-[369px]'>
    <div className='w-1/3'>
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

    <div className='flex gap-20'>
      {navData.map((section, index) => (
        <div key={index}>
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
              <nav className='list-none flex gap-2 pt-4'>
                {section.social.map((socialLink, socialIndex) => (
                  <li key={socialIndex}>
                    <Link href={socialLink.url}>{socialLink.icon}</Link>
                  </li>
                ))}
              </nav>
            </div>
          )}
        </div>
      ))}
    </div>
  </footer>
)

export default Footer
