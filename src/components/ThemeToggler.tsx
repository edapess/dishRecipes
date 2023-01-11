import React, {useRef} from 'react';
import {Animated, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {lightTheme, toggleTheme} from '../core/features/themeSlice';
import {
  isDarkThemeSelector,
  themeSelector,
} from '../core/selectors/themeSelectors';
const ThemeToggler = () => {
  const theme = useSelector(themeSelector);
  const isDarkTheme = useSelector(isDarkThemeSelector);
  const iconName = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  const startAnimationLightTheme = () => {
    console.log('startAnimationLightTheme');
    Animated.timing(iconName, {
      toValue: 1,
      useNativeDriver: true,
      duration: 500,
    }).start();

    dispatch(toggleTheme());
  };

  const startAnimationToDarkTheme = () => {
    console.log('startAnimationToDarkTheme');
    Animated.timing(iconName, {
      toValue: 0,
      useNativeDriver: true,
      duration: 500,
    }).start();
    dispatch(toggleTheme());
  };
  const interpolateIcon = iconName.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const onTogglePress = () => {
    if (isDarkTheme) {
      startAnimationLightTheme();
    } else {
      startAnimationToDarkTheme();
    }
  };
  return (
    <Pressable
      onPress={() => {
        onTogglePress();
      }}
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.buttonBackground[300],
        },
      ]}>
      <Animated.View
        style={{
          transform: [
            {
              rotate: interpolateIcon,
            },
          ],
        }}>
        <Icon
          name={isDarkTheme ? 'sunny' : 'moon'}
          size={theme.sizes.text.title}
          color={theme.colors.buttonText[300]}
        />
      </Animated.View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ThemeToggler;
