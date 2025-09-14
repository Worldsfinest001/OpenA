import { Recipe } from '@/types/recipe';
import { formatTime, formatCalories } from '@/lib/utils';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md w-full">
      {recipe.imageUrl && (
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <span>⏱️</span>
            <span>{formatTime(recipe.cookingTime)}</span>
          </div>
          {recipe.calories && (
            <div className="flex items-center gap-1">
              <span>🔥</span>
              <span>{formatCalories(recipe.calories)}</span>
            </div>
          )}
          <div className="capitalize">{recipe.difficulty}</div>
        </div>

        {recipe.dietaryRestrictions.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {recipe.dietaryRestrictions.map((restriction) => (
              <span
                key={restriction}
                className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full capitalize"
              >
                {restriction}
              </span>
            ))}
          </div>
        )}

        <div className="border-t pt-4">
          <h3 className="font-semibold mb-2">Ingredients</h3>
          <ul className="mb-6 pl-5 list-disc space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>

          <h3 className="font-semibold mb-2">Instructions</h3>
          <ol className="pl-5 list-decimal space-y-2">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="text-gray-700">{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}