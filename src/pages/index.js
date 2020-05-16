import matter from 'gray-matter'
import Layout from '../components/Layout'
import BlogList from '../components/BlogList'

function slugifyDate(fullDate) {
  let d = new Date(fullDate),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return '/' + [year, month, day].join('/')
}

const Index = (props) => {
  return (
    <Layout pathname="/" title={props.title} description={props.description}>
      <section>
        <BlogList allBlogs={props.allBlogs} />
      </section>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const siteConfig = await import(`../data/config.json`)
  //get posts & context from folder
  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      // Create slug from filename

      const value = values[index]
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default)
      const dateSlug = slugifyDate(document.data.date)
      const slug =
        dateSlug +
        '/' +
        key
          .replace(/^.*[\\\/]/, '')
          .split('.')
          .slice(0, -1)
          .join('.')
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      allBlogs: posts,
      title: siteConfig.default.title,
      description: siteConfig.default.description
    }
  }
}
