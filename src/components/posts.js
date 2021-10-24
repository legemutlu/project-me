import Link from 'next/link'
import { formatDate } from '../utils/format-date'

export default function Posts({post, ...props}){
  return (
    <article key={post.url}>
      <hr className="mb-8"/>
      {post.relationships.author.length ? (
        <span className="inline-block mr-2">
          Posted by{" "}
          {post.relationships.author.map((author, index) => (
            <strong key={author.slug}>
              {index !== 0 && " and "}{" "}
              <Link href={author.url}>
                <a className="text-blue-500">{author.frontMatter.name}</a>
              </Link>
            </strong>
          ))}
        </span>
      ) : null}
      <span className="inline-block mr-2" >
        {" "}in{" "}
        {post.relationships.category.map((category, index) => (
          <strong key={category.slug}>
            {index !== 0 && " and "}{" "}
            <Link href={category.url}>
              <a className="text-purple-500">{category.frontMatter.name}</a>
            </Link>
          </strong>
        ))}
      </span>
      <div className="inline-block text-gray-400 mb-3">
        <span>{formatDate(post.frontMatter.date)}</span>
      </div>
      <h2 className="text-3xl font-bold mb-3">
        <Link href={post.url}>
          <a>{post.frontMatter.title}</a>
        </Link>
      </h2>
      <p>{post.frontMatter.excerpt}</p>
    </article>
  )
}