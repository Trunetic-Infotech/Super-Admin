import React, { useEffect, useState } from "react";
import { MoreHorizontal, MoreVertical, UserCircle } from "lucide-react";
import us from "../assets/user.svg";
import us1 from "../assets/User (2).svg";
import { Link } from "react-router-dom";
import axios from "axios";

const Home2 = ({ setSelectedComponent, isSidebarOpen, setIsSidebarOpen , data, setAdminProfileID,setAdminTotalStudents, setAdminTotalUsers}) => {
  console.log(data);
  
  // const adminData = [
  //   { id: "123456", students: 100, users: 600 },
  //   { id: "123457", students: 120, users: 620 },
  //   { id: "123458", students: 130, users: 630 },
  //   { id: "123459", students: 140, users: 640 },
  //   { id: "123460", students: 150, users: 650 },
  //   { id: "123461", students: 160, users: 660 },
  // ];

  const [adminData, setAdminData] = useState([]);

  const getAdminData = async()=>{
    try {
      const response = await axios.get(`${import.meta.env.VITE_URL}/super-admin/get-admin-data`)

      console.log(response);

      if(response.data && response.data.data){
        setAdminData(response.data.data)
      }
      
    } catch (error) {
      console.log(error);
      
    }
}

useEffect(()=>{
  getAdminData();
},[])

  const [checked, setChecked] = useState(false);
  return (
    <div>
      {/* Main Content */}
      <div className="w-full h-screen bg-gradient-to-br from-white via-[#4D44B5] to-[#4D44B5] flex flex-col p-4 ">
        <div className="flex ">
          <h1 className="text-2xl text-[#4D44B5]  font-bold lg:ml-0 ml-10">
            Dashboard
          </h1>
          <div className="flex justify-end items-center w-full  ">
            <h1 className="font-bold text-white  ">SUPER ADMIN</h1>
            <UserCircle className="w-7 h-7" />
          </div>
        </div>
        <div className="bg-white rounded-xl mt-10 px-10 py-6 shadow-md">
          <div className="flex items-center justify-between flex-wrap gap-6">
            {/* Card 1 */}
            <div className="flex items-center gap-4 min-w-[250px]">
              <img src={us} className="w-12 h-12" />
              <div>
                <h2 className="text-gray-400 font-semibold text-lg">
                  Total School Admins
                </h2>
                <p className="text-xl font-bold text-gray-800">{data.totalAdmins}</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 min-w-[250px]">
              <img src={us} className="w-12 h-12 " />
              <div>
                <h2 className="text-gray-400 font-semibold text-lg">
                  Total Users
                </h2>
                <p className="text-xl font-bold text-gray-800">{data.totalUsers}</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4 min-w-[250px]">
              <img src={us} className="w-12 h-12 " />
              <div>
                <h2 className="text-gray-400 font-semibold text-lg">
                  Total Students
                </h2>
                <p className="text-xl font-bold text-gray-800">{data.totalStudents}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl mt-10 h-auto p-6 shadow-md">
          <div className="flex flex-col gap-6">
            <div className="w-full">
              <h1 className="text-2xl font-semibold text-[#4D44B5] mb-6">
                LIST OF DETAILS
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {adminData.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition duration-300 border-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <img src={us1} className="w-7 h-7" />
                        <div>
                          <h1 className="text-md font-semibold">
                            {item.admin_name}
                          </h1>
                          <span className="text-sm text-[#4D44B5]">
                            ID {item.admin_id}
                          </span>
                        </div>
                      </div>
                      <div className="  top-3 right-3 cursor-pointer">
                        <MoreHorizontal
                          onClick={() =>{ setSelectedComponent("Admins Profile"); setAdminProfileID(item.admin_id); setAdminTotalStudents(item.totalStudents); setAdminTotalUsers(item.totalUsers.totalUsers)}}
                          className="w-6 h-6 text-black"
                        />
                      </div>
                    </div>

                    <div className="ml-2 space-y-2">
                      <div className="flex justify-between">
                        <h1 className="text-gray-600">Total Students</h1>
                        <span className="text-[#4D44B5] font-medium">
                          {item.totalStudents }
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <h1 className="text-gray-600">Total Users</h1>
                        <span className="text-[#4D44B5] font-medium">
                          {item.totalUsers.totalUsers}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setSelectedComponent("Total School Admins")}
                className="px-6 py-2 bg-[#4D44B5] text-white text-sm font-medium rounded-lg hover:bg-white hover:text-[#4D44B5] border border-[#4D44B5] transition duration-300"
              >
                Show More
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white mt-10 rounded-xl shadow p-6">
          <h1 className="text-lg font-semibold text-[#4D44B5]  mb-4">
            LIST OF NEW REQUEST
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="border-b-2 border-black">
                <tr>
                  <th className="p-3 border-2 border-black">User</th>
                  <th className="p-3 border-2 border-black">School Name</th>
                  <th className="p-3 border-2 border-black">Reg. No.</th>
                  <th className="p-3 border-2 border-black">Address</th>
                  <th className="p-3 border-2 border-black">Phone</th>
                  <th className="p-3 border-2 border-black">Date</th>
                  <th className="p-3 border-2 border-black">Payment Status</th>
                  <th className="p-3 border-2 border-black">Receipt</th>
                  <th className="p-3 border-2 border-black text-center">
                    Service
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-2 border-black hover:bg-gray-50">
                  <td className="p-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src={us1}
                      alt="User Icon"
                    />
                  </td>
                  <td className="p-3 border-2 border-black">
                    Patel School Admins
                  </td>
                  <td className="p-3 border-2 border-black">REG20250412</td>
                  <td className="p-3 border-2  border-black">
                    Tanwar,Kausa Mumbra Thane-400612
                  </td>
                  <td className="p-3 border-2 border-black">+91 98765 43210</td>
                  <td className="p-3 border-2 border-black">12 April 2025</td>
                  <td className="p-3 border-2 border-black font-bold">
                    SUCCESSFUL
                  </td>
                  <td className="px-4  border-2 border-black   py-2">
                    <button
                      // onClick={() => deleteStudent(student.id)}
                      className="bg-[#4D44B5] text-white px-2 py-1 rounded border-2 border-black  text-xs"
                    >
                      View Receipt
                    </button>
                  </td>
                  <td className="p-2 text-center">
                    <div
                      onClick={() => setChecked(!checked)}
                      className={`w-15 h-68 flex items-center justify-start p-1 cursor-pointer rounded-md transition-all duration-300 ease-in-out 
      ${
        checked
          ? "bg-gradient-to-r from-[#FF416C] to-[#FF4B2B]"
          : "bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]"
      } 
      shadow-lg hover:scale-105 transform relative`}
                    >
                      {/* Text inside toggle */}
                      <span
                        className={`absolute text-sm font-semibold text-white transition-all duration-300 ${
                          checked
                            ? "left-1/3 transform -translate-x-1/2"
                            : "right-1/3 transform translate-x-1/2"
                        }`}
                      >
                        {checked ? "OFF" : "ON"}
                      </span>

                      <div
                        className={`bg-white lg:w-6 h-6 w-4   rounded-md shadow-2xl transform transition-transform duration-1000 ease-in-out
        ${
          checked
            ? "lg:translate-x-9 translate-x-6 scale-110 rotate-[360deg]"
            : "translate-x-0 scale-100 rotate-0"
        }
      `}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
