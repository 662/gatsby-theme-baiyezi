import React from 'react'

export default function Page({ data }) {
  return (
    <>
      <h2>Page</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
