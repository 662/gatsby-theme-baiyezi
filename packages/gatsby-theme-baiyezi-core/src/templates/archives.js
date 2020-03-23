import { graphql } from 'gatsby'
import Archives from '../routes/archives'

export default Archives

export const pageQuery = graphql`
  query Archives {
    archives: allBaiyeziPost(
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
