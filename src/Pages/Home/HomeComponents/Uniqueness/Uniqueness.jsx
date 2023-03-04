import React from 'react';
import s from './Uniqueness.module.scss'
import './Uniqueness.module.css'
import carousel1 from '../../../../Assets/carousel1.png'

export default function Uniqueness() {
    const slider = [
        {
            id: 1,
            img: carousel1
        },
        {
            id: 2,
            img: carousel1
        },
        {
            id: 3,
            img: carousel1
        },
        {
            id: 4,
            img: carousel1
        },
    ]
    return (
        <>
            <div className={s.uni}>

            </div>
        </>
    );
}
