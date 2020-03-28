import React from 'react'
import Layout from '../components/layout'
import PostList from '../components/post-list'

export default function Home({ data: { posts } }) {
  return (
    <Layout>
      <PostList edges={posts.edges}></PostList>
    </Layout>
  )
}
