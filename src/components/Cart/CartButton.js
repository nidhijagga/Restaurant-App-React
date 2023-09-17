import React, { useContext, useState } from "react";
import Cart from "./Cart"; 
import { CartContext } from "../../store/cartContext";

const CartButton = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartContext = useContext(CartContext);

  // Function to open the cart
  const openCart = () => {
    setIsCartOpen(true);
  };

  // Function to close the cart
  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      {/* Cart button */}
      <div
        className="flex items-center space-x-2 bg-red-900 px-4 py-2  text-white rounded-md cursor-pointer"
        onClick={isCartOpen ? closeCart : openCart}
      >
        <button>🛒 Cart</button>
        <span className="text-md bg-red-950 rounded-md px-2 ">{cartContext.cartItems.length}</span>{" "}
      </div>

      {/* Cart overlay */}
      {<Cart isOpen={isCartOpen} onClose={closeCart} />}
    </div>
  );
};

export default CartButton;
