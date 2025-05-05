import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';


const AdminsProfiles = ({adminProfileID, adminTotalUsers, adminTotalStudents}) => {
  const [adminData, setAdminData] = useState([]);
  const fetchAdminData = async()=>{
    try {
      const response = await axios.get(`${import.meta.env.VITE_URL}/admin/profile/${adminProfileID}`)

      console.log(response);
      if(response.data && response.data.user){
        setAdminData(response.data.user);
      }else{
        toast.error(response.data.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong!");

      
    }
  }

  useEffect(()=>{
    if(adminProfileID){
      fetchAdminData();
    }
  },[])
  return (
    <div className='flex  items-center justify-center border-shadow h-full bg-gradient-to-br from-white via-[#4D44B5] to-white '>
        
      <div className=" lg:w-[70%] lg:h-[55%] w-[90%] h-[55%] lg:p-6 bg-white rounded-lg   shadow-lg border-shadow">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-[#4D44B5]  text-md lg:text-3xl font-bold text-shadow">
            {adminData ? adminData.name : "Loading..."}
          </p>
        </div>
    
        {/* Profile Section */}
        <div className="grid grid-cols-1  gap-6 items-center">
          {/* Profile Picture */}
          <div className="flex flex-col items-center">
            <label className="lg:text-lg text-sm font-semibold text-[#4D44B5] mb-2">
              Profile Picture
            </label>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
              alt="Profile"
              className="lg:w-40 lg:h-40 md:w-48 md:h-48 w-20 h-20 rounded-full border-4 border-[#4D44B5] shadow-lg"
            />
          </div>
    
          {/* Super Admin          Details */}
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 lg:gap-4 md:gap-3 gap-3 items-center text-center ">
            {[
              { label: "school_id", value: adminData ?  adminData.id : "Loading..." },
              { label: "Contact No", value: adminData ?  adminData.phone_number : "Loading..." },
              { label: "Register_no", value: adminData ?  adminData.organization_Registration_Number : "Loading..." },
              { label: "Email ID", value: adminData ?  adminData.email : "Loading..." },
              { label: "Total_student", value: adminData ?  adminTotalStudents : "Loading..." },
              { label: "Totol_user", value: adminData ?  adminTotalUsers : "Loading..." },
              { 
                label: "School Join ?", 
                value: adminData 
                  ? new Date(adminData.created_at).toLocaleDateString('en-GB') 
                  : "Loading..." 
              },
              
              { label: "Address", value: adminData ?  adminData.address : "Loading..." },
              
          
 
            ].map((item, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-[#4D44B5] font-medium">{item.label}</label>
                <p className="text-[#4D44B5] font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
    
    
        {/* <div className="absolute bottom-0 right-0 flex gap-2">
          <div className="circle9 relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
            <div className="circle8 absolute w-12 h-12 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"></div>
            <div className="circle7 absolute w-8 h-8 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"></div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default AdminsProfiles;
