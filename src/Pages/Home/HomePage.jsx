import React from 'react';
import Footer from './HomeComponents/Footer/Footer';
import Header from '../Home/HomeComponents/Header/Header';
import Hero from '../Home/HomeComponents/Hero/Hero';
import History from '../Home/HomeComponents/History/History';
import Production from '../Home/HomeComponents/Production/Production';
import Carousel from './HomeComponents/Carousel/Carousel';


const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Production />
            <History />
            <Carousel />
            <Footer />
        </>
    );
};

export default HomePage;