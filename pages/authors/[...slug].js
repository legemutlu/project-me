import { getNode, getAllNodes, getMdxPaths  } from 'next-mdx'
import Posts from '../../components/posts'

export default function AuthorPage({author, posts}){
  return (
    <div className="site-container">
      <article className="prose">
        <h1>Posts by {author.frontMatter.name}</h1>
        {author.frontMatter.bio && (
          <p>{author.frontMatter.bio}</p>
        )}
        <hr />
        {posts?.length ? (
          posts.map((post) => <Posts key={post.slug} post={post} />)
        ) : (
          <p className="text-gray-700 text-bold">No posts found.</p>
        )}
      </article>
    </div>
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