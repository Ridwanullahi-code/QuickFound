import React from 'react'
import Logic from './Logic'
import Header from '../../global/Header'
import shareVideo from "../../assets/share.mp4";
import Footer from '../../components/Footer';

const SignUp = () => {
  return (
    <>
      <Header title="Login" to="login" />
      <div className="flex justify-center items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <video
            src={shareVideo}
            typeof="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-full object-cover"
          />
          <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
            <div className="bg-white shadow-lg p-5 py-8 md:px-20 mx-4 md:mx-0">
              <Logic />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
