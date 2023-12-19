import React from "react";

const Radio = (props) => {
  return (
    <>
      <label className="text-sm text-gray-600">{props.label} : </label>
      {props.options.map((option, index) => (
        <label className="flex items-center text-sm" key={index}>
          <input
            type="radio"
            name={props.name}
            value={option.value}
            {...props}
            className={`mr-2 ${props.className}`}
          />
          {option.label}
        </label>
      ))}
    </>
  );
};

export default Radio;
