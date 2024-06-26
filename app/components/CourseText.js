import React from "react";

const CourseText = ({ text }) => {
  return (
    <div className="text-sm flex gap-2">
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          id="Tick"
          style={{ width: "20px" }}
        >
          <path
            d="M16,30A14,14,0,1,1,30,16,14,14,0,0,1,16,30ZM16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4ZM14.66,20.75l9-8-1.32-1.5L14,18.63,9.71,14.29,8.29,15.71l5,5A1,1,0,0,0,14,21,1,1,0,0,0,14.66,20.75Z"
            fill="#d85b53"
            className="color000000 svgShape"
          ></path>
        </svg>
      </p>
      <span className="ml-1 text-gray-600 ">{text}</span>{" "}
    </div>
  );
};

export default CourseText;
