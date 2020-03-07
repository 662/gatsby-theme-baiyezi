import React from 'react'

export default function Tags({ data }) {
  return (
    <>
      <h2>Tags</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
