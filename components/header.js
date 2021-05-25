import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-container py-14">
      <nav className="space-x-4">
        <Link href="/">
          <a className="font-black text-black text-2xl float-left">Lege.</a>
        </Link>
        <div className="float-right font-medium text-gray-900 text-2xl">
          <Link href="/">
            <a className="mr-3 hover:text-blue-500">I'am</a>
          </Link>
          <Link href="/blog">
            <a className="mr-3 hover:text-blue-500">Posts</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}
