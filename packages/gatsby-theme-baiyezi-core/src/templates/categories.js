import { graphql } from 'gatsby'
import Categories from '../routes/categories'

export default Categories

export const pageQuery = graphql`
  query Categories {
    categories: allBaiyeziCategory {
      edges {
        node {
          id
          name
          path
        }
      }
    }
  }
`
