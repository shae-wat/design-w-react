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
        display: 'inline-block',
        width: '50px',
        height: '50px',
      },
      imgStyle: {
        width: '50px',
        height: '50px',
      },
      expandedImgStyle: {
        width: '60px',
        height: '60px',
      },
      labelStyle: {
        margin: 0,
        width: '100%',
        display: 'block',
        backgroundColor: 'black',
        color: 'white',
        padding: '3px',
        borderRadius: '8px',
        textAlign: 'center',
        textTransform: 'capitalize',
        zIndex: '20'
      },
    };
    this.state = {
      isExpanded: false,
      isSelected: false,
    };
  }

  _handleOnHover = () => {
    this.setState({isExpanded: true})
  }

  _handleOnHoverLeave = () => {
    this.setState({isExpanded: false})
  }

  render() {
    let label;
    if (this.state.isExpanded){
      label=(<p style={this.muiDefaultProps.labelStyle}>{this.props.rxnString}</p>);
    }

    return (
      <div style={this.muiDefaultProps.componentStyle}>
        {label}
        <img
          ref='backgroundImage'
          key={`img-${this.props.rxnString}`}
          onMouseOver={this._handleOnHover}
          onMouseLeave={this._handleOnHoverLeave}
          style={this.state.isExpanded ? this.muiDefaultProps.expandedImgStyle : this.muiDefaultProps.imgStyle}
          src={this.props.rxnImage}/>
      </div>
    )
  }
}

