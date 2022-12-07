import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import MainApplicationScreen from './MainApplicationScreen';

class SavedRecipesScreen extends MainApplicationScreen {
  constructor(props) {
    super(props);
  }
  renderScreen(): JSX.Element {
    return (
      <View>
        <Text>SavedRecipesScreen screen</Text>
      </View>
    );
  }
}

const mapStateTorProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateTorProps,
  mapDispatchToProps,
)(SavedRecipesScreen);
