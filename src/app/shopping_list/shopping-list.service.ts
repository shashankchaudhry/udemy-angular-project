import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient("apples", 5),
        new Ingredient("tomatoes", 10),
    ];

    newIngredients = new EventEmitter<void>();
    selectedIngredient = new EventEmitter<Ingredient>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(name: string, qty: number) {
        this.ingredients.push(new Ingredient(name, qty));
        this.newIngredients.emit();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.newIngredients.emit();
    }

    setSelectedIngredient(index) {
        this.selectedIngredient.emit(this.ingredients[index]);
    }

    deleteIngredient(name: string, qty: number) {
        let index = -1;
        for (let i = 0; i < this.ingredients.length; i++) {
            if (name == this.ingredients[i].name && qty == this.ingredients[i].amount) {
                index = i;
                break;
            }
        }
        if (index > -1) {
            this.ingredients.splice(index, 1);
            this.newIngredients.emit();
        }
    }

}