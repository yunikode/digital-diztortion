import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import componentstyles from './food.css';

const headerStyle = {
  fontFamily: 'IM Fell English',
  color: 'white'
};

class Food extends Component {

  scrollToRef = (event) => {
    event.preventDefault()
    document.querySelector('.food--section').scrollIntoView({block: "start", behaviour: "smooth"})
  }

  render() {
    return (<React.Fragment>
      <Helmet>
        <title>e-niq | food</title>
      </Helmet>
      <main className="food--main">

        <div className="header" style={{
            ...headerStyle
        }}>
          <div className="header__title--box">
            <h1 className="header__title">The Preparation of Foods</h1>
            <span className="header__subtitle">a selection of tips and tricks for kitchen magic</span>
          </div>
          <div className="fromTop">
            <span className="arrow" onClick={this.scrollToRef}>&lt;&lt;</span>
          </div>
        </div>

        <section className="food--section">
          <div className="food--container">
            <h1>Vegan Replacements</h1>
            <p>Here are some common replacements for going vegan when the receipe calls for something non-vegan.</p>
            <h2>Dairy Products</h2>
            <p>
              <strong>Milk</strong>
            - Soymilk or Oatmilk are the best alternatives from my experience when it comes to replace milk, depending on how strong the other flavours are Soy can be a bit problematic with its Vanilla-like flavour when it gets reduced too much.</p>
            <p>
              <strong>Cheese</strong>
              - You could use homemade nut-cheese or just buy vegan cheese, most are based on cashew. I prefer the store bought variant.
            </p>

            <h2>Eggs</h2>
            <p>
              <strong>Egg (baking)</strong>
              - 1 heaped Tablespoon of shredded flax-seed with a shot of water mixed can be used for every egg used, 1 1/2 Tablespoons of apple pure is another alternative.
            </p>
            <p>
              <strong>Egg (cooking)</strong>
              - 1 heaped Tablespoon of chickpea flour with a bit of water can be used to replace 1 egg.
            </p>
            <h2>Poultry</h2>
            <p><strong>Chicken Nuggets</strong> - Buy medium firm tofu and freeze it overnight, let it defrost during the day and refreeze it again overnight. After defrosting it a second time, you press out the remaining water. Tear into nugget size and batter in 'egg'-wash and breadcrumbs, fry or overbake, and done!</p>

          </div>

        </section>

      </main>
    </React.Fragment>)
  }
}

export default Food
