import '../styles/global.css'

function App({ Component, pageProps }) {
  return (
    <div className="antialiased text-gray-700">
        <Component {...pageProps} />
    </div>
  )
}

export default App
