import React from 'react'

const Text = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 mt-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-6">
        Purpose of the Grant
      </h1>
      
      <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
        The primary aim of this grant is to empower individuals and organizations to 
        implement projects that align with our strategic priorities. These priorities 
        include <span className="font-semibold text-blue-600">helping all American citizens</span>, 
        enhancing investments, education, fostering economic growth, promoting public health 
        by assisting with medical bills, and supporting sustainable practices.
      </p>
    </div>
  )
}

export default Text