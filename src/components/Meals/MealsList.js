import React from "react";
import Card from "../UI/Card";
import { mealsData } from "../Constants";

const MealsList = () => {
  return (
    <div className="grid grid-cols-1">
      {mealsData.map((meal) => (
        <div key={meal.id} className="">
          <Card className="bg-white hover:shadow-lg hover:bg-gray-100 transition duration-300 w-72">
            <ul className="p-4">
              <li className="text-xl text-red-700 font-semibold mb-2">{meal.name}</li>
              <li className="text-sm text-gray-600 mb-2">{meal.description}</li>
              <li className="text-md font-semibold text-red-500">Rs. {meal.price}</li>
              <li className="text-sm text-red-950">{meal.rating} Stars</li>
            </ul>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default MealsList;
