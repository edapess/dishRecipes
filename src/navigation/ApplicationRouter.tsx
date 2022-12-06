import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const ApplicationRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationRouter;
