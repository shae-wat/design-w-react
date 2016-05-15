import React from 'react';
import {render} from 'react-dom';
import BaseContainer from './containers/BaseContainer.jsx';

class App extends React.Component {
  render () {
    return (
    	<BaseContainer />
  	);
  }
}

render(<App/>, document.getElementById('app'));