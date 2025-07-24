import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-100 px-4 text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">
        403 - Unauthorized Access
      </h1>
      <p className="text-lg text-gray-700 mb-6 ">
        You do not have permission to view this page. Your session may have expired or you are not logged in.
        Please log in with appropriate credentials to access this content.
      </p>
      <button
        onClick={handleLoginRedirect}
        className="bg-[#4D44B5] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#3a33a1] transition duration-200"
      >
        Go to Login
      </button>
    </div>
  );
};

export default Unauthorized;
