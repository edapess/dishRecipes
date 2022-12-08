import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import React from 'react';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const ApplicationRouter = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationRouter;
