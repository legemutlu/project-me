import Link from 'next/link'

export default function Posts({post, ...props}){
  return (
    <article key={post.url}>
      <h2 className="text-xl font-bold">
        <Link href={post.url}>
          <a>{post.frontMatter.title}</a>
        </Link>
      </h2>
      <p>{post.frontMatter.excerpt}</p>
      <div className="text-gray-400">
        <span>{post.frontMatter.date}</span>
      </div>
    </article>
  )
}