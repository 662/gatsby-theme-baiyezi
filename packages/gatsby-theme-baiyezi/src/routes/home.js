import React from 'react'
import Layout from '../components/layout'
import PostList from '../components/post-list'
import SiteMetadata from '../components/site-metadata'

export default function Home({ data: { posts } }) {
  return (
    <Layout>
      <SiteMetadata></SiteMetadata>
      <PostList edges={posts.edges}></PostList>
    </Layout>
  )
}
