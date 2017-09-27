import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  template: `
  <div class='row'>
    <div class='col-xs-12'>
      <button class='btn btn-success'>New Recipe!</button>
    </div>
  </div>
  <hr>
  <app-recipe-item
    *ngFor='let recipe of recipes'
    [recipe]='recipe'
    (click)='onRecipeSelected(recipe)'>
  </app-recipe-item>
  `
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      "Strudel",
      "A delicious germanic dish.",
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F40%2FStrudel.jpg%2F1280px-Strudel.jpg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AStrudel.jpg&docid=1w1g9bSloKei-M&tbnid=8wPLN53U8NNUMM%3A&vet=10ahUKEwiAteTxw7fWAhVD0mMKHf7SBtAQMwgoKAEwAQ..i&w=1280&h=853&hl=en&safe=active&bih=923&biw=928&as_q=strudel&ved=0ahUKEwiAteTxw7fWAhVD0mMKHf7SBtAQMwgoKAEwAQ&iact=mrc&uact=8"),
    new Recipe(
      "Turkey",
      "Thanksgiving!",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/The_Turkey_Is_Done.jpg/800px-The_Turkey_Is_Done.jpg"),
    new Recipe(
      "Ursor Surprise",
      "This is no recipe- it's a bear!",
      "http://placebear.com/g/300/200")
  ];

  @Output() recipeSelected:EventEmitter<Recipe> = new EventEmitter<Recipe>();

  onRecipeSelected(recipe:Recipe):void {
    this.recipeSelected.emit(recipe);
  }
}
