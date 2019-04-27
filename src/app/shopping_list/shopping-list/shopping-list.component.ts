import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  newIngredientsSub: Subscription;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.newIngredientsSub = this.shoppingService.newIngredients.subscribe(
      () => {
        this.ingredients = this.shoppingService.getIngredients();
      }
    );
  }

  selectIngredient(index) {
    this.shoppingService.setSelectedIngredient(index);
  }

  ngOnDestroy() {
    this.newIngredientsSub.unsubscribe();
  }

}
