import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown/with-html'
import componentstyles from './details.css';
import {Helmet} from 'react-helmet';


class Details extends Component {

  render() {
    return (<div className="details--body">
      <Helmet>
        <title>details | {this.props.match.params.title}</title>
      </Helmet>
      <header className="details--header__bar section--white">
        <div className="details--header__content content--flex">

          <h1><a href={this.props.location.state.github}>{this.props.location.pathname}</a>

          </h1>

          
          <h1>{this.props.location.state.subtitle}</h1>
        </div>
      </header>

      <section className="details--image" style={{backgroundImage: 'url(' + `${this.props.location.state.pics}` + ')',}}>

      </section>

      <section className="details--tech section--white">
        <div className="content--flex">

          <h1>Technologies used</h1>
          <ul className="tech__list">
            {this.props.location.state.tech.map((item, _i) => <li className="tech__list--item" key={_i}>{item}</li>)}
          </ul>

        </div>
      </section>

      <section className="content--flex">

        <div className="blurb">
          <ReactMarkdown source={this.props.location.state.blurb} escapeHtml={false}/>

        </div>
      </section>


    </div>)
  }
}

export default Details
