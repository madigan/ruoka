import { Component } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {
  ingredients:Ingredient[] = [
    new Ingredient("Apple", 7),
    new Ingredient("Bacon!", 42)
  ];
}
