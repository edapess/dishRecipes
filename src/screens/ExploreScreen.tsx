import React, { useEffect } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import Skeleton from '../components/Skeleton';
import { fetchRandomRecipes } from '../core/features/randomRecipesSlice';
import { AppDispatch } from '../types';
import { isRandomRecipesLoadingSelector, randomRecipesSelector } from '../core/selectors/recipesSelectors';
import { ScrollView } from 'react-native-gesture-handler';
import { themeSelector } from '../core/selectors/themeSelectors';
import { darkTheme } from '../core/features/themeSlice';
import { } from '@react-navigation/native';
import { BottomTabBarProps, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RECIPE_SCREEN, HOME_SCREEN } from '../navigation/AppRoutes';
import { RootStackParamList } from '../navigation/ApplicationRouter';
const { height, width } = Dimensions.get('screen')

type ExploreScreenProps = BottomTabScreenProps<RootStackParamList, 'Explore'>

const ExploreScreen: React.FC<ExploreScreenProps> = (props: ExploreScreenProps) => {
  const dispatch: AppDispatch = useDispatch();
  const isRandomRecipesLoading = useSelector(isRandomRecipesLoadingSelector);
  const randomRecipesError = useSelector(randomRecipesSelector);
  const randomRecipes = useSelector(randomRecipesSelector);
  const theme = useSelector(themeSelector);
  const cardWidth = width * 0.8;
  const cardHeight = (cardWidth / 16) * 9
  const skeletonWidth = cardWidth - (theme.sizes.padding.screen * 2)
  const skeletonHeight = (skeletonWidth / 16) * 9;

  useEffect(() => {
    dispatch(fetchRandomRecipes())
  }, []);

  const renderRecipesCards = () => {

    return randomRecipes[0].hits.map((e, i) => {

      return (
        <Pressable
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: cardWidth,
            marginBottom: theme.sizes.padding.button,
            height: cardHeight + 40,
          }}
          key={i}
          onPress={() => props.navigation.navigate('Recipe', { label: e.recipe.label })}
        >
          <View
            style={{
              width: skeletonWidth,
              height: skeletonHeight,
              borderRadius: 20,
              position: 'relative'
            }}
          >
            <Image
              source={{ uri: e.recipe.images.REGULAR.url }}
              style={{
                height: '100%',
                borderRadius: 20,
              }} />
            <View style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
              backgroundColor: darkTheme.colors.background[300],
              opacity: 0.7
            }} />
          </View>
          <View
            style={{
              width: skeletonWidth,
              height: 20,
            }}
          >
            <Text
              style={[{ color: theme.colors.text[100] }]}
            >{e.recipe.label}</Text>
          </View>
        </Pressable>
      )
    })
  }

  const loaderSkeleton = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 10]

    return array.map((e, i) => {
      return (
        <View
          key={i.toString()}
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: cardWidth,
            marginBottom: theme.sizes.padding.button,
            height: cardHeight + 40,
          }}>
          <Skeleton
            width={skeletonWidth}
            height={skeletonHeight}
            style={{ borderRadius: 20 }} />
          <Skeleton
            width={skeletonWidth}
            height={20}
            style={{ borderRadius: 20 }} />
      </View>
      )

    })
  }
  const renderContent = () => {
    if (isRandomRecipesLoading) {
      return loaderSkeleton();

    } else {
      return renderRecipesCards();
    }
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.container, { padding: theme.sizes.padding.screen, backgroundColor: theme.colors.background[300] }
      ]}>
      {renderContent()}
    </ScrollView >
    );
  }
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default ExploreScreen;
