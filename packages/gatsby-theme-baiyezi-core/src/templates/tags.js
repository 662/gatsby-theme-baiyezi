import { graphql } from 'gatsby'
import Tags from '../routes/tags'

export default Tags

export const pageQuery = graphql`
  query Tags {
    tags: allBaiyeziTag {
      edges {
        node {
          name
          path
          id
        }
      }
    }
  }
`
