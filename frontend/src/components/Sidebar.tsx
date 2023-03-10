import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
      <nav className="w-full bg-black shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-2">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <NavLink to="/" className="text-2xl font-bold text-white">
                Quick<span className="text-blue-500 font-bold">Fund</span>
              </NavLink>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-12 md:space-y-0 font-bold">
                <li className="text-white font-bold hover:bg-blue-500">
                  <NavLink to="/">HOME</NavLink>
                </li>
                <li className="text-white font-bold hover:text-blue-500">
                  <NavLink to="/">ABOUT US</NavLink>
                </li>
                <li className="text-white font-bold hover:text-blue-500">
                  <NavLink to="/">CONTACT US</NavLink>
                </li>
              </ul>

              <div className="mt-3 space-y-2 lg:hidden md:hidden">
                <NavLink
                  to="/signup"
                  className="inline-block w-full px-4 py-2 text-center text-white bg-blue-800 rounded-md shadow hover:bg-gray-800 font-bold"
                >
                  Sign in
                </NavLink>
                <NavLink
                  to="/login"
                  className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 font-bold"
                >
                  Sign up
                </NavLink>
              </div>
            </div>
          </div>
          <div className="hidden md:inline-block space-x-6">
            <NavLink
              to="/signup"
              className="px-4 py-3 text-white bg-blue-700 rounded-md shadow hover:opacity-90 active:bg-blue-900 font-bold"
            >
              SIGN UP
            </NavLink>
            <NavLink
              to="/login"
              className="font-bold px-4 py-3 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
            >
              LOGIN
            </NavLink>
          </div>
        </div>
      </nav>
    );
}