import { graphql } from 'gatsby'
import Category from '../routes/category'

export default Category

export const pageQuery = graphql`
  query CategoryPosts($name: String!) {
    posts: allBaiyeziPost(
      filter: { draft: { ne: true }, category: { name: { eq: $name } } }
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