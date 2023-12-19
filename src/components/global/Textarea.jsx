import React from "react";

const Textarea = (props) => {
  return (
    <textarea
      {...props}
      className={`text-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none ${props.className}`}
    />
  );
};

export default Textarea;
