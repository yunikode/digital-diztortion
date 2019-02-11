import React, {Component} from 'react'
import Helmet from 'react-helmet'

class Journey extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Coming Soon</title>
        </Helmet>
        <main className="coming__body">
          <h1 className="coming__body--title">Coming Soon</h1>
        </main>
      </React.Fragment>
    )
  }
}

export default Journey
