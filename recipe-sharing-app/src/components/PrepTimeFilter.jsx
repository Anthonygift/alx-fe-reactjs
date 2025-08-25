import React from "react";
import useRecipeStore from "./useRecipeStore";

const PrepTimeFilter = () => {
  const maxPrepTime = useRecipeStore((state) => state.filters.maxPrepTime);
  const setMaxPrepTime = useRecipeStore((state) => state.setMaxPrepTime);

  return (
    <input
      type="number"
      value={maxPrepTime || ""}
      placeholder="Max prep time (minutes)"
      onChange={(e) =>
        setMaxPrepTime(e.target.value ? Number(e.target.value) : null)
      }
      className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  );
};

export default PrepTimeFilter;
