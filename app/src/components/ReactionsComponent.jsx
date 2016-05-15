var React = require('react')

export default class ReactionsComponent extends React.Component {
	static propTypes = {
    reactions: React.PropTypes.array,
  };

  static defaultProps = {
    reactions: [
    	{rxn: "like", img: "static/images/like"},
    ],
  };

  render() {
    return (
      <div>
        Reactions Component!**
      </div>
    )
  }
}

