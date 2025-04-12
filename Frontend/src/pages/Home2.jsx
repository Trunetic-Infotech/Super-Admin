import React, { useState } from "react";
import { MoreHorizontal, MoreVertical, UserCircle } from "lucide-react";
import us from "../assets/user.svg";
import us1 from "../assets/User (2).svg";
import { Link } from "react-router-dom";

const Home2 = ({ setSelectedComponent }) => {
  const adminData = [
    { id: "123456", students: 100, users: 600 },
    { id: "123457", students: 120, users: 620 },
    { id: "123458", students: 130, users: 630 },
    { id: "123459", students: 140, users: 640 },
    { id: "123460", students: 150, users: 650 },
    { id: "123461", students: 160, users: 660 },
  ];

  const [checked, setChecked] = useState(false);
  return (
    <div>
      {/* Main Content */}
      <div className="w-full h-screen bg-gray-200 flex flex-col p-4">
        <div className="flex">
          <h1 className="text-2xl text-[#4D44B5]  font-bold">Dashboard</h1>
          <div className="flex justify-end items-center w-full  ">
            <h1 className="font-bold text-[#4D44B5]  ">SUPER ADMIN</h1>
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
                <p className="text-xl font-bold text-gray-800">50</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center gap-4 min-w-[250px]">
              <img src={us} className="w-12 h-12 " />
              <div>
                <h2 className="text-gray-400 font-semibold text-lg">
                  Total Users
                </h2>
                <p className="text-xl font-bold text-gray-800">20,000</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center gap-4 min-w-[250px]">
              <img src={us} className="w-12 h-12 " />
              <div>
                <h2 className="text-gray-400 font-semibold text-lg">
                  Total Students
                </h2>
                <p className="text-xl font-bold text-gray-800">10,000</p>
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
                    className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <img src={us1} className="w-7 h-7" />
                        <div>
                          <h1 className="text-md font-semibold">
                            QUEEN SCHOOL ADMINS
                          </h1>
                          <span className="text-sm text-[#4D44B5]">
                            ID {item.id}
                          </span>
                        </div>
                      </div>
                      <div className="  top-3 right-3 cursor-pointer">
                        <MoreHorizontal
                          onClick={() => setSelectedComponent("Admins Profile")}
                          className="w-6 h-6 text-black"
                        />
                      </div>
                    </div>

                    <div className="ml-2 space-y-2">
                      <div className="flex justify-between">
                        <h1 className="text-gray-600">Queen Total Students</h1>
                        <span className="text-[#4D44B5] font-medium">
                          {item.students}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <h1 className="text-gray-600">Total Users</h1>
                        <span className="text-[#4D44B5] font-medium">
                          {item.users}
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
              <thead className="border-b-2">
                <tr>
                  <th className="p-3">User</th>
                  <th className="p-3">School Name</th>
                  <th className="p-3">Reg. No.</th>
                  <th className="p-3">Address</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Date</th>
                  <th className="p-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <img
                      className="w-6 h-6 rounded-full"
                      src={us1}
                      alt="User Icon"
                    />
                  </td>
                  <td className="p-3">Patel School Admins</td>
                  <td className="p-3">REG20250412</td>
                  <td className="p-3">Tanwar,Kausa Mumbra Thane-400612</td>
                  <td className="p-3">+91 98765 43210</td>
                  <td className="p-3">12 April 2025</td>
                  <td className="p-3 text-center">
                    <div
                      onClick={() => setChecked(!checked)}  
                      className={`w-12 h-6 flex items-center justify-start p-1 cursor-pointer transition-all duration-700 ${
                        checked ? "bg-red-500" : "bg-purple-300"
                      }`}
                    >
                      <div
                        className={`bg-white w-4 h-4 shadow-md transform transition-transform duration-700 ${
                          checked ? "translate-x-6" : "translate-x-0"
                        }`}
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
