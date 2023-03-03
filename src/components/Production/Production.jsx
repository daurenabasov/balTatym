import s from './Production.module.scss'
import React from 'react';
import './Production.css'
import CardSlide from '../CardSlide/CardSlide';


const Production = () => {
    return (
        <>
            <div className={s.production_container}>
                <div className={s.production}>
                    <h1>Наша продукция</h1>
                    <div className={s.slider}>
                        <CardSlide />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Production;