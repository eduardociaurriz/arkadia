import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <FaSpinner className="spinner" size={50} />
        <p>Loading content</p>
      </div>
    </div>
  );
};

export default Loading;
