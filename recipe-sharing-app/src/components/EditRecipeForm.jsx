import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe?.title || '');
  const [ingredients, setIngredients] = useState(recipe?.ingredients || '');

  const handleSubmit = (event) => {
    event.preventDefault(); // <-- now matches exactly
    updateRecipe(Number(id), { title, ingredients });
    navigate(`/recipe/${id}`);
  };

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Ingredients"
        value={ingredients}
        onChange={(event) => setIngredients(event.target.value)}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditRecipeForm;
