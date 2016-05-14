'use strict';

var React = require('react');
var ReactionsComponent = require('./ReactionsComponent');

module.exports = React.createClass({ displayName: "exports",
  render: function render() {
    return React.createElement("div", null, "Base Component!", React.createElement(ReactionsComponent, null));
  }
});