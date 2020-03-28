import { graphql } from 'gatsby'
import Tag from '../routes/tag'

export default Tag

export const pageQuery = graphql`
  query TagPosts($name: String!) {
    posts: allBaiyeziPost(
      filter: { tags: { elemMatch: { name: { eq: $name } } } }
    ) {
      edges {
        node {
          id
          title
          date
          path
          image
          description
          category {
            name
            path
          }
          tags {
            name
            path
          }
          reading {
            words
            minutes
          }
        }
      }
    }
  }
`
