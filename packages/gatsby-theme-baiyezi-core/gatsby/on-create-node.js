'use strict'
const { createFilePath } = require(`gatsby-source-filesystem`)
const { createContentDigest } = require(`gatsby-core-utils`)
const getOptions = require('./utils/options')
const { paths, createPath, createCategoryOrTagPath } = require('./utils/paths')

module.exports = async (
  { node, getNode, actions, createNodeId },
  themeOptions
) => {
  const { createNode, createParentChildLink } = actions

  const options = getOptions(themeOptions)

  if (node.internal.type === `MarkdownRemark`) {
    if (node.frontmatter.draft) return

    const fileNode = getNode(node.parent)

    const type = fileNode.sourceInstanceName

    let path =
      node.frontmatter.path || createFilePath({ node, getNode, basePath: type })
    path = createPath(options.basePath, type === 'post' ? 'post' : '', path)

    let fieldData = {
      title: node.frontmatter.title || '',
      path,
      description: node.excerpt || '',
      image: node.frontmatter.image,
    }

    if (type === 'page') {
      const baiyeziPageId = createNodeId(`BaiyeziPage-${node.id}`)
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
      const category = node.frontmatter.category
        ? {
            name: node.frontmatter.category,
            path: createCategoryOrTagPath(
              options.basePath,
              paths.categoryPath,
              node.frontmatter.category
            ),
          }
        : {
            name: `Other`,
            path: createCategoryOrTagPath(
              options.basePath,
              paths.categoryPath,
              `Other`
            ),
          }
      const tags = (node.frontmatter.tags || []).map(tag => ({
        name: tag,
        path: createCategoryOrTagPath(options.basePath, paths.tagPath, tag),
      }))
      fieldData = {
        ...fieldData,
        category,
        tags,
        date: node.frontmatter.date,
      }
      await createNode({
        id: createNodeId(`BaiyeziPost-${node.id}`),
        ...fieldData,
        parent: node.id,
        children: [],
        internal: {
          type: `BaiyeziPost`,
          contentDigest: createContentDigest(fieldData),
        },
      })

      await createNode({
        id: createNodeId(`BaiyeziCategory-${category.name}`),
        ...category,
        parent: node.id,
        children: [],
        internal: {
          type: `BaiyeziCategory`,
          contentDigest: createContentDigest(category),
        },
      })
      tags.forEach(async tag => {
        await createNode({
          id: createNodeId(`BaiyeziTag-${tag.name}`),
          ...tag,
          parent: node.id,
          children: [],
          internal: {
            type: `BaiyeziTag`,
            contentDigest: createContentDigest(tag),
          },
        })
      })
    }
  }
}
