import {createSelector} from '@reduxjs/toolkit';
import {IState} from '../../types';

export const recipesSelector = createSelector(
  (state: IState) => state.recipes,
  recipes => recipes,
);
export const specificRecipeSelector = createSelector(
  (state: IState) => state.recipe,
  recipe => recipe,
);

export const isRandomRecipesLoadingSelector = createSelector(
  (state: IState) => state.randomRecipes,
  recipes => recipes.loading,
);
