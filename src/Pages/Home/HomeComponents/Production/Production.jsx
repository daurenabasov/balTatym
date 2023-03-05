import s from './Production.module.scss'
import React, { useState } from 'react';
import slide1 from '../../../../Assets/slide1.png'
import Card from '../Cards/Cards';


const Production = () => {
    return (
        <>
            <div className={s.production_container}>
                <div className={s.production}>
                    <div className={s.tag}>
                        <h1>Каталог</h1>
                        <button>Подробнее</button>
                    </div>
                    <div className={s.catalog}>
                        <Card />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Production;