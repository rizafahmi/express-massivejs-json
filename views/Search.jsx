import React from 'react'

const Search = (props) => {
  return (
    <form style={{
      margin: 20,
      display: 'flex'
    }} action='/search' method='GET'>
      <input
        style={{
          width: 590,
          padding: 10,
          margin: 5
        }}
        required
        type='text'
        name='term'
        defaultValue={props.term}
        placeholder='Search for quotes...' />
      <button
        style={{
          margin: 5
        }}
        type='submit'>Search</button>
      <a style={{
        margin: 5,
        paddingTop: 10
      }}
        href='/'>Reset</a>
    </form>
  )
}

export default Search
