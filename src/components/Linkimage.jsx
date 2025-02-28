import React from "react";
import { Link } from "react-router-dom";
import { 
  FaBriefcase, FaGraduationCap, FaBuilding, FaLightbulb, FaHome, 
 FaLaptop, FaCar, FaHeartbeat, FaMoneyBillWave, 
  FaHandsHelping, FaHammer 
} from "react-icons/fa";

const links = [
  { name: "Business", icon: <FaBriefcase /> },
  { name: "Education", icon: <FaGraduationCap /> },
  { name: "Personal Needs", icon: <FaBuilding /> },
  { name: "Invention", icon: <FaLightbulb /> },
  { name: "To Buy Home", icon: <FaHome /> },
  { name: "Home Appliance", icon: <FaHome /> },
  { name: "Technology", icon: <FaLaptop /> },
  { name: "Automobile", icon: <FaCar /> },
  { name: "Healthcare", icon: <FaHeartbeat /> },
  { name: "Debt", icon: <FaMoneyBillWave /> },
  { name: "Personal Assistance", icon: <FaHandsHelping /> },
  { name: "Renovation", icon: <FaHammer /> }
];

const LinkImage = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">
        FUNDING CATEGORIES
      </h1>
      <p className="text-lg text-center text-gray-700 mb-8">
        You'll have access to over 20,000 applications to apply to!
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {links.map((link, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-6 shadow-md cursor-pointer hover:bg-gray-200 transition duration-300"
          >
            <div className="text-4xl text-blue-600 mb-2">{link.icon}</div>
            <p className="text-lg font-semibold text-gray-700">{link.name}</p>
            <Link 
              to='/form'
              className="text-sm text-blue-500 hover:underline mt-1"
            >
              Click here
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkImage;
