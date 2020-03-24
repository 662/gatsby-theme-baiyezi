import { graphql } from 'gatsby'
import Page from '../routes/page'

export default Page

export const pageQuery = graphql`
  query Page($id: String!) {
    page: baiyeziPage(id: { eq: $id }) {
      body
      image
      path
      title
      description
    }
  }
`