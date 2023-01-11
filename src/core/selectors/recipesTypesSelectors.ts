import {createSelector} from '@reduxjs/toolkit';
import {IState} from '../../types';

const recipesTypesSliceSelector = createSelector(
  (state: IState) => state.recipesTypes,
  recipesTypes => recipesTypes,
);

export const recipesTypesSelector = createSelector(
  recipesTypesSliceSelector,
  recipesTypes => recipesTypes.recipesTypes,
);
