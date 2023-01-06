import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import RestApi from '../../services/apiService/rest';
import {IRecipes, Recipes} from '../../types';

const initialState: IRecipes = {
  recipes: [],
  loading: false,
  error: undefined,
};

export const fetchRandomRecipes = createAsyncThunk(
  'recipes/fetchRandomRecipes',
  async () => {
    try {
      const response = await RestApi.getStartRandomRecipes();
      return response.data;
    } catch (error) {
      console.log('fetchRandomRecipes error: ', error);
    }
  },
);

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRandomRecipes.fulfilled, (state, action) => {
        const recipeData: Recipes = action.payload;
        state.loading = false;
        state.recipes.push(recipeData);
      })
      .addCase(fetchRandomRecipes.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchRandomRecipes.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
  reducers: {},
});

console.log({recipesSlice});
export const {} = recipesSlice.actions;
export default recipesSlice.reducer;
