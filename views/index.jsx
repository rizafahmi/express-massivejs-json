import React from 'react'

import Layout from './Layout.jsx'
import Form from './Form.jsx'
import Search from './Search.jsx'

const IndexComponent = (props) => {
  return (
    <Layout title={'Index'}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1>List of Quotes</h1>
        <Search term={props.term} />
        <ul>
          {props.quotes.map((quote, index) => {
            return (
              <li key={index}>{quote.quotes} --
              <small>{quote.character}</small>(
              <a href={`/quotes/${quote.id}/edit`}>Edit</a>&nbsp;
                <a
                  id='delete'
                  href={`/quotes/${quote.id}/delete`}>Delete</a>
               )
            </li>
            )
          })}
        </ul>
        <hr />
        <Form method='POST' action='/quotes' type='Save' />
      </div>
    </Layout>
  )
}

module.exports = IndexComponent
