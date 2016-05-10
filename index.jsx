var http = require('http')
var React = require('react')
var ReactDom = require('react-dom/server')
 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(
    ReactDom.renderToString(
      <html>
        <head>
          <title>Hello World</title>
        </head>
        <body>
          index.jsx compiled into index.js by hand on the server
        </body>
      </html>
    )
  )
}).listen(1337)
console.log('Server running at http://localhost:1337/')