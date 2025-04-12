import React, { useState, useEffect } from "react";
import logo1 from "../assets/logo/logo10.png";
import { Home, Users, AlertTriangle, LogOut,Receipt,IndianRupee } from "lucide-react";
import Home2 from "../pages/Home2";
import TotalSchoolAdmins from "./TotalSchoolAdmins";
import AdminsProfiles from "../pages/AdminsProfiles";
import ServiceComplaint from "../pages/ServiceComplaint";

// Import your right-side components here
// import HomeComponent from "../components/Dashboard/Home";

// import ComplaintService from "../components/Dashboard/ComplaintService";
// import ComplaintCompany from "../components/Dashboard/ComplaintCompany";

const MainDashBoard = () => {
  const [openDropdown, setOpenDropdown] = useState("");
  const [selectedComponent, setSelectedComponent] = useState("Home");

  const componentMap = {
    Home: <Home2 setSelectedComponent={setSelectedComponent} />,
    "Total School Admins": <TotalSchoolAdmins   setSelectedComponent={setSelectedComponent}   />,
    "Admins Profile":<AdminsProfiles setSelectedComponent={setSelectedComponent}/>,
    "Service Complaint": <ServiceComplaint setSelectedComponent={setSelectedComponent} />,
    // "Complaint Company": <ComplaintCompany />,
  };

  const menuItems = [
    {
      name: "Home",
      icon: <Home className="h-6 w-6" />,
    },
    {
      name: "Total School Admins",
      icon: <Users className="h-6 w-6" />,
    },
    {
      name: "Complaints",
      icon: <AlertTriangle className="h-6 w-6" />,
      subItems: ["Service Complaint", "Complaint Company"],
    },
  ];

  return (
    <div className="w-full h-screen flex">
      {/* Sidebar */}
      <div className="w-[20%] h-full bg-[#4D44B5] text-white flex flex-col items-start px-4 pt-2">
        {/* Logo */}
        <div className="flex items-center space-x-5 px-4 pt-4">
          <img className="h-[60px] w-[60px]" src={logo1} alt="Logo" />
          <h1 className="font-bold text-2xl">SUPER ADMIN</h1>
        </div>

        {/* Menu */}
        <div className="flex flex-col pl-6 space-y-6 pt-10 text-xl w-full text-white">
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.subItems ? (
                <>
                  <div
                    onClick={() =>
                      setOpenDropdown((prev) =>
                        prev === item.name ? "" : item.name
                      )
                    }
                    className={`flex items-center px-5 py-2 space-x-4 transition-all duration-200 cursor-pointer rounded-l-full ${
                      openDropdown === item.name
                        ? "bg-white text-[#4D44B5]"
                        : "hover:bg-white hover:text-[#4D44B5]"
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </div>

                  {openDropdown === item.name && (
                    <div className="ml-12 space-y-2 text-base">
                      {item.subItems.map((sub) => (
                        <div
                          key={sub}
                          onClick={() => setSelectedComponent(sub)}
                          className={`block px-4 py-2 rounded-l-full transition-all duration-200 cursor-pointer hover:bg-white hover:text-[#4D44B5] ${
                            selectedComponent === sub
                              ? "bg-white text-[#4D44B5]"
                              : ""
                          }`}
                        >
                          {sub}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div
                  onClick={() => setSelectedComponent(item.name)}
                  className={`flex items-center px-5 py-2 space-x-4 transition-all duration-200 cursor-pointer rounded-l-full ${
                    selectedComponent === item.name
                      ? "bg-white text-[#4D44B5]"
                      : "hover:bg-white hover:text-[#4D44B5]"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Logout */}
        <div className="mt-auto mb-6 px-6">
          <button className="px-7 py-4 border-2 border-white rounded-2xl sm:text-lg md:text-xl lg:text-2xl hover:text-white hover:border-white">
            <LogOut className="w-6 h-5" />
          </button>
          <span className="ml-4 text-2xl font-semibold">Logout</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto ">
        {componentMap[selectedComponent] || <Home2 />}
      </div>
    </div>
  );
};

export default MainDashBoard;
