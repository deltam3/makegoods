import React from "react";

const Input = (props) => {
  return (
    <input
      {...props}
      className="rounded-sm border border-gray-300 bg-gray-100 p-2.5 shadow-sm"
    />
  );
};

export default Input;
