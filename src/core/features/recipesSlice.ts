import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import RestApi from '../../services/apiService/rest';
import {IRecipes, Recipes, RecipesWithParams} from '../../types';

const initialState: IRecipes = {
  recipes: [],
  loading: false,
  error: undefined,
};

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipesWithQuery',
  async (query: string | RecipesWithParams) => {
    try {
      let response;
      if (typeof query === 'string') {
        response = await RestApi.getRecipes(query);
      } else {
        response = await RestApi.getRecipesWithParams(query);
      }

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
    builder
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        const recipeData: Recipes = action.payload;
        state.loading = false;
        state.recipes.push(recipeData);
      })
      .addCase(fetchRecipes.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
  reducers: {},
});

export const {} = recipesSlice.actions;
export default recipesSlice.reducer;
