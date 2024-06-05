import React from "react";

const CountBox = ({ time, label }) => {
  return (
    <div className="text-center p-3 border-2 border-black w-full rounded-lg text-black bg-white">
      <p className="text-2xl">{time}</p>
      <p className="text-xs font-bold mt-1">{label}</p>
    </div>
  );
};

export default CountBox;
