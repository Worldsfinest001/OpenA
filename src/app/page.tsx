'use client';

import { useState } from 'react';
import { RecipeForm } from '@/components/recipe/recipe-form';
import { RecipeCard } from '@/components/recipe/recipe-card';
import { Recipe } from '@/types/recipe';

// Mock data for demonstration
const mockRecipe: Recipe = {
  id: '1',
  title: 'Creamy Garlic Parmesan Pasta',
  ingredients: [
    '8 oz fettuccine pasta',
    '2 tbsp butter',
    '4 cloves garlic, minced',
    '1 cup heavy cream',
    '1 cup grated parmesan cheese',
    'Salt and pepper to taste',
    'Fresh parsley, chopped (for garnish)'
  ],
  instructions: [
    'Cook pasta according to package instructions until al dente. Reserve 1/2 cup pasta water before draining.',
    'In a large skillet, melt butter over medium heat. Add garlic and sauté until fragrant (about 1 minute).',
    'Pour in heavy cream and bring to a simmer. Let it cook for 2-3 minutes until slightly thickened.',
    'Reduce heat to low and gradually whisk in parmesan cheese until melted and smooth.',
    'Season with salt and pepper to taste.',
    'Add drained pasta to the sauce, tossing to coat. If sauce is too thick, add a splash of the reserved pasta water.',
    'Garnish with fresh parsley and serve immediately.'
  ],
  cookingTime: 20,
  calories: 650,
  dietaryRestrictions: ['vegetarian'],
  difficulty: 'easy',
  imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250&q=80',
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: '1'
};

export default function Home() {
  const [generatedRecipe, setGeneratedRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateRecipe = async (prompt: string, filters: any) => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setGeneratedRecipe(mockRecipe);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="container py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          AI-Powered Recipe Generator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Create delicious, personalized recipes in seconds with the power of artificial intelligence. 
          Customize based on your dietary preferences, available ingredients, and cooking time.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <RecipeForm onSubmit={handleGenerateRecipe} isLoading={isLoading} />
        </div>
        
        <div className="flex flex-col items-center">
          {isLoading ? (
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
              <div className="flex flex-col space-y-3">
                <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
              </div>
            </div>
          ) : generatedRecipe ? (
            <RecipeCard recipe={generatedRecipe} />
          ) : (
            <div className="w-full max-w-md p-8 bg-gray-50 rounded-lg border border-dashed text-center">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-600 mb-2">Your Recipe Awaits</h3>
              <p className="text-gray-500">Fill out the form to generate your first AI-powered recipe!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}