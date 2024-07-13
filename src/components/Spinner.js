import React from "react";
import "./Spinner.css"
export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="custom-loader"></div>
    </div>
  );
}
