import React from "react";
import s from "./NotFound.module.scss";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className={s.NotFoundContainer}>
        <div className={s.title404}>
          <h3>4</h3>
          <h3>0</h3>
          <h3>4</h3>
        </div>
        <button onClick={goHome}>Go home</button>
        <div className={s.bee}>
          <div className={s.booty}></div>
          <div className={s.wingLeft}></div>
          <div className={s.wingRight}></div>
          <div className={s.face}>
            <div className={s.eyes}></div>
            <div className={s.mouth}></div>
          </div>
        </div>
        <div className={s.cloud1}></div>
        <div className={s.cloud2}></div>
        <div className={s.cloud3}></div>
      </div>
    </>
  );
};

export default NotFound;
