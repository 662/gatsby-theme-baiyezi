const path = require('path')
const getOptions = require('./gatsby/utils/options')
const { createPath } = require('./gatsby/utils/paths')

module.exports = themeOptions => {
  const options = getOptions(themeOptions)
  return {
    siteMetadata: {
      baiyeziPath: options.basePath,
    },
    plugins: [
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-source-filesystem`,
        options: { name: `post`, path: options.postPath },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: { name: `page`, path: options.pagePath },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: { name: `asset`, path: options.assetPath },
      },
      {
        resolve: 'gatsby-plugin-copy-files',
        options: {
          source: options.assetPath,
          destination: `/assets`,
        },
      },
    ],
  }
}
