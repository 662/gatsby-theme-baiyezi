import { graphql } from 'gatsby'
import Category from '../routes/category'

export default Category

export const pageQuery = graphql`
  query CategoryPosts($name: String!) {
    posts: allBaiyeziPost(filter: { category: { name: { eq: $name } } }) {
      edges {
        node {
          id
          title
          date
          path
          image
          description
          category {
            name
            path
          }
          tags {
            name
            path
          }
          reading {
            words
            minutes
          }
        }
      }
    }
  }
`
