import Navbar from './navbar'
import config from '../config'

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer className="footer">
        <div>
          <div>
            {config.site.copyright ? (
              <p>
                {config.site.copyright}
              </p>
            ) : null}
          </div>
        </div>
      </footer>
    </>
  )
}