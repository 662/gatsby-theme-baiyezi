import React from 'react'

export default function Tag({ data, pageContext: { name } }) {
  return (
    <>
      <h2>{name} - Posts</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
