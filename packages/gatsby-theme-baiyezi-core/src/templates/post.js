  
import { graphql } from 'gatsby'
import Post from '../routes/post'

export default Post

export const pageQuery = graphql`
  query Post($id: String!, $previousId: String, $nextId: String) {
    post: baiyeziPost(id: { eq: $id }) {
      body
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
    previous: baiyeziPost(id: { eq: $previousId }) {
      title
      path
    }
    next: baiyeziPost(id: { eq: $nextId }) {
      title
      path
    }
  }
`