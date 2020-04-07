/** @jsx jsx */
import { useCallback } from 'react'
import { css, jsx } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'
import Panel from '../components/panel'

const commentsStyle = css`
  .gt-meta {
    margin-top: 0;
    padding-top: 0;
  }
`

export default function Comments() {
  const { pathname } = useLocation()
  const {
    site: { siteMetadata },
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

  const commentRef = useCallback(
    node => {
      if (node !== null) {
        const gitalk = new Gitalk({ ...siteMetadata.gitalk, id: pathname })
        gitalk.render(node)
      }
    },
    [pathname, siteMetadata]
  )

  return (
    <Panel css={commentsStyle}>
      <div ref={commentRef}></div>
    </Panel>
  )
}
