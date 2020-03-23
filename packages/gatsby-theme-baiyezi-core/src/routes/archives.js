import React from 'react'

export default function Archives({ data }) {
  return (
    <>
      <h2>Archives</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
