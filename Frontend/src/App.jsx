import React from "react";

import { Route, Routes } from "react-router-dom";
// import { ToastContainer } from 'react-toastify'; // Correct import for Toaster
import { Toaster } from 'react-hot-toast'; // Correct import for Toaster





import AdminsProfiles from "./component/AdminsProfiles";
import ServiceComplaint from "./component/ServiceComplaint";
import Login from "./pages/Login";
import MainDashBoard from "./pages/MainDashBoard";
import PageNotFound from "./pages/PageNotFound";


const App = () => {
  return (
    <div>
      <div></div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/admins-profiles" element={<AdminsProfiles />}></Route>
        <Route path="/service-complaint" element={<ServiceComplaint />}></Route>
        <Route path="/main-dashboard" element={<MainDashBoard />}></Route>
        {/* <Route path="/login" element={<Login/>}></Route> */}
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      {/* <ToastContainer /> ToastContainer for notifications */}
      <Toaster /> {/* ToastContainer for notifications */}

    </div>
  );
};

export default App;
