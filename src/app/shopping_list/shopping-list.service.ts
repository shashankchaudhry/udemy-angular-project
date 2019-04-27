import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient("apples", 5),
        new Ingredient("tomatoes", 10),
    ];

    newIngredients = new Subject<void>();
    selectedIngredient = new Subject<Ingredient>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(name: string, qty: number) {
        this.ingredients.push(new Ingredient(name, qty));
        this.newIngredients.next();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.newIngredients.next();
    }

    setSelectedIngredient(index) {
        this.selectedIngredient.next(this.ingredients[index]);
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
            this.newIngredients.next();
        }
    }

}