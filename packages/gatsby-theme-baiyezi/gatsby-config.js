module.exports = options => ({
  siteMetadata: {
    title: '白叶子',
    titleTemplate: '%s · The Real Hero',
    description:
      'Hogwarts Potions master, Head of Slytherin house and former Death Eater.',
    url: 'https://www.doe.com', // No trailing slash allowed!
    image: '/images/snape.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@occlumency',
  },
  plugins: [
    {
      resolve: `gatsby-theme-baiyezi-core`,
      options: { basePath: options.basePath },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static`,
      },
    },
  ],
})
