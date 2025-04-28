import React, { useState } from "react";
import us1 from "../assets/User (2).svg";

const ServiceComplaint = ({ setSelectedComponent }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <div className="bg-white mt-10 rounded-xl shadow p-6">
        <h1 className="text-lg font-semibold text-[#4D44B5] mb-4">
          LIST OF SERVICE COMPLAINT
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="border-b-2">
              <tr>
                <th className="p-3 border-2 border-black">User</th>
                <th className="p-3 border-2 border-black">School Name</th>
                <th className="p-3 border-2 border-black">Reg. No.</th>
                <th className="p-3 border-2 border-black">Phone</th>
                <th className="p-3 border-2 border-black">Date</th>
                <th className="p-3 border-2 border-black">Complaint</th>
                <th className="p-3 text-center border-2 border-black ">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-2 border-black hover:bg-gray-50">
                <td className="p-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={us1}
                    alt="User Icon"
                  />
                </td>
                <td className="p-3 border-2 border-black">Patel School Admins</td>
                <td className="p-3 border-2 border-black">REG20250412</td>
                <td className="p-3 border-2 border-black">+91 98765 43210</td>
                <td className="p-3 border-2 border-black">12 April 2025</td>
                <td className="p-3 border-2 border-black">Parent not getting notification</td>
                <td className="p-3  border-2 border-black text-center">
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
                      className={`bg-white lg:w-6 h-6 w-3   rounded-md shadow-2xl transform transition-transform duration-1000 ease-in-out
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
  );
};

export default ServiceComplaint;
