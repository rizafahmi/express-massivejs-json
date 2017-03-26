import React from 'react'

import Layout from './layout.jsx'

const IndexComponent = (props) => {
  return (
    <Layout title={'Index'}>
      <form method='POST' action='/quotes'>
        <input type='text' placeholder='character' name='character' />
        <textarea placeholder='quotes...' name='quotes' />
        <button type='submit'>Save</button>
      </form>
      <ul>
        {props.quotes.map((quote, index) => {
          return (
            <li key={index}>{quote.quotes} --
              <small>{quote.character}</small>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

module.exports = IndexComponent
