import React from 'react'

const Form = (props) => {
  let character, quotes
  if (props.data) {
    character = props.data.character || ''
    quotes = props.data.quotes || ''
  }
  return (
    <form {...props} style={{
      display: 'flex',
      flexDirection: 'column',
      margin: 20,
      width: 600
    }}>
      <input
        type='text'
        placeholder='character'
        name='character'
        style={{margin: 2, padding: 10}}
        defaultValue={character} />
      <textarea
        placeholder='quotes...'
        multiline
        rows={4}
        style={{margin: 2, padding: 10, border: '1px solid #cacaca'}}
        name='quotes' defaultValue={quotes} />
      <button
        style={{margin: 2, padding: 10, backgroundColor: 'mediumaquamarine', border: 0}}
        type='submit'>{props.type}</button>
    </form>
  )
}

export default Form
