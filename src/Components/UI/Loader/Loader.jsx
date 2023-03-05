import React from 'react';
import s from "./Loader.module.scss"

const Loader = () => {
    return (
        <main id={s.LoaderBack}>
            <div className={s.bee}>
                <div className={s.eye}></div>
                <div className={s.antenna}></div>
                <div className={s.mouth}></div>
            </div>
        </main>
    );
};

export default Loader;