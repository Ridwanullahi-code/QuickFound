import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../global/Sidebar";
import Navbar from "../global/Navbar";
import Footer from "../../../components/Footer";
const Layout = () => {
  return (
    <div>
      <Navbar />
          <div>
            {<Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
