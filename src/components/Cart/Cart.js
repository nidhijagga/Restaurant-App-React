import React from "react";

const Cart = ({ isOpen, onClose }) => {
  // Dummy cart data
  const dummyCartItems = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 150 },
    // Add more dummy items as needed
  ];

  // Calculate the total price
  const totalPrice = dummyCartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 w-1/2 rounded-lg">
            <h2 className="text-black text-2xl font-semibold mb-4">Your Cart</h2>
            <ul>
              {dummyCartItems.map((item) => (
                <li key={item.id} className="mb-2 text-black">
                  {item.name} - Rs. {item.price}
                </li>
              ))}
            </ul>
            <div className="mt-4 text-black font-bold">
              Total: Rs. {totalPrice}
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={onClose}
                className="bg-red-900 text-white py-2 px-4 mr-3 rounded-full"
              >
                Close Cart
              </button>
              <button
                onClick={onClose}
                className="bg-red-900 text-white py-2 px-4 rounded-full"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
