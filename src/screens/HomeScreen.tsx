import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, Recipes} from '../types';
import {fetchRecipesWithQuery} from '../core/features/recipesSlice';
type Props = {
  fetchRecipesWithQuery: (q: string) => Recipes;
};

const HomeScreen: React.FC<Props> = props => {
  const dispatch = useDispatch();
  console.log(useSelector(state => state));
  return (
    <View>
      <Text style={{color: 'black'}}>Home screen in navigation</Text>
      <Pressable
        style={{width: 200, height: 200, backgroundColor: 'green'}}
        onPress={() => dispatch(fetchRecipesWithQuery('chicken'))}>
        <Text>log recipes</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
