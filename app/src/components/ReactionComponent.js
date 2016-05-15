var React = require('react')

export default class ReactionComponent extends React.Component {
	static propTypes = {
    rxnString: React.PropTypes.string,
    rxnImage: React.PropTypes.string,
  };

  static defaultProps = {
    rxnString: null,
    rxnImage: null,
  };

  constructor(props) {
    super(props);
    this.muiDefaultProps = {
      componentStyle: {
        margin: 0,
        display: 'inline',
      },
      imgStyle: {
        width: '50px',
        height: '50px',
      },
    };
  }

  render() {
    return (
      <div style={this.muiDefaultProps.componentStyle}>
        <img
          ref='backgroundImage'
          key={`img-${this.props.rxnString}`}
          style={this.muiDefaultProps.imgStyle}
          src={this.props.rxnImage}/>
      </div>
    )
  }
}

