import React from "react";
import CartButton from "../Cart/CartButton";
import RestaurantImage from "../UI/RestaurantImage";

const Header = () => {
  return (
    <header className="bg-red-200 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title on the left */}
        <div className="text-2xl font-serif text-red-900">Prefectly Cooked</div>
        <CartButton />
      </div>
      <RestaurantImage />
    </header>
  );
};

export default Header;
