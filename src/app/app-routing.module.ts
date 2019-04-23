import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeBookComponent } from './recipe_book/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping_list/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe_book/recipe-detail/recipe-detail.component';
import { RecipeDetailStartComponent } from './recipe_book/recipe-detail-start/recipe-detail-start.component';
import { RecipeEditComponent } from './recipe_book/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipeBookComponent, children:[
        {path: '', component: RecipeDetailStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent},
    ]},
    {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {

}