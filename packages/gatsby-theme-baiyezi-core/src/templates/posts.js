import { graphql } from 'gatsby'
import Posts from '../routes/post'

export default Posts

export const pageQuery = graphql`
  query Posts {
    posts: allMarkdownRemark(
      filter: { fields: { type: { eq: "post" }, draft: { ne: true } } }
      sort: { fields: [fields___date, fields___title], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          excerpt
          fields {
            title
            date
            slug
            category {
              name
              slug
            }
            tags {
              name
              slug
            }
          }
        }
      }
    }
  }
`
