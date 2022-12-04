import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import RestApi from '../../services/apiService/rest';

export interface ITest {
  age: number;
  entities: [];
}

const initialState: ITest = {
  age: 28,
  entities: [],
};

export const fetchRecipesWithQuery = createAsyncThunk(
  'testName/fetchRecipesWithQuery',
  async (query: string) => {
    try {
      const response = await RestApi.getRecipes(query);
      return response.data;
    } catch (error) {
      console.log('fetchRecipesWithQuery error: ', error);
    }
  },
);

export const testSlice = createSlice({
  name: 'testName',
  initialState,
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchRecipesWithQuery.fulfilled, (state, action) => {
      // Add user to the state array
      console.log({action});
      console.log({state});
      state.entities.push(action.payload);
    });
  },
  reducers: {
    increment: state => {
      state.age += 1;
    },
    decrement: state => {
      state.age -= 1;
    },
  },
});

export const {decrement, increment} = testSlice.actions;
export default testSlice.reducer;
