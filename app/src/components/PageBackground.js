import React from 'react';

const fourOhFourBackground = '/static/images/lost-luggage-airport-cyclicx-com.jpg';
const betaLoginBackground = '/static/images/beta-login-2880.jpg';
const airportSearchLandingPageImage = '/static/images/Airport-Conditions-Background.jpg';
const airportSearchLandingPageVideoWebm = '/static/images/Airport-Conditions-Background.webm';
const airportSearchLandingPageVideoMP4 = '/static/images/Airport-Conditions-Background.mp4';

class PageBackground extends React.Component {
  static propTypes = {
  };

  constructor(props, context) {
    super(props, context);
    this.state = { imageStatus: 'loading' };

    this.muiDefaultProps = {
      imageStyle : {
        position: 'fixed',
        marginTop: 'auto',
        marginLeft: 'auto',
        width: 'auto',
        height: 'auto',
        zIndex: -100,
        backgroundSize: 'cover',
      },
      videoStyle : {
        position: 'fixed',
        marginTop: 'auto',
        marginLeft: 'auto',
        minWidth: '100%',
        minHeight: '100%',
        width: 'auto',
        height: 'auto',
        zIndex: -100,
        backgroundSize: 'cover', 
      },
    };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }
 
  handleImageErrored() {
    this.setState({ imageStatus: 'failed' });
  }

  checkIfBackgroundImageLoaded() {
    let clear = false;
    if (!this.refs.backgroundImage) {
      clear = true;
    }
    else if (this.state.imageStatus !== 'loading') {
      clear = true;      
    }
    else if (imageLoaded(this.refs.backgroundImage)) {
      clear = true;
      this.setState({ imageStatus: 'loaded' });
    }

    if (clear) {
      clearInterval(this.imageLoadInterval);
      this.imageLoadInterval = null;
    }
  }
 
  render() {
    let backgroundImage = arrivalsDeparturesBackground;
    let showVideo = false;
    let mp4Video = null;
    let webmVideo = null;
    let componentClass = null;
    let videoStyle = this.muiDefaultProps.videoStyle;
    let imageStyle = this.muiDefaultProps.imageStyle;

    if (this.props.componentName) {
      if (this.props.componentName === 'FourOhFour') {
        backgroundImage = fourOhFourBackground;
        imageStyle = Object.assign(this.muiDefaultProps.imageStyle, 
        { minHeight: '100%',
          minWidth: '100%',
        });
      }
      else if (this.props.componentName === 'MultiFlight') {
        backgroundImage = multiFlightSearchResultsImage;
        imageStyle = Object.assign(this.muiDefaultProps.imageStyle, 
        { minHeight: '100%',
          minWidth: '100%',
        });
      }
      else if (this.props.componentName === 'AirportSearch') {
        showVideo = true;
        mp4Video = airportSearchLandingPageVideoMP4;
        webmVideo = airportSearchLandingPageVideoWebm;
        backgroundImage = airportSearchLandingPageImage;
        imageStyle = Object.assign(this.muiDefaultProps.imageStyle, 
        { minHeight: '100%',
          minWidth: '100%',
          right: 0,
        });
        videoStyle = Object.assign(this.muiDefaultProps.videoStyle, { right: 0, });
      }
      else if (this.props.componentName === 'DeparturesArrivalsLanding') {
        showVideo = true;
        mp4Video = depArrLandingPageVideoMP4;
        webmVideo = depArrLandingPageVideoWebM;
        backgroundImage = depArrLandingPageImage;
        imageStyle = Object.assign(this.muiDefaultProps.imageStyle, 
        { minHeight: '100%',
          minWidth: '100%',
        });
      }
      else if (this.props.componentName === 'UnifiedSearch' || this.props.componentName === 'AdvancedSearch') {
        showVideo = true;
        mp4Video = flightSearchLandingPageVideoMP4;
        webmVideo = flightSearchLandingPageVideoWebM;
        backgroundImage = flightSearchLandingPageImage;
        imageStyle = Object.assign(this.muiDefaultProps.imageStyle, 
        { minHeight: '100%',
          minWidth: '100%',
        });
      }
      else if (this.props.componentName === 'Login' 
                || this.props.componentName === 'ForgotPassword' 
                || this.props.componentName === 'Welcome'
                || this.props.componentName === 'SignUp'
                || this.props.componentName === 'SignUpPreferences' ) {
        backgroundImage = betaLoginBackground;
        componentClass = 'account-image';
      }
      if (__CLIENT__ &&
          showVideo &&
          this.props.mediaBreakpoint &&
          this.props.mediaBreakpoint.value > 500 &&
          (this.state.imageStatus === 'loaded' || this.state.imageStatus === 'failed')) {
        showVideo = true;
      }
      else {
        showVideo = false;
      }
    }

    const image = (
      <img
        ref='backgroundImage'
        key={`img-${backgroundImage}`}
        className={componentClass}
        style={imageStyle}
        src={backgroundImage}
        onLoad={__CLIENT__ ? this.handleImageLoaded.bind(this) : null}
        onError={this.handleImageErrored.bind(this)}
        id="fullscreen-background" />
    );

    let video = null;
    if (showVideo) {
      video = (
        <video
            key={`video-${backgroundImage}`}
            className='bg-video'
            style={videoStyle}
            autoPlay
            loop='loop'>
          <source src={mp4Video} type='video/mp4'/>
          <source src={webmVideo} type='video/webm'/>
          <img src={backgroundImage} />
        </video>
      );
    }

    return (
      <div>
        {image}
        {video}
      </div>
    );
  }

}

function imageLoaded(imgRef) {
  return (imgRef && imgRef.complete);
}

export default PageBackground;
