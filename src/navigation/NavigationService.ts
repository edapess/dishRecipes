import { RouteProp } from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack'

// type NavigationService = {
//   navigation:StackNavigationProp,
//   route:RouteProp
// }

export default class NavigationService {
  navigation: StackNavigationProp;
  route: RouteProp;
  constructor(navigation:StackNavigationProp, route: RouteProp) {
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
