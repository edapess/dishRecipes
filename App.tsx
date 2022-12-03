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

const App = () => {
  console.log(store);
  return (
    <Provider store={store}>
      <View>
        <OurTestComponent />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
