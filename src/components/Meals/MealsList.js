import React from "react";
import MealItem from "./MealItem";
import { mealsData } from "../Constants";

const MealsList = () => {
  return (
    <div className="grid grid-cols-1">
      {mealsData.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

export default MealsList;
