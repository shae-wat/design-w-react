import React from 'react';
import {render} from 'react-dom';
import BaseComponent from '../components/BaseComponent.jsx';

// @connect(
//   state => ({
//     error: state.airport.error,
//     loading: state.airport.loading,
//     loaded: state.airport.loaded,
//   })
// )
export default class BaseContainer extends React.Component {
	// static propTypes = {
 //    reactions: PropTypes.array,
 //  };

 	// static defaultProps = {
  //   reactions: null
  // };
  
  constructor(props) {
    super(props);

    this.muiDefaultProps = {
      statusTextStyle: {
        margin: 0,
        padding: '5px',
        fontSize: '35px',
        verticalAlign: 'middle',
      },
      maxHeight: 700,
      autoWidth: true,
    };
  }

  render () {
    return (
    	<BaseComponent {...this.props}/>
  	);
  }
}
