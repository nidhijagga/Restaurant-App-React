import React, { useState, useContext } from "react";
import Input from "../UI/Input";
import { CartContext } from "../../store/cartContext";

const MealsInput = ({ mealItem }) => {
  const [quantityInput, setQuantityInput] = useState("1");
  const cartContext = useContext(CartContext);

  const handleQuantityChange = (event) => {
    setQuantityInput(event.target.value);
  };

  const addToCart = () => {
    cartContext.setCartItems((prevCartItems) => [
      ...prevCartItems,
      {
        id: mealItem.id,
        name: mealItem.name,
        price: mealItem.price,
        quantity: quantityInput,
      },
    ]);
  };

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
              value: quantityInput,
              onChange: handleQuantityChange,
              className:
                "border rounded py-1 px-1 w-20 text-gray-700 focus:outline-none focus:ring focus:border-blue-300",
            }}
          />
        </div>
        <button
          className="px-2 py-1 text-sm bg-red-900 text-white rounded-md hover:bg-red-300 hover:text-red-900"
          onClick={(e) => {
            e.preventDefault();
            addToCart();
          }}
        >
          + Add
        </button>
      </form>
    </div>
  );
};

export default MealsInput;
