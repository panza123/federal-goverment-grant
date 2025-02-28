
import React from "react";
import { Link } from "react-router-dom";

const Text1 = () => {
  return (
    <div className="w-full mx-auto p-6 py-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Funding Opportunities
      </h1>
      <div className="grid md:grid-cols-2 gap-6 text-gray-700">
        <p className="leading-relaxed">
          It's a documented fact that Billions of Dollars in Free Money are
          donated every year by American Corporate Giving Programs, Foundations,
          and other Charitable Institutions, Individuals, and Other Agencies.
          We read daily about gigantic sums of funding being given to businesses
          and individuals, just like you, to help them fulfill their goals and
          dreams, but oftentimes these people will not tell you HOW or WHERE
          they got this funding. In order to know HOW and WHERE to tap into
          these vast treasures, don't sit around and hope you hear it through
          the grapevine—find out yourself with the help of Federal Government
          Grants.
        </p>
        <p className="leading-relaxed">
          Many funding opportunities are awarded for projects and businesses
          for general operating expenses and other capital, such as a new
          building or major pieces of equipment. Sometimes you can also include
          inventory, salaries, labor, advertising, marketing, etc. Also, remember
          that most funding is not available for personal expenses or paying off
          debt
          
        </p>
      </div>

      {/* Box with Styled Button */}
      <div className="mt-6 flex justify-center">
        <Link
          to='/form'
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Start the Application Process Today
        </Link>
      </div>
    </div>
  );
};

export default Text1;
