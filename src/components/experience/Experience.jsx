import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
      <div className="experience__frontend">
      <h3>Frontend Development</h3>
      <div className="experience__content">
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
          <h4>CSS</h4>
          <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
          <h4>JavaScript</h4>
          <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
          <h4>VueJs</h4>
          <small className='text-light'>Basic</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
          <h4>ReactJs</h4>
          <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
          <h4>Ionic React</h4>
          <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
          <h4>NextJs</h4>
          <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
          <h4>CorelDRAW</h4>
          <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
          <h4>Photoshop</h4>
          <small className='text-light'>Intermediate</small>
        </div>
        </article>
        
      </div>
      </div>

       {/* === END OF FRONTEND === */}

      <div className="experience__backend">
      <h3>Backend Development</h3>
      <div className="experience__content">
        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
        <h4>Solidity</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
          <h4>Javascript</h4>
          <small className='text-light'>Intermediate</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
          <h4>Node</h4>
          <small className='text-light'>Intermediate</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
          <h4>Express</h4>
          <small className='text-light'>Intermediate</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
          <h4>MongoDB</h4>
          <small className='text-light'>Intermediate</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
          <h4>PHP</h4>
          <small className='text-light'>Basic</small>
        </div>
        </article>

        <article className='experience__details'>
        <BsPatchCheckFill className='experience__detials-icon' />
        <div>
          <h4>Python</h4>
          <small className='text-light'>Basic</small>
        </div>
        </article>

      </div>
      </div>
      </div>
      
    </section>
  )
}

export default Experience