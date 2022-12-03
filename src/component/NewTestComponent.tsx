import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../core/features/testSlice';

const OurTestComponent = () => {
  const myAge = useSelector(state => state.test.age);
  const dispatch = useDispatch();
  console.log(myAge);
  return (
    <View>
      <Pressable onPress={() => dispatch(increment())}>
        <Text>increment</Text>
      </Pressable>

      <Pressable onPress={() => dispatch(decrement())}>
        <Text>decrement</Text>
      </Pressable>
      <Text style={{color: 'red'}}>my age is {myAge}</Text>
    </View>
  );
};

export default OurTestComponent;
