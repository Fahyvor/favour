import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Mobile Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Native Applications</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Applications</p>
            </li>
          </ul>
        </article>

        {/* === END OF GRAPHICS DESIGN ==== */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>E-Commerce Sites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Personal Websites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>School Websites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Company Websites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Blogs</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Portfolio Websites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>SEO</p>
            </li>
          </ul>
        </article>
        {/* === END OF WEB DEVELOPMENT === */}

        <article className='service'>
          <div className="service__head">
            <h3>Blockchain Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>ERC20 Token</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>BEP20 Token</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>ERC721 Token</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Smart Contract Audit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Token ICO</p>
            </li>
          </ul>
        </article>

        {/* === END OF BLOCKCHAIN DEVELOPMENT === */}
      </div>
    </section>
  )
}

export default Services