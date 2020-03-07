const path = require('path')

// const withDefaultOptions = require(`./utils/with-default-options`)

module.exports = options => {
  return {
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-remark`,
      {
        resolve: `gatsby-source-filesystem`,
        options: { name: `post`, path: `content/posts` },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: { name: `page`, path: `content/pages` },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: { name: `asset`, path: `content/assets` },
      },
    ],
  }
}
