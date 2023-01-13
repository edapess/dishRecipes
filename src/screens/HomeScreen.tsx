import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {AppDispatch, Recipes, RecipeType} from '../types';
import {useDispatch, useSelector} from 'react-redux';
import {
  isRandomRecipesLoadingSelector,
  randomRecipesErrorSelector,
  randomRecipesSelector,
} from '../core/selectors/recipesSelectors';
import RecipeItem from '../components/RecipeItem';
import AnimatedPlaceholder from '../components/AnimatedPlaceholder';
import {useTheme} from '@react-navigation/native';
import Skeleton from '../components/Skeleton';
import {themeSelector} from '../core/selectors/themeSelectors';
import {toggleTheme} from '../core/features/themeSlice';
import {selectRecipesTypes} from '../core/features/recipesTypesSlice';
import {recipesTypesSelector} from '../core/selectors/recipesTypesSelectors';
import RecipeTypeItem from '../components/RecipesTypeItem';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

const HomeScreen = () => {
  const theme = useSelector(themeSelector);
  const dispatch: AppDispatch = useDispatch();
  const recipesTypes = useSelector(recipesTypesSelector);

  const renderRecipesTypes = () => {
    const recipesTypesLabelsArray = Object.keys(recipesTypes);
    return recipesTypesLabelsArray.map(label => {
      return (
        <View
          key={label}
          style={[
            styles.itemsContainer,
            {padding: theme.sizes.padding.button},
          ]}>
          <View style={{width: '100%', marginBottom: 10}}>
            <Text
              style={[
                {
                  color: theme.colors.text[300],
                  fontSize: theme.sizes.text.title,
                  textTransform: 'capitalize',
                },
              ]}>
              {label}
            </Text>
          </View>

          {recipesTypes[label.toString()].map((type: RecipeType, i: number) => {
            return (
              <View
                key={i.toString()}
                style={{marginBottom: 10, marginRight: 5}}>
                <RecipeTypeItem
                  text={type.value}
                  key={i.toString()}
                  selected={type.selected}
                />
              </View>
            );
          })}
        </View>
      );
    });
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.container,
        {backgroundColor: theme.colors.background[300]},
      ]}>
      {renderRecipesTypes()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignContent: 'space-around',
  },
  item: {
    padding: 14,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 8,
  },
  itemsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
});
export default HomeScreen;
