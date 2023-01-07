import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import {useDispatch, useSelector} from 'react-redux';
import {isRandomRecipesLoadingSelector} from '../core/selectors/recipesSelectors';
import {fetchRandomRecipes} from '../core/features/randomRecipesSlice';
import {AppDispatch} from '../types';
import { themeSelector } from '../core/selectors/themeSelectors';

const Stack = createStackNavigator();


const ApplicationRouter = () => {
  const dispatch: AppDispatch = useDispatch();
  const isRandomRecipesLoading = useSelector(isRandomRecipesLoadingSelector);
const theme = useSelector(themeSelector)
  useEffect(() => {
    //fetch random recipes, when pending is ended close SplashScreen and init to the actual app
    dispatch(fetchRandomRecipes());
  }, [dispatch]);

  return (
    <SplashScreen AppIsReady={!isRandomRecipesLoading}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerShown: false,
            headerStyle:{
              backgroundColor: theme.colors.background[100]
            },
            }}>
          <Stack.Screen name="home" component={TabNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SplashScreen>
  );
};

export default ApplicationRouter;
