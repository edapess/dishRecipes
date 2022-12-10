import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {connect} from 'react-redux';
import rest from '../services/apiService/rest';
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
          onPress={() =>
            console.log(
              rest.createUrlWithParams({
                diet: ['balanced', 'high-fiber'],
                ingr: '5-8',
                random: true,
              }),
            )
          }>
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
