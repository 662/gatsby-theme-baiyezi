import React from 'react'
import Layout from '../components/layout'

export default function Posts({ data }) {
  return (
    <Layout>
      <h2>Posts</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}
