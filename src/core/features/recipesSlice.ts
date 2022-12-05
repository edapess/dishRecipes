import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import RestApi from '../../services/apiService/rest';
import {RecipeOnlyWithQuery} from '../../services/apiService/getRecipeTypes';

export interface IRecipes {
  recipes: Array<any>;
}

const initialState: IRecipes = {
  recipes: [],
};

export const fetchRecipesWithQuery = createAsyncThunk(
  'recipes/fetchRecipesWithQuery',
  async (query: string) => {
    try {
      const response = await RestApi.getRecipes(query);
      return response.data;
    } catch (error) {
      console.log('fetchRecipesWithQuery error: ', error);
    }
  },
);

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchRecipesWithQuery.fulfilled, (state, action) => {
      const recipeData: RecipeOnlyWithQuery = action.payload;
      state.recipes.push(recipeData);
    });
  },
  reducers: {},
});

export const {} = recipesSlice.actions;
export default recipesSlice.reducer;
