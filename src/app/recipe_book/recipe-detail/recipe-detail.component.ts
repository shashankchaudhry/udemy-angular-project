import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping_list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private shoppingService: ShoppingListService, 
              private route: ActivatedRoute, 
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        if (this.id != null) {
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      }
    );
  }

  toShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.id);
  }

}
