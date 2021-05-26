import Link from 'next/link'
import { getAllNodes } from 'next-mdx/server'
import Posts from '../../src/components/posts'
import { Layout } from '../../src/components/layout'

function BlogPage({ posts }) {
  return (
    <Layout>
      <div className="site-container">
        <h1 className="page-title">All Posts.</h1>
        <div className="space-y-16">
          {posts.map((post) => {
            return <Posts key={post.slug} post={post}/>
          })}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllNodes('post')
    }
  }
}

export default BlogPage