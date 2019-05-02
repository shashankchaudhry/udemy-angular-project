import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping_list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping_list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe_book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe_book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe_book/recipe-detail/recipe-detail.component';
import { RecipeBookComponent } from './recipe_book/recipe-book/recipe-book.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping_list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeDetailStartComponent } from './recipe_book/recipe-detail-start/recipe-detail-start.component';
import { RecipeEditComponent } from './recipe_book/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipe_book/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent,
    DropdownDirective,
    RecipeDetailStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ShoppingListService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
