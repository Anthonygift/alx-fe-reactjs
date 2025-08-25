import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [], // all recipes
  searchTerm: '',
  filters: {
    ingredient: '',
    maxPrepTime: null,
  },
  filteredRecipes: [],

  // Action: set all recipes
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  // Action: set search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().applyFilters();
  },

  // Action: set ingredient filter
  setIngredientFilter: (ingredient) => {
    set((state) => ({
      filters: { ...state.filters, ingredient }
    }));
    get().applyFilters();
  },

  // Action: set max prep time filter
  setMaxPrepTime: (time) => {
    set((state) => ({
      filters: { ...state.filters, maxPrepTime: time }
    }));
    get().applyFilters();
  },

  // Action: apply all filters
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
}));

function App() {
  return (
    <Router>
      <Routes>
        {/* All recipes */}
        <Route path="/" element={<RecipeList />} />

        {/* Recipe details (dynamic route with :id) */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
