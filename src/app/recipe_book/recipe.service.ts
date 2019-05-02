import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

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

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}