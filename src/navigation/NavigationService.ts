import { RouteProp } from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack'

type RootStackParamList = {
  Profile: undefined;
};

export default class NavigationService {
  constructor(navigation, route: RootStackParamList) {
    this.navigation = navigation;
    this.route = route;
  }

  navigate(scrrenName: string, params: object = {}) {
    try {
      this.navigation.navigate(scrrenName, params);
    } catch (error) {
      console.log('Navigation Service error: navigater', error);
    }
  }
}
