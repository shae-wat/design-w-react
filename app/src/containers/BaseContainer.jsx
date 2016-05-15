import React, { Component, PropTypes } from 'react';
import BaseComponent from '../components/BaseComponent.jsx';

// @connect(
//   state => ({
//     reactions: state.ui.availableReactions,
//   })
// )
export default class BaseContainer extends React.Component {
	static propTypes = {
    reactions: PropTypes.array,
  };

 	static defaultProps = {
    reactions: [
    	{rxn: "like", img: "static/images/like"},
    	{rxn: "love", img: "static/images/love"},
    	{rxn: "haha", img: "static/images/haha"},
    	{rxn: "wow", img: "static/images/wow"},
    	{rxn: "sad", img: "static/images/sad"},
    	{rxn: "angry", img: "static/images/angry"},
    ], 
  };
  
  render () {
    return (
    	<BaseComponent {...this.props}/>
  	);
  }
}
