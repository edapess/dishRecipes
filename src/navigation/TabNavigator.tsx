import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  EXPLORE_SCREEN,
  HOME_SCREEN,
  SAVED_RECIPES_SCREEN,
  SEARCH_SCREEN,
} from './AppRoutes';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ExploreScreen from '../screens/ExploreScreen';
import SearchScreen from '../screens/SearchScreen';
import SavedRecipesScreen from '../screens/SavedRecipesScreen';
import {Text} from 'react-native';
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
            iconName = 'compass';
          }
          if (route.name === SEARCH_SCREEN) {
            iconName = 'search-circle';
          }
          if (route.name === SAVED_RECIPES_SCREEN) {
            iconName = 'bookmark';
          }

          //TODO: edit icon and text colors
          return <Icon name={iconName} size={24} color={'black'} />;
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={EXPLORE_SCREEN} component={ExploreScreen} />
      <Tab.Screen name={SEARCH_SCREEN} component={SearchScreen} />
      <Tab.Screen name={SAVED_RECIPES_SCREEN} component={SavedRecipesScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
