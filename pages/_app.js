import '../styles/global.css'
import { ThemeProvider } from 'next-themes'
import Head  from 'next/head'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Lege</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <div className="antialiased">
          <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default App
