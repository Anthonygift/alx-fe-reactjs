import { create } from 'zustand';

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

export const useRecipeStore = create((set) => ({
  recipes: [],

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
