import React from "react";
import s from "./ProductsList.module.scss";
import { Link } from "react-router-dom";

const ProductsList = ({ id, image, title, description, price, handleClick }) => {


  return (
    <main className={s.card}>
      <div className={s.cardImg}>
        <img src={image} alt={id} />
      </div>
      <h4>{title}</h4>
      <div className={s.description}>
        <p>{price}</p>
      </div>
      <button onClick={handleClick}>В корзину</button>
      <Link to={`/products/:${id}`}>описание товара</Link>
    </main>
  );
};

export default ProductsList;
