import React, {Component} from 'react'
import { Helmet } from 'react-helmet'
import {Link} from 'react-router-dom'
import componentstyles from './oops.css'

class Oops extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>not found</title>
        </Helmet>
        <main className="oops">
          <h1 className="oops__header">Well...</h1>
          <h2 className="oops__subtitle">Someone broke something</h2>
          <Link to="/" className="oops__button">Bring me home</Link>
        </main>
      </React.Fragment>
    )
  }
}

export default Oops
