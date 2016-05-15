import React from 'react';
import {render} from 'react-dom';

class BaseComponent extends React.Component {

  render () {
  	console.log('BaseComponent this.props', this.props)
    return (
    	<p>BaseComponent!!</p>
  	);
  }
}

export default BaseComponent;
