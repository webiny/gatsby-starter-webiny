const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      query Posts {
        webiny {
          listPosts(sort:createdOn_DESC) {
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
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }


  const posts = result.data.webiny.listPosts.data

  // Create blog posts pages
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {

      createPage({
        path: post.slug,
        component: blogPost,
        context: {
          id: post.id,
          createdOn: post.createdOn,
          slug: post.slug,
        },
      })
    })
  }
}

