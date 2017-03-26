import React from 'react'

const Form = (props) => {
  let character, quotes
  if (props.data) {
    character = props.data.character || ''
    quotes = props.data.quotes || ''
  }
  return (
    <form {...props}>
      <input
        type='text'
        placeholder='character'
        name='character'
        defaultValue={character} />
      <textarea
        placeholder='quotes...'
        name='quotes' defaultValue={quotes} />
      <button type='submit'>{props.type}</button>
    </form>
  )
}

export default Form
