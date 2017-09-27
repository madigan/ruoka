import { Component } from '@angular/core';
import { NavTag } from './nav-tag.model';
import { Recipe } from './recipe/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage:NavTag = NavTag.RECIPE;

  onNavUpdate(tag:NavTag) {
    this.currentPage = tag;
  }

  shouldShowRecipe():boolean {
    return this.currentPage == NavTag.RECIPE;
  }

  shouldShowShoppingList():boolean {
    return this.currentPage == NavTag.SHOPPING_LIST;
  }
}
