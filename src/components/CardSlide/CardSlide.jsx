import s from './CardSlide.module.scss'
import './CardSlide.css'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import mini from '../../assets/mini_busket.png'

const CardSlide = () => {
    const slides1 = [
        {
            id: 1,
            img: slide1,
            tag: 'Сотовый мед',
            paragraph: 'Разнотравье',
            price: '550 сом /л',
            buy: 'Купить',
            btn_icon: mini
        }
    ]
    const slides2 = [
        {
            id: 2,
            img: slide2,
            tag: 'Цветочный мед',
            paragraph: 'Разнотравье',
            price: '550 сом /л',
            buy: 'Купить',
            btn_icon: mini
        }
    ]
    const slides3 = [
        {
            id: 3,
            img: slide2,
            tag: 'Цветочный мед',
            paragraph: 'Разнотравье',
            price: '550 сом /л',
            buy: 'Купить',
            btn_icon: mini
        }
    ]
    const slides4 = [
        {
            id: 4,
            img: slide1,
            tag: 'Сотовый мед',
            paragraph: 'Разнотравье',
            price: '550 сом /л',
            buy: 'Купить',
            btn_icon: mini
        }
    ]
    return (
        <>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    {slides1.map((slide) => (
                        <div className={s.card}>
                            <img src={slide.img} alt="" />
                            <div className={s.card_info}>
                                <div className={s.first_block}>
                                    <h1>{slide.tag}</h1>
                                    <p>{slide.paragraph}</p>
                                </div>
                                <div className={s.second_block}>
                                    <span>{slide.price}</span>
                                    <button>{slide.buy}
                                        <img src={slide.btn_icon} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </SwiperSlide>
            </Swiper>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    {slides2.map((slide) => (
                        <div className={s.card}>
                            <img src={slide.img} alt="" />
                            <div className={s.card_info}>
                                <div className={s.first_block}>
                                    <h1>{slide.tag}</h1>
                                    <p>{slide.paragraph}</p>
                                </div>
                                <div className={s.second_block}>
                                    <span>{slide.price}</span>
                                    <button>{slide.buy}
                                        <img src={slide.btn_icon} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </SwiperSlide>
            </Swiper>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    {slides3.map((slide) => (
                        <div className={s.card}>
                            <img src={slide.img} alt="" />
                            <div className={s.card_info}>
                                <div className={s.first_block}>
                                    <h1>{slide.tag}</h1>
                                    <p>{slide.paragraph}</p>
                                </div>
                                <div className={s.second_block}>
                                    <span>{slide.price}</span>
                                    <button>{slide.buy}
                                        <img src={slide.btn_icon} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </SwiperSlide>
            </Swiper>
            <Swiper className="mySwiper">
                <SwiperSlide>
                    {slides4.map((slide) => (
                        <div className={s.card}>
                            <img src={slide.img} alt="" />
                            <div className={s.card_info}>
                                <div className={s.first_block}>
                                    <h1>{slide.tag}</h1>
                                    <p>{slide.paragraph}</p>
                                </div>
                                <div className={s.second_block}>
                                    <span>{slide.price}</span>
                                    <button>{slide.buy}
                                        <img src={slide.btn_icon} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default CardSlide;