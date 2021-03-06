import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {
  public selectedRecipe:Recipe;
  public recipeList:Recipe[] = [
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
      "This is no recipe- it is a bear!",
      "http://placebear.com/g/300/200")
  ];
}
