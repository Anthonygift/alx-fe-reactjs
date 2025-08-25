import React from "react";
import useRecipeStore from "./useRecipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-3">⭐ My Favorites</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorite recipes yet.</p>
      ) : (
        <ul className="space-y-3">
          {favorites.map((recipe) => (
            <li
              key={recipe.id}
              className="p-3 border rounded-lg shadow-sm flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{recipe.title}</h3>
                <p className="text-sm text-gray-600">
                  {recipe.ingredients.join(", ")}
                </p>
              </div>
              <button
                onClick={() => removeFavorite(recipe.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-md text-sm"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
