import React from 'react'

const Layout = (props) => {
  return (
    <html>
      <head>
        <title>{props.title}</title>
      </head>
      <body>{props.children}</body>
    </html>
  )
}

export default Layout
