import { Layout } from '../../src/components/layout'

export default function AboutPage() {
  return (
    <>
      <Layout>
        <div className="c-small">
          <div className="space-y-1">
            <img className="h-44 w-auto -mt-10 content-center" src="me-emoji/hello.webp" />
            <p className="text-xl font-thin mt-0">
              Hi, I'm Levent Ege Mutlu. <br/> I'm a software developer living in Istanbul and interested in algorithms, philosophy, art and sport.
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}