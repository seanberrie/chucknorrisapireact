import React from 'react'

export default ({ joke }) => {
  if (!joke) return <h4>Click Random for a Joke</h4>
  return (
    <div>
      <h1>Chuck says:</h1>
      <p>{ joke }</p>
    </div>
  )
}
