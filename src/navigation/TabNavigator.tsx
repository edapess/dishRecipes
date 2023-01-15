import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  EXPLORE_SCREEN,
  HOME_SCREEN,
  SAVED_RECIPES_SCREEN,
  SEARCH_SCREEN,
  SETTINGS_SCREEN,
} from './AppRoutes';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import ExploreScreen from '../screens/ExploreScreen';
import SearchScreen from '../screens/SearchScreen';
import SavedRecipesScreen from '../screens/SavedRecipesScreen';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {themeSelector} from '../core/selectors/themeSelectors';
import SettingsScreen from '../screens/SettingsScreen';
import {RootStackParamList} from './ApplicationRouter';
const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = () => {
  const theme = useSelector(themeSelector);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName = '';
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
          if (route.name === SETTINGS_SCREEN) {
            iconName = 'settings';
          }
          //TODO: edit icon and text colors
          return (
            <Icon
              name={iconName}
              size={theme.sizes.text.title}
              color={theme.colors.text[300]}
            />
          );
        },
        headerShown: true,
        tabBarBackground: () => {
          return (
            <View
              style={[
                {
                  backgroundColor: theme.colors.background[100],
                },
                StyleSheet.absoluteFill,
              ]}
            />
          );
        },
        tabBarLabelStyle: {
          color: theme.colors.text[300],
          fontSize: theme.sizes.text.text,
        },
        headerStyle: {
          backgroundColor: theme.colors.background[300],
        },
        headerTitleStyle: {
          color: theme.colors.text[300],
        },
      })}>
      <Tab.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.background[100],
          },
        }}
      />
      <Tab.Screen name={EXPLORE_SCREEN} component={ExploreScreen} />
      <Tab.Screen name={SEARCH_SCREEN} component={SearchScreen} />
      <Tab.Screen name={SAVED_RECIPES_SCREEN} component={SavedRecipesScreen} />
      <Tab.Screen name={SETTINGS_SCREEN} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
