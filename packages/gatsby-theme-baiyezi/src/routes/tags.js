import React from 'react'
import Layout from '../components/layout'

export default function Tags({ data }) {
  return (
    <Layout>
      <h2>Tags</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}
