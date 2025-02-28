import React from 'react';
import prove1 from '../assets/images/prove1.jpeg';
import prove2 from '../assets/images/prove2.jpeg';
import video1 from '../assets/images/video.mp4';
import video2 from '../assets/images/video2.mp4';

const Display = () => {
  return (
    <div className="w-full px-4 py-8 bg-gray-100 mt-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Proves</h2>

      {/* Grid Layout for Images & Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Images */}
        <div className="w-full h-64 overflow-hidden rounded-lg shadow-md">
          <img src={prove1} alt="Proof 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-full h-64 overflow-hidden rounded-lg shadow-md">
          <img src={prove2} alt="Proof 2" className="w-full h-full object-cover" />
        </div>

        {/* Videos */}
        <div className="w-full h-64 overflow-hidden rounded-lg shadow-md">
          <video
            src={video1}
            controls
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-64 overflow-hidden rounded-lg shadow-md">
          <video
            src={video2}
            controls
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Display;
