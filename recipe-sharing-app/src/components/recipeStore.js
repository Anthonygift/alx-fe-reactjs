import { create } from 'zustand';
import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filters: {
    ingredient: "",
    maxPrepTime: null,
  },
  filteredRecipes: [],
  favorites: [], // ⭐ list of favorite recipes
  recommendations: [], // 🔮 list of recommended recipes

  // 🔹 Recipe actions
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().applyFilters();
  },
  setIngredientFilter: (ingredient) => {
    set((state) => ({
      filters: { ...state.filters, ingredient },
    }));
    get().applyFilters();
  },
  setMaxPrepTime: (time) => {
    set((state) => ({
      filters: { ...state.filters, maxPrepTime: time },
    }));
    get().applyFilters();
  },
  applyFilters: () => {
    const { recipes, searchTerm, filters } = get();

    const filtered = recipes.filter((recipe) => {
      const matchesTitle = recipe.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesIngredient = filters.ingredient
        ? recipe.ingredients.some((ing) =>
            ing.toLowerCase().includes(filters.ingredient.toLowerCase())
          )
        : true;

      const matchesPrepTime = filters.maxPrepTime
        ? recipe.prepTime <= filters.maxPrepTime
        : true;

      return matchesTitle && matchesIngredient && matchesPrepTime;
    });

    set({ filteredRecipes: filtered });
  },

  // 🔹 Favorites actions
  addFavorite: (recipe) =>
    set((state) => {
      if (state.favorites.some((fav) => fav.id === recipe.id)) return state; // avoid duplicates
      return { favorites: [...state.favorites, recipe] };
    }),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav.id !== recipeId),
    })),

  // 🔹 Recommendations (simple example: suggest recipes with same ingredients as favorites)
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    if (favorites.length === 0) return set({ recommendations: [] });

    const favIngredients = favorites.flatMap((r) => r.ingredients);

    const recommended = recipes.filter(
      (recipe) =>
        !favorites.some((fav) => fav.id === recipe.id) && // exclude already favorites
        recipe.ingredients.some((ing) =>
          favIngredients.includes(ing) // match favorite ingredients
        )
    );

    set({ recommendations: recommended });
  },
}));

export default useRecipeStore;

export const useRecipeStore = create((set) => ({
  recipes: [],
  
  // Add a single recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: Date.now(), ...recipe }]
    })),

  // Replace the entire recipe list
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
}));
import { create } from 'zustand';
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',

  // Add a new recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: Date.now(), ...recipe }]
    })),

  // Update an existing recipe
  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      )
    })),

  // Delete a recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id)
    })),

  // Replace the whole list
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  // Update search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Computed: filter recipes by search term
  filteredRecipes: () => {
    const term = get().searchTerm.toLowerCase();
    return get().recipes.filter(
      (r) =>
        r.title.toLowerCase().includes(term) ||
        r.ingredients.toLowerCase().includes(term)
    );
  },
}));

  // Add new recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: Date.now(), ...recipe }]
    })),

  // Update an existing recipe by ID
  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      )
    })),

  // Delete recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id)
    })),

  // Replace entire list (optional for bulk load)
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
}));
