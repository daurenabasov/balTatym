import React from 'react';
import Header from '../Header/Header';
import s from './Contacts.module.scss'
import call from '../../../../Assets/call.png'
import distance from '../../../../Assets/distance.png'

const Contacts = () => {
    return (
        <>
            <Header />
            <div id='container'>
                <h1>Контакты</h1>
                <div className={s.contacts}>
                    <div className={s.first}>
                        <div className={s.contacts}>
                            <img src={call} alt="" />
                            <div className={s.number}>
                                <span>+ 996 (958) 584 000</span>
                                <span>+ 996 (958) 584 000</span>
                            </div>
                        </div>
                        <div className={s.location}>
                            <img src={distance} alt="" />
                            <div className={s.distance}>
                                <span>Кыргызстан, Токтогул</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.second}>
                        <form action="">
                            <input type="text" placeholder='Имя' id="" />
                            <input type="text" placeholder='Номер телефона' id="" />
                            <input type="text" placeholder='Сообщение' id="" />
                            <button>Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;