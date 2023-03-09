import React from 'react';
import NavBar from '../components/Sidebar';
import Banner from '../components/Banner';
import Faqs from '../components/Faqs'
import SimpleCarousel from '../components/Carousel';

import Modal from '../components/Modal';

const Home = () => {
  return (
    <div className="relative">
      <NavBar />
      <div>
        <Banner />
        <SimpleCarousel />
        <div className="bg-white">
          <div className="p-7">
            <h2 className="text-2xl text-center text-red-500 px-5 py-10 font-bold">
              Frequent Asked Questions
            </h2>
            <Faqs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;