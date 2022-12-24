import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {connect} from 'react-redux';
import rest from '../services/apiService/rest';
import {getDefaultRandomCountry} from '../utils/defaultUtils';
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
        <Pressable
          style={{width: 200, height: 200, backgroundColor: 'green'}}
          onPress={async () => console.log(await rest.getStartRandomRecipes())}>
          <Text>log recipes</Text>
        </Pressable>
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
