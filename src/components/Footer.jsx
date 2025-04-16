import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <h2 className="text-lg sm:text-xl font-semibold mb-3">
          Get in touch with us, and an agent will be assigned to you
        </h2>
        <p className="text-base sm:text-lg mb-4">Contact: <span className="flex items-center justify-center gap-2 text-lg sm:text-xl">
          <FaPhoneAlt /> 1-202-642-6366
        </span></p> 

        {/* Email Section */}
        <a 
          href="mailto:agentgarypeters@gmail.com" 
          className="flex items-center justify-center gap-2 text-lg sm:text-xl hover:text-blue-400 transition-colors mb-4"
        >
          <FaEnvelope /> Email us at agentgarypeters@gmail.com
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4 mb-6">
          <a href="https://www.facebook.com/share/14Kb3TcrmGg/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-blue-500 transition-all">
            <FaFacebook />
          </a>
          <a href="https://wa.me/2026426366" target="_blank" rel="noopener noreferrer" className="text-2xl sm:text-3xl hover:text-green-500 transition-all">
            <FaWhatsapp />
           
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-6 border-t border-gray-700 pt-4">
        <p className="text-sm sm:text-base">
          &copy; 2019 Federal Government Grant | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
