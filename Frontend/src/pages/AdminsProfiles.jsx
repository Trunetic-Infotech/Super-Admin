import React from 'react'
import MainDashBoard from '../component/MainDashBoard'

const AdminsProfiles = () => {
  return (
    <div className='flex  items-center justify-center border-shadow h-full '>
        
      <div className=" w-[70%] h-[55%] mx-auto p-6 bg-[#4D44B5] rounded-lg   shadow-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-white  text-2xl md:text-3xl font-bold text-shadow">
            Queens School Admin
          </p>
        </div>
    
        {/* Profile Section */}
        <div className="grid grid-cols-1  gap-6 items-center">
          {/* Profile Picture */}
          <div className="flex flex-col items-center">
            <label className="text-lg font-semibold text-white mb-2">
              Profile Picture
            </label>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
              alt="Profile"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg"
            />
          </div>
    
          {/* Teacher Details */}
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 lg:gap-4 md:gap-3 gap-3 ">
            {[
              { label: "school_id", value: "1234" },
              { label: "Contact No", value: "+91 XXXXXXXXXX" },
              { label: "Register_no", value: "20000" },
              { label: "Email ID", value: "xyz@gmail.com" },
              { label: "Total_student", value: "500" },
              { label: "Totol_user", value: "1000" },
              { label: "School Join ?", value: "12-march-2025" },
              { label: "Address", value: "Thane, Mumbra" },
              
          
 
            ].map((item, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-white font-medium">{item.label}</label>
                <p className="text-white font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
    
    
        <div className="absolute bottom-0 right-0 flex gap-2">
          <div className="circle9 relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
            <div className="circle8 absolute w-12 h-12 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36"></div>
            <div className="circle7 absolute w-8 h-8 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminsProfiles
