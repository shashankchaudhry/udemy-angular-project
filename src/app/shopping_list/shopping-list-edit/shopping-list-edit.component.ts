import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingService.selectedIngredient.subscribe(
      (ingredient: Ingredient) => {
        this.nameInput.nativeElement.value = ingredient.name;
        this.amountInput.nativeElement.value = ingredient.amount;
      }
    );
  }

  AddShoppingItem() {
    this.shoppingService.addIngredient(
      this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
  }

  ClearShoppingItem() {
    this.nameInput.nativeElement.value = "";
    this.amountInput.nativeElement.value = "";
  }

  DeleteShoppingItem() {
    this.shoppingService.deleteIngredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
      );
  }

}
