import { getAllNodes, getMdxPaths, getNode } from "next-mdx"
import Posts from '../../../src/components/posts'
import { Layout } from '../../../src/components/layout'


export default function CategoryPage({ category, posts }) {
  return (
    <Layout>
      <div className="c-small">
        <span className="page-title">{category.frontMatter.name}</span>
        <div className="space-y-16 mt-10">
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
    paths: await getMdxPaths("category"),
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const category = await getNode("category", context)

  if (!category) {
    return {
      notFound: true,
    }
  }

  const posts = await getAllNodes("post")

  return {
    props: {
      category,
      posts: posts.filter((post) =>
        post.relationships.category.some(({ slug }) => slug === category.slug)
      ),
    },
  }
}