import React from 'react'

export default function Home({ data }) {
  return (
    <>
      <h2>Posts</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
