import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import MainApplicationScreen from './MainApplicationScreen';

class HomeScreen extends MainApplicationScreen {
  constructor(props) {
    super(props);
  }
  renderScreen(): JSX.Element {
    console.log(this.props);
    return (
      <View>
        <Text style={{color: 'black'}}>Home screen in navigation</Text>
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
export default connect(mapStateTorProps, mapDispatchToProps)(HomeScreen);
