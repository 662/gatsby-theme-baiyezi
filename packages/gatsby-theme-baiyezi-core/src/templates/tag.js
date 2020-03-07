import { graphql } from 'gatsby'
import Tag from '../routes/tag'

export default Tag

export const pageQuery = graphql`
  query TagPosts($name: String!) {
    posts: allMarkdownRemark(
      filter: {
        fields: {
          tags: { elemMatch: { name: { eq: $name } } }
          type: { eq: "post" }
          draft: { ne: true }
        }
      }
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
