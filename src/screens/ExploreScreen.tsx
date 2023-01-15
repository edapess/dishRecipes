import React, {useEffect} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import Skeleton from '../components/Skeleton';
import {fetchRandomRecipes} from '../core/features/randomRecipesSlice';
import {AppDispatch} from '../types';
import {
  isRandomRecipesLoadingSelector,
  randomRecipesSelector,
} from '../core/selectors/recipesSelectors';
import {ScrollView} from 'react-native-gesture-handler';
import {themeSelector} from '../core/selectors/themeSelectors';
import {darkTheme} from '../core/features/themeSlice';
import {} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../navigation/ApplicationRouter';
const {width} = Dimensions.get('screen');

type ExploreScreenProps = BottomTabScreenProps<RootStackParamList, 'Explore'>;

const ExploreScreen: React.FC = (props: ExploreScreenProps) => {
  const dispatch: AppDispatch = useDispatch();
  const isRandomRecipesLoading = useSelector(isRandomRecipesLoadingSelector);
  const randomRecipesError = useSelector(randomRecipesSelector);
  const randomRecipes = useSelector(randomRecipesSelector);
  const theme = useSelector(themeSelector);
  const cardWidth = width * 0.8;
  const cardHeight = (cardWidth / 16) * 9;
  const skeletonWidth = cardWidth - theme.sizes.padding.screen * 2;
  const skeletonHeight = (skeletonWidth / 16) * 9;

  useEffect(() => {
    dispatch(fetchRandomRecipes());
  }, [dispatch]);

  const renderRecipesCards = () => {
    return randomRecipes[0].hits.map((e, i) => {
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
            <Text style={[{color: theme.colors.text[100]}]}>
              {e.recipe.label}
            </Text>
          </View>
        </Pressable>
      );
    });
  };

  const loaderSkeleton = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 10];

    return array.map((_, i) => {
      return (
        <View
          key={i.toString()}
          style={[
            styles.product_container,
            {
              width: cardWidth,
              marginBottom: theme.sizes.padding.button,
              height: cardHeight + theme.sizes.padding.screen,
            },
          ]}>
          <Skeleton
            width={skeletonWidth}
            height={skeletonHeight}
            style={{borderRadius: 20}}
          />
          <Skeleton
            width={skeletonWidth}
            height={20}
            style={{borderRadius: 20}}
          />
        </View>
      );
    });
  };
  const renderContent = () => {
    if (isRandomRecipesLoading) {
      return loaderSkeleton();
    } else {
      return renderRecipesCards();
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.container,
        {
          padding: theme.sizes.padding.screen,
          backgroundColor: theme.colors.background[300],
        },
      ]}>
      {renderContent()}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  product_container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image_overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 20,
    opacity: 0.7,
  },
  image: {
    height: '100%',
    borderRadius: 20,
  },
});
export default ExploreScreen;
