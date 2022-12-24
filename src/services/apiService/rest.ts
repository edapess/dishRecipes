import { RecipesWithParams } from '../../types';
import {getDefaultDiet} from '../../utils/defaultUtils';
import apiClient from './apiClient';


interface IRest {
  appId: String;
  appKey: String;
  getRecipes(query: string): any;
  getSpecificRecipe(recipeId: string): any;
  createUrlWithParams(params: RecipesWithParams): string;
}

class RestApi implements IRest {
  appId: String;
  appKey: String;
  //get all recipes by query
  constructor() {
    this.appId = 'af104379';
    this.appKey = 'f44b03cf3040a8d1818c523958dbc80b';
  }
  createUrlWithParams(params: RecipesWithParams): string {
    let readyParameters: string = '';
    let url: string = `/api/recipes/v2?type=public&app_id=${this.appId}&app_key=${this.appKey}${readyParameters}`;
    if (!params) {
      console.log(
        'Error: Trying to fetch url without any parameters, specify query or at least one parameter',
      );
    }
    for (let parameter in params) {
      //if value of parameter is array
      //then grub all elements in array and create new request path
      if (Array.isArray(params[parameter])) {
        let paramsArray: string[] = params[parameter];
        paramsArray.forEach(el => {
          readyParameters += `&${parameter}=${el}`;
        });
        continue;
      }
      // if value is just a string or boolean then just add to path with parameter
      if (typeof params[parameter] === 'string') {
        readyParameters += `&${parameter}=${params[parameter]}`;
        continue;
      }
      if (typeof params[parameter] === 'boolean') {
        readyParameters += `&${parameter}=${params[parameter]}`;
      }
      url += readyParameters;
    }

    return url;
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
    return apiClient().get(this.createUrlWithParams(params));
  }
  getStartRandomRecipes() {
    return apiClient().get(
      this.createUrlWithParams({diet: getDefaultDiet(), random: true}),
    );
  }
}

export default new RestApi();
