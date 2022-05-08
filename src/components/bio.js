/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      webiny {
        getAuthor(where: {}) {
          data {
            name
            picture
          }
        }
      }
    }
  `)

  const author = data.webiny.getAuthor.data

  return (
    <div className="bio">
      <img src={author.picture} alt={author.name} width={50} height={50} className="bio-avatar" />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.description || null}
        </p>
      )}
    </div>
  )
}

export default Bio
