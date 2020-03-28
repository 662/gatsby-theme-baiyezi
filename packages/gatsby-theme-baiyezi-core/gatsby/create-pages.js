'use strict'
const getOptions = require('./utils/options')
const { paths, createPath, createCategoryOrTagPath } = require('./utils/paths')

module.exports = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions

  const options = getOptions(themeOptions)

  createPage({
    path: createPath(options.basePath),
    component: require.resolve(`../src/templates/home`),
  })

  createPage({
    path: createPath(options.basePath, paths.archivesPath),
    component: require.resolve(`../src/templates/archives.js`),
  })

  createPage({
    path: createPath(options.basePath, paths.categoriesPath),
    component: require.resolve(`../src/templates/categories.js`),
  })

  createPage({
    path: createPath(options.basePath, paths.tagsPath),
    component: require.resolve(`../src/templates/tags.js`),
  })

  const { data, errors } = await graphql(`
    {
      posts: allBaiyeziPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            path
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
      tags: allBaiyeziTag {
        edges {
          node {
            name
            path
          }
        }
      }
      categories: allBaiyeziCategory {
        edges {
          node {
            name
            path
          }
        }
      }
      pages: allBaiyeziPage {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `)

  if (errors) {
    reporter.panic(errors)
  }

  data.posts.edges.forEach(({ node, previous, next }) => {
    createPage({
      path: node.path,
      component: require.resolve(`../src/templates/post`),
      context: {
        nextId: next && next.id,
        previousId: previous && previous.id,
        id: node.id,
      },
    })
  })

  data.pages.edges.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: require.resolve(`../src/templates/page`),
      context: { id: node.id },
    })
  })

  data.categories.edges.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: require.resolve(`../src/templates/category`),
      context: { name: node.name },
    })
  })

  data.tags.edges.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: require.resolve(`../src/templates/tag`),
      context: { name: node.name },
    })
  })
}
