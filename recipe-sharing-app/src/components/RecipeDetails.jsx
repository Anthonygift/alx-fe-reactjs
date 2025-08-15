import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

export function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <Link to="/">Go back</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <Link to={`/edit/${recipe.id}`}>Edit Recipe</Link> |{' '}
      <DeleteRecipeButton id={recipe.id} />
      <br /><br />
      <Link to="/">Back to Recipes</Link>
    </div>
  );
}
export default RecipeDetails;