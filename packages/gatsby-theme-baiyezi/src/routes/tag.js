import React from 'react'
import Layout from '../components/layout'

export default function Tag({ data, pageContext: { name } }) {
  return (
    <Layout>
      <h2>{name} - Posts</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}
