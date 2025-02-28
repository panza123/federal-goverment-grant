import React from "react";
import value from "../assets/images/value.jpeg";

const Text2 = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16 mt-6 bg-gray-50 rounded-xl shadow-lg">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image section */}
        <div className="relative w-full h-72 md:h-[450px] overflow-hidden rounded-xl shadow-md">
          <img
            src={value}
            alt="Grant Value"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="text-gray-700 p-4">
          <h1 className="text-4xl font-extrabold text-center md:text-left mb-6 text-gray-900">
            Grant Value
          </h1>

          <p className="leading-relaxed text-lg text-gray-600">
            We are pleased to inform you about the grant opportunity available
            through our government program. This grant is designed to support
            innovative projects that address critical needs of our applicants
            and promote overall economic development.
          </p>
          <p className="leading-relaxed text-lg mt-6 text-gray-600">
            The value of the grant you are eligible for ranges from{" "}
            <span className="font-semibold text-blue-600">$90,000</span> upward, depending on
            the specific nature and scope of your project. This funding is
            intended to provide financial support to help you achieve your
            objectives, whether that involves personal development, research,
            community development, educational programs, or technological
            advancements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Text2;
