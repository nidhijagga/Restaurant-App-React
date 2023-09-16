import React from "react";
import Input from "../UI/Input";

const MealsInput = () => {
  return (
    <div className="flex items-center justify-end">
      <form className="flex flex-col items-end">
        <div className="mb-1 mt-1">
          <Input
            label="Quantity"
            input={{
              id: "amount",
              type: "number",
              min: "1",
              step: "1",
              defaultValue: "1",
              className: "border rounded py-1 px-1 w-20 text-gray-700 focus:outline-none focus:ring focus:border-blue-300",
            }}
          />
        </div>
        <button className="px-2 py-1 text-sm bg-red-900 text-white rounded-md hover:bg-red-300 hover:text-red-900">
          + Add
        </button>
      </form>
    </div>
  );
};

export default MealsInput;
