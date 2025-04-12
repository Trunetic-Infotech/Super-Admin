import React, { useState } from 'react';
import us1 from "../assets/User (2).svg";

const ServiceComplaint = ({ setSelectedComponent }) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    const newStatus = !checked;
    setChecked(newStatus);
    alert(`Complaint marked as ${newStatus ? "Resolved" : "Pending"}`);
  };

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
                <th className="p-3">User</th>
                <th className="p-3">School Name</th>
                <th className="p-3">Reg. No.</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Date</th>
                <th className="p-3">Complaint</th>
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
                <td className="p-3">+91 98765 43210</td>
                <td className="p-3">12 April 2025</td>
                <td className="p-3">Parent not getting notification</td>
                <td className="p-3 text-center">
                  <div onClick={handleToggle} className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${checked ? "bg-red-500" : "bg-gray-300"}`}>
                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${checked ? "translate-x-5" : "translate-x-0"}`} />
                  </div>
                  <div className="text-xs font-medium mt-1">
                    {checked ? "✅ Resolved" : "⏳ Pending"}
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
