import React, { useEffect, useState } from "react";
import { UserCircle, Plus } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import { MoreVertical, MessageCircle } from "lucide-react";
import Pagination from "./Pagination";
import axios from "axios";
import toast from "react-hot-toast";
// import { toast } from "react-toastify";

const TotalSchoolAdmins = ({ setSelectedComponent, setAdminProfileID, setAdminTotalStudents, setAdminTotalUsers }) => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;
  const [totalPages, setTotalPages] = useState(1);

  const [checked, setChecked] = useState(false);
  const [adminData, setAdminData] = useState([])
  const [totalAdmins, setTotalAdmins] = useState(null);

  const [isActive, setIsActive] = useState(false);
  const [adminId, setAdminId] = useState(null);

  const [keyword, setKeyword] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [searchedAdmins, setSearchedAdmins] = useState([]);

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
  // const [toggles, setToggles] = useState(
  //   Array(admins.length).fill(false) // [false, false, false, false]
  // );

  // Toggle a specific card
  const handleToggle = async (id, currentStatus) => {
    const newStatus = currentStatus === 0 ? true : false;
  
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_URL}/super-admin/admin/status/${id}`,
        { isActive: newStatus }
      );
  
      if (response.data.success) {
        toast.success(response.data.message);
        getAdminDetails(currentPage); // refresh list
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };
  

  // Get current posts for the current page
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = admins.slice(firstPostIndex, lastPostIndex);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // // Handle "Next" button click
  // const nextPage = () => {
  //   if (currentPage < Math.ceil(cardData.length / postsPerPage)) {
  //     setCurrentPage(currentPage + 1);
  //     getAdminDetails(currentPage + 1)
  //   }
  // };

  // // Handle "Previous" button click
  // const prevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //     getAdminDetails(currentPage - 1)
  //   }
  // };

  const getAdminDetails =async(page = 1)=>{
      try {
        const response = await axios.get(`${import.meta.env.VITE_URL}/super-admin/get-all-admin-data?page=${page}&limit=${postsPerPage}`)
  
        console.log(response);
  
        if(response.data && response.data.data){
          setAdminData(response.data.adminCounts)
          setTotalPages(response.data.totalPages)
          setTotalAdmins(response.data.totalAdmins)
        }else{
          toast.error(response.data.message);
        }
        
      } catch (error) {
        console.log(error);
              toast.error(error.response?.data?.message || "Something went wrong!");
        
      }
    }

    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
      getAdminDetails(newPage); // Call API with new page number
    };
  
    useEffect(()=>{
      getAdminDetails();
    },[])

    // useEffect(()=>{
    //   if(adminId){
    //     handleToggle()
    //   }
    // },[adminId])

     const searchAdmins = async()=>{
        try {
          const response = await axios.get(`${import.meta.env.VITE_URL}/super-admin/search-admin/${keyword}`)
    
          console.log(response);
    
          if(response.data && response.data.data){
            toast.success(response.data.message);
            setSearchedAdmins(response.data.data);
            setIsSearched(true)
          }else{
            toast.error(response.data.message);
          }
          
        } catch (error) {
          console.log(error);
          toast.error("Something Went Wrong!");
          
        }
      }

      console.log("SerachedAdmin", searchedAdmins);
      
    
      

      useEffect(() => {
        const delayDebounce = setTimeout(() => {
          if (keyword.trim().length > 0) {
            searchAdmins();
          } else {
            setIsSearched(false);
          }
        }, 500); // debounce for 500ms
      
        return () => clearTimeout(delayDebounce);
      }, [keyword]);
      
  return (
    <div>
      <div className="w-full     h-screen bg-gradient-to-br from-white via-[#4D44B5] to-[#4D44B5] p-4">
        <div className="flex justify-between">
          <h1 className="lg:text-xl text-[#4D44B5] font-bold lg:ml-0 ml-10">
            Total School Admins
          </h1>
          <div className="flex justify-end items-center">
            <h1 className="font-bold text-[#4D44B5]">SUPER ADMIN</h1>
            <UserCircle className="w-7 h-7" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3   mt-10">
          {/* Search */}
          <div className="flex items-center bg-white px-3 py-3 rounded-full border-2 border-white shadow-sm w-full max-w-xs">
            <FaSearch className="text-[#4D44B5] mr-3 w-4 h-4" />
            <input
            onChange={(e)=> {
              setKeyword(e.target.value)
            }}
              type="text"
              placeholder="Search here...."
              className="w-full text-sm text-[#4D44B5] placeholder-gray-400 bg-transparent outline-none"
            />
          </div>

          <div className="flex  relative ml-auto mr-10 gap-4 mt-2">
            <button
              onClick={() => setOpen(!open)}
              className="relative flex items-center justify-between gap-2 px-6 py-2 bg-white rounded-full border lg:text-lg border-gray-300 text-[#4D44B5] text-xs shadow-md hover:shadow-lg transition-all"
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

            <button className="flex items-center gap-2 px-6 py-2 bg-[#4D44B5] rounded-full border text-white lg:text-lg text-xs shadow-sm">
              SUPER ADMIN
            </button>
          </div>
        </div>

        <div className=" h-[90vh] mt-10 rounded-xl  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 ">
            {isSearched ? searchedAdmins.map((admin, index) => (
              <div
                key={index}
                className="bg-  rounded-lg p-4 flex flex-col items-center text-center shadow-xl hover:shadow-lg transition-shadow duration-300 relative border-shadow"
              >
                {/* Three dot icon */}
                <div className="absolute top-3 right-3 cursor-pointer">
                  <MoreVertical
                    onClick={() => {setSelectedComponent("Admins Profile"); setAdminProfileID(admin.id); setAdminTotalUsers(admin.totalUsers); setAdminTotalStudents(admin.totalStudents)}}
                    className="w-6 h-6 text-white"
                  />
                </div>

                {/* Profile image */}
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <span className="text-xl font-bold">Admin</span>
                </div>

                {/* Name & ID */}
                <h2 className="text-white text-lg font-medium mb-2">
                  {admin.name}
                </h2>
                <p className="text-base text-white mb-4">{admin.organization_Registration_Number}</p>

                {/* Toggle & message */}
                {/* Toggle & message */}
                <div className="flex items-center gap-4 justify-center mt-4">
                  {/* The Toggle */}
                  <div
                    onClick={() => handleToggle(admin.id, admin.isActive)}
                    className={`w-16 h-8 flex items-center justify-start p-1 cursor-pointer rounded-md transition-all duration-300 ease-in-out ${
                      admin.isActive === 0
                        ? "bg-gradient-to-r from-[#FF416C] to-[#FF4B2B]"
                        : "bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]"
                    } 
    shadow-lg hover:scale-105 transform relative`}
                  > 
                    {/* Toggle Text */}
                    <span 
                      className={`absolute text-xs font-semibold text-white transition-all duration-300 ${
                        admin.isActive === 0
                          ? "left-1/3 transform -translate-x-1/2"
                          : "right-1/3 transform translate-x-1/2"
                      }`}
                    >
                      { admin.isActive === 0 ? "OFF" : "ON"}
                    </span>

                    <div
                    onClick={()=> {
                      setIsActive(admin.isActive === 0 ? true : false);
                    }}
                      className={`bg-white w-6 h-6 rounded-md shadow-2xl transform transition-transform duration-1000 ease-in-out ${
                        admin.isActive === 0
                          ? "translate-x-8 scale-110 rotate-[360deg]"
                          : "translate-x-0 scale-100 rotate-0"
                      }`}
                    />
                  </div>

                  {/* Message Icon */}
                  <div className="cursor-pointer">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            )) : adminData.map((admin, index) => (
              <div
                key={index}
                className="bg-  rounded-lg p-4 flex flex-col items-center text-center shadow-xl hover:shadow-lg transition-shadow duration-300 relative border-shadow"
              >
                {/* Three dot icon */}
                <div className="absolute top-3 right-3 cursor-pointer">
                  <MoreVertical
                    onClick={() => {setSelectedComponent("Admins Profile"); setAdminProfileID(admin.id); setAdminTotalUsers(admin.totalUsers); setAdminTotalStudents(admin.totalStudents)}}
                    className="w-6 h-6 text-white"
                  />
                </div>

                {/* Profile image */}
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <span className="text-xl font-bold">Admin</span>
                </div>

                {/* Name & ID */}
                <h2 className="text-white text-lg font-medium mb-2">
                  {admin.name}
                </h2>
                <p className="text-base text-white mb-4">{admin.organization_Registration_Number}</p>

                {/* Toggle & message */}
                {/* Toggle & message */}
                <div className="flex items-center gap-4 justify-center mt-4">
                  {/* The Toggle */}
                  <div
                    onClick={() => handleToggle(admin.id, admin.isActive)}
                    className={`w-16 h-8 flex items-center justify-start p-1 cursor-pointer rounded-md transition-all duration-300 ease-in-out ${
                      admin.isActive === 0
                        ? "bg-gradient-to-r from-[#FF416C] to-[#FF4B2B]"
                        : "bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]"
                    } 
    shadow-lg hover:scale-105 transform relative`}
                  > 
                    {/* Toggle Text */}
                    <span 
                      className={`absolute text-xs font-semibold text-white transition-all duration-300 ${
                        admin.isActive === 0
                          ? "left-1/3 transform -translate-x-1/2"
                          : "right-1/3 transform translate-x-1/2"
                      }`}
                    >
                      { admin.isActive === 0 ? "OFF" : "ON"}
                    </span>

                    <div
                    onClick={()=> {
                      setIsActive(admin.isActive === 0 ? true : false);
                    }}
                      className={`bg-white w-6 h-6 rounded-md shadow-2xl transform transition-transform duration-1000 ease-in-out ${
                        admin.isActive === 0
                          ? "translate-x-8 scale-110 rotate-[360deg]"
                          : "translate-x-0 scale-100 rotate-0"
                      }`}
                    />
                  </div>

                  {/* Message Icon */}
                  <div className="cursor-pointer">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Component (Make sure it's below the grid) */}
        {/* <div className="">
          <Pagination
            totalPosts={totalAdmins}
            postsPerPage={postsPerPage}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
            currentPage={currentPage}
          />
          
        </div> */}
          {/* Pagination Buttons */}
          <div className="flex justify-center items-center space-x-2 mt-4 p-3 w-full">
      {/* Previous Button */}
      <button
        className={`px-4 py-2 rounded-lg border transition-all text-sm md:text-base ${
          currentPage === 1
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-[#4D44B5] text-white border-[#4D44B5] hover:bg-[#4D44B5]"
        }`}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </button>

      {/* Page Numbers */}
      <div className="flex overflow-x-auto space-x-1 scrollbar-hide">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-2 rounded-lg transition-all border text-sm md:text-base ${
              currentPage === index + 1
                ? "bg-[#4D44B5] text-white border-[#4D44B5]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-[#4D44B5] hover:text-white"
            }`}
              onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        className={`px-4 py-2 rounded-lg border transition-all text-sm md:text-base ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-[#4D44B5] text-white border-[#4D44B5] hover:bg-[#4D44B5]" 
        }`}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
      </div>
    </div>
  );
};

export default TotalSchoolAdmins;
