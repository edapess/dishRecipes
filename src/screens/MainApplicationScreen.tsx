import React from 'react';
import {Text, View} from 'react-native';
import NavigationService from '../navigation/NavigationService';

type ApplicationProps = {
  navigation?: any;
  route?: any;
};

class MainApplicationScreen extends React.PureComponent<ApplicationProps, {}> {
  _navigationService: NavigationService;
  constructor(props: ApplicationProps) {
    super(props);
    this._navigationService = new NavigationService(
      props?.navigation,
      props.route,
    );
  }
  //render method for child screens
  renderScreen() {
    return (
      <View>
        <Text>component</Text>
      </View>
    );
  }

  getNavigationService() {
    return this._navigationService;
  }

  render() {
    return <View>{this.renderScreen()}</View>;
  }
}

export default MainApplicationScreen;
