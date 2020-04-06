'use strict'
const wordsAndTime = require('./utils/words-and-time')

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
const readingResolver = async (source, args, context, info) => {
  const mdHTML = await mdResolverPassthrough('html')(
    source,
    args,
    context,
    info
  )
  const reading = wordsAndTime(mdHTML)
  return reading
}

module.exports = ({ actions, schema }) => {
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
        words: Float!
        minutes: Float!
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
      fields: {
        ...publicFields,
        icon: { type: `String` },
        allowComment: { type: `Boolean!` },
      },
      interfaces: [`Node`],
    })
  )
  createTypes(
    schema.buildObjectType({
      name: `BaiyeziPost`,
      fields: {
        ...publicFields,
        category: { type: `Category!` },
        tags: { type: `[Tag]!` },
        reading: {
          type: `Reading!`,
          resolve: readingResolver,
        },
        date: { type: `Date!`, extensions: { dateformat: {} } },
      },
      interfaces: [`Node`],
    })
  )
}
