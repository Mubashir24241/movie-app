// src/components/Shimmer.js
import React from 'react';

const Shimmer = () => {
  return (
    <div className="border p-4 rounded shadow-md animate-pulse bg-gray-200">
      {/* Image placeholder */}
      <div className="h-48 bg-gray-300 rounded-md mb-4"></div>

      {/* Title placeholder */}
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>

      {/* Status placeholder */}
      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default Shimmer;
