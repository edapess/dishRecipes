import {createSelector} from '@reduxjs/toolkit';
import {IState} from '../../types';

export const recipesSelector = createSelector(
  (state: IState) => state.recipes,
  recipes => recipes,
);
export const specificRecipe = createSelector(
  (state: IState) => state.recipe,
  recipe => recipe,
);
