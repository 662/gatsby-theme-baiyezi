import React from 'react'
import Layout from '../components/layout'

export default function Post({ data }) {
  return (
    <Layout>
      <h2>Post</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}
