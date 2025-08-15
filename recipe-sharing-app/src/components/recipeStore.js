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
