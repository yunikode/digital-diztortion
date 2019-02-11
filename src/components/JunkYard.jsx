import React, {Component} from 'react';
import componentstyles from './junkyard.css';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import BackImage from '../static/junk-BG.jpg';
// import TextAnimations from '../utils/text-animation'
import JunkLogo from './JunkLogo';

import Contact from './Contact'

import {Trail, animated} from 'react-spring';

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
}

const headerStyle = {
  fontFamily: 'Open Sans Condensed',
  color: 'white',
  fontSize: '5em'
};

const items = [
  <Link to="/projects" className="projects">projects</Link>,
  <Link to="/tools" className="tools">tools (CLI)</Link>,
  <Link to="/games" className="cheatsheets">games</Link>,
  <a href="https://github.com/zee-german/digital-diztortion" className="behind">behind the (web)pages</a>,
  <a href="https://github.com/zee-german" target="_blank" rel="noopener" className="github">find me on github</a>

];

class JunkYard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div style={{
        ...backStyle
    }}>
      <div style={{
          ...defaultStyles
      }}>
        <Helmet>
          <title>junkYard</title>
        </Helmet>
        <Link to="/elektronique">
          <div className="logo logo__junk">
            <JunkLogo/>
          </div>
        </Link>
        <div className="junk__container">
          <ul className="junk__list">
            <Trail delay={1000} native="native" keys={items.map((_, i) => i)} items={items} from={{
                opacity: 0,
                transform: 'translate3d(0,100px,0)'
            }} to={{
                opacity: 1,
                transform: 'translate3d(0,0px,0)'
            }} onRest={() => document.querySelector('.junk__list').classList.add('junk__list--border')}>
              {
                item => props => (<animated.li style={props} className="junk__item">
                  {item}
                </animated.li>)
              }
            </Trail>
          </ul>
        </div>
        <Contact/>
      </div>
    </div>);
  }
}

export default JunkYard;
