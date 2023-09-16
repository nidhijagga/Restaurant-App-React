import React from "react";

const Input = (props) => {
  return (
    <div className="mb-2">
      <label htmlFor={props.input.id} className="block font-semibold text-red-700 mb-2">
        {props.label}
      </label>
      <input
        {...props.input}
        className="border rounded py-1 px-2 w-14 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
};

export default Input;
