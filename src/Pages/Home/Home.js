import React from 'react';
import Footer from '../Shared/Footer';
import Tools from '../Tools';
import Banner from './Banner';
import OurService from './OurService';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurService></OurService>
            <Tools></Tools>
            <Footer></Footer>
        </div>
    );
};

export default Home;