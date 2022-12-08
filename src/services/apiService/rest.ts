import apiClient from './apiClient';
import {RecipesWithParams} from './getRecipesWithParamsType';

interface IRest {
  appId: String;
  appKey: String;
  getRecipes(query: string): any;
  getSpecificRecipe(recipeId: string): any;
}

class RestApi implements IRest {
  appId: String;
  appKey: String;
  //get all recipes by query
  constructor() {
    this.appId = 'af104379';
    this.appKey = 'f44b03cf3040a8d1818c523958dbc80b';
  }
  createUrlWithParams(params: RecipesWithParams) {
    let readyParameters: string = '';
    let url: string = `/api/recipes/v2?type=public&app_id=${this.appId}&app_key=${this.appKey}${readyParameters}`;
    if (!params) {
      console.log(
        'Error: Trying to fetch url without any parameters, specify query or at least one parameter',
      );
    }
    for (let parameter in params) {
      return Array.isArray(params[parameter]);
    }
  }
  getRecipes(query: string) {
    return apiClient().get(
      `/api/recipes/v2?type=public&app_id=${this.appId}&app_key=${this.appKey}&q=${query}`,
    );
  }
  getSpecificRecipe(recipeId: string) {
    return apiClient().get(
      `/api/recipes/v2/${recipeId}?type=public&app_id=${this.appId}&app_key=${this.appKey}`,
    );
  }
  getRecipesWithParams(params: RecipesWithParams) {
    return apiClient().get();
  }
}

export default new RestApi();
