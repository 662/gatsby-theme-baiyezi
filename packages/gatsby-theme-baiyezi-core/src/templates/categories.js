import { graphql } from 'gatsby'
import Categories from '../routes/categories'

export default Categories

export const pageQuery = graphql`
  query Categories {
    categories: allBaiyeziPost(filter: { draft: { ne: true } }) {
      group(field: category___name) {
        totalCount
        fieldValue
        nodes {
          category {
            name
            path
          }
        }
      }
    }
  }
`
