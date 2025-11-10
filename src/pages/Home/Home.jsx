import React from 'react';
import Banner from '../../components/Banner/Banner';
import TopCategories from '../../components/TopCategories/TopCategories';
import HowItsWork from '../../components/HowItsWork/HowItsWork';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopCategories></TopCategories>
            <HowItsWork></HowItsWork>
        </div>
    );
};

export default Home;