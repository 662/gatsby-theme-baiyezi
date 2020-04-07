const path = require('path')
const getOptions = require('./gatsby/utils/options')

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
    ],
  }
}
