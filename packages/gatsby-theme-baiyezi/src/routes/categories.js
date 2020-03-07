import React from 'react'
import Layout from '../components/layout'

export default function Categories({ data }) {
  return (
    <Layout>
      <h2>Categories</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}
