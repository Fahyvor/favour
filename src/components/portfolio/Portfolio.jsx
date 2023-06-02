import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import Mobile from '../../assets/Mobile.png'
import IMG4 from '../../assets/portfolio4.png'
import Ecommerce from '../../assets/portfolio5.png'
import Foodapp from '../../assets/portfolio6.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Ecommerce} alt="ecommercewebsite" />
          </div>
          <h3>E-commerce Website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/impoNexpo/PublicVersion/tree/test/pages" className='btn'>Github</a>
          <a href="https://imponexpo-first-public-version.vercel.app/product" className='btn btn-primary' target='_blank'>Check Out the Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
            <img src={IMG1} alt="educationwebsite" />
          </div>
          <h3>Education Website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/fahyvor/education/tree/master" className='btn'>Github</a>
          <a href="https://university-of-manchester.netlify.app" className='btn btn-primary' target='_blank'>Check Out the Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfoliowebiste" />
          </div>
          <h3>Portfolio Website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/fahyvor" className='btn'>Github</a>
          <a href="https://favour-portfolio.vercel.app" className='btn btn-primary' target='_blank'>Check Out the Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Foodapp} alt="foodwebsite" />
          </div>
          <h3>Food Company Website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/fahyvor/foodapp/tree/master" className='btn'>Github</a>
          <a href="https://food-web-application.netlify.app" className='btn btn-primary' target='_blank'>Check Out the Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="educationwebsite" />
          </div>
          <h3>Company Website (CM Online Radio)</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/fahyvor/cmonlineradio/tree/master" className='btn'>Github</a>
          <a href="https://www.cmonlineradio.com" className='btn btn-primary' target='_blank'>Check Out the Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Mobile} alt="secured fingerprint payment application" />
          </div>
          <h3>Mobile Application</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Fahyvor/final-year-project-react-native" className='btn'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Check Out the Site</a>
          </div>
        </article>
        
      
      </div>
    </section>
  )
}

export default Portfolio