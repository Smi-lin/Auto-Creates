import React from "react";
import { FaBox } from "react-icons/fa";

const HomeLoader = () => {
  return (
    <div className="bg-cover bg-center bg-opacity-50 min-h-screen flex flex-col justify-center items-center gap-5 text-white" style={{ backgroundImage: "url('https://images.pexels.com/photos/4968383/pexels-photo-4968383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
      <span className="text-gray-500 text-6xl">
        <FaBox />
      </span>
      <h1 className="text-4xl">ÀJọ</h1>
     <div className="w-6 h-6 spinner relative">
  <div className="w-full h-full border-2 border-blue-600 absolute top-0 left-0"></div>
  <div className="w-full h-full border-2 border-blue-600 absolute top-0 left-0 transform -rotate-180"></div>
  <div className="w-full h-full border-2 border-blue-600 absolute top-0 left-0 transform rotate-270"></div>
  <div className="w-full h-full border-2 border-blue-600 absolute top-0 left-0 transform -rotate-90"></div>
  <div className="w-full h-full border-2 border-blue-600 absolute top-0 left-0 transform rotate-90"></div>
  <div className="w-full h-full border-2 border-blue-600 absolute top-0 left-0 transform rotate-180"></div>
</div>

      <p className="text-white">Secure your financial future with <span className="text-blue-200">HayMilda!!</span></p>
      <div className="btn">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Save Now</button>
      </div>
    </div>
  );
};

export default HomeLoader;
