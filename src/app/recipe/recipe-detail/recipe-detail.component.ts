import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {
  constructor(private recipeService:RecipesService) { }
  get recipe() {
    return this.recipeService.selectedRecipe;
  }
}
