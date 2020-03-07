import { graphql } from 'gatsby'
import Page from '../routes/page'

export default Page

export const pageQuery = graphql`
  query Page($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      excerpt
      fields {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
      }
    }
  }
`
