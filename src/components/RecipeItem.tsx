import React, {useEffect, useRef} from 'react';
import {
  Text,
  View,
  Animated,
  Pressable,
  Image,
  StyleSheetProperties,
} from 'react-native';

type RecipeItemProps = {
  style: StyleSheetProperties;
};

const RecipeItem = () => {
  return (
    <Pressable
      style={[
        styles.product_container,
        {
          width: cardWidth,
          marginBottom: theme.sizes.padding.button,
          height: cardHeight + theme.sizes.padding.screen,
        },
      ]}
      key={i}
      onPress={() =>
        props.navigation.navigate('Recipe', {label: e.recipe.label})
      }>
      <View
        style={{
          width: skeletonWidth,
          height: skeletonHeight,
          borderRadius: 20,
          position: 'relative',
        }}>
        <Image
          source={{uri: e.recipe.images.REGULAR.url}}
          style={styles.image}
        />
        <View
          style={[
            styles.image_overlay,
            {
              backgroundColor: darkTheme.colors.background[300],
            },
          ]}
        />
      </View>
      <View
        style={{
          width: skeletonWidth,
          height: 20,
        }}>
        <Text style={[{color: theme.colors.text[100]}]}>{e.recipe.label}</Text>
      </View>
    </Pressable>
  );
};

export default RecipeItem;
