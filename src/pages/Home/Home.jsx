import React from 'react';
import Banner from '../../components/Banner/Banner';
import TopCategories from '../../components/TopCategories/TopCategories';
import HowItsWork from '../../components/HowItsWork/HowItsWork';
import LatestJobs from '../../components/LatestJobs/LatestJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopCategories></TopCategories>
            <HowItsWork></HowItsWork>
            <LatestJobs></LatestJobs>
        </div>
    );
};

export default Home;