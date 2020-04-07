import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { useLocation } from '@reach/router'

const SiteMetadata = ({ title, description, keywords }) => {
  const { pathname } = useLocation()

  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          url
          title
          description
          keywords
          subtitle
        }
      }
    }
  `)

  return (
    <Helmet defer={false}>
      <html lang="en" />
      <title>
        {title
          ? `${title} | ${siteMetadata.title}`
          : `${siteMetadata.title} | ${siteMetadata.subtitle}`}
      </title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta
        name="description"
        content={description || siteMetadata.description}
      />
      <meta name="keywords" content={keywords || siteMetadata.keywords} />
      <meta property="og:url" content={siteMetadata.url + pathname} />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={title} />
    </Helmet>
  )
}

export default SiteMetadata
