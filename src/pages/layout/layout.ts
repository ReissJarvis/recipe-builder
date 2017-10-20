import { Component } from '@angular/core';

import { RecipesPage } from "../recipes/recipes";
import { ContactPage } from "../contact/contact";
import { AboutPage } from "../about/about";
import { HomePage } from "../home/home";

@Component({
  templateUrl: 'layout.html'
})
export class LayoutPage {
  recipesPage = RecipesPage
  homePage = HomePage
  contactPage = ContactPage
  aboutPage = AboutPage
  rootPage:any = this.homePage

  constructor() {

  }

  openPage(page) {
    this.rootPage = page
  }

  closeMenu(){

  }
}
