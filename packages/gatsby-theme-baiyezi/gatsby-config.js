const { createPath } = require('gatsby-theme-baiyezi-core/gatsby/utils/paths')

module.exports = options => ({
  siteMetadata: {
    title: '白叶子',
    description: '白叶子.',
    url: 'https://baiyezi.com',
    image: '/images/snape.jpg',
    gitalk: {
      clientID: 'a9ea8ec21008341ab6f8',
      clientSecret: '6656888d4258b947370b8b27b7650baa4e97fca2',
      repo: 'blog',
      owner: '662',
      admin: ['662'],
      distractionFreeMode: false,
    },
    links: [
      {
        title: '白叶子',
        url: 'https://baiyezi.com',
      },
    ],
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
