import React from 'react';
import ReactDOM from 'react-dom';
import { Transition, animated } from 'react-spring';

import componentstyles from './mainpage.css';

import ElektroNique from './ElektroNique';
import JunkYard from './JunkYard';

const defaultStyle = {
  cursor: 'pointer',
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontWeight: 800,
  fontSize: '2em'
};

const pages = [
  style => (
    <animated.div
      style={{
        ...defaultStyle,
        ...style,
        backgroundColor: 'rgba(36, 123, 160, 0.3)'
      }}
    >
      <ElektroNique />
    </animated.div>
  ),
  style => (
    <animated.div
      style={{
        ...defaultStyle,
        ...style,
        backgroundColor: 'rgba(178, 219, 191, 0.3)'
      }}
    >
      <JunkYard />
    </animated.div>
  )
];

class MainPage extends React.PureComponent {
  state = { index: 0 };
  toggle = e => this.setState(state => ({ index: state.index === 0 ? 1 : 0 }));
  render() {
    return (
      <div onClick={this.toggle}>
        <Transition
          native
          reset
          unique
          items={this.state.index}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0, pointerEvents: 'none' }}
          // config={{ tension: 5, friction: 10 }}
        >
          {index => pages[index]}
        </Transition>
      </div>
    );
  }
}

export default MainPage;
