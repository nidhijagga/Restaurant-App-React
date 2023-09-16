import React from "react";

const CartButton = () => {
  return (
    <div className="flex items-center space-x-2 bg-red-900 px-4 py-2  text-white rounded-md">
      <button className="">🛒 Cart</button>
      <span className="text-lg bg-red-950 rounded-md px-2 ">0</span>{" "}
      {/* Initially, the cart count is 0 */}
    </div>
  );
};

export default CartButton;
