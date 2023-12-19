import React from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Password = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <>
      <span className="px-1 text-md text-gray-600">{props.label}</span>
      <div className="relative">
        <input
          {...props}
          type={showPassword ? "text" : "password"}
          className={`text-sm block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none ${props.className}`}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
          {showPassword ? (
            <AiOutlineEye
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-500 cursor-pointer"
            />
          ) : (
            <AiOutlineEyeInvisible
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-500 cursor-pointer"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Password;
