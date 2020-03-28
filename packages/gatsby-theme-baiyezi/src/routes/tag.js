import React from 'react'
import Layout from '../components/layout'
import PostList from '../components/post-list'

export default function Tag({ data: { posts }, pageContext: { name } }) {
  return (
    <Layout>
      <h2>{name} - Posts</h2>
      <PostList edges={posts.edges}></PostList>
    </Layout>
  )
}
