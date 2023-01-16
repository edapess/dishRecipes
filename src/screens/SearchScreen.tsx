import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import {fetchRecipes} from '../core/features/recipesSlice';
import {selectedRecipesTypesSelector} from '../core/selectors/recipesTypesSelectors';
import {AppDispatch, RecipesWithParams} from '../types';

const SearchScreen: React.FC = props => {
  const dispatch: AppDispatch = useDispatch();
  const selectedTypes: RecipesWithParams = useSelector(
    selectedRecipesTypesSelector,
  );
  console.log(selectedTypes);
  useEffect(() => {
    dispatch(fetchRecipes(selectedTypes));
  });
  return (
    <View>
      <Text>search screen</Text>
    </View>
  );
};

export default SearchScreen;
