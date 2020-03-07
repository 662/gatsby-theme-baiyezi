import React from 'react'
import Layout from '../components/layout'

export default function Page({ data }) {
  return (
    <Layout>
      <h2>Page</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}
