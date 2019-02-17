import React from 'react';
import Helmet from 'react-helmet';
import Masonry from 'react-masonry-css';
import {Link} from 'react-router-dom';
import componentstyles from './albums.css';
import Gallery from './Gallery';

const backStyle = {
  height: '100vh',
  width: '100vw',
  willChange: 'opacity'
}

const Ottawa = [
  {
    src: 'https://farm5.staticflickr.com/4834/45876045765_539a0d94bf_b.jpg',
    width: 4,
    height: 3
  }, {
    src: 'https://farm5.staticflickr.com/4838/45876046655_e83b670ef7_o.jpg',
    width: 4,
    height: 3
  }, {
    src: 'https://farm8.staticflickr.com/7813/39825926373_f8277a5d5d_o.jpg',
    width: 3,
    height: 4
  }, {
    src: 'https://farm8.staticflickr.com/7849/39825921703_9265c8e8c6_o.jpg',
    width: 4,
    height: 3
  }, {
    src: 'https://farm5.staticflickr.com/4858/46066339544_8b8b73dc9f_o.jpg',
    width: 4,
    height: 3
  }, {
    src: 'https://farm8.staticflickr.com/7911/39825912043_ac3e7f32a2_b.jpg',
    width: 3,
    height: 4
  }
];

const Montreal = [
  {
    src: 'https://farm5.staticflickr.com/4869/46738747762_daf4477b5d_b.jpg',
    width: 3,
    height: 4
  }, {
    src: 'https://farm5.staticflickr.com/4886/31849725507_75958a46f1_b.jpg',
    width: 4,
    height: 3
  }, {
    src: 'https://farm8.staticflickr.com/7868/46791358461_77f274e089_b.jpg',
    width: 3,
    height: 4
  }, {
    src: 'https://farm8.staticflickr.com/7857/45876160215_0334c032a7_b.jpg',
    width: 4,
    height: 3
  }, {
    src: 'https://farm8.staticflickr.com/7915/46738719042_ba0500d4c8_b.jpg',
    width: 4,
    height: 3
  }, {
    src: 'https://farm5.staticflickr.com/4907/46738731612_1ae124d714_b.jpg',
    width: 4,
    height: 3
  }
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

class Albums extends React.Component {
  render() {
    return (<div style={{
        ...backStyle
      }}>
      <div className="albums">
        <Helmet>
          <title>e-niq | Albums</title>
        </Helmet>
        <div className="albums--header">
          <h2>
            <Link to="/elektronique">A Selection of Pictures</Link>
          </h2>
        </div>
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          <Link to={{
              pathname: '/albums/gallery/ottawa',
              state: {
                photos: Ottawa
              }
            }} className="gallery--link">
            <div className="gallery--link__container">
              <img className="gallery--link__pic" src={Ottawa[0].src} alt=""/>
              <div className="gallery--link__item">Ottawa</div>
            </div>
          </Link>
          <Link to={{
              pathname: '/albums/gallery/montreal',
              state: {
                photos: Montreal
              }
            }}>
            <div className="gallery--link__container">
              <img className="gallery--link__pic" src={Montreal[0].src} alt=""/>
              <div className="gallery--link__item">Montreal</div>
            </div>
          </Link>

        </Masonry>
      </div>
    </div>);
  }
}

export default Albums;
