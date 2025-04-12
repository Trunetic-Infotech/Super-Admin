import React from "react";
import MainDashBoard from "./component/MainDashBoard";
import { Route, Routes } from "react-router-dom";
import AdminsProfiles from "./pages/AdminsProfiles";
import ServiceComplaint from "./pages/ServiceComplaint";


const App = () => {
  return (
    <div>
      <div></div>
      <Routes>
        <Route path="/" element={<MainDashBoard />}></Route>
        <Route path="/adminsprofiles" element={<AdminsProfiles />}></Route>
        <Route path="/servicecomplaint" element={<ServiceComplaint />}></Route>
      </Routes>
    </div>
  );
};

export default App;
