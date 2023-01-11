import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import ThemeToggler from '../components/ThemeToggler';
import {themeSelector} from '../core/selectors/themeSelectors';

const SettingsScreen = () => {
  const theme = useSelector(themeSelector);
  return (
    <View
      style={([], {backgroundColor: theme.colors.background[300], flex: 1})}>
      <ThemeToggler />
    </View>
  );
};

export default SettingsScreen;
