import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import {useDispatch, useSelector} from 'react-redux';
import {isRandomRecipesLoadingSelector} from '../core/selectors/recipesSelectors';
import {fetchRandomRecipes} from '../core/features/randomRecipesSlice';
import {AppDispatch} from '../types';
import {themeSelector} from '../core/selectors/themeSelectors';
import RecipeScreen from '../screens/RecipeScreen';
import { HOME_SCREEN, RECIPE_SCREEN } from './AppRoutes';

export type RootStackParamList = {
  Home: {};
  "Saved Recipes": {};
  Explore: {};
  Search: {};
  "Sign in": {};
  "Sign up": {};
  Settings: {};
  Recipe: {
    label: string
  }
}

const Stack = createStackNavigator<RootStackParamList>();

const ApplicationRouter = () => {
  const theme = useSelector(themeSelector);

  const [isReay, setIsReady] = useState(false);

  useEffect(() => {
    //fetch random recipes, when pending is ended close SplashScreen and init to the actual app
    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  }, []);

  return (
    <SplashScreen AppIsReady={isReay}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: theme.colors.background[100],
            },
          }}>
          <Stack.Screen name={HOME_SCREEN} component={TabNavigator} />
          <Stack.Screen name={RECIPE_SCREEN} component={RecipeScreen} options={{ headerShown: true, headerTitleStyle: { color: 'red' } }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SplashScreen>
  );
};

export default ApplicationRouter;
