import * as React from "react"

module.exports = (data) => {
  return (
    <html>
      <head>
        {data.headComponents}
        <title>Test</title>
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: data.body }} />
      </body>
    </html>
  )
}
