import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'http://bnbjoint.com/wp-content/uploads/2015/04/Thunder_Road_full-300dpi.jpg');

  constructor() { }

  ngOnInit() {
  }

}
