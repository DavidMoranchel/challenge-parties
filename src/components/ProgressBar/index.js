import React from "react";

// CSS
import "./ProgressBar.css";

export default function ProgressBar({ progress, teamTitle, backgroundColor }) {

  const pixelProgress = (progress * 300) / 100;
  console.log(pixelProgress);
  return (
    <div className="ProgressBar-container">
      <h2>{teamTitle}</h2>
      <div className="ProgressBar">
        <div
          className="ProgressBar-filler"
          style={{
            width: `${pixelProgress}px`,
            backgroundColor: backgroundColor,
          }}
        ></div>
      </div>
    </div>
  );
}
