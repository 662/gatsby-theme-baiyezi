import React from 'react'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import ListDescription from '../components/list-description'

export default function Tag({ data: { posts }, pageContext: { name } }) {
  return (
    <Layout>
      <ListDescription type="tag" name={name}></ListDescription>
      <PostList edges={posts.edges}></PostList>
    </Layout>
  )
}
