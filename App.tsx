/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {store} from './src/core/store';
import {Provider} from 'react-redux';
import ApplicationRouter from './src/navigation/ApplicationRouter';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  console.log(store);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ApplicationRouter />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
