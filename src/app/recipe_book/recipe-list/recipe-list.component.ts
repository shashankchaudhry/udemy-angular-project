import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeToRecipeBook = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'This is test recipe 1.', '/assets/img/Recipe.jpg'),
    new Recipe('Test Recipe 2', 'This is test recipe 2.', '/assets/img/Recipe.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

  onRecipeEmit(recipe: Recipe) {
    this.recipeToRecipeBook.emit(recipe);
  }

}
