import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import {Transition, config, animated} from 'react-spring';

import '../components/mainpage.css';

import JunkYard from '../components/JunkYard';
import ElektroNique from '../components/ElektroNique';
import Projects from '../components/OnlineProjects'
import Details from '../components/Details'
import Tools from '../components/Tools'
import Albums from '../components/Albums'
import Gallery from '../components/Gallery'
import Games from '../components/Games'
import Food from '../components/Food'
import Journey from '../components/Journey'
import Oops from '../components/Oops'

const Page = () => (
  <Router>
    <Route render={({
      location,
      ...rest
    }) => (<div className="fill">

      <div className="content">
        <Transition native="native" reset="reset" unique="unique" initial={{
            opacity: 1,
            transform: 'translate3d(0%,0,0)'
        }} items={location} keys={location.pathname.split('/').filter(a => a)[0]} from={{
            opacity: 0,
            transform: 'translate3d(100%,0,0)'
        }} enter={{
            opacity: 1,
            transform: 'translate3d(0%,0,0)'
        }} leave={{
            opacity: 0,
            transform: 'translate3d(-50%,0,0)'
        }}>
          {
            location => style => (<animated.div style={{
                ...style
            }}>
              <Switch location={location}>
                <Route exact path="/" component={JunkYard}/>
                <Route path="/elektronique" component={ElektroNique}/>
                <Route path="/junkyard" component={JunkYard}/>
                <Route exact path="/albums" component={Albums}/>
                <Route path="/albums/gallery/:title" component={Gallery}/>
                <Route exact path="/projects" component={Projects}/>
                <Route path="/details/:title" component={Details} />
                <Route exact path="/tools" component={Tools}/>
                <Route exact path="/games" component={Games}/>
                <Route exact path="/food" component={Food}/>
                <Route exact path="/journey" component={Journey}/>
                <Route component={Oops} />

              </Switch>
            </animated.div>)
          }
        </Transition>
      </div>
    </div>)}/>
  </Router>);

export default Page;
