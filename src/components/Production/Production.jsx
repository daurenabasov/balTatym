import s from './Production.module.scss'
import React from 'react';
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'


const Production = () => {
    return (
        <>
            <div className={s.production_container}>
                <div className={s.production}>
                    <h1>Наша продукция</h1>
                    <div className={s.slider}>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Production;