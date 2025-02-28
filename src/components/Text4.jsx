import React from "react";
import { Link } from "react-router-dom";

const Text4 = () => {
  return (
    <div className="min-h-screen mx-auto p-6 text-center
     bg-gray-50 dark:bg-gray-900 dark:text-white ">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        We've recently added the following number of applications:
      </h1>

      <div className="bg-blue-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <p className="text-lg sm:text-xl font-semibold mb-2">
          Last 7 Days: <span className="text-blue-600 dark:text-blue-400">610 new applications</span>
        </p>
        <p className="text-lg sm:text-xl font-semibold mb-2">
          Last 30 Days: <span className="text-blue-600 dark:text-blue-400">2,911 new applications</span>
        </p>
        <p className="text-lg sm:text-xl font-semibold mb-2">
          Last 90 Days: <span className="text-blue-600 dark:text-blue-400">9,137 new applications</span>
        </p>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold mt-6">Get your piece of the funding pie.</h2>

      <p className="text-gray-700 dark:text-gray-300 mt-4 text-base sm:text-lg leading-relaxed">
        Don't worry about your present financial situation. Funding applications
        do not require collateral, credit checks, security deposits, or co-signers.
        You can apply even if you have a bankruptcy.
      </p>

      {/* CTA Button */}
      <div className="mt-6 flex justify-center">
        <Link
          to="/form"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Start the Application Process Today
        </Link>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mt-6 text-base sm:text-lg">
        Don't wait. The money you need may be given to your neighbor if they qualify!
      </p>
    </div>
  );
};

export default Text4;
