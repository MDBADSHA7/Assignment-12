import React from 'react';
import Footer from '../Shared/Footer';
import Tools from '../Tools';
import Banner from './Banner';
import OurService from './OurService';
import Review from './Review';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurService></OurService>
            <Tools></Tools>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;