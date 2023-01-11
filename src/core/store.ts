import {configureStore} from '@reduxjs/toolkit';
import recipes from './features/recipesSlice';
import randomRecipes from './features/randomRecipesSlice';
import recipe from './features/specificRecipeSlice';
import recipesTypes from './features/recipesTypesSlice';
import theme from './features/themeSlice';
export const store = configureStore({
  reducer: {
    recipes,
    recipe,
    randomRecipes,
    theme,
    recipesTypes
  },
});
