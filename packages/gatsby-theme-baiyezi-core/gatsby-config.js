const path = require('path')
const getOptions = require('./gatsby/utils/options')

module.exports = themeOptions => {
  const options = getOptions(themeOptions)
  return {
    plugins: [
      `gatsby-plugin-react-helmet`,
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
    ],
  }
}
