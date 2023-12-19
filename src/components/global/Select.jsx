import React from "react";

const Select = (props) => {
  return (
    <select
      {...props}
      className={`text-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none ${props.className}`}
    >
      <option value="">{props.label}</option>
      {props.options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
