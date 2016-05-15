import React from 'react';
import ReactionsComponent from './ReactionsComponent.jsx';

class BaseComponent extends React.Component {

	constructor(props, context) {
    super(props, context);

    this.muiDefaultProps = {
      backgroundStyle: {
        margin: '15px',
        height: '400px',
        backgroundColor: '#E6E6E6',
        borderRight: '5px solid #81A2CA',
        borderBottom: '5px solid #81A2CA'
      },
    };
  }

  render () {
  	console.log('BaseComponent this.props', this.props)
    return (
    	<div style={this.muiDefaultProps.backgroundStyle}>
    		<ReactionsComponent />
    	</div>
  	);
  }
}

export default BaseComponent;
