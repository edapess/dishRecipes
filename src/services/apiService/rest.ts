import apiClient from './apiClient';

interface IRest {
  appId: String;
  appKey: String;
  getRecipes(query: string): any;
}

class RestApi implements IRest {
  appId: String;
  appKey: String;
  //get all recipes by query
  constructor() {
    this.appId = 'af104379';
    this.appKey = 'f44b03cf3040a8d1818c523958dbc80b';
  }
  getRecipes(query: string) {
    return apiClient().get(
      `/api/recipes/v2?type=public&app_id=${this.appId}&app_key=${this.appKey}&q=${query}`,
    );
  }
}

export default new RestApi();
