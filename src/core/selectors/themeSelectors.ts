import {createSelector} from '@reduxjs/toolkit';
import {IState} from '../../types';

export const themeSliceSelector = createSelector(
  (state: IState) => state.theme,
  theme => theme,
);

export const themeSelector = createSelector(
  themeSliceSelector,
  theme => theme.theme,
);

export const isDarkThemeSelector = createSelector(
  themeSliceSelector,
  theme => theme.darkThemeEnabled,
);
