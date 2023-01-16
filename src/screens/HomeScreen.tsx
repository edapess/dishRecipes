import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {themeSelector} from '../core/selectors/themeSelectors';
import {
  recipesTypesSelector,
  selectedRecipesTypesSelector,
} from '../core/selectors/recipesTypesSelectors';
import RecipeTypeItem from '../components/RecipesTypeItem';
import {ScrollView} from 'react-native-gesture-handler';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/ApplicationRouter';
import {HOME_SCREEN, SEARCH_SCREEN} from '../navigation/AppRoutes';

const {width} = Dimensions.get('screen');

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = (props: HomeScreenProps) => {
  const theme = useSelector(themeSelector);
  const dispatch: AppDispatch = useDispatch();
  const recipesTypes = useSelector(recipesTypesSelector);

  const renderRecipesTypes = () => {
    const recipesTypesLabelsArray = Object.keys(recipesTypes);
    return recipesTypesLabelsArray.map(label => {
      return (
        <View
          key={label}
          style={[
            styles.itemsContainer,
            {padding: theme.sizes.padding.button},
          ]}>
          <View style={{width: '100%', marginBottom: 10}}>
            <Text
              style={[
                {
                  color: theme.colors.text[300],
                  fontSize: theme.sizes.text.title,
                  textTransform: 'capitalize',
                },
              ]}>
              {label}
            </Text>
          </View>

          {recipesTypes[label.toString()].map((type: RecipeType, i: number) => {
            return (
              <View key={i.toString()} style={{marginBottom: 10, margin: 5}}>
                <RecipeTypeItem
                  text={type.value}
                  key={i.toString()}
                  selected={type.selected}
                />
              </View>
            );
          })}
        </View>
      );
    });
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.container,
        {backgroundColor: theme.colors.background[300]},
      ]}>
      {renderRecipesTypes()}
      <View
        style={{
          width,
          alignItems: 'center',
        }}>
        <Pressable
          onPress={() => props.navigation.navigate(SEARCH_SCREEN, {})}
          style={{
            width: width * 0.3,
            backgroundColor: theme.colors.buttonBackground[200],
            padding: theme.sizes.padding.button,
            borderRadius: theme.sizes.radius.button,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: '500',
              color: theme.colors.buttonText[200],
              fontSize: theme.sizes.text.onButtonText,
            }}>
            Search
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignContent: 'space-around',
  },
  item: {
    padding: 14,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 8,
  },
  itemsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
});
export default HomeScreen;
