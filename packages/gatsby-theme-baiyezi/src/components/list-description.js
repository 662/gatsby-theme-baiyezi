/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Panel from '../components/panel'

const listDescriptionStyle = css`
  text-align: center;
  font-size: 12px;
`
export default function ListDescription({ type, name }) {
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
    <Panel mini css={listDescriptionStyle}>
      Showing posts with {type} <b>{name}</b>.{' '}
      <Link to={site.siteMetadata.baiyeziPath}>Show all posts</Link>
    </Panel>
  )
}
