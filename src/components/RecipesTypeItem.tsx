import React from 'react';
import {Pressable, Text, View} from 'react-native';
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
  return (
    <Pressable
      onPress={() => dispatch(selectRecipesTypes(props.text))}
      style={{
        width: 80,
        height: 30,
        backgroundColor: theme.colors.frost.frost1,
      }}>
      <View style={{}}>
        <Text style={{color: '#000000'}}>{props.text}</Text>

        <Text style={{color: 'green'}}>{props.selected}</Text>
      </View>
    </Pressable>
  );
};

export default RecipeTypeItem;
