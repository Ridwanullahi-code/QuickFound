import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SimpleCarousel = () => {
  return (
    <div className="relative bg-gray-100 pb-12">
      <h2 className="text-center p-9 font-medium text-2xl text-gray-900">
        How to make a deposit in 4 simple steps
      </h2>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="relative flex flex-col items-center justify-center gap-8">
          <img
            className="h-[120px]"
            loading="lazy"
            src="https://www.forextime.com/themes/custom/fxi_theme/dist/assets/icons/steps/step1-25.svg"
            alt="new year sales"
          />
          <p className="text-center max-w-sm">
            Open the Deposits page within the 'My Money' section in MyFXTM.
          </p>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-8">
          <img
            className="h-[120px]"
            loading="lazy"
            src="https://www.forextime.com/themes/custom/fxi_theme/dist/assets/icons/steps/step2-half.svg"
            alt="furniture"
          />
          <p className="text-center max-w-sm">
            Choose your preferred deposit method and click ‘Deposit’.
          </p>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-8">
          <img
            className="h-[120px]"
            src="https://www.forextime.com/themes/custom/fxi_theme/dist/assets/icons/steps/step3-75.svg"
            alt="white metal pipe on brown brick wall"
          />
          <p className="text-center max-w-sm">
            Choose the trading account you’d like to deposit funds into and
            complete the necessary fields.
          </p>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-8">
          <img
            className="h-[120px]"
            src="https://www.forextime.com/themes/custom/fxi_theme/dist/assets/icons/steps/step4-100.svg"
            alt="Classic brass shower valve on a tiled wall in a victorian style bathroom"
          />
          <p className="text-center max-w-sm">
            Confirm your deposit details in the next page – and you’re good to
            go!
          </p>
        </div>
      </Carousel>
    </div>
  );
};
export default SimpleCarousel