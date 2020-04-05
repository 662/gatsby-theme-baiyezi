import { graphql } from 'gatsby'
import Archives from '../routes/archives'

export default Archives

export const pageQuery = graphql`
  query Archives {
    archives: allBaiyeziPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          year: date(formatString: "YYYY")
          date(formatString: "MM-DD")
          path
        }
      }
    }
  }
`
