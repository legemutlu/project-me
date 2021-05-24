import Link from 'next/link'
import { getAllNodes } from 'next-mdx/server'
import Posts from '../../components/posts'

function BlogPage({ posts }) {
  return (
    <div className="site-container">
      <div className="space-y-4">
        {posts.map((post) => {
          return <Posts key={post.slug} post={post}/>
        })}
      </div>
    </div>
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