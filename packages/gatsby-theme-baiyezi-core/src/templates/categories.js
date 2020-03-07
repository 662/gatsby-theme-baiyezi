import { graphql } from 'gatsby'
import Categories from '../routes/categories'

export default Categories

export const pageQuery = graphql`
  query Categories {
    categories: allMarkdownRemark(
      filter: { fields: { type: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: fields___category___name) {
        name: fieldValue
        totalCount
      }
    }
  }
`
