import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {AppDispatch, Recipes} from '../types';
import {useDispatch, useSelector} from 'react-redux';
import { isRandomRecipesLoadingSelector, randomRecipesErrorSelector, randomRecipesSelector } from '../core/selectors/recipesSelectors';
import RecipeItem from '../components/RecipeItem';
import AnimatedPlaceholder from '../components/AnimatedPlaceholder';
import { useTheme } from '@react-navigation/native';
import Skeleton from '../components/Skeleton';
import { themeSelector } from '../core/selectors/themeSelectors';
import { toggleTheme } from '../core/features/themeSlice';
type Props = {
  fetchRecipesWithQuery: (q: string) => Recipes;
};
const {width, height} = Dimensions.get('screen')
const HomeScreen = (props: Props) => {

const randomRecipesError = useSelector(randomRecipesErrorSelector);
const randomRecipes = useSelector(randomRecipesSelector);
const randomRecipesLoading = useSelector(isRandomRecipesLoadingSelector);
const theme = useSelector(themeSelector)
const colors = useTheme()
const dispatch: AppDispatch = useDispatch()
return (
    <View
    style={[styles.container,
      {backgroundColor: theme.colors.background[300]}, 
    ]}
    >
     <View
     style={[styles.item, {width: width * 0.8, 
      backgroundColor: theme.colors.background[100],
    
    }]}
     >

      <Skeleton height={40} width={40} style={{borderRadius:20 }}/>
      <Pressable 
      onPress={()=> dispatch(toggleTheme())}
      style={{
        backgroundColor: theme.colors.buttonBackground[100],
        }}>
        <Text
        style={{
          color: theme.colors.buttonText[100]
        }}
        >toggle theme</Text>
      </Pressable>
     </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: "center"
  },
  item: {
    padding: 14,
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 8
  }
})
export default HomeScreen;
