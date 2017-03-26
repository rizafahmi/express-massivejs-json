import React from 'react'

import Form from './Form.jsx'

const update = (props) => {
  return (
    <div>
      <h2>Update</h2>
      <Form action={`/quotes/${props.data.id}/edit`} method='POST' type='Update' data={props.data} />
      <a href='/'>Back</a>
    </div>
  )
}

export default update
