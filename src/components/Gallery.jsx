import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import componentstyles from './gallery.css';
import Helmet from 'react-helmet'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

const theme = {
  // container
  container: {
    background: 'rgba(255, 255, 255, 0.9)'
  },

  // arrows
  arrow: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fill: '#222',
    opacity: 0.6,
    transition: 'opacity 200ms',

    ':hover': {
      opacity: 1
    }
  },
  arrow__size__medium: {
    borderRadius: 40,
    height: 40,
    marginTop: -20,

    '@media (min-width: 768px)': {
      height: 70,
      padding: 15
    }
  },
  arrow__direction__left: {
    marginLeft: 10
  },
  arrow__direction__right: {
    marginRight: 10
  },
  close: {
    fill: '#D40000',
    opacity: 0.6,
    transition: 'all 200ms',
    ':hover': {
      opacity: 1
    }
  },

  // footer
  footer: {
    color: 'black'
  },
  footerCount: {
    color: 'rgba(0, 0, 0, 0.6)'
  },

  // thumbnails
  thumbnail: {},
  thumbnail__active: {
    boxShadow: '0 0 0 2px #00D8FF'
  }
};

const navbar = {
  textAlign: 'center',
  color: 'white',
}

const navLink = {
  fontFamily: 'IM Fell English',
  fontSize: '2em',
  margin: '0.3em',
  padding: '0.5em',
  fontWeight: 'bold'
}

class NewGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      loading: true
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({currentImage: obj.index, lightboxIsOpen: true});
  }
  closeLightbox() {
    this.setState({currentImage: 0, lightboxIsOpen: false});
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  render() {
    return (<div>
      <Helmet>
        <title>gallery | {this.props.match.params.title}</title>
      </Helmet>
      <div style={{...navbar}}>
        <div style={{...navLink}}><Link to="/albums">Back</Link></div>

      </div>
      <Gallery direction={"column"} photos={this.props.location.state.photos} onClick={this.openLightbox} className="gallery"
      />
      <Lightbox images={this.props.location.state.photos} theme={theme} onClose={this.closeLightbox} onClickPrev={this.gotoPrevious} onClickNext={this.gotoNext} currentImage={this.state.currentImage} isOpen={this.state.lightboxIsOpen}
      />
    </div>)
  }
}

export default NewGallery
