import React from "react";
import Card from "../UI/Card";
import MealsInput from "./MealsInput";

const MealItem = ({ meal }) => {
  // State for the quantity of this specific meal item
  const [quantity, setQuantity] = React.useState(1);

  return (
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
            <li className="text-sm text-gray-600 mb-2">{meal.description}</li>
            <li className="text-md font-semibold text-red-500">
              Rs. {meal.price}
            </li>
            <li className="text-sm text-red-950">{meal.rating} Stars</li>
          </ul>
        </div>
        <MealsInput
          mealItem={meal}
          quantity={quantity}
          onQuantityChange={(newQuantity) => setQuantity(newQuantity)}
        />
      </div>
    </Card>
  );
};

export default MealItem;
