/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import './App.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Navbar from './components/widgets/Navbar';
import Container from './components/elements/Container'

function App() {

  return (
    <main>

      <header className='h-[90vh]'>

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          className='h-screen'
          // navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >

          <SwiperSlide>
            <div className='swiper1-bg bg-red-300 h-full '>
              <Container>
                <Navbar />

                <div className='flex justify-center items-center h-[90vh]'>
                  <div>
                    <h1 style={{ textShadow: "1px 1px 2px #334" }} className='text-white text-center text-[114px] drop-shadow-md font-bold'>Space X</h1>

                    <div className='flex items-center justify-center'>
                      <p className='w-[600px] text-center font-bold text-white'>
                        SpaceX is an American aerospace manufacturer, a provider of space 
                        transportation services, and a communications corporation 
                        headquartered in Hawthorne, California. SpaceX was founded in 2002 
                        by Elon Musk with the goal of reducing space transportation costs 
                        to enable the colonization of Mars.
                      </p>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </SwiperSlide>

          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </header>
    </main>
  )
}

export default App
