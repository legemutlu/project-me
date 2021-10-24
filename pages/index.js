import Navbar from '../src/components/navbar'
import Social from '../src/components/social'

export default function HomePage() {
  return (
<>
    <Navbar />
      <div className="c-small">
        <div className="space-y-1">
          <h1 className="text-2xl font-light text-highlight">Hello, This is Ege</h1>
          <p className="text-xl font-thin mt-0">
            I interested in algorithms, philosophy, art and sport.
          </p>
        </div>
        <div className="mt-10">
          <Social />
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-20">
        <img src="image1.jpeg" alt="" />
      </div>
    </>
  )
}
