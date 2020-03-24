  
import { graphql } from 'gatsby'
import Posts from '../routes/posts'

export default Posts

export const pageQuery = graphql`
  query Posts {
    posts: allBaiyeziPost(
      filter: { draft: { ne: true } }
      sort: { fields: date, order: DESC }
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