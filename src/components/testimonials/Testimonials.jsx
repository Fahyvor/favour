import React from 'react'
import './testimonials.css'
// import AVTR1 from '../../assets/avartar1.jpg'
// import AVTR2 from '../../assets/avartar2.jpg'
// import AVTR3 from '../../assets/avartar3.jpg'
// import AVTR4 from '../../assets/avartar4.jpg'

//import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, Ally } from 'swiper';

// import { Swiper, SwipperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// remove the ones you don't need

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className='testimonial'>
          <div className="client__image">
            {/* <img src={AVTR1} alt="Avartar One" /> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials