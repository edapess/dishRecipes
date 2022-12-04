import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrement,
  fetchRecipesWithQuery,
  increment,
} from '../core/features/testSlice';

const OurTestComponent = () => {
  const myAge = useSelector(state => state.test.age);
  const dispatch = useDispatch();
  return (
    <View>
      <Pressable
        style={{width: 100, height: 100, backgroundColor: 'green'}}
        onPress={() => dispatch(fetchRecipesWithQuery('chicken'))}>
        <Text>get chicken</Text>
      </Pressable>
    </View>
  );
};

export default OurTestComponent;
