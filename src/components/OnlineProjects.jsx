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
    gradient: 'gears',
    tech: ['Vue JS', 'Tailwind CSS', 'Adonis JS'],
    pics:
      'https://images.unsplash.com/photo-1490529553037-4f4ed6f3f575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    blurb:
      'A recreation of Twitter where users can sign up, write posts, reply to posts, and favourite posts\n\n## Features\n- Adonis JS powered backend providing the API\n- VueJS powered clientside\n- Styled with Tailwind CSS'
  },
  {
    title: 'Bello',
    subtitle: 'Kanbans like Trello',
    link: '/details/bello',
    gradient: 'circuit',
    github: 'https://github.com/zee-german/',
    tech: ['Vue JS', 'Feathers JS'],
    pics: 'https://images.unsplash.com/photo-1524048824421-51d2958dc634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, laboriosam enim sunt saepe aliquid maiores placeat quam iste tempora doloribus iure quae, deleniti est qui veniam itaque omnis rem. Alias laudantium animi iusto deleniti consectetur, fugit quod. Assumenda, tenetur, nam?'
  },
  {
    title: 'Blog',
    subtitle: 'Reacts like a Wordpresser',
    link: '/details/blog',
    gradient: 'gears',
    tech: ['React JS', 'GraphQL'],
    blurb:
      '## Test header\n\n A GraphQL powered static site generator that will meet most realistic expectations of a modern Wordpress page.'
  },
  {
    title: 'Tea Timer',
    subtitle: 'homebrew not for macs',
    link: '/details/teatimer',
    gradient: 'gears',
    tech: ['Vue JS', 'Node JS'],
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde nostrum, facilis eos culpa fugiat at quaerat asperiores nam possimus sed illum qui labore. Commodi, voluptate cum reiciendis, quasi omnis maxime!'
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
        style={{ backgroundImage: 'url(' + `${pics}` + ')' }}
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
        <h1>{title}</h1>
        <h2 className="projects--subtitle">{subtitle}</h2>
        <p className="link__section">
          <Link
            to={{
              pathname: `${link}`,
              state: {
                subtitle: `${subtitle}`,
                tech,
                blurb,
                pics
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
