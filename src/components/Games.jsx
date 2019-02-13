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
};

const GamesData = [
  {
    title: 'Tetris',
    subtitle: 'block (de)building',
    link: '/details/tetris',
    tech: ['JS6', 'HTML5', 'Electron'],
    github: 'https://github.com/zee-german/electris',
    pics:
      'https://images.unsplash.com/photo-1513646981453-ffb069114476?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
    blurb:
      'A recreation of Tetris with featured added to pay homage to the technology of its heydays like monochrome monitors and CRT scanlines.\n## Features\n- progessively faster levels\n- scanline mode\n- monochrome mode\n- persistent highscores\n- '
  },
  {
    title: 'Name that Color',
    subtitle: 'web colour guessing game',
    link: '/details/colourfull',
    pics: 'https://images.unsplash.com/photo-1433888104365-77d8043c9615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    github: 'https://github.com/zee-german/',
    tech: ['JS6', 'HTML5'],
    blurb:
      "Ever wondered how many colours are defined by name in CSS? \nHere you get to guess them all! \nFor the insane there is a mode where we ask HEX-Code not the name.\n## Features\n- unlockable HEX-mode for the insane\n- history of the last guesses"
  },
  {
    title: 'Type-Type-R',
    subtitle: 'Hemmingway Simulator',
    link: '/details/type-type-r',
    pics: 'https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    github: 'https://github.com/zee-german/',
    tech: ['JS6', 'HTML5'],
    blurb:
      'Improve your typing speed with this little gem. Type against the clock and see how far you can get in this randomised novel.\n\nIf you feel frisky there is a NSFW mode included as well.\n\n## Features\n- The longer you type the faster it gets\n- Randomised sentences, no two are the same.'
  },
  {
    title: 'Asteroids',
    subtitle: 'Space Cleanup',
    link: '/details/asteroids',
    pics: 'https://images.unsplash.com/photo-1506703244717-0f4fb867779d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    github: 'https://github.com/zee-german/',
    tech: ['JS6', 'HTML5'],
    blurb:
      'Shoot space rocks into smaller space rocks, make sure no space rocks hit you. Fly outside the screen, see you on the other side of the screen again.\n\n## Features\n- The longer you survive the faster they get'
  }

];

const Page = ({
  offset,
  onPrev,
  onNext,
  maxNum,
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
      <title>junk | Games</title>
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
                github: `${github}`
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

class Games extends Component {
  scroll = to => this.refs.parallax.scrollTo(to);

  direction = num => (Math.max(num, GamesData.length) === num ? 0 : num);
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
            pages={Games.length}
            horizontal
            scrolling={false}
          >
            {GamesData.map((item, _i) => (
              <Page
                offset={_i}
                key={_i}
                maxNum={GamesData.length}
                onNext={() => {
                  this.scroll(this.direction(_i + 1));
                }}
                onPrev={() => {
                  this.scroll(this.direction(_i - 1));
                }}
                title={item.title}
                subtitle={item.subtitle}
                link={item.link}
                github={item.github}
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

export default Games;
