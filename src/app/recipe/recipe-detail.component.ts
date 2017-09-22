import { Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {
  @Input() public recipe:Recipe = new Recipe("TODO: Name", "TODO: Description", "http://placebear.com/g/300/200");
}
