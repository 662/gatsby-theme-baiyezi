import React from 'react'
import Layout from '../components/layout'
import PostList from '../components/post-list'

export default function Posts({ data }) {
  return (
    <Layout>
      <PostList></PostList>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}
