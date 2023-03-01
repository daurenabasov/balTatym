import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Production from '../../components/Production/Production';


const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Production />
            <Footer />
        </>
    );
};

export default HomePage;