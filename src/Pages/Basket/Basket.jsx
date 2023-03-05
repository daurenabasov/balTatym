import React, { useContext } from "react";
import { Cartcontext } from "../../Context/Context";
import s from "./Basket.module.scss";
import ProductsList from "../Products/ProductList/ProductsList";
import Header from "../Home/HomeComponents/Header/Header";

const Basket = () => {
  const GlobalState = useContext(Cartcontext);
  const state = GlobalState.state;

  localStorage.setItem("Basket", state);
  const dispatch = GlobalState.dispatch;

  console.log(state);

  return (
    <>
      <Header />
      <main id={s.Basket}>
        {state.map((item, idx) => {
          return (
            <main className={s.card} key={idx}>
              <div className={s.cardImg}>
                <img src={item.image} alt={idx} />
              </div>
              <h4>{item.title}</h4>
              <div className={s.description}>
                <p>{item.price}</p>
              </div>
              <button>Заказать</button>
            </main>
          );
        })}
      </main>
    </>
  );
};

export default Basket;
