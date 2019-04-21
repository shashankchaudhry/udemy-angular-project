import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test Recipe 1', 'This is test recipe 1.', '/assets/img/Recipe.jpg'),
        new Recipe('Test Recipe 2', 'This is test recipe 2.', '/assets/img/Recipe.jpg')
    ]

    private selectedRecipe: Recipe;
    recipeEmitter = new EventEmitter<Recipe>();

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    setSelectedRecipe(index: number) {
        this.selectedRecipe = this.recipes[index];
        this.recipeEmitter.emit(this.selectedRecipe);
    }
}