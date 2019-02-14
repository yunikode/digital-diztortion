import React, {Component} from 'react'
import componentstyles from './contact.css'

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontFamily: 'Open Sans Condensed'
}

class Contact extends Component {
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    Math.round(Math.random()) === 1
      ? document.querySelector('.contact__box').classList.toggle('animate')
      : ''
  }

  showContact() {
    if (document.querySelector('.contact__big').classList.contains('hidden'))
    document.querySelector('.contact__big').classList.remove('hidden')
    if (!document.querySelector('.contact__big').classList.contains('shown'))
    document.querySelector('.contact__big').classList.add('shown')
  }

  hideContact() {
    if (!document.querySelector('.contact__big').classList.contains('hidden'))
    document.querySelector('.contact__big').classList.add('hidden')
    if (document.querySelector('.contact__big').classList.contains('shown'))
    document.querySelector('.contact__big').classList.remove('shown')
  }

  render() {
    return (
      <div style={{...style}}>
        <div className="contact__box">
          <p className="contact__text" onMouseOver={() => this.showContact()}>about me</p>
        </div>
        <div className="contact__big hidden" onMouseLeave={() => this.hideContact()} onClick={() => this.hideContact()}>
          <h1 className="contact__header">Hi, I'm zee-german</h1>
          <p className="contact__text--main">I'm a gender queer jane of all trades<br/>
            I like to fix things and make things pretty<br/>I am the queen of improvisation<br/>I speak <span className="contact__text--link">German</span> and <span className="contact__text--link">English</span> fluently<br/>Currently you can find me in <span className="contact__text--link">Berlin</span><br/>
            You can download my CV <a href="/cv.pdf"  className="contact__text--link font">here</a></p>
        </div>
      </div>
    )
  }
}

export default Contact
