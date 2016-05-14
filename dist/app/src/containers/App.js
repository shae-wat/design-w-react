'use strict';

var React = require('react');
var BaseComponent = require('../components/BaseComponent');

module.exports = React.createClass({ displayName: "exports",
  render: function render() {
    return React.createElement("div", null, React.createElement(BaseComponent, null));
  }
});