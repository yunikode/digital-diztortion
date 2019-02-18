import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import './online-projects.css';

const defaultStyles = {
  height: '100vh',
  width: '100vw',
  // display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontFamily: 'Kausha Script'
};

const ProjectsData = [
  {
    title: 'Billboard',
    subtitle: 'Tweets like a duck',
    link: '/details/billboard',
    github: 'https://github.com/zee-german/billboard',
    tech: ['Vue JS', 'Tailwind CSS', 'Adonis JS'],
    pics:
      ['https://images.unsplash.com/photo-1490529553037-4f4ed6f3f575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'https://c1.staticflickr.com/8/7915/40146772663_4f4cf3c496_b.jpg', 'https://c1.staticflickr.com/8/7845/47111432011_7a0a2eb68c_b.jpg', 'https://c1.staticflickr.com/8/7908/40146772593_014e8ae0ae_b.jpg', 'https://c1.staticflickr.com/8/7836/47111431931_5887a6d4b0_b.jpg', 'https://c1.staticflickr.com/8/7877/47111432071_e373f1fba9_b.jpg'],
    blurb:
      'A recreation of Twitter where users can sign up, write posts, reply to posts, and favourite posts\n\n## Features\n- Adonis JS powered backend providing the API\n- VueJS powered clientside\n- Styled with Tailwind CSS'
  },
  {
    title: 'Bello',
    subtitle: 'Kanbans like Trello',
    link: '/details/bello',
    github: 'https://github.com/zee-german/bello',
    tech: ['Vue JS', 'Feathers JS'],
    pics: ['https://images.unsplash.com/photo-1524048824421-51d2958dc634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'https://c1.staticflickr.com/8/7915/40146772353_10526e02e7_b.jpg', 'https://c1.staticflickr.com/8/7882/47111431861_c302af0a8f_b.jpg', 'https://c1.staticflickr.com/8/7903/40146772543_039e5e0b1c_b.jpg'],
    blurb:
      'A recreation of a Kanban where users can sign up, create projects, make lists, create and move posts\n\n## Features\n- Feathers JS powered backend providing the API\n- VueX powered clientside\n- Styled with Vuetify'
  },
  {
    title: 'Blog',
    subtitle: 'Reacts like a Wordpresser',
    link: '/details/blog',
    tech: ['Gatsby JS', 'React JS', 'GraphQL'],
    github: 'https://github.com/zee-german/gatsby-junkyard',
    pics: ['https://images.unsplash.com/photo-1461958508236-9a742665a0d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', 'https://c1.staticflickr.com/8/7920/33257567168_5925e29c9a_b.jpg', 'https://c1.staticflickr.com/8/7806/33257567078_2625378491_b.jpg', 'https://c1.staticflickr.com/8/7824/46218841705_0b72d6e51e_b.jpg', 'https://c1.staticflickr.com/8/7835/40167983183_4a762f72ae_b.jpg'],
    blurb:
      'A React powered static site generator that will meet most realistic expectations of a modern Wordpress page.\n## Features\n- GraphQL queries on creation of the pages\n- React powered features\n- ServerSideRendering'
  },
  {
    title: 'Tea Timer',
    subtitle: 'homebrew not for macs',
    link: '/details/teatimer',
    tech: ['Vue JS', 'Node JS'],
    github: 'https://github.com/zee-german/tea-timer',
    pics: ['https://images.unsplash.com/photo-1491720731493-223f97d92c21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1230&q=80', 'https://c1.staticflickr.com/8/7806/46409419254_50424fed60_b.jpg', 'https://c1.staticflickr.com/8/7895/46409419314_03d50047c3_b.jpg', 'https://c1.staticflickr.com/8/7809/46409419354_05e68c72af_b.jpg'],
    blurb:
      'Easy to use tea-timer. Select your tea from an easy to use menu and wait for the bell to ring.\n ## Features\n- easy to use interface\n- persistent database\n- add new teas with a click'
  }
];

const Page = ({
  offset,
  maxNum,
  gradient,
  onNext,
  onPrev,
  title,
  subtitle,
  github,
  link,
  tech,
  blurb,
  pics
}) => (
  <React.Fragment>
    <Helmet>
      <title>junk | Projects</title>
    </Helmet>
    <ParallaxLayer offset={offset} speed={0.2}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6}>
      <div
        className="slopeEnd"
        style={{ backgroundImage: 'url(' + `${pics[0]}` + ')' }}
      />
    </ParallaxLayer>

    <ParallaxLayer
      className="text projects--number"
      offset={offset}
      speed={0.3}
    >
      <span className="number__block">{offset + 1}</span>
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

    <ParallaxLayer className="text title" offset={offset} speed={0.4}>
      <div className="text__container">
        <h1 className="projects--title">{title}</h1>
        <h2 className="projects--subtitle">{subtitle}</h2>
        <p className="link__section">
          <Link
            to={{
              pathname: `${link}`,
              state: {
                subtitle: `${subtitle}`,
                tech,
                blurb,
                pics,
                github: `${github}`,
              }
            }}
            className="linky"
          >
            see more...
          </Link>
        </p>
      </div>
    </ParallaxLayer>
  </React.Fragment>
);

class Projects extends Component {
  scroll = to => this.refs.parallax.scrollTo(to);

  direction = num => (Math.max(num, ProjectsData.length) === num ? 0 : num);
  render() {
    return (
      <div
        style={{
          ...defaultStyles
        }}
      >
        <div
          style={{
            background: '#dfdfdf'
          }}
        >
          <Parallax
            className="container"
            ref="parallax"
            pages={Projects.length}
            horizontal
            scrolling={false}
          >
            {ProjectsData.map((item, _i) => (
              <Page
                offset={_i}
                maxNum={ProjectsData.length}
                key={_i}
                gradient={item.gradient}
                onNext={() => {
                  this.scroll(this.direction(_i + 1));
                }}
                onPrev={() => {
                  this.scroll(this.direction(_i - 1));
                }}
                title={item.title}
                subtitle={item.subtitle}
                github={item.github}
                link={item.link}
                tech={item.tech}
                blurb={item.blurb}
                pics={item.pics}
              />
            ))}
          </Parallax>
        </div>
      </div>
    );
  }
}

export default Projects;
