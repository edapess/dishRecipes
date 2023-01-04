import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

const ExploreScreen: React.FC = (props)=> {
    console.log("🚀 ~ file: ExploreScreen.tsx:8 ~ props", props)
    return (
      <View>
        <Text style={{color: 'black'}}>Explore screen in navigation</Text>
      </View>
    );
  }

export default ExploreScreen;
