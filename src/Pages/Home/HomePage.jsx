import React from 'react';
import Footer from './HomeComponents/Footer/Footer';
import Header from '../Home/HomeComponents/Header/Header';
import Hero from '../Home/HomeComponents/Hero/Hero';
import History from '../Home/HomeComponents/History/History';
import Production from '../Home/HomeComponents/Production/Production';
import Uniqueness from '../Home/HomeComponents/Uniqueness/Uniqueness';


const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Production />
            <History />
            <Uniqueness />
            <Footer />
        </>
    );
};

export default HomePage;