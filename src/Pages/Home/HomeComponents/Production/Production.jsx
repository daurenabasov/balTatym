import s from './Production.module.scss'
import React from 'react';
import slide1 from '../../../../Assets/slide1.png'


const Production = () => {
    const bal = [
        {
            id: 1,
            img: slide1,
            title: "LOX"
        },
        {
            id: 2,
            img: slide1,
            title: "LOX"
        },
        {
            id: 3,
            img: slide1,
            title: "LOX"
        }, {
            id: 3,
            img: slide1,
            title: "LOX"
        },
        {
            id: 4,
            img: slide1,
            title: "LOX"
        },
        {
            id: 5,
            img: slide1,
            title: "LOX"
        }
    ]
    return (
        <>
            <div className={s.production_container}>
                <div className={s.production}>
                    <h1>Наша продукция</h1>
                    <div className={s.catalog}>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Production;