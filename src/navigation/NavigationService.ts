export default class NavigationService {
  constructor(navigation, route) {
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
