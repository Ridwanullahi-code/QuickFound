import { useState } from 'react';
import {Link} from 'react-router-dom';
import Footer from "../../../components/Footer";
import {
  BsFillCheckCircleFill,
  BsFillCircleFill,
} from "react-icons/bs";

import { BiMoney } from 'react-icons/bi';
import { FaRegAddressBook } from 'react-icons/fa';
import { TbSocial } from "react-icons/tb";

const Dashboard = () => {
  const [click, setClick] = useState(true);
  return (
    <>
      <section className="bg-gray-100 border border-top:gray-200 md:border-none md:p-10 w-full flex flex-col md:flex-row gap-2">
        <div className="flex flex-col gap-3 w-full md:w-1/4">
          <div className="bg-white rounded-sm p-4 flex flex-col gap-3 w-full">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <img
                className="rounded-full h-16 w-16"
                src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/a374e2f7df2fdc8aaf02088ee3c1c210-1653176475097/1210df0d-44e4-4a03-a7cf-a184d3c46709.jpg"
                alt="my-image"
              />
              <p className="font-bold text-2xl text-gray-700 line-clamp-3">
                Micheal Chole
              </p>
            </div>
            <span className="border border-gray-200 rounded-md p-5 ">Male</span>
            <span className="border border-gray-200 rounded-md p-5">Ajayi</span>
            <span className="border border-gray-200 rounded-md p-5">
              Ridwan
            </span>
            <span className="border border-gray-200 rounded-md p-5 line-clamp-3">
              ridwanullahiajayi01@gmail.com
            </span>
            <span className="border border-gray-200 rounded-md p-5">
              +2348144580946
            </span>
          </div>
          <div className="bg-white rounded-sm p-6 flex flex-col gap-5 w-full text-center">
            <h2 className="font-bold text-center mb-3">Delete account</h2>
            <p>
              <span>
                ATTENTION! All of your data will be definitely and irreversibly
                deleted
              </span>{" "}
              <br />
              Please tick both boxes
            </p>
            <button
              className={`${
                click ? "text-gray-600 bg-gray-100" : "bg-blue-600 text-white"
              } rounded-md p-5 flex items-center justify-center gap-4`}
              onClick={() => setClick(!click)}
            >
              {click ? (
                <BsFillCircleFill className="h-6 w-6 text-transparent rounded-full border border-gray-300 " />
              ) : (
                <BsFillCheckCircleFill className="h-6 w-6 text-white" />
              )}
              <span className="font-medium">Delete my account</span>
            </button>
            <button
              className={`${
                !click ? "bg-red-600 text-white" : "text-gray-600 bg-gray-100"
              } rounded-lg p-2 flex items-center justify-center gap-4 hover:bg-red-700 active:bg-red-800`}
            >
              Delete my account
            </button>
          </div>
        </div>
        <div className="w-full md:flex-1 flex flex-col gap-3">
          <div className="border border-gray-200 rounded-md flex flex-col md:flex-row  justify-between p-5 overflow-hidden gap-4">
            <div className="bg-white rounded-md p-2 md:w-1/4 w-full text-center flex flex-col justify-center font-bold text-gray-500">
              <h2>Current Balance</h2>
              <span className="">$300</span>
            </div>
            <div className="bg-white rounded-md p-2  md:w-1/4 w-full text-center flex flex-col justify-center font-bold text-gray-500">
              <h2>Total Refer Earn</h2>
              <span className="">$200</span>
            </div>
            <div className="bg-white rounded-md p-4 flex flex-col items-center gap-2  md:w-1/2 w-full text-center">
              <span className="text-sm text-gray-600">
                Refer people you know and earn
              </span>
              <Link
                to="referral"
                className="text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-md border border-blue-600 p-2 px-10"
              >
                Earn money
              </Link>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-sm w-full p-8 text-gray-600 flex flex-col gap-3">
            <h2 className="font-bold text-2xl text-center">
              3 steps to to cash out more
            </h2>
            <div className="flex flex-col md:flex-row w-full md:items-baseline justify-between gap-7 mt-7">
              <div className="flex flex-col items-center justify-center gap-3">
                <TbSocial  className='w-9 h-9'/>
                <p className="text-center">
                  Share your link with your friends
                </p>
              </div>
              <div className="flex  flex-col justify-center items-center gap-3">
                <FaRegAddressBook className='w-9 h-9'/>
                <p className="text-center">
                  Your friend signs up to Loom & gets verified
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <BiMoney className='w-9 h-9'/>
                <p className="text-center">
                  You get instant $100 in your account
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
