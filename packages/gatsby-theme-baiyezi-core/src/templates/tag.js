import { graphql } from 'gatsby'
import Tag from '../routes/tag'

export default Tag

export const pageQuery = graphql`
  query TagPosts($name: String!) {
    posts: allBaiyeziPost(
      filter: {
        draft: { ne: true }
        tags: { elemMatch: { name: { eq: $name } } }
      }
    ) {
      edges {
        node {
          title
          date
          path
          image
          category {
            name
            path
          }
          tags {
            name
            path
          }
        }
      }
    }
  }
`