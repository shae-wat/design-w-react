var http = require('http')
var React = require('react')
var ReactDom = require('react-dom/server')
var App = require('./src/containers/App')

 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(
    ReactDom.renderToString(
      <html>
        <head>
          <title>Design w React</title>
        </head>
        <body>
          <App />
        </body>
      </html>
    )
  )
}).listen(8000)
console.log('Server running at http://localhost:8000/')