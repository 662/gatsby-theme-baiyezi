import React from 'react'
import Layout from '../components/layout'
import PostList from '../components/post-list'

export default function Posts({ data: { archives } }) {
  return (
    <Layout>
      <h2>Archives</h2>
      <PostList edges={archives.edges}></PostList>
    </Layout>
  )
}
