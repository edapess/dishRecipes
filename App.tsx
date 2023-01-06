/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {store} from './src/core/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import ApplicationRouter from './src/navigation/ApplicationRouter';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NavigationService from './src/navigation/NavigationService';
import SplashScreen from './src/screens/SplashScreen';
import {fetchRandomRecipes} from './src/core/features/randomRecipesSlice';
import {isRandomRecipesLoadingSelector} from './src/core/selectors/recipesSelectors';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ApplicationRouter />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
