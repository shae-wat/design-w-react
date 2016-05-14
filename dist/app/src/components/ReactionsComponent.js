"use strict";

var React = require('react');

//export default class ReactionsComponent extends React.Component {
module.exports = React.createClass({ displayName: "exports",
  // static propTypes = {
  //    reactions: React.PropTypes.array,
  //  };

  //  static defaultProps = {
  //    reactions: [
  //    	{rxn: ‘like’, img: ‘static/images/rxns/like’},
  //    	{rxn: ‘love’, img: ‘static/images/rxns/love’},
  //    	{rxn: ‘haha’, img: ‘static/images/rxns/haha’},
  //    	{rxn: ‘wow’, img: ‘static/images/rxns/wow’},
  //    	{rxn: ‘sad’, img: ‘static/images/rxns/sad’},
  //    	{rxn: ‘angry’, img: ‘static/images/rxns/angry’},
  //    ],
  //  };

  render: function render() {
    return React.createElement("div", null, "Reactions Component!``");
  }
});
//}