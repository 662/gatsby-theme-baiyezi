import React from 'react'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import ListDescription from '../components/list-description'

export default function Category({ data: { posts }, pageContext: { name } }) {
  return (
    <Layout>
      <ListDescription type="category" name={name}></ListDescription>
      <PostList edges={posts.edges}></PostList>
    </Layout>
  )
}
