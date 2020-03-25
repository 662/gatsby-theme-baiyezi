'use strict'
const getOptions = require('./utils/options')
const { paths, createPath, createCategoryOrTagPath } = require('./utils/paths')

module.exports = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions

  const options = getOptions(themeOptions)

  createPage({
    path: createPath(options.basePath),
    component: require.resolve(`../src/templates/posts`),
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

  const result = await graphql(`
    {
      posts: allBaiyeziPost(
        filter: { draft: { ne: true } }
        sort: { fields: date, order: DESC }
      ) {
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
      tags: allBaiyeziPost(filter: { draft: { ne: true } }) {
        group(field: tags___name) {
          name: fieldValue
        }
      }
      categories: allBaiyeziPost(filter: { draft: { ne: true } }) {
        group(field: category___name) {
          name: fieldValue
        }
      }
      pages: allBaiyeziPage(filter: { draft: { ne: true } }, limit: 1000) {
        edges {
          node {
            id
            path
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  result.data.posts.edges.forEach(({ node, previous, next }) => {
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

  result.data.pages.edges.forEach(({ node }) => {
    createPage({
      path: node.path,
      component: require.resolve(`../src/templates/page`),
      context: { id: node.id },
    })
  })

  result.data.categories.group.forEach(({ name }) => {
    createPage({
      path: createCategoryOrTagPath(options.basePath, paths.categoryPath, name),
      component: require.resolve(`../src/templates/category`),
      context: { name },
    })
  })

  result.data.tags.group.forEach(({ name }) => {
    createPage({
      path: createCategoryOrTagPath(options.basePath, paths.tagPath, name),
      component: require.resolve(`../src/templates/tag`),
      context: { name },
    })
  })
}
