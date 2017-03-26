import React from 'react'

import Layout from './layout.jsx'

const IndexComponent = (props) => {
  return (
    <Layout title={props.name.toUpperCase()}>
      <div>Hello {props.name}</div>
      <form method='POST' action='/quotes'>
        <input type='text' placeholder='character' name='character' />
        <textarea placeholder='quotes...' name='quotes' />
        <button type='submit'>Save</button>
      </form>
    </Layout>
  )
}

module.exports = IndexComponent
