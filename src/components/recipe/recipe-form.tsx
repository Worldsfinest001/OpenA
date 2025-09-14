    'use client';

    import { useState } from 'react';
    import { Button } from '@/components/ui/button';
    import { RecipeFilters } from '@/types/recipe';

    interface RecipeFormProps {
    onSubmit: (prompt: string, filters: RecipeFilters) => void;
    isLoading: boolean;
    }

    export function RecipeForm({ onSubmit, isLoading }: RecipeFormProps) {
    const [prompt, setPrompt] = useState('');
    const [filters, setFilters] = useState<RecipeFilters>({
        dietary: '',
        maxTime: 30,
        maxCalories: 500,
        difficulty: 'easy'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (prompt.trim()) {
        onSubmit(prompt, filters);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Create Your Recipe</h2>
        
        <div className="mb-6">
            <label htmlFor="prompt" className="block text-sm font-medium mb-2">
            What would you like to cook?
            </label>
            <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="E.g., A quick vegetarian dinner using mushrooms and spinach..."
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            rows={3}
            required
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
            <label htmlFor="dietary" className="block text-sm font-medium mb-2">
                Dietary Restrictions
            </label>
            <select
                id="dietary"
                value={filters.dietary}
                onChange={(e) => setFilters({ ...filters, dietary: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
                <option value="">None</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-Free</option>
                <option value="dairy-free">Dairy-Free</option>
            </select>
            </div>

            <div>
            <label htmlFor="difficulty" className="block text-sm font-medium mb-2">
                Difficulty
            </label>
            <select
                id="difficulty"
                value={filters.difficulty}
                onChange={(e) => setFilters({ ...filters, difficulty: e.target.value as 'easy' | 'medium' | 'hard' })}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            </div>

            <div>
            <label htmlFor="maxTime" className="block text-sm font-medium mb-2">
                Max Cooking Time (minutes)
            </label>
            <input
                type="number"
                id="maxTime"
                value={filters.maxTime}
                onChange={(e) => setFilters({ ...filters, maxTime: Number(e.target.value) })}
                min="5"
                max="240"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            </div>

            <div>
            <label htmlFor="maxCalories" className="block text-sm font-medium mb-2">
                Max Calories
            </label>
            <input
                type="number"
                id="maxCalories"
                value={filters.maxCalories}
                onChange={(e) => setFilters({ ...filters, maxCalories: Number(e.target.value) })}
                min="50"
                max="2000"
                step="50"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            </div>
        </div>

        <Button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className="w-full py-3 text-lg"
        >
            {isLoading ? 'Generating Recipe...' : 'Generate Recipe'}
        </Button>
        </form>
    );
    }