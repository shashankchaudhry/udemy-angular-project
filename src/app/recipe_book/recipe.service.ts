import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Pizza', 
        'This is a pizza recipe.',
        '/assets/img/Recipe.jpg',
        [
            new Ingredient("Tomato Sauce", 2),
            new Ingredient("Cheese", 1),
        ]),
        new Recipe('Burger', 
        'Delicious burger.',
        '/assets/img/Recipe.jpg',
        [
            new Ingredient("Burger Buns", 2),
            new Ingredient("Cheese", 1),
            new Ingredient("Beef Patty", 1),
        ]),
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