import {createSelector} from '@reduxjs/toolkit';
import {IState, RecipesWithParams, RecipeType} from '../../types';

const recipesTypesSliceSelector = createSelector(
  (state: IState) => state.recipesTypes,
  recipesTypes => recipesTypes,
);

export const recipesTypesSelector = createSelector(
  recipesTypesSliceSelector,
  recipesTypes => recipesTypes.recipesTypes,
);

export const selectedRecipesTypesSelector = createSelector(
  recipesTypesSelector,
  recipesTypes => {
    const selectedParams: RecipesWithParams = {};
    const typesLabelsArray = Object.keys(recipesTypes);
    typesLabelsArray.map(label => {
      selectedParams[label] = [];
      recipesTypes[label.toString()].map((type: RecipeType) => {
        if (type.selected) {
          selectedParams[label].push(type.value);
        } else {
          return null;
        }
      });
    });
    return selectedParams;
  },
);
