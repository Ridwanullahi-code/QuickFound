import React from 'react'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative rounded-lg md:h-96">
      <img
        src="https://images.unsplash.com/photo-1619169412695-de792ce344e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        className="w-full h-full object-fit"
        alt="..."
      />
      <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-[#000000d0] flex    items-center justify-center p-10">
        <div className="text-white flex flex-col items-center justify-center gap-y-8">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-3xl md:text-6xl font-bold animate-slide-in text-center">
              Deposit and <span className="text-blue-500">Withdraw</span> Money
            </h1>
            <p className="text-1xl md:text-2xl text-gray-300 text-center">
              Choose from local payment methods, cards, E-wallet and more
            </p>
          </div>
          <Link to="/signup" className="text-2xl md:text-3xl rounded-lg p-3 px-10 hover:opacity-90 active:bg-blue-900 text-white bg-blue-600 border border-blue-800 ">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner
