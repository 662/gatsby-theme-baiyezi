import { graphql } from 'gatsby'
import Home from '../routes/home'

export default Home

export const pageQuery = graphql`
  query Posts {
    posts: allBaiyeziPost(sort: { fields: date, order: DESC }) {
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
