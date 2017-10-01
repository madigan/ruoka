import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from "../recipes.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
  constructor(private recipesService:RecipesService) { }

  get recipes() {
    return this.recipesService.recipeList;
  }

  onRecipeSelected(recipe:Recipe):void {
    this.recipesService.selectedRecipe = recipe;
  }
}
