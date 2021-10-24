import { getNode, getAllNodes, getMdxPaths  } from 'next-mdx'
import Posts from '../../src/components/posts'
import { Layout } from '../../src/components/layout'

export default function AuthorPage({author, posts}){
  return (
    <Layout>
      <div className="c-small">
          <span className="page-title">Posts by {author.frontMatter.name}</span>
          {author.frontMatter.bio && (
            <p className="my-10">{author.frontMatter.bio}</p>
          )}
        <div className="space-y-16">
          {posts?.length ? (
            posts.map((post) => <Posts key={post.slug} post={post} />)
          ) : (
            <p className="text-gray-700 text-bold">No posts found.</p>
          )}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: await getMdxPaths("author"),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const author = await getNode("author", context)

  if (!author) {
    return {
      notFound: true,
    }
  }

  const posts = await getAllNodes("post")

  return {
    props: {
      author,
      posts: posts.filter((post) =>
        post.relationships.author.some(({ slug }) => slug === author.slug)
      ),
    },
  }
}