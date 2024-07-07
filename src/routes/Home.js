import React from 'react'
import "./Home.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/navigation';
// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

function Home() {
  return (
    // Hero Section
    <section className="hero swiper mySwiper">
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        
      </Swiper>
      <div className="hero-arrow row">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </section>



    // End Hero Section
  )
}

export default Home