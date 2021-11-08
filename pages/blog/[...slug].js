import { getMdxNode, getMdxPaths } from 'next-mdx/server'
import { useHydrate } from 'next-mdx/client'
import { mdxComponents } from '../../src/components/mdx-components'
import Link from 'next/link'
import { Layout } from '../../src/components/layout'
import { formatDate } from '../../src/utils/format-date'

export default function PostPage({ post }) {

  const content = useHydrate(post, {
    components: mdxComponents
  })
  return (
    <Layout>
    <div className="c-small">
      <article className="prose">
        <span className="page-title">{post.frontMatter.title}</span>
        <p>{post.frontMatter.excerpt}</p>
        {post.relationships.author.map((author) => (
          <strong key={author.slug}>
            <Link href={author.url}>{author.frontMatter.name}</Link>
          </strong>
        ))}
        <span className="block text-black-900 mt-1 dark:text-gray-400">{formatDate(post.frontMatter.date)}</span>
        <hr/>
        <img src={post.frontMatter.image} alt=""/>
        <div>{content}</div>
      </article>
    </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('post'),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const post = await getMdxNode('post', context)

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}