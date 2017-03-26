import React from 'react'

import Layout from './Layout.jsx'
import Form from './Form.jsx'

const IndexComponent = (props) => {
  return (
    <Layout title={'Index'}>
      <Form method='POST' action='/quotes' type='Save' />
      <ul>
        {props.quotes.map((quote, index) => {
          return (
            <li key={index}>{quote.quotes} --
              <small>{quote.character}</small>(
              <a href={`/quotes/${quote.id}/edit`}>Edit</a>
               )
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

module.exports = IndexComponent
