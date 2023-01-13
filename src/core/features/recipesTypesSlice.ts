import {InitialState} from '@react-navigation/native';
import {createAction, createSlice} from '@reduxjs/toolkit';
import {act} from 'react-test-renderer';
import {IRecipesTypesSlice, RecipesTypes} from '../../types';

const initialState: IRecipesTypesSlice = {
  recipesTypes: {
    diet: [
      {value: 'balanced', selected: false},
      {value: 'high-fiber', selected: false},
      {value: 'high-protein', selected: false},
      {value: 'low-carb', selected: false},
      {value: 'low-fat', selected: false},
      {value: 'low-sodium', selected: false},
    ],
    health: [
      {value: 'alcohol-cocktail', selected: false},
      {value: 'alcohol-free', selected: false},
      {value: 'celery-free', selected: false},
      {value: 'crustacean-free', selected: false},
      {value: 'dairy-free', selected: false},
      {value: 'DASH', selected: false},
      {value: 'egg-free', selected: false},
      {value: 'fish-free', selected: false},
      {value: 'fodmap-free', selected: false},
      {value: 'gluten-free', selected: false},
      {value: 'kosher', selected: false},
      {value: 'paleo', selected: false},
      {value: 'vegan', selected: false},
      {value: 'vegetarian', selected: false},
    ],
    meal: [
      {value: 'breakfast', selected: false},
      {value: 'brunch', selected: false},
      {value: 'lunch', selected: false},
      {value: 'snack', selected: false},
      {value: 'teatime', selected: false},
      {value: 'dinner', selected: false},
    ],
  },
};

export const selectRecipesTypes = createAction<string | undefined>(
  'recipesTypes/toggleSelect',
);

export const recipesTypesSlice = createSlice({
  name: 'recipesTypes',
  initialState,
  extraReducers: builder => {
    builder.addCase(selectRecipesTypes, (state, action) => {
      const type = action.payload?.toString();
      if (type) {
        for (const key in state.recipesTypes) {
          state.recipesTypes[key].map(e => {
            if (e.value === type) {
              e.selected = !e.selected;
            }
          });
        }
      }
    });
  },
  reducers: {},

});

export default recipesTypesSlice.reducer;
