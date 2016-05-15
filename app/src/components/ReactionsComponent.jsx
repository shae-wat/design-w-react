var React = require('react')
import ReactionComponent from './ReactionComponent';

export default class ReactionsComponent extends React.Component {
	static propTypes = {
    reactions: React.PropTypes.array,
  };

  static defaultProps = {
    reactions: null,
  };

  constructor(props) {
    super(props);

    this.muiDefaultProps = {
      componentStyle: {
        marginRight: 'auto',
        marginLeft: 'auto',
        padding: '10px',
        maxWidth: '300px',
        backgroundColor: 'white',
        border: '1px solid #81A2CA',
        borderRadius: '45px',
        display: 'block',
      },
    };
  }

  render() {

  	let reactionComponents = [];
  	for (let rxn in this.props.reactions){
  		console.log('rxn', this.props.reactions[rxn])
  		reactionComponents.push(
  			<ReactionComponent 
  				key={`rxncomponent-${this.props.reactions[rxn].rxn}`}
        	rxnString={this.props.reactions[rxn].rxn} 
        	rxnImage={this.props.reactions[rxn].img} />
			);
  	}

    return (
      <div style={this.muiDefaultProps.componentStyle}>
        {reactionComponents}
      </div>
    )
  }
}

