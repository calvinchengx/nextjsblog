import matter from 'gray-matter'
import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import fs from 'fs'
import path from 'path'

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

  const postsDir = path.resolve(process.cwd(), 'src', 'posts')
  const allPosts = fs.readdirSync(postsDir)

  const posts = []
  for (let p of allPosts) {
    let post = fs.readFileSync(path.resolve(postsDir, p), {
      encoding: 'utf8'
    })
    // Parse yaml metadata & markdownbody in document
    const document = matter(post)
    const dateSlug = slugifyDate(document.data.date)
    const slug =
      dateSlug +
      '/' +
      p
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
    const data = {
      frontmatter: document.data,
      markdownBody: document.content,
      slug
    }
    posts.push(data)
  }

  return {
    props: {
      allBlogs: posts,
      title: siteConfig.default.title,
      description: siteConfig.default.description
    }
  }
}
