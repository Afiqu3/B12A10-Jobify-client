import React from 'react';
import Banner from '../../components/Banner/Banner';
import TopCategories from '../../components/TopCategories/TopCategories';
import HowItsWork from '../../components/HowItsWork/HowItsWork';
import LatestJobs from '../../components/LatestJobs/LatestJobs';
import About from '../../components/About/About';
import FAQ from '../../components/FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopCategories></TopCategories>
            <HowItsWork></HowItsWork>
            <LatestJobs></LatestJobs>
            <About></About>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;