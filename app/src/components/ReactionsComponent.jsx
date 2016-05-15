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

  constructor(props, context) {
    super(props, context);

    this.muiDefaultProps = {
      componentStyle: {
        marginRight: 'auto',
        marginLeft: 'auto',
        padding: '10px',
        maxWidth: '300px',
        backgroundColor: 'white',
        border: '1px solid #81A2CA',
        borderRadius: '45px',
      },
    };
  }

  render() {

  	for (let rxn in this.props.reactions){
  		console.log('rxn', this.props.reactions[rxn])
  	}

    return (
      <div style={this.muiDefaultProps.componentStyle}>
        {this.props.reactions[0].rxn}
      </div>
    )
  }
}

