import React from 'react';
import s from './Cards.module.scss'
import slide1 from '../../../../Assets/slide1.png'
import slide2 from '../../../../Assets/slide2.png'
import mini from '../../../../Assets/mini_busket.png'


const Cards = () => {
    const cards = [
        {
            id: 1,
            img: slide1,
            name: 'Сотовый мед',
            price: '550 сом / л'
        },
        {
            id: 2,
            img: slide2,
            name: 'Цветочный мед',
            price: '900 сом / л'
        },
        {
            id: 3,
            img: slide2,
            name: 'Цветочный мед',
            price: '900 сом / л'
        },
        {
            id: 4,
            img: slide2,
            name: 'Цветочный мед',
            price: '900 сом / л'
        },
        {
            id: 2,
            img: slide2,
            name: 'Цветочный мед',
            price: '900 сом / л'
        },
        {
            id: 2,
            img: slide2,
            name: 'Цветочный мед',
            price: '900 сом / л'
        }
    ]
    return (
        <>
            {cards.map((card) => (
                <div className={s.card_container}>
                    <img src={card.img} alt="card" />
                    <div className={s.card}>
                        <div className={s.info}>
                            <h1>{card.name}</h1>
                            <p>{card.price}</p>
                        </div>
                        <button>
                            В корзину
                            <img src={mini} alt="" />
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Cards;