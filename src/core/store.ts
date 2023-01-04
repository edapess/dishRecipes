import {configureStore} from '@reduxjs/toolkit';
import recipes from './features/recipesSlice';
import recipe from './features/specificRecipeSlice';
export const store = configureStore({
  reducer: {
    recipes,
    recipe,
  },
});
