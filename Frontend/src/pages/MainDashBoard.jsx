import React, { useState, useEffect } from "react";
import logo1 from "../assets/logo/logo10.png";
import {
  Home,
  Users,
  AlertTriangle,
  LogOut,
  Receipt,
  IndianRupee,
  LogIn,
} from "lucide-react";
import Home2 from "../component/Home2";
import TotalSchoolAdmins from "../component/TotalSchoolAdmins";
import AdminsProfiles from "../component/AdminsProfiles";
import ServiceComplaint from "../component/ServiceComplaint";
import Login from "./Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Unauthorized from "./Unauthorized";
// import

// Import your right-side components here
// import HomeComponent from "../components/Dashboard/Home";

// import ComplaintService from "../components/Dashboard/ComplaintService";
// import ComplaintCompany from "../components/Dashboard/ComplaintCompany";

const MainDashBoard = () => {
  const [data, setData] = useState([]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [selectedComponent, setSelectedComponent] = useState("Home");

  const [adminProfileID, setAdminProfileID] = useState([]);
  const [adminTotalStudents, setAdminTotalStudents] = useState(null);
  const [adminTotalUsers, setAdminTotalUsers] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(true);
  const navigate = useNavigate();

  const componentMap = {
    Home: (
      <Home2
        setSelectedComponent={setSelectedComponent}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        data={data}
        setAdminProfileID={setAdminProfileID}
        setAdminTotalStudents={setAdminTotalStudents}
        setAdminTotalUsers={setAdminTotalUsers}
      />
    ),
    "Total School Admins": (
      <TotalSchoolAdmins
        setSelectedComponent={setSelectedComponent}
        setAdminProfileID={setAdminProfileID}
        setAdminTotalStudents={setAdminTotalStudents}
        setAdminTotalUsers={setAdminTotalUsers}
      />
    ),
    "Admins Profile": (
      <AdminsProfiles
        setSelectedComponent={setSelectedComponent}
        adminProfileID={adminProfileID}
        adminTotalStudents={adminTotalStudents}
        adminTotalUsers={adminTotalUsers}
      />
    ),
    "Service Complaint": (
      <ServiceComplaint setSelectedComponent={setSelectedComponent} />
    ),

    // "Complaint Company": <ComplaintCompany />,
  };

  // const [totalAdmins, setTotalAdmins] = useState(null);
  // const [totalUsers, setTotalUsers] = useState(null);
  // const [totalStudents, setTotalStudents] = useState(null);

  const getAdminDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL}/super-admin/get-counts`
      );

      console.log(response);

      if (response.data && response.data.data) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdminDetails();
  }, []);

  const menuItems = [
    {
      name: "Home",
      icon: <Home className="lg:h-6 lg:w-6" />,
    },
    {
      name: "Total School Admins",
      icon: <Users className="lg:h-6 lg:w-6" />,
    },
    {
      name: "Complaints",
      icon: <AlertTriangle className="lg:h-6 lg:w-6 h-6 w-6" />,
      subItems: ["Service Complaint", "Complaint Company"],
    },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token)

    if (!token) {
      setIsAuthorized(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthorized(false);
    navigate("/");
  };

  return (
    <div className="flex  w-full h-screen  ">
      {isAuthorized ? (
        <>
          {/* Hamburger Button for Mobile */}

          <div
            className={`${
              isSidebarOpen ? "block" : "hidden"
            } md:block w-[55%] md:w-[20%] h-full bg-[#4D44B5] text-white  flex flex-col items-start fixed md:relative z-50 `}
          >
            {/* Logo */}
            <div className="flex items-center space-x-5 px-8 pt-4">
              <img className="h-[60px] w-[60px]" src={logo1} alt="Logo" />
              <h1 className="font-bold lg:text-2xl text-md">SUPER ADMIN</h1>
            </div>

            {/* Menu */}
            <div className="flex flex-col lg:pl-6  space-y-6 pt-10 text-xl w-full text-white">
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
                        className={`flex items-center px-10 py-2 space-x-4  lg:text-xl text-sm   transition-all duration-200 cursor-pointer rounded-l-full ${
                          openDropdown === item.name
                            ? "bg-white text-[#4D44B5] "
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
                              onClick={() => {
                                setSelectedComponent(sub);
                                setIsSidebarOpen(false);
                              }}
                              className={`block px-10 py-2 rounded-l-full transition-all duration-200 cursor-pointer hover:bg-white hover:text-[#4D44B5] ${
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
                      onClick={() => {
                        setSelectedComponent(item.name);
                        setIsSidebarOpen(false);
                      }}
                      className={`flex items-center px-10 py-2 space-x-4 lg:text-xl text-sm transition-all duration-200 cursor-pointer rounded-l-full ${
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
            <div className="mb-auto mt-10 px-6">
              <button
                onClick={handleLogout}
                className="lg:px-7 lg:py-4 px-5 py-2 border-2 border-white rounded-2xl sm:text-sm md:text-sm lg:text-2xl hover:text-white hover:border-white"
              >
                <LogOut className="w-6 h-5" />
              </button>
              <span className="ml-4 lg:text-2xl text-xl font-semibold">
                Logout
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`flex-1 overflow-y-auto transition-all duration-300 ease-in-out ${
              isSidebarOpen ? "sm:ml-0" : ""
            }`}
          >
            <div className="md:hidden p-4  absolute  ">
              <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-[#4D44B5]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
                  />
                </svg>
              </button>
            </div>
            {componentMap[selectedComponent] || <Home2 />}
          </div>
        </>
      ) : (
        <Unauthorized />
        
      )}
    </div>
  );
};

export default MainDashBoard;
