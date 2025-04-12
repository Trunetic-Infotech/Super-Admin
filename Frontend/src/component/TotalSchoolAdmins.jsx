import React, { useState } from "react";
import { UserCircle, Plus } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { MoreVertical, MessageCircle } from "lucide-react";
import Pagination from "./Pagination";

const TotalSchoolAdmins = ({setSelectedComponent}) => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const admins = [
    { name: "Queens School Admin", id: "REG20250412" },
    { name: "St. Xavier Admin", id: "REG20250413" },
    { name: "Bright Future Admin", id: "REG20250414" },
    { name: "Green Valley Admin", id: "REG20250415" },
    { name: "Queens School Admin", id: "REG20250412" },
    { name: "St. Xavier Admin", id: "REG20250413" },
    { name: "Bright Future Admin", id: "REG20250414" },
    { name: "Green Valley Admin", id: "REG20250415" },
    { name: "Queens School Admin", id: "REG20250412" },
    { name: "St. Xavier Admin", id: "REG20250413" },
    { name: "Bright Future Admin", id: "REG20250414" },
    { name: "Green Valley Admin", id: "REG20250415" },
    { name: "Queens School Admin", id: "REG20250412" },
    { name: "St. Xavier Admin", id: "REG20250413" },
    { name: "Bright Future Admin", id: "REG20250414" },
    { name: "Green Valley Admin", id: "REG20250415" },
    { name: "Queens School Admin", id: "REG20250412" },
    { name: "St. Xavier Admin", id: "REG20250413" },
    { name: "Bright Future Admin", id: "REG20250414" },
    { name: "Green Valley Admin", id: "REG20250415" },
  ];
  const [toggles, setToggles] = useState(
    Array(admins.length).fill(false) // [false, false, false, false]
  );

  // Toggle a specific card
  const handleToggle = (index) => {
    const newToggles = [...toggles];
    newToggles[index] = !newToggles[index];
    setToggles(newToggles);
  };

  // Get current posts for the current page
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = admins.slice(firstPostIndex, lastPostIndex);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle "Next" button click
  const nextPage = () => {
    if (currentPage < Math.ceil(cardData.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle "Previous" button click
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <div className="w-full h-screen bg-gray-200 p-4 ">
        <div className="flex justify-between ">
          <h1 className="text-xl text-[#4D44B5] font-bold">
            Total School Admins
          </h1>
          <div className="flex justify-end items-center   ">
            <h1 className="font-bold text-[#4D44B5]  ">SUPER ADMIN</h1>
            <UserCircle className="w-7 h-7" />
          </div>
        </div>

        <div className="flex  mt-10 ">
          {/* Search */}
          <div className="flex items-center bg-white px-3 py-3 rounded-full border-2 border-white shadow-sm w-full max-w-xs">
            <FaSearch className="text-[#4D44B5] mr-3 w-4 h-4" />
            <input
              type="text"
              placeholder="Search here...."
              className="w-full text-sm text-[#4D44B5] placeholder-gray-400 bg-transparent outline-none"
            />
          </div>

          <div className=" flex relative ml-auto mr-10 gap-4">
            <button
              onClick={() => setOpen(!open)}
              className="relative flex items-center justify-between gap-2 px-4 py-2 bg-white rounded-full border border-gray-300 text-[#4D44B5] text-sm shadow-md hover:shadow-lg transition-all"
            >
              SUPER ADMIN
              <ChevronDown className="w-4 h-4" />
            </button>

            {open && (
              <ul className="absolute top-12 left-0 w-40 bg-white shadow-lg rounded-xl border border-gray-200 text-sm text-gray-700 z-20 transition-all">
                <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors">
                  Newest
                </li>
                <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors">
                  Largest
                </li>
                <li className="px-4 py-2 hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors">
                  LastMonth
                </li>
              </ul>
            )}

            <button className="flex items-center gap-2 px-6 py-2 bg-[#4D44B5] rounded-full border text-white text-sm shadow-sm">
              
             SUPER ADMIN
            </button>
          </div>
        </div>
        <div className="bg-white h-[90vh] mt-10 rounded-xl  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
            {currentPosts.map((admin, index) => (
              <div
                key={index}
                className="bg-[#4D44B5] rounded-lg p-5 flex flex-col items-center text-center shadow-xl hover:shadow-lg transition-shadow duration-300 relative"
              >
                {/* Three dot icon */}
                <div className="absolute top-3 right-3 cursor-pointer">
                  <MoreVertical onClick={()=>setSelectedComponent("Admins Profile")} className="w-6 h-6 text-white" />
                </div>
    
                {/* Profile image */}
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <span className="text-xl font-bold">Admin</span>
                </div>

                {/* Name & ID */}
                <h2 className="text-white text-lg font-medium mb-2">
                  {admin.name}
                </h2>
                <p className="text-base text-white mb-4">{admin.id}</p>

                {/* Toggle & message */}
                <div className="flex items-center gap-10">
                  <div
                    onClick={() => handleToggle(index)}
                    className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                      toggles[index] ? "bg-green-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                        toggles[index] ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </div>

                  <div className="cursor-pointer">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        {/* Pagination Component */}
        <Pagination
          totalPosts={admins.length}
          postsPerPage={postsPerPage}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
        />
    </div>
  );
};

export default TotalSchoolAdmins;
