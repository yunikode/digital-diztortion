import React from 'react';
import { render } from 'react-dom';
import Page from './components/Page';
import './main.css';

const App = () => (
  <div>
    <Page />
  </div>
);

render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept;
}
