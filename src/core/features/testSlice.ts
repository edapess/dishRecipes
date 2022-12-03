import {createSlice, crteateSlice, original} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface ITest {
  age: number;
}

const initialState: ITest = {
  age: 28,
};

export const testSlice = createSlice({
  name: 'testName',
  initialState,
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
