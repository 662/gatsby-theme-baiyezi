import React from 'react'

export default function Categories({ data }) {
  return (
    <>
      <h2>Categories</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
