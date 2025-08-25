import React from "react";
import useRecipeStore from "./useRecipeStore"; // import your Zustand store

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div className="w-full max-w-md mx-auto my-4">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};


export default SearchBar;

