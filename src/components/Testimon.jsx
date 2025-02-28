import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  { text: "I applied for the grant and received my funds within a month!", name: "John Doe" },
  { text: "The process was smooth, and I got the support I needed for my business.", name: "Jane Smith" },
  { text: "I never thought I would qualify, but the federal grant helped me start fresh.", name: "Michael Johnson" },
  { text: "This grant changed my life! I recommend it to everyone in need.", name: "Sarah Williams" },
  { text: "Thanks to the government, I could pay my bills and invest in my future.", name: "David Brown" },
  { text: "Easy process, great support! The funds came just in time.", name: "Emma Wilson" },
];

const Testimon = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 w-full max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">What People Say</h2>
      <div className="overflow-hidden w-full max-w-4xl relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * (100 / 3)}%)`, width: `${(testimonials.length * 100) / 3}%` }}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
            <div
              key={i}
              className="w-[300px] min-w-[300px] p-8 bg-white text-gray-900 shadow-lg rounded-lg text-center text-lg font-medium mx-2 border border-gray-300 flex flex-col justify-between h-[250px]"
            >
              <p className="mb-6 italic text-gray-700">"{testimonial.text}"</p>
              <p className="font-bold text-xl text-blue-600">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-8 gap-8">
        <button
          onClick={prevTestimonial}
          className="p-5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-transform transform hover:scale-110 shadow-lg"
        >
          <FaChevronLeft size={28} />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-transform transform hover:scale-110 shadow-lg"
        >
          <FaChevronRight size={28} />
        </button>
      </div>
    </div>
  );
};

export default Testimon;
