import {configureStore} from '@reduxjs/toolkit';
import recipeReducer from './features/recipesSlice';
import specificRecipeReducer from './features/specificRecipeSlice';
export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    recipe: specificRecipeReducer,
  },
});
