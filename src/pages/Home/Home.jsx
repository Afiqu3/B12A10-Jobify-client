import React from 'react';
import Banner from '../../components/Banner/Banner';
import TopCategories from '../../components/TopCategories/TopCategories';
import HowItsWork from '../../components/HowItsWork/HowItsWork';
import LatestJobs from '../../components/LatestJobs/LatestJobs';
import About from '../../components/About/About';
import FAQ from '../../components/FAQ/FAQ';
import Newsletter from '../../components/Newsletter/Newsletter';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopCategories></TopCategories>
      <HowItsWork></HowItsWork>
      <LatestJobs></LatestJobs>
      <About></About>
      <FAQ></FAQ>
      <Newsletter></Newsletter>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
