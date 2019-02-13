// Inspired by Corey Haggards "Screeners"
// https://dribbble.com/shots/4138489-Screeners

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom'
import {Parallax, ParallaxLayer} from 'react-spring/addons'
import componentStyles from './tools.css'

const defaultStyles = {
  height: '100vh',
  width: '100vw',
  // display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

const ToolsData = [
  {
    title: "Task Ninja",
    subtitle: "CLI ToDos",
    link: "/details/taskninja",
    github: "https://github.com/zee-german/taskninja",
    tech: ['Node JS'],
    pics: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80',
    blurb: "A todos manager on the commandline for powerusers to keep up to date without exiting the terminal.\n\## Features\n\n- Overview of all tasks\n- Sort by different parameters"
  },
  {
    title: "Weather",
    subtitle: "Forecast on your terminal",
    link: "/details/bello",
    tech: ['Node JS ', 'Openweather API'],
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis animi voluptatibus fugiat accusamus quos consequuntur consectetur dolore quidem, dolor, cumque non obcaecati ducimus accusantium nobis deserunt. Enim magni, quaerat sunt?'
  },
  {
    title: "Blog",
    subtitle: "Reacts like a Wordpresser",
    link: "/details/blog",
    tech: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum','Lorem ipsum dolores'],
    blurb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aperiam est odit cupiditate soluta itaque aut, laborum. Tempore impedit libero, veniam alias optio natus a consequatur, quasi perspiciatis, corporis, voluptatum.'
  }
]

const Page = ({
  offset,
  onPrev,
  onNext,
  title,
  subtitle,
  maxNum,
  link,
  tech,
  blurb,
  github,
  pics
}) => (<React.Fragment>
  <Helmet>
    <title>junk | Tools</title>
  </Helmet>
  <ParallaxLayer offset={offset} speed={0.2}>
    <div className="toolslopeBegin"/>
  </ParallaxLayer>

  <ParallaxLayer offset={offset} speed={0.6}>
    <div className='toolslopeEnd' style={{backgroundImage: 'url(' + `${pics}` + ')',}}/>
  </ParallaxLayer>

  <ParallaxLayer className="tooltext number" offset={offset} speed={0.3}>
    <span className="number__block--tools">{offset + 1}</span>
  </ParallaxLayer>

  <ParallaxLayer
    offset={offset}
    speed={2}
  >
    <div className="nav__buttons">
      <div className="nav prev" onClick={onPrev}>
        {offset > 0 && <a onClick={onPrev}>prev</a>}
      </div>
      <div className="nav next">
        <a onClick={onNext}>{offset == maxNum-1 ? 'first' : 'next'}</a>
      </div>
    </div>
  </ParallaxLayer>

  <ParallaxLayer className="tooltext title" offset={offset} speed={0.4}>
    <div className="tooltext__container">
      <h1 className="projects--title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
      <p className="link__section">
        <Link to={{
          pathname: `${link}`,
          state: {
            subtitle: `${subtitle}`,
            tech,
            blurb,
            github,
            pics
          }
        }} className="linky">
          see more...
        </Link>
      </p>

    </div>
  </ParallaxLayer>
</React.Fragment>
)



class Projects extends Component {
  scroll = to => this.refs.parallax.scrollTo(to)

    direction = num => (Math.max(num, ToolsData.length) === num ? 0 : num)
  render() {

    return (<div style={{
        ...defaultStyles
    }}>
      <div style={{
          background: '#dfdfdf'
      }}>
        <Parallax
          className="container"
          ref="parallax"
          pages={Projects.length}
          horizontal
          scrolling={false}>
          {ToolsData.map((item, _i) =>


            <Page
              offset={_i}
              key={_i}
              maxNum={ToolsData.length}
              onNext={() => {
                this.scroll(this.direction(_i + 1));
              }}
              onPrev={() => {
                this.scroll(this.direction(_i - 1));
              }}
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
              tech={item.tech}
              blurb={item.blurb}
              github={item.github}
              pics={item.pics}
            />
          )}

      </Parallax>
      </div>
    </div>)
  }
}

export default Projects
