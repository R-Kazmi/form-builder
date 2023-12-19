import React from "react";

const Checkbox = (props) => {
  return (
    <>
      <div className={`flex ${props.options.length > 1 ? "flex-col" : ""} `}>
        <span className="mr-1 text-sm text-gray-600">{props.label}</span>
        {props.options.map((option, index) => (
          <label key={index} className="flex items-center text-sm">
            <input
              type="checkbox"
              name={props.name}
              value={option.value}
              {...props}
              className={`accent-green-500 mr-1 ${props.className}`}
            />
            {option.label}
          </label> 
        ))}
      </div>
    </> 
  );
};

export default Checkbox;
