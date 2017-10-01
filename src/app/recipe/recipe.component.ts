import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  providers: [RecipesService]
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
