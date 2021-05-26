import Link from 'next/link'
import { NavbarLink } from './navbar-link'
import config from '../config'

function Navbar() {
  return (
    <header className="header">
      <nav className="header-container">
        <Link href="/" passHref>
          <a className="header-right">{config.site.name}</a>
        </Link>
        <div className="header-left">
          <div className="header-left-item">
            {config.links.map((link) => (
              <NavbarLink className="hover:text-blue-500" key={link.url} href={link.url}>
                {link.title}
              </NavbarLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar