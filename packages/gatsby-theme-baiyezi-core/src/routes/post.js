import React from 'react'

export default function Post({ data }) {
  return (
    <>
      <h2>Post</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
