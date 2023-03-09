import { Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Login from "./components/Login";
import SignUp from "./components/signup/SignUp";
import Layout from "./user/admin/scene/layout";
import Dashboard from "./user/admin/scene/Dashboard";
import Withdraw from "./user/admin/scene/Withdraw";
import Deposit from "./user/admin/scene/Deposit";
import Setting from "./user/admin/scene/Setting";
import Refer from "./user/admin/scene/Refer";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";
import Modal from "./components/Modal";
import ConfirmPassword from "./components/password/ConfirmPassword";
import ForgetPassword from "./components/password/ForgetPassword";

import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/*" element={<Home />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="confirm-password" element={<ConfirmPassword />} />
        <Route path="/user" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="referral" element={<Refer />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="settings" element={<Setting />} />
        </Route>
      </Routes>
      <AiOutlineMessage
        className="cursor-pointer hover:bg-blue-800 active:bg-blue-900 p-3 fixed
          bottom-16 right-4 h-16 w-16 bg-blue-600 z-50 chat text-white rounded-full"
        onClick={() => setOpen(!open)}
      />
      {open && <Modal />}
    </div>
  );
}

export default App;
