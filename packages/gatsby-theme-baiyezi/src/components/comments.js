/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import GitalkComponent from 'gitalk/dist/gitalk-component'
import 'gitalk/dist/gitalk.css'
import Panel from '../components/panel'

const commentsStyle = css`
  .gt-meta {
    margin-top: 0;
    padding-top: 0;
  }
`

export default function Comments() {
  const {
    site: {
      siteMetadata: { gitalk },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            gitalk {
              clientID
              clientSecret
              repo
              owner
              admin
              distractionFreeMode
            }
          }
        }
      }
    `
  )
  return (
    <Panel css={commentsStyle}>
      <GitalkComponent
        options={{
          ...gitalk,
          id: window.location.pathname,
        }}
      />
    </Panel>
  )
}
