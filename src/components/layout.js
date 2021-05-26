import Navbar from './navbar'

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/*<footer>
        <div>
          <div>
            {config.site.copyright ? (
              <p>
                {config.site.copyright}
              </p>
            ) : null}
          </div>
        </div>
      </footer>*/}
    </>
  )
}