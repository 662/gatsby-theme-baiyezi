const { createPath } = require('gatsby-theme-baiyezi-core/gatsby/utils/paths')

module.exports = options => ({
  siteMetadata: {
    title: '白叶子',
    description: '白叶子.',
    url: 'https://baiyezi.com',
    image: '/images/snape.jpg',
    menus: [
      {
        title: 'Home',
        icon: 'home',
        path: createPath(options.basePath),
        match: `^(${options.basePath}\/category\/|${options.basePath}\/tag\/|${options.basePath}\/post\/)`,
      },
      {
        title: 'Archives',
        icon: 'archive',
        path: createPath(options.basePath, 'archives'),
      },
      {
        title: 'About',
        icon: 'address-card',
        path: createPath(options.basePath, '/about'),
      },
      {
        title: 'Guestbook',
        icon: 'comments',
        path: createPath(options.basePath, '/guestbook'),
      },
    ],
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
