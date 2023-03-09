import { Link } from "react-router-dom"
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [menu, setMenu] = useState(false);


	return (
    <nav className="bg-black px-4 md:px-2 py-2 relative">
      <div className="flex flex-wrap items-center justify-between p-2">
        <div className="flex gap-4 items-center justify-center">
          <button
            onClick={() => setMenu(!menu)}
            type="button"
            className="text-white cursor-pointer border border-transparent hover:border-white active:border-gray-500 rounded-md p-1 md:hidden block"
          >
            <AiOutlineMenu className="h-8 w-8" />
          </button>

          <Link to="/" className="flex items-center">
            <span className="self-center font-semibold whitespace-nowrap text-white text-2xl">
              Quick<span className="text-blue-500 font-bold">Fund</span>
            </span>
          </Link>
        </div>
        <ul
          className={`${
            menu ? "flex" : "hidden"
          } absolute flex-col top-[63px] left-0 right-0 bg-gray-800 z-50 text-2xl py-10 duration-200 md:flex md:flex-row md:bg-transparent md:text-[18px] md:py-0 md:relative md:top-0
          px-2 gap-3  text-white justify-center items-center`}
        >
          <li className="w-full hover:bg-gray-600 active:bg-gray-700 md:active:bg-transparent md:hover:bg-transparent text-center duration-75 rounded-md">
            <Link
              to=""
              className="block px-4 py-2  font-bold text-1xl hover:text-blue-500"
            >
              Dashboard
            </Link>
          </li>
          <li className="w-full hover:bg-gray-600 active:bg-gray-700 md:active:bg-transparent md:hover:bg-transparent text-center duration-75 rounded-md">
            <Link
              to="referral"
              className="block px-4 py-2  font-bold text-1xl hover:text-blue-500"
            >
              Referral
            </Link>
          </li>
          <li className="w-full hover:bg-gray-600 active:bg-gray-700 md:active:bg-transparent md:hover:bg-transparent text-center duration-75 rounded-md">
            <Link
              to="withdraw"
              className="block px-4 py-2  font-bold text-1xl hover:text-blue-500"
            >
              Withdraw
            </Link>
          </li>
          <li className="w-full hover:bg-gray-600 active:bg-gray-700 md:active:bg-transparent md:hover:bg-transparent text-center duration-75 rounded-md">
            <Link
              to="deposit"
              className="block px-4 py-2  font-bold text-1xl hover:text-blue-500"
            >
              Deposit
            </Link>
          </li>
        </ul>
        <div>
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/a374e2f7df2fdc8aaf02088ee3c1c210-1653176475097/1210df0d-44e4-4a03-a7cf-a184d3c46709.jpg"
              alt="user photo"
            />
          </button>
          <div
            className={`${
              open ? "opacity-100" : "opacity-0"
            } absolute bg-white border border-gray-200 rounded-md right-5 my-3 w-44 duration-150 z-50`}
          >
            <div className="px-4	py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <hr />
            <ul className="py-2 ">
              <li>
                <button
                  onClick={() => setOpen(!open)}
                  className="w-full text-left"
                >
                  <Link
                    to=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Dashboard
                  </Link>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setOpen(!open)}
                  className="w-full text-left"
                >
                  <Link
                    to="referral"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Refer a Friend
                  </Link>
                </button>
              </li>
              <hr />
              <li>
                <button
                  onClick={() => setOpen(!open)}
                  className="w-full text-left"
                >
                  <Link
                    to="settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    settings
                  </Link>
                </button>
              </li>
              <hr />
              <li>
                <button
                  onClick={() => setOpen(!open)}
                  className="w-full text-left"
                >
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Logout
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;