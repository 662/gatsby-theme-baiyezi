/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Logo from './logo'
import Container from '../container'

const containerStyle = css`
  height: 68px;
  padding: 24px 8px;
`

const Content = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          baiyeziPath
        }
      }
    }
  `)
  return (
    <Container css={containerStyle}>
      <Link to={site.siteMetadata.baiyeziPath}>
        <Logo></Logo>
      </Link>
    </Container>
  )
}

export default Content
