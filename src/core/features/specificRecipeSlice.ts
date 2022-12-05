import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import RestApi from '../../services/apiService/rest';

interface IRecipe {
  recipe: Array<any>;
}

const initialState: IRecipe = {
  recipe: [],
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
    builder.addCase(fetchSpecificRecipe.fulfilled, (state, action) => {
      const recipeData = action.payload;
      state.recipe.push(recipeData);
    });
  },
  reducers: {},
});

export default specificRecipeSlice.reducer;
