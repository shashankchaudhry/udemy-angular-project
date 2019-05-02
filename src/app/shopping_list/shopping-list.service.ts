import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export type SelectedState = { edit: boolean, index: number };
export type ShoppingIngredient = { ingredient: Ingredient, edit: boolean };

export class ShoppingListService {
    private ingredients: ShoppingIngredient[] = [
        { ingredient: new Ingredient("apples", 5), edit: false },
        { ingredient: new Ingredient("tomatoes", 10), edit: false },
    ];

    newIngredients = new Subject<void>();
    selectedIngredient = new Subject<SelectedState>();
    selectedState: SelectedState = {
        edit: false,
        index: -1,
    };

    getIngredient(index: number): Ingredient {
        return this.ingredients.slice()[index].ingredient;
    }

    getIngredients(): ShoppingIngredient[] {
        return this.ingredients.slice();
    }

    addIngredient(name: string, qty: number) {
        this.ingredients.push({
            ingredient: new Ingredient(name, qty),
            edit: false,
        });
        this.newIngredients.next();
    }

    addIngredients(ingredients: Ingredient[]) {
        for (let ingredient of ingredients) {
            this.ingredients.push({
                ingredient: ingredient,
                edit: false,
            });
        }
        this.newIngredients.next();
    }

    updateIngredient(index: number, name: string, amount: number) {
        let ingredient = this.ingredients[index].ingredient;
        ingredient.name = name;
        ingredient.amount = amount;
        this.newIngredients.next();
    }

    setSelectedIngredient(index: number) {
        let ingredient = this.ingredients[index];
        if (index === this.selectedState.index) {
            // Toggle mode
            ingredient.edit = !ingredient.edit;
        } else {
            ingredient.edit = true;
        }
        this.selectedState = {
            index: index,
            edit: ingredient.edit,
        };
        this.selectedIngredient.next(this.selectedState);
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.newIngredients.next();
    }

}