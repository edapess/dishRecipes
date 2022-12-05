import React from 'react';
import {View, Text, Pressable} from 'react-native';

const OurTestComponent = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Pressable style={{width: 100, height: 100, backgroundColor: 'green'}}>
        <Text>get chicken</Text>
      </Pressable>
    </View>
  );
};

export default OurTestComponent;
