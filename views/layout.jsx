import React from 'react'

const Layout = (props) => {
  return (
    <html>
      <head>
        <title>{props.title}</title>
      </head>
      <body style={{margin: 20}}>{props.children}</body>
    </html>
  )
}

export default Layout
