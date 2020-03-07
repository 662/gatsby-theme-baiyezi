import { graphql } from 'gatsby'
import Category from '../routes/category'

export default Category

export const pageQuery = graphql`
  query CategoryPosts($name: String!) {
    posts: allMarkdownRemark(
      filter: {
        fields: {
          category: { name: { eq: $name } }
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
