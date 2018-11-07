import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [


    new Recipe('A Test Recipe', 'This simply a tes', 'https://static.businessinsider.sg/2018/02/02/5a7dc169d03072af008b4bf2.png'),

    new Recipe('A Test Recipe two', 'This simply a tes', 'assets/img/asdq.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
