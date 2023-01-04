import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import RestApi from '../../services/apiService/rest';
import {IRecipe} from '../../types';

const initialState: IRecipe = {
  recipe: [],
  loading: false,
  error: undefined,
};

export const fetchSpecificRecipe = createAsyncThunk(
  'specificRecipe/fetchSpecificRecipe',
  async (recipeId: string) => {
    try {
      const response = await RestApi.getSpecificRecipe(recipeId);
      return response.data;
    } catch (error) {
      console.log('fetchSpecificRecipe error: ', error);
    }
  },
);

export const specificRecipeSlice = createSlice({
  name: 'specificRecipe',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchSpecificRecipe.fulfilled, (state, action) => {
        const recipeData = action.payload;
        state.recipe.push(recipeData);
      })
      .addCase(fetchSpecificRecipe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSpecificRecipe.pending, (state, action) => {
        state.loading = true;
      });
  },
  reducers: {},
});

export default specificRecipeSlice.reducer;
