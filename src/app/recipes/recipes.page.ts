import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';



@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipesLocal: Recipe[];
  loadedRecipe: Recipe;
  constructor( private recipesService: RecipesService ) { }

  ngOnInit() {
       }

    ionViewWillEnter() {
      this.recipesLocal = this.recipesService.getAllRecipes();
  }
  logRecipes(){
    console.log('recipes.page');
    if(this.recipesLocal !== null){
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for(let i=0; i<this.recipesLocal.length; i++){
        console.log(this.recipesLocal[i].title);
      }
    }

  }

  deleteRecipe(recipeId: string){
    this.recipesLocal = this.recipesLocal.filter(recipe => recipe.id!==recipeId);

  }
}
