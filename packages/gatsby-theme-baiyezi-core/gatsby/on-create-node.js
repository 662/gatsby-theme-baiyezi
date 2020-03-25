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
