import React, { Component } from 'react';
import componentstyles from './elektronique.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BackImage from '../static/elektro-BG.jpg';
import ElektroLogo from './ElektroLogo';

import Contact from './Contact';

import { Trail, animated } from 'react-spring';

const defaultStyles = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontFamily: 'Open Sans Condensed'
};

const backStyle = {
  background: `url(${BackImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'absolute',
  willChange: 'transform, opacity'
};

const headerStyle = {
  fontSize: '3em',
  color: 'white'
};

const NavLink = props => (
  <li>
    <Link
      {...props}
      style={{
        cursor: 'pointer'
      }}
    />
  </li>
);

const Pics = ({ style }) => (
  <animated.div
    style={{
      ...style,
      background: `#ef5350`
    }}
  >
    <div
      style={{
        height: '100vh',
        position: 'absolute',
        top: '0'
      }}
    >
      <h1>me!</h1>
    </div>
  </animated.div>
);

const items = [
  <Link
    to="/albums"
    className="elektro__item pics"
    onMouseOver={e =>
      toggleContent('.pics', 'The Taking of Pictures', 'my camera and me')
    }
    onMouseLeave={e =>
      toggleContent('.pics', 'The Taking of Pictures', 'my camera and me')
    }
  >
    The Taking of Pictures
  </Link>,
  <Link
    to="/food"
    className="elektro__item food"
    data="my laddle and me"
    onMouseOver={e =>
      toggleContent('.food', 'The Preparation of Food', 'my laddle and me')
    }
    onMouseLeave={e =>
      toggleContent('.food', 'The Preparation of Food', 'my laddle and me')
    }
  >
    The Preparation of Food
  </Link>,
  <Link
    to=""
    className="elektro__item gender"
    onMouseOver={e =>
      toggleContent(
        '.gender',
        'The Journey between Genders',
        'my big fat change'
      )
    }
    onMouseLeave={e =>
      toggleContent(
        '.gender',
        'The Journey between Genders',
        'my big fat change'
      )
    }
  >
    The Journey between Genders
  </Link>
];

function toggleContent(name, val, newVal) {
  if (document.querySelector(name).innerHTML === val) {
    document.querySelector(name).innerHTML = newVal;
  } else {
    document.querySelector(name).innerHTML = val;
  }
}

class ElektroNique extends Component {
  stop = e => {
    e.stopPropagation();
  };

  render() {
    return (
      <div
        style={{
          ...backStyle
        }}
      >
        <div
          style={{
            ...defaultStyles
          }}
        >
          <Helmet>
            <title>elektro-nique</title>
          </Helmet>
          <div className="elektro__container">
            <div className="elektro__list--container">
              <ul className="elektro__list">
                <Trail
                  delay={800}
                  native="native"
                  keys={items.map((_, i) => i)}
                  items={items}
                  from={{
                    opacity: 0,
                    transform: 'translate3d(0,-40px,0)'
                  }}
                  to={{
                    opacity: 1,
                    transform: 'translate3d(0,0,0)'
                  }}
                >
                  {item => props => (
                    <animated.li style={props}>{item}</animated.li>
                  )}
                </Trail>
              </ul>
            </div>
          </div>
          <div className="elektro__title">
            <Link to="/junkyard">
              <div className="logo logo__elektro">
                <ElektroLogo />
              </div>
            </Link>
          </div>
          <Contact />
        </div>
      </div>
    );
  }
}

export default ElektroNique;
