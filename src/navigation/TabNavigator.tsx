import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {EXPLORE_SCREEN, HOME_SCREEN} from './AppRoutes';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import ExploreScreen from '../screens/ExploreScreen';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name === HOME_SCREEN) {
            iconName = 'home';
          }
          if (route.name === EXPLORE_SCREEN) {
            iconName = 'search1';
          }
          return <Icon name={iconName} size={24} color={'green'} />;
        },
      })}>
      <Tab.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={EXPLORE_SCREEN} component={ExploreScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
