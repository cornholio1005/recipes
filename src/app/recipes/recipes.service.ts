import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe [] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://images.ichkoche.at/data/image/variations/496x384/1/wiener-schnitzel-breaded-viennese-escalope-img-2896.jpg',
      ingredients: ['French fries', 'Pork meat', 'salad']
    },
    {
      id: 'r2',
      title: 'Spagetti',
      imageUrl: 'https://ais.kochbar.de/kbrezept/435538_1137799/24-05kufm/750x562/763/spaghetti-napoli-rezept-bild-nr-2.jpg',
      ingredients: ['Spagetti', 'Pasta Pesto', 'salad']
    }
  ];
  constructor() { }

  getAllRecipes(){
     return [...this.recipes];
  }

  getRecipe(recipeId: string){
      return {
        ...this.recipes.find(recipe => {
         return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id!==recipeId;
    });
    console.log('service');
    for(let i=0; i<this.recipes.length; i++){
      console.log(this.recipes[i].title);
    }

  }
}
