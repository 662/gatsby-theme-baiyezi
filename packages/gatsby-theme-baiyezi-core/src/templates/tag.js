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
          date(formatString: "YYYY-MM-DD")
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
