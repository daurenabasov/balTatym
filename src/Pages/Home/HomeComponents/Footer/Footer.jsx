import React from 'react';
import s from './Footer.module.scss'
import facebook from '../../../../Assets/facebook.png'
import twitter from '../../../../Assets/twitter.png'
import instagram from '../../../../Assets/instagram.png'
import footer_logo from '../../../../Assets/footer_logo.png'

const Footer = () => {
    return (
        <>
            <div className={s.footer_container}>
                <div className={s.footer}>
                    <div className={s.logo}>
                        <img src={footer_logo} alt="footer-log" />
                    </div>
                    <div className={s.society}>
                        <h1>Наши контакты</h1>
                        <div className={s.contacts}>
                            <img src={facebook} alt="facebook-logo" />
                            <img src={instagram} alt="instagram-logo" />
                            <img src={twitter} alt="twitter-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;