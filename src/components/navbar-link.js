import Link from "next/link"

export function NavbarLink({href, children, ...props}) {
  return (
    <Link href={href} passHref>
      <a
        {...props}
      >
        {children}
      </a>
    </Link>
  )
}