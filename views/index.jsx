import React from 'react'

import Layout from './layout.jsx'

const IndexComponent = (props) => {
  return (
    <Layout title={props.name.toUpperCase()}>
      <div>Hello {props.name}</div>
    </Layout>
  )
}

module.exports = IndexComponent
