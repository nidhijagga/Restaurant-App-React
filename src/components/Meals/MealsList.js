import React from "react";
import Card from "../UI/Card";
import { mealsData } from "../Constants";
import MealsInput from "./MealsInput";

const MealsList = () => {
  return (
    <div className="grid grid-cols-1">
      {mealsData.map((meal) => (
        <Card
          key={meal.id}
          className="bg-white hover:shadow-lg hover:bg-gray-100 transition duration-300"
        >
          <div className="px-1 py-2 flex justify-between items-center">
            <div>
              <ul>
                <li className="text-xl text-red-700 font-semibold mb-2">
                  {meal.name}
                </li>
                <li className="text-sm text-gray-600 mb-2">
                  {meal.description}
                </li>
                <li className="text-md font-semibold text-red-500">
                  Rs. {meal.price}
                </li>
                <li className="text-sm text-red-950">{meal.rating} Stars</li>
              </ul>
            </div>
            <MealsInput />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MealsList;
