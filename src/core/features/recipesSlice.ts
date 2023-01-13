import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import RestApi from '../../services/apiService/rest';
import {IRecipes, Recipes} from '../../types';

const initialState: IRecipes = {
  recipes: [],
  loading: false,
  error: undefined,
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
    builder
      .addCase(fetchRecipesWithQuery.fulfilled, (state, action) => {
        const recipeData: Recipes = action.payload;
        state.loading = false;
        state.recipes.push(recipeData);
      })
      .addCase(fetchRecipesWithQuery.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchRecipesWithQuery.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
  reducers: {},
});

export const {} = recipesSlice.actions;
export default recipesSlice.reducer;
