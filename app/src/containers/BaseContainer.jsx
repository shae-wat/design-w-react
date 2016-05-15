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
    	{rxn: "like", img: "../static/images/like.png"},
    	{rxn: "love", img: "../static/images/love.png"},
    	{rxn: "haha", img: "../static/images/haha.png"},
    	{rxn: "wow", img: "../static/images/wow.png"},
    	{rxn: "sad", img: "../static/images/sad.png"},
    	{rxn: "angry", img: "../static/images/angry.png"},
    ], 
  };
  
  render () {
    return (
    	<BaseComponent {...this.props}/>
  	);
  }
}
