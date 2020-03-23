import { graphql } from 'gatsby'
import Tags from '../routes/tags'

export default Tags

export const pageQuery = graphql`
  query Tags {
    tags: allBaiyeziPost(filter: { draft: { ne: true } }) {
      group(field: tags___name) {
        totalCount
        fieldValue
        nodes {
          tags {
            name
            path
          }
        }
      }
    }
  }
`
