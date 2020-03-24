const fs = require(`fs`)
const path = require(`path`)
const Debug = require(`debug`)
const readingTime = require('reading-time')
const { createFilePath } = require(`gatsby-source-filesystem`)
const { urlResolve, createContentDigest } = require(`gatsby-core-utils`)
const getOptions = require('./options')

const debug = Debug(`gatsby-theme-baiyezi-core`)

const paths = {
  categoriesPath: 'categories',
  categoryPath: 'category',
  tagPath: 'tag',
  tagsPath: 'tags',
  archivesPath: 'archives',
}

const createPath = (base, middle = '', path = '') =>
  `/${base}/${middle}/${path}`
    .toLowerCase()
    .replace(/\/+/g, '/') //  '/////abc//d' -> '/abc/d'
    .replace(/\/$/, '') //          '/abc/' -> '/abc'
    .replace(/\s+/g, '-') //       '/a b c' -> '/a-b-c'
    .replace(/-+/g, '-') //  '/a----b----c' -> '/a-b-c'
    .replace(/^$/, '/') //               '' -> '/'

const createCategoryOrTagPath = (base, middle, path) =>
  createPath(base, middle, path.replace(/\/+/g, '-'))

const mdResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`MarkdownRemark`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })
  return result
}

exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState()
  const { postPath, pagePath, assetPath } = getOptions(themeOptions)

  const dirs = [
    path.join(program.directory, postPath),
    path.join(program.directory, pagePath),
    path.join(program.directory, assetPath),
  ]

  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  createTypes(`
    type Category {
      name: String!
      path: String!
    }
    type Tag {
      name: String!
      path: String!
    }
    type Reading {
      words: Int!
      minutes: Int!
    }
  `)

  const publicFields = {
    id: { type: `ID!` },
    title: { type: `String!` },
    body: {
      type: `String!`,
      resolve: mdResolverPassthrough(`html`),
    },
    path: { type: `String!` },
    description: {
      type: `String!`,
      args: { pruneLength: { type: `Int`, defaultValue: 140 } },
      resolve: mdResolverPassthrough(`excerpt`),
    },
    draft: { type: `Boolean!` },
    image: { type: `String` },
  }
  createTypes(
    schema.buildObjectType({
      name: `BaiyeziPage`,
      fields: publicFields,
      interfaces: [`Node`],
    })
  )
  createTypes(
    schema.buildObjectType({
      name: `BaiyeziPost`,
      fields: {
        ...publicFields,
        category: { type: `Category` },
        tags: { type: `[Tag]!` },
        reading: { type: `Reading!` },
        date: { type: `Date!`, extensions: { dateformat: {} } },
      },
      interfaces: [`Node`],
    })
  )
}

exports.onCreateNode = async (
  { node, getNode, actions, createNodeId },
  themeOptions
) => {
  const { createNode, createParentChildLink } = actions

  const options = getOptions(themeOptions)

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)

    const type = fileNode.sourceInstanceName

    let path =
      node.frontmatter.path || createFilePath({ node, getNode, basePath: type })
    path = createPath(options.basePath, type === 'post' ? 'post' : '', path)

    let fieldData = {
      title: node.frontmatter.title || '',
      path,
      description: node.excerpt || '',
      draft: !!node.frontmatter.draft,
      image: node.frontmatter.image,
    }

    if (type === 'page') {
      const baiyeziPageId = createNodeId(`${node.id} >>> BaiyeziPage`)
      await createNode({
        id: baiyeziPageId,
        ...fieldData,
        parent: node.id,
        children: [],
        internal: {
          type: `BaiyeziPage`,
          contentDigest: createContentDigest(fieldData),
        },
      })
      createParentChildLink({ parent: node, child: getNode(baiyeziPageId) })
    } else if (type === 'post') {
      fieldData = {
        ...fieldData,
        category: node.frontmatter.category && {
          name: node.frontmatter.category,
          path: createCategoryOrTagPath(
            options.basePath,
            paths.categoryPath,
            node.frontmatter.category
          ),
        },
        tags: (node.frontmatter.tags || []).map(tag => ({
          name: tag,
          path: createCategoryOrTagPath(options.basePath, paths.tagPath, tag),
        })),
        reading: {
          words: 1,
          minutes: 1,
        },
        date: node.frontmatter.date,
      }
      await createNode({
        id: createNodeId(`${node.id} >>> BaiyeziPost`),
        ...fieldData,
        parent: node.id,
        children: [],
        internal: {
          type: `BaiyeziPost`,
          contentDigest: createContentDigest(fieldData),
        },
      })
    }
  }
}

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions

  const options = getOptions(themeOptions)

  createPage({
    path: createPath(options.basePath),
    component: require.resolve(`./src/templates/posts`),
  })

  createPage({
    path: createPath(options.basePath, paths.archivesPath),
    component: require.resolve(`./src/templates/archives.js`),
  })

  createPage({
    path: createPath(options.basePath, paths.categoriesPath),
    component: require.resolve(`./src/templates/categories.js`),
  })

  createPage({
    path: createPath(options.basePath, paths.tagsPath),
    component: require.resolve(`./src/templates/tags.js`),
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
      component: require.resolve(`./src/templates/post`),
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
      component: require.resolve(`./src/templates/page`),
      context: { id: node.id },
    })
  })

  result.data.categories.group.forEach(({ name }) => {
    createPage({
      path: createCategoryOrTagPath(options.basePath, paths.categoryPath, name),
      component: require.resolve(`./src/templates/category`),
      context: { name },
    })
  })

  result.data.tags.group.forEach(({ name }) => {
    createPage({
      path: createCategoryOrTagPath(options.basePath, paths.tagPath, name),
      component: require.resolve(`./src/templates/tag`),
      context: { name },
    })
  })
}
