import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/nit/img.svg';
import img2 from '../../assets/nit/miss.svg';
import img3 from '../../assets/nit/moto.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function MotoCarousel() {
  return (
    <div className='lg:hidden'>
      <Swiper
        slidesPerView={1}
        rewind={true}
        spaceBetween={30}
        navigation={false}
        speed={1200}
        height={1800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='h-full'>
            <div className='flex flex-col flex-1 gap-4 p-4 rounded-2xl font-dosis h-[600px]'>
                <div className='bg-white rounded-xl flex flex-col items-center p-4'>
                    <h1 className='text-xl'>Our Moto</h1>
                    <div className={`w-8 mx-auto mt-1 rounded-sm bg-gray-500 th px-0.5 py-0.5`}></div>
                    <div className='h-40'>
                      <div className='p-4'>NIT Goa strives for quality faculty, good students and excellent infrastructure</div>
                    </div>
                    <img src={img3} alt="img1" className="h-40 object-cover mt-8" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='h-full'>
            <div className='flex flex-col gap-4 p-4 rounded-2xl font-dosis h-[600px]'>
                <div className='bg-white rounded-xl flex flex-col items-center p-4'>
                    <h1 className='text-xl'>Our Vision</h1>
                    <div className={`w-8 mx-auto mt-1 rounded-sm bg-gray-500 th px-0.5 py-0.5`}></div>
                    <div className='h-40'>
                      <div className='p-4'>National Institute of Technology Goa shall emerge as one of the nation's pre-eminent institutions. Through its excellence, it shall serve the Goan society, India and humanity at large with all the challenges and opportunities.</div>
                    </div>
                    <img src={img2} alt="img3" className="h-40 object-cover" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='h-full'>
            <div className='flex flex-col gap-4 p-4 rounded-2xl font-dosis h-[600px]'>
                <div className='bg-white rounded-xl flex flex-col items-center p-4'>
                    <h1 className='text-xl'>Our Mission</h1>
                    <div className={`w-8 mx-auto mt-1 rounded-sm bg-gray-500 th px-0.5 py-0.5`}></div>
                    <div className='h-40'>
                      <div>NIT Goa strives for excellence, through dissemination, generation and application of knowledge by laying stress on interdisciplinary approach in all the branches of Science, Engineering, Technology, Humanities and Management with emphasis on human values and ethics</div>
                    </div>
                    <img src={img1} alt="img2" className="h-40 object-cover" />
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
