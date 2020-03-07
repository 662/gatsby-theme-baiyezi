import { graphql } from 'gatsby'
import Post from '../routes/post'

export default Post

export const pageQuery = graphql`
  query Post($id: String!, $previousId: String, $nextId: String) {
    post: markdownRemark(id: { eq: $id }) {
      html
      excerpt
      fields {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        category {
          name
          slug
        }
        tags {
          name
          slug
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousId }) {
      fields {
        slug
        title
      }
    }
    next: markdownRemark(id: { eq: $nextId }) {
      fields {
        slug
        title
      }
    }
  }
`
