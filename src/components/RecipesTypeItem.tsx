import React, {useRef} from 'react';
import {Animated, Easing, Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectRecipesTypes} from '../core/features/recipesTypesSlice';
import {themeSelector} from '../core/selectors/themeSelectors';
type Props = {
  selected: boolean;
  text: string;
};

const RecipeTypeItem = (props: Props) => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();
  const scale = useRef(new Animated.Value(0)).current;
  const animateScaleIn = (type: string) => {
    console.log('animate in');
    Animated.timing(scale, {
      useNativeDriver: true,
      toValue: 1,
      duration: 250,
    }).start();

    dispatch(selectRecipesTypes(type));
  };
  const animateScaleOut = (type: string) => {
    console.log('animate in');
    Animated.timing(scale, {
      useNativeDriver: true,
      toValue: 0,
      duration: 250,
    }).start();

    dispatch(selectRecipesTypes(type));
  };
  const interpolatedScale = scale.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });
  const onSelectPress = (type: string) => {
    if (props.selected) {
      animateScaleOut(type);
    } else {
      animateScaleIn(type);
    }
  };
  return (
    <Animated.View
      style={{
        transform: [{scale: interpolatedScale}],
      }}>
      <Pressable
        onPress={() => onSelectPress(props.text)}
        style={{
          padding: theme.sizes.padding.smallButton,
          backgroundColor: theme.colors.buttonBackground[100],
          borderRadius: theme.sizes.radius.button,
        }}>
        <View style={{}}>
          <Text style={{color: theme.colors.buttonText[300]}}>
            {props.text}
          </Text>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default RecipeTypeItem;
