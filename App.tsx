/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {store} from './src/core/store';
import {Provider} from 'react-redux';
import OurTestComponent from './src/component/NewTestComponent';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  console.log(store);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View>
          <OurTestComponent />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
