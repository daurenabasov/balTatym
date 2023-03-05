import React from 'react';
import s from './Hero.module.scss'
import banner from '../../../../Assets/banner.png'
import {Link} from "react-router-dom"

const Hero = () => {

    return (
        <>
            <div id='container'>
                <div className={s.hero_container}>
                    <div className={s.hero_content}>
                        <div className={s.section}>
                            <h1>
                                Прямиком из <br />
                                пчелиных <br />
                                ульев
                            </h1>
                            <p>Максимальная польза для <br /> вашего здоровья!</p>
                            <a href={"https://whatsapp.com"} target="_blank">
                                <button>Связаться</button>
                            </a>
                        </div>
                        <div className={s.banner}>
                            <img src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;