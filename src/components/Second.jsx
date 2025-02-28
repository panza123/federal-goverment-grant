import React from "react";

const Second = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center text-center px-6 py-16 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-amber-900 mb-6">
        Here's how it works
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl max-w-3xl text-gray-800 leading-relaxed">
        Federal Government Grant Applications is an online funding system that
        provides access to over <span className="font-bold text-amber-900">20,000 APPLICATION SOURCES</span>, 
        including grants.
      </p>

      {/* Illustration or Additional Content Section */}
      <div className="w-full max-w-5xl mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <span className="text-5xl">📝</span>
          <h3 className="text-xl font-semibold mt-4">Apply Online</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Complete your application through our seamless online portal.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <span className="text-5xl">📩</span>
          <h3 className="text-xl font-semibold mt-4">Get Notified</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Receive updates and notifications regarding your application status.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <span className="text-5xl">💰</span>
          <h3 className="text-xl font-semibold mt-4">Receive Funding</h3>
          <p className="text-gray-600 mt-2 text-sm">
            If eligible, funds will be disbursed directly to you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Second;
