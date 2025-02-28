import React from "react";
import image from "../assets/images/build.jpeg";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { FaUser, FaHandshake, FaBuilding, FaUniversity } from "react-icons/fa";
import logo from "../assets/images/logo.jpeg";

const First = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex flex-col 
      items-center justify-center text-center px-4 md:px-8"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Header (Positioned Left) */}
      <div className="absolute top-4 left-4 flex items-center gap-4 text-white">
        <img
          src={logo}
          alt="Federal Government Logo"
          className="w-12 sm:w-16 md:w-20 rounded-full"
        />
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
          Federal Government Grant
        </h1>
      </div>

      {/* Content Box */}
      <div className="relative z-10 max-w-3xl px-4 text-white mt-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
          Applications are NOW Available!
        </h2>
        <p className="text-sm sm:text-lg md:text-xl text-gray-200 leading-relaxed">
          Each year, billions of dollars are awarded to individuals and
          businesses in the form of grants and other types of funding.
          <span className="text-white font-bold">
            {" "}
            Apply for YOUR Grant today!
          </span>
        </p>
      </div>

      {/* Funding Options */}
      <article className="relative z-10 w-full max-w-4xl px-4 md:px-6 flex flex-col items-center text-white mt-10">
        <p className="text-sm sm:text-lg md:text-xl mb-6">
          <span className="font-bold">Let's get started!</span> Select your type
          of funding:
        </p>

        {/* Cards Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full justify-center">
          {[
            {
              icon: <LuBriefcaseBusiness className="text-blue-400" />,
              text: "Business",
            },
            { icon: <FaUser className="text-green-400" />, text: "Personal" },
            {
              icon: <FaHandshake className="text-yellow-400" />,
              text: "Community",
            },
            {
              icon: <FaBuilding className="text-red-400" />,
              text: "Real Estate",
            },
            {
              icon: <FaUniversity className="text-purple-400" />,
              text: "Education",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white/20 p-4 rounded-lg shadow-lg hover:bg-white/30 transition duration-300 cursor-pointer w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
            >
              <div className="text-3xl md:text-4xl">{item.icon}</div>
              <p className="text-xs sm:text-sm md:text-base mt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default First;
