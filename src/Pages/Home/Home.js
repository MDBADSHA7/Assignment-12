import React from 'react';
import Footer from '../Shared/Footer';
import Tools from '../Tools';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import OurService from './OurService';
import OurWerehouseTools from './OurWerehouseTools';
import Review from './Review';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurService></OurService>
            <BusinessSummary></BusinessSummary>
            <Tools></Tools>
            <Review></Review>
            <OurWerehouseTools></OurWerehouseTools>
            <Footer></Footer>
        </div>
    );
};

export default Home;