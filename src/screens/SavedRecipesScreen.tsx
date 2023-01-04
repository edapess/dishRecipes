import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

const SavedRecipesScreen :React.FC = (props) => {
    console.log("🚀 ~ file: SavedRecipesScreen.tsx:7 ~ props", props)
    return (
      <View>
        <Text>SavedRecipesScreen screen</Text>
      </View>
    );
  }
export default SavedRecipesScreen;
