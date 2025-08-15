import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

export default function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ marginLeft: '10px', color: 'red' }}>
      Delete
    </button>
  );
}
