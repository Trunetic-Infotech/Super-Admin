

import React, { useEffect, useState } from "react";
import us1 from "../assets/User (2).svg";
import toast from "react-hot-toast";
import axios from "axios";

const ServiceComplaint = ({ setSelectedComponent }) => {
  const [complaints, setComplaints] = useState([]);

  

  const getAllComplaints = async () => {
    try {
      console.log("Hello");
      
      const response = await axios.get(
        `${import.meta.env.VITE_URL}/super-admin/get-all-complaints`
      );
      if (response.data && response.data.data) {
        setComplaints(response.data.data);
        console.log(response.data.data);
        
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

 
  

  const cycleStatus = (current) => {
    if (current === "Pending") return "In Progress";
    if (current === "In Progress") return "Resolved";
    return "Pending";
  };

  const handleStatusCycle = async (id, currentStatus) => {
    const newStatus = cycleStatus(currentStatus);
    try {
      console.log("Clicked:", id, currentStatus);

      const response = await axios.put(
        `${import.meta.env.VITE_URL}/super-admin/update-complaint-status/${id}`,
        { status: newStatus }
      );
      console.log(response);
      
      if (response.data.success) {
        toast.success(response.data.message);
        await getAllComplaints();
  
        // ✅ Optimistically update the UI
        // setComplaints((prev) =>
        //   prev.map((c) =>
        //     c.id === id ? { ...c, status: newStatus } : c
        //   )
        // );
      } else {
        toast.error(response.data.message || "Failed to update status");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Server error");
    }
  };
  
  
  useEffect(() => {
    getAllComplaints();
  }, []);

  return (
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
              <th className="p-3 text-center border-2 border-black">Status</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => (
              <tr
                key={complaint.id}
                className="border-2 border-black hover:bg-gray-50"
              >
                <td className="p-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={us1}
                    alt="User Icon"
                  />
                </td>
                <td className="p-3 border-2 border-black">
                  {complaint.organization_name}
                </td>
                <td className="p-3 border-2 border-black">
                  {complaint.organization_Register_number}
                </td>
                <td className="p-3 border-2 border-black">
                  {complaint.contact_number}
                </td>
                <td className="p-3 border-2 border-black">
                  {new Date(complaint.complaint_time).toLocaleDateString("en-GB")}
                </td>
                <td className="p-3 border-2 border-black">
                  {complaint.description}
                </td>
                <td className="p-3 border-2 border-black text-center">
                  <div
                    onClick={() =>
                      handleStatusCycle(complaint.id, complaint.status)
                    }
                    className={`w-full max-w-[180px] mx-auto flex items-center p-1 cursor-pointer rounded-md transition-all duration-300 ease-in-out
                      shadow-lg hover:scale-105 relative h-10
                      ${
                        complaint.status === "Pending"
                          ? "bg-gradient-to-r from-[#FF416C] to-[#FF4B2B]"
                          : complaint.status === "In Progress"
                          ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
                          : "bg-gradient-to-r from-green-400 to-green-600"
                      }
                    `}
                  >
                    {/* Toggle Labels */}
                    <div className="flex justify-between w-full px-2 text-white text-[10px] sm:text-xs font-semibold z-10">
                      <span>Pending</span>
                      <span>In Progress</span>
                      <span>Resolved</span>
                    </div>

                    {/* Toggle Ball */}
                    <div
                      className="absolute top-[4px] bottom-[4px] w-1/3 transition-all duration-500 ease-in-out"
                      style={{
                        left:
                          complaint.status === "Pending"
                            ? "0%"
                            : complaint.status === "In Progress"
                            ? "33.33%"
                            : "66.66%",
                      }}
                    >
                      <div className="bg-white h-full mx-1 rounded-md shadow-2xl flex items-center justify-center text-[10px] sm:text-xs font-bold text-black">
                        {complaint.status}
                      </div>
                    </div>
                  </div>
                </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceComplaint;
