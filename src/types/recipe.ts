export interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: number;
  calories?: number;
  dietaryRestrictions: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

export interface RecipeFilters {
  dietary?: string;
  maxTime?: number;
  maxCalories?: number;
  difficulty?: string;
}

export interface GenerateRecipeRequest {
  prompt: string;
  filters?: RecipeFilters;
}