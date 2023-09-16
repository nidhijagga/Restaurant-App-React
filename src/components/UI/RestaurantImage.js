import React from "react";

const RestaurantImage = () => {
  return (
    <div className="mt-4 w-full h-96 overflow-hidden">
      <img
        src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=2000"
        alt="Restaurant"
        className="object-cover object-center h-full w-full"
      />
    </div>
  );
};

export default RestaurantImage;
