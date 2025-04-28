import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ln from  '../assets/logo.png';

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    // Optional: You can add further validation here (like regex for email)

    // Clear error and redirect to dashboard
    setError("");
    navigate("/main-dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4D44B5] via-white to-[#4D44B5] px-4">
      <div className="w-full max-w-3xl h-[55vh] bg-white rounded-xl shadow-md border border-gray-200 flex flex-col md:flex-row overflow-hidden">
        
        {/* Left: Login Form */}
        <div className="w-full md:w-1/2  p-10">
          <h2 className="text-[#4D44B5] text-2xl font-semibold text-center mb-6">
            Super Admin Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold text-[#4D44B5] mb-2">
                Super Admin Name
              </label>
              <input
                type="text"
                name="supersadminname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full text-sm p-2 border border-[#4D44B5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D44B5]"
                placeholder="Enter Name"
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-sm font-bold text-[#4D44B5] mb-2">
                Super Admin Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full text-sm p-2 border border-[#4D44B5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D44B5]"
                placeholder="Enter Your Email"
              />
            </div>
  
            <div className="mb-6">
              <label className="block text-sm font-bold text-[#4D44B5] mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full text-sm p-2 border border-[#4D44B5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D44B5]"
                placeholder="Enter Your Password"
              />
            </div>
  
            {error && (
              <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
            )}
  
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-[#4D44B5] hover:bg-[#3b36a7] text-white font-bold rounded-full transition duration-200"
              >
                Login
              </button>
            </div>
          </form>
        </div>
  
        {/* Right: Logo / Branding */}
        <div className="w-full md:w-1/2 bg-[#4D44B5] flex flex-col items-center justify-center p-6 text-white">
          <img
            src={ln} // <-- Replace with your actual logo path
            alt="Trunetic Logo"
            className="w-30 h-30 mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">Trunetic Infotech</h3>
          <p className="text-center max-w-xs">
            Welcome Super Admin! Manage your dashboard, control users, and monitor analytics all from one secure place.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
