import React, { useEffect } from "react";
import useRecipeStore from "./useRecipeStore";

const RecommendationsList = () => {
  const { recommendations, generateRecommendations, favorites } = useRecipeStore();

  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-3">🔮 Recommended for You</h2>

      {recommendations.length === 0 ? (
        <p className="text-gray-500">No recommendations yet. Add favorites to see suggestions!</p>
      ) : (
        <ul className="space-y-3">
          {recommendations.map((recipe) => (
            <li
              key={recipe.id}
              className="p-3 border rounded-lg shadow-sm bg-gray-50"
            >
              <h3 className="font-semibold">{recipe.title}</h3>
              <p className="text-sm text-gray-600">
                Ingredients: {recipe.ingredients.join(", ")}
              </p>
              <p className="text-sm text-gray-500">Prep time: {recipe.prepTime} mins</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecommendationsList;
