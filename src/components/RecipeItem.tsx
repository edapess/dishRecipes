import React, { useEffect, useRef } from 'react';
import {Text, View, Animated} from 'react-native';

const RecipeItem = () => {
const fadAnim = useRef(new Animated.Value(0)).current;
  useEffect(()=> {
    Animated.timing(fadAnim,{
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
  }).start()
  })

  return (
    <Animated.View
    style={{
      width: 200,
      height: 200,
      backgroundColor: 'green',
      opacity: fadAnim
  }}
    >
      <Text>recipe</Text>
    </Animated.View>
  );
};

export default RecipeItem;
