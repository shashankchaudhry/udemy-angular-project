import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() shoppingItem = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  AddShoppingItem() {
    this.shoppingItem.emit(
      new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
  }

}
