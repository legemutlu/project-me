import Navbar from '../src/components/navbar'
import Social from '../src/components/social'

export default function HomePage() {
  return (
<>
    <Navbar />
      <div className="c-small">
        <div className="space-y-1">
          <img className="h-44 w-auto -mt-10" src="me-emoji/working.webp" />
          <h1 className="text-2xl font-light text-highlight inline-block">Hello, This is Ege</h1>
          <p className="text-xl font-thin mt-0">
            I'm a software developer living in Istanbul and interested in algorithms, philosophy, art and sport.
          </p>
        </div>
        <div className="mt-10">
          <Social />
        </div>
      </div>
      {/*<div className="max-w-5xl mx-auto mt-20 mb-20">*/}
      {/*  <img src="image1.jpeg" alt="" />*/}
      {/*</div>*/}
    </>
  )
}
