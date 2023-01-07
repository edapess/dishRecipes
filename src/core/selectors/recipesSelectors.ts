import {createSelector} from '@reduxjs/toolkit';
import {IState} from '../../types';

export const recipesSliceSelector = createSelector(
  (state: IState) => state.recipes,
  recipes => recipes,
);
export const recipesSelector = createSelector(
  recipesSliceSelector,
  recipes => recipes.recipes,
);
export const isRecipesLoadingSelector = createSelector(
  recipesSliceSelector,
  recipes => recipes.loading,
);
export const recipesErrorSelector = createSelector(
  recipesSliceSelector,
  recipes => recipes.error,
);
//specific recipe
export const specificRecipeSelector = createSelector(
  (state: IState) => state.recipe,
  recipe => recipe,
);
//random recipe
export const randomRecipesSliceSelector = createSelector(
  (state: IState) => state.randomRecipes,
  randomRecipesSlice => randomRecipesSlice,
);
export const randomRecipesSelector = createSelector(
  randomRecipesSliceSelector,
  (randomRecipesSlice) => randomRecipesSlice.recipes,
);
export const isRandomRecipesLoadingSelector = createSelector(
  randomRecipesSliceSelector,
  randomRecipesSlice => randomRecipesSlice.loading,
);

export const randomRecipesErrorSelector = createSelector(
  randomRecipesSliceSelector,
  randomRecipesSlice => randomRecipesSlice.error
);
