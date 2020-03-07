const fs = require(`fs`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const defaultOptions = {
  basePath: '/',
}

const paths = {
  categoryPath: 'category',
  tagPath: 'tag',
  categoriesPath: 'categories',
  tagsPath: 'tags',
  archivesPath: 'archives',
}

const createSlug = (base, middle = '', slug = '') =>
  `/${base}/${middle}/${slug}`
    .toLowerCase()
    .replace(/\/+/g, '/')
    .replace(/\/$/, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^$/, '/')

const createCategoryOrTagSlug = (base, middle, slug) =>
  createSlug(base, middle, slug.replace(/\/+/g, '-'))

const getOptions = themeOptions => ({ ...defaultOptions, ...themeOptions })

exports.onCreateNode = async ({ node, getNode, actions }, themeOptions) => {
  const { createNodeField } = actions

  const options = getOptions(themeOptions)

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)

    const type = fileNode.sourceInstanceName

    const slug =
      node.frontmatter.slug || createFilePath({ node, getNode, basePath: type })

    createNodeField({
      node,
      name: 'title',
      value: node.frontmatter.title || '',
    })
    createNodeField({
      node,
      name: 'date',
      value: node.frontmatter.date || '',
    })
    createNodeField({
      node,
      name: 'slug',
      value: createSlug(options.basePath, type === 'post' ? 'post' : '', slug),
    })
    createNodeField({
      node,
      name: 'draft',
      value: !!node.frontmatter.draft,
    })
    createNodeField({
      node,
      name: 'type',
      value: type,
    })
    createNodeField({
      node,
      name: 'category',
      value: node.frontmatter.category && {
        name: node.frontmatter.category,
        slug: createCategoryOrTagSlug(
          options.basePath,
          paths.categoryPath,
          node.frontmatter.category
        ),
      },
    })
    createNodeField({
      node,
      name: 'tags',
      value:
        node.frontmatter.tags &&
        node.frontmatter.tags.map(tag => ({
          name: tag,
          slug: createCategoryOrTagSlug(options.basePath, paths.tagPath, tag),
        })),
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions

  const options = getOptions(themeOptions)

  createPage({
    path: createSlug(options.basePath),
    component: require.resolve(`./src/templates/posts`),
  })

  createPage({
    path: createSlug(options.basePath, paths.categoriesPath),
    component: require.resolve(`./src/templates/categories`),
  })

  createPage({
    path: createSlug(options.basePath, paths.tagsPath),
    component: require.resolve(`./src/templates/tags`),
  })

  const result = await graphql(`
    {
      posts: allMarkdownRemark(
        filter: { fields: { type: { eq: "post" }, draft: { ne: true } } }
        sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
      tags: allMarkdownRemark(
        filter: { fields: { type: { eq: "post" }, draft: { ne: true } } }
      ) {
        group(field: fields___tags___name) {
          name: fieldValue
        }
      }
      categories: allMarkdownRemark(
        filter: { fields: { type: { eq: "post" }, draft: { ne: true } } }
      ) {
        group(field: fields___category___name) {
          name: fieldValue
        }
      }
      pages: allMarkdownRemark(
        filter: { fields: { type: { eq: "page" }, draft: { ne: true } } }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
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
      path: node.fields.slug,
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
      path: node.fields.slug,
      component: require.resolve(`./src/templates/page`),
      context: { id: node.id },
    })
  })

  result.data.categories.group.forEach(({ name }) => {
    createPage({
      path: createCategoryOrTagSlug(
        options.basePath,
        paths.categoryPath,
        name
      ),
      component: require.resolve(`./src/templates/category`),
      context: { name },
    })
  })

  result.data.tags.group.forEach(({ name }) => {
    createPage({
      path: createCategoryOrTagSlug(options.basePath, paths.tagPath, name),
      component: require.resolve(`./src/templates/tag`),
      context: { name },
    })
  })
}
