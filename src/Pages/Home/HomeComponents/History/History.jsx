import React from 'react';
import s from './History.module.scss'
import banner2 from '../../../../Assets/banner2.png'

const History = () => {
    return (
        <>
            <div className={s.content}>
                <h1>Наша история</h1>
                <div className={s.section}>
                    <img src={banner2} alt="banner2" />
                    <div className={s.second_block}>
                        <h2>Высококачественный <br /> экологический мед в <br /> Кыргызстане.</h2>
                        <p>Наша компания была основана <br /> в 1996 году, хозяйство было начато
                            <br />c  16 семьями пчёл среднерусской <br /> породы...
                        </p>
                        <p className={s.new}>
                            Наша компания была основана в 1996 году, хозяйство...
                        </p>
                        <div className={s.info}>
                            <span>подробнее</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default History;