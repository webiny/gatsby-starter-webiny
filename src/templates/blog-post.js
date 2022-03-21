import * as React from "react"
import { Link, graphql } from "gatsby"
import { RichTextRenderer } from '../components/rich-text-renderer'
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.webiny.getPost.data
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data.webiny

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.title}
        description={post.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.title}</h1>
          <p>{post.date}</p>
        </header>
        <section
          itemProp="articleBody"
        >
          <RichTextRenderer content={post.body} />
        </section>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous.data[0] && (
              <Link to={`/${previous.data[0].slug}`} rel="prev">
                ← {previous.data[0].title}
              </Link>
            )}
          </li>
          <li>
            {next.data[0] && (
              <Link to={`/${next.data[0].slug}`} rel="next">
                {next.data[0].title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query PostBySlug(
      $slug: String
      $id: ID
      $createdOn: Webiny_DateTime
    ) {
    site {
      siteMetadata {
        title
      }
    }
    webiny {
      getPost(where: {slug: $slug}) {
        data {
          id
          title
          slug
          description
          createdOn
          featuredImage
          body
          author {
            name
            picture
          }
        }
      }
      next: listPosts(limit: 1, where: {createdOn_gt: $createdOn, id_not: $id }) {
        data {
          title
          slug
        }
      }
      previous: listPosts(limit: 1, where: {createdOn_lt: $createdOn, id_not: $id }) {
        data {
          title
          slug
        }
      }
    } 
  }
`
