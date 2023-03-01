import React from 'react';
import s from './Header.module.scss'
import logo from '../../assets/logo.png'
import busket from '../../assets/busket.png'

const Header = () => {
    return (
        <>
            <div id='container'>
                <div className={s.header}>
                    <nav>
                        <ul>
                            <li>О нас</li>
                            <li>Продукция</li>
                            <li>Полезные статьи</li>
                            <li>Контакты</li>
                        </ul>
                    </nav>
                    <div className={s.busket}>
                        <img src={busket} alt="busket" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;