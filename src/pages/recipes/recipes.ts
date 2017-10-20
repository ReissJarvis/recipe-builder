import { Component } from '@angular/core';

@Component({
  templateUrl: 'recipes.html'
})
export class RecipesPage {

  recipes = [
    {
      title: 'Vegan Tacos',
      dateAdded: '20/10/2017'
    },
    {
      title: 'Curried Butternut Squash Soup',
      dateAdded: '21/10/2017'
    },
    {
      title: 'Tofu Pad Thai',
      dateAdded: '20/10/2017'
    }
  ]

  constructor() {

  }
}
