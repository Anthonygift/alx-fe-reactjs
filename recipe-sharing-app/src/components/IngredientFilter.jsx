import React from "react";
import useRecipeStore from "./useRecipeStore";

const IngredientFilter = () => {
  const ingredient = useRecipeStore((state) => state.filters.ingredient);
  const setIngredientFilter = useRecipeStore((state) => state.setIngredientFilter);

  return (
    <div className="w-full max-w-md mx-auto my-2">
      <input
        type="text"
        value={ingredient}
        placeholder="Filter by ingredient..."
        onChange={(e) => setIngredientFilter(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
};

export default IngredientFilter;
