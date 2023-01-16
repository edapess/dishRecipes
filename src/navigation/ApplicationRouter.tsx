import React, {useEffect, useState} from 'react';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import {useSelector} from 'react-redux';
import {themeSelector} from '../core/selectors/themeSelectors';
import RecipeScreen from '../screens/RecipeScreen';
import {RECIPE_SCREEN, SEARCH_SCREEN, TAB_SCREEN} from './AppRoutes';
import {NavigationContainer} from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen';

export type RootStackParamList = {
  Home: {};
  Saved: {};
  Explore: {};
  Search: {};
  'Sign in': {};
  'Sign up': {};
  Settings: {};
  Recipe: {
    label: string;
  };
  Tab: {};
};

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
          <Stack.Screen name={TAB_SCREEN} component={TabNavigator} />
          <Stack.Screen
            name={RECIPE_SCREEN}
            component={RecipeScreen}
            options={{headerShown: true, headerTitleStyle: {color: 'red'}}}
          />
          <Stack.Screen
            name={SEARCH_SCREEN}
            component={SearchScreen}
            options={{headerShown: true, headerTitleStyle: {color: 'red'}}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SplashScreen>
  );
};

export default ApplicationRouter;
