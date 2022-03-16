import * as React from "react"
import { Link, graphql } from "gatsby"
import DateFormatter from "../components/date-formatter"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  
  const posts = data.webiny.listPosts.data

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {

          return (
            <li key={post.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.slug} itemProp="url">
                      <span itemProp="headline">{post.title}</span>
                    </Link>
                  </h2>
                  <DateFormatter dateString={post.createdOn}/>
                </header>
                <section>
                  <p>{post.description}</p>
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    webiny {
      listPosts(sort: createdOn_ASC) {
        data {
          id
          title
          slug
          description
          createdOn
          featuredImage
          author {
            name
            picture
          }
        }
      }
    }
  }
`
