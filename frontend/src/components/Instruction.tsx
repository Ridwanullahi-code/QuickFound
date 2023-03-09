const Instruction = () => {
    return (
      <div
        id="default-carousel"
        className="relative bg-gray-800"
        data-carousel="slide"
      >
        <div className="text-center p-4">
          <h2 className="text-3xl font-medium-bold text-gray-600">
            How to make a deposit in four simple steps
          </h2>
        </div>
        <div className="relative h-96 overflow-hidden rounded-lg md:h-96 flex  flex-col justify-center items-center">
          <div
            className="duration-700 ease-in-out flex flex-col justify-center items-center gap-4 md:gap-8"
            data-carousel-item
          >
            <img
              src="https://www.forextime.com/themes/custom/fxi_theme/dist/assets/icons/steps/step1-25.svg"
              className=""
              alt="..."
            />
            <span className=" text-gray-700 w-1/2  text-centerr">
              Open the Deposits page within the My Money section in MyFXTM.
            </span>
          </div>
          <div
            className="duration-700 ease-in-out flex flex-col justify-center items-center gap-4 md:gap-8"
            data-carousel-item
          >
            <img
              src="https://www.forextime.com/themes/custom/fxi_theme/dist/assets/icons/steps/step2-half.svg"
              className=""
              alt="..."
            />
            <span className="text-gray-700 w-1/2  text-center">
              Choose your preferred deposit method and click ‘Deposit’.
            </span>
          </div>
          <div
            className="duration-700 ease-in-out flex flex-col justify-center items-center gap-4 md:gap-8"
            data-carousel-item
          >
            <img
              src="https://www.forextime.com/themes/custom/fxi_theme/dist/assets/icons/steps/step3-75.svg"
              className=""
              alt="..."
            />
            <span className=" text-gray-700 w-1/2  text-center">
              Choose the trading account you’d like to deposit funds into and
              complete the necessary fields.
            </span>
          </div>
          <div
            className="duration-700 ease-in-out flex flex-col justify-center items-center gap-4 md:gap-8"
            data-carousel-item
          >
            <img
              src="https://www.forextime.com/themes/custom/fxi_theme/dist/assets/icons/steps/step4-100.svg"
              className=""
              alt="..."
            />
            <span className=" text-gray-700 w-1/2  text-center">
              Confirm your deposit details in the next page – and you’re good to
              go!
            </span>
          </div>
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-red-500 group-hover:bg-red-800 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-red-500 group-hover:bg-red-800 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-7 h-7 font-bold text-white sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    );
}

export default Instruction;