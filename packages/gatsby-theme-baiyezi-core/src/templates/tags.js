import { graphql } from 'gatsby'
import Tags from '../routes/tags'

export default Tags

export const pageQuery = graphql`
  query Tags {
    tags: allMarkdownRemark(
      filter: { fields: { type: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: fields___tags___name) {
        name: fieldValue
        totalCount
      }
    }
  }
`
