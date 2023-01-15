import {
  BottomTabBarProps,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../navigation/ApplicationRouter';
import {StackNavigationProp} from '@react-navigation/stack';

type RecipeScreenProps = StackNavigationProp<RootStackParamList, 'Recipe'>;

const RecipeScreen: React.FC = (props: RecipeScreenProps) => {
  return (
    <View>
      <Text>dsds</Text>
    </View>
  );
};

export default RecipeScreen;
