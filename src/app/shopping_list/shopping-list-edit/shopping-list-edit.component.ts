import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService, SelectedState } from '../shopping-list.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  selectedIngredientSub: Subscription;
  @ViewChild('f') form: NgForm;
  editMode: boolean = false;
  editIndex: number;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.selectedIngredientSub = this.shoppingService.selectedIngredient.subscribe(
      (selectedState: SelectedState) => {
        if (!selectedState.edit) {
          this.editMode = false;
          this.OnClear();
          return;
        }
        this.editMode = true;
        this.editIndex = selectedState.index;
        let ingredient = this.shoppingService.getIngredient(selectedState.index);
        this.form.setValue({
          name: ingredient.name,
          amount: ingredient.amount,
        });
      }
    );
  }

  OnAddItem() {
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editIndex, this.form.value.name, this.form.value.amount);
    } else {
      this.shoppingService.addIngredient(this.form.value.name, this.form.value.amount);
    }
    this.OnClear();
  }

  OnClear() {
    this.editMode = false;
    this.form.reset();
  }

  OnDelete() {
    this.shoppingService.deleteIngredient(this.editIndex);
    this.OnClear();
  }

  ngOnDestroy() {
    this.selectedIngredientSub.unsubscribe();
  }
}
