/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Panel from '../components/panel'
import PostList from '../components/post-list'

const titleStyle = css`
  text-align: center;
  font-size: 12px;
`
export default function Tag({ data: { posts }, pageContext: { name } }) {
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
    <Layout>
      <Panel mini css={titleStyle}>
        Showing posts with tag <b>{name}</b>.{' '}
        <Link to={site.siteMetadata.baiyeziPath}>Show all posts</Link>
      </Panel>
      <PostList edges={posts.edges}></PostList>
    </Layout>
  )
}
