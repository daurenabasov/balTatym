import React from 'react';
import s from './Carousel.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import carousel1 from '../../../../Assets/carousel1.png'
import carousel2 from '../../../../Assets/carousel2.png'
import './Carousel.module.css'
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";


const Carousel = () => {
    return (
        <>
            <div className={s.slider}>
                <h1>Наша уникальность</h1>
                <Swiper
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    spaceBetween={200}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.50": {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={carousel1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={carousel2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={carousel1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={carousel2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={carousel1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={carousel2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={carousel1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={carousel2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={carousel1} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Carousel;