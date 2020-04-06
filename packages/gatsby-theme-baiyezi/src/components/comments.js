import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import GitalkComponent from 'gitalk/dist/gitalk-component'
import 'gitalk/dist/gitalk.css'

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
    <GitalkComponent
      options={{
        ...gitalk,
        id: window.location.pathname,
      }}
    />
  )
}
