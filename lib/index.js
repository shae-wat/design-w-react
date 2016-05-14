var http = require('http')
var React = require('react')
var ReactDom = require('react-dom/server')
var App = require('./app/src/containers/App')
 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(
    ReactDom.renderToString(
      React.createElement("html", null, 
        React.createElement("head", null, 
          React.createElement("title", null, "Design w React")
        ), 
        React.createElement("body", null, 
          React.createElement(App, null)
        )
      )
    )
  )
}).listen(8000)
console.log('Server running at http://localhost:8000/')