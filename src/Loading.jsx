import React from "react";

function Loading({ width, height, color }) {
  return (
    <div className="spinner-overlay">
      <div
        className="spinner-container"
        style={{ width: width, height: height, borderTopColor: color }}></div>
    </div>
  );
}

export default Loading;
