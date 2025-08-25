// RecipeList component
  import { useRecipeStore } from './recipeStore';
import React, { useEffect } from "react";
import useRecipeStore from "./useRecipeStore";
import SearchBar from "./SearchBar";
import React, { useEffect } from "react";
import useRecipeStore from "./useRecipeStore";
import SearchBar from "./SearchBar";
import IngredientFilter from "./IngredientFilter";
import PrepTimeFilter from "./PrepTimeFilter";
import FavoritesList from "./FavoritesList";
import RecommendationsList from "./RecommendationsList";

const RecipeList = () => {
  const { filteredRecipes, setRecipes, addFavorite, favorites } = useRecipeStore();

  useEffect(() => {
    setRecipes([
      { id: 1, title: "Pasta", ingredients: ["noodles", "sauce"], prepTime: 20 },
      { id: 2, title: "Salad", ingredients: ["lettuce", "tomato"], prepTime: 10 },
      { id: 3, title: "Pizza", ingredients: ["dough", "cheese"], prepTime: 30 },
      { id: 4, title: "Sandwich", ingredients: ["bread", "ham", "cheese"], prepTime: 5 },
    ]);
  }, [setRecipes]);

  return (
    <div className="max-w-2xl mx-auto mt-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">🍲 Recipe Finder</h1>

      {/* Filters */}
      <div className="bg-gray-50 p-4 rounded-xl shadow-md space-y-3">
        <SearchBar />
        <IngredientFilter />
        <PrepTimeFilter />
      </div>

      {/* Results */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">Recipes</h2>
        {filteredRecipes.length === 0 ? (
          <p className="text-gray-500">No recipes found.</p>
        ) : (
          <ul className="space-y-3">
            {filteredRecipes.map((recipe) => (
              <li
                key={recipe.id}
                className="p-3 border rounded-lg shadow-sm flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">{recipe.title}</h3>
                  <p className="text-sm text-gray-600">
                    Ingredients: {recipe.ingredients.join(", ")}
                  </p>
                  <p className="text-sm text-gray-500">
                    Prep time: {recipe.prepTime} mins
                  </p>
                </div>
                <button
                  onClick={() => addFavorite(recipe)}
                  disabled={favorites.some((fav) => fav.id === recipe.id)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm disabled:opacity-50"
                >
                  {favorites.some((fav) => fav.id === recipe.id)
                    ? "Favorited"
                    : "Add Favorite"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Favorites and Recommendations */}
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}
const RecipeList = () => {
  const { filteredRecipes, setRecipes } = useRecipeStore();

  // Load some sample recipes (in real app, fetch from API/database)
  useEffect(() => {
    setRecipes([
      { id: 1, title: "Pasta", ingredients: ["noodles", "sauce"], prepTime: 20 },
      { id: 2, title: "Salad", ingredients: ["lettuce", "tomato"], prepTime: 10 },
      { id: 3, title: "Pizza", ingredients: ["dough", "cheese"], prepTime: 30 },
    ]);
  }, [setRecipes]);

  return (
    <div className="max-w-xl mx-auto mt-6">
      {/* Step 2: Search bar */}
      <SearchBar />

      {/* Step 3: Display filtered results */}
      <h2 className="text-xl font-bold mb-2">Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p className="text-gray-500">No recipes found.</p>
      ) : (
        <ul className="space-y-2">
          {filteredRecipes.map((recipe) => (
            <li
              key={recipe.id}
              className="p-3 border rounded-lg shadow-sm bg-white"
            >
              <h3 className="font-semibold">{recipe.title}</h3>
              <p className="text-sm text-gray-600">
                Ingredients: {recipe.ingredients.join(", ")}
              </p>
              <p className="text-sm text-gray-500">
                Prep time: {recipe.prepTime} mins
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };
  import { useRecipeStore } from './recipeStore';

export function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one above!</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <strong>{recipe.title}</strong> — {recipe.ingredients}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

export function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one above!</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <strong>{recipe.title}</strong>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
