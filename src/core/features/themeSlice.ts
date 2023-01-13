import {createSlice} from '@reduxjs/toolkit';
import {Theme, ThemeSlice} from '../../types';

export const lightTheme: Theme = {
  colors: {
    background: {
      '100': '#ECEFF4',
      '200': '#E5E9F0',
      '300': '#D8DEE9',
    },
    buttonBackground: {
      '100': '#4C566A',
      '200': '#3B4252',
      '300': '#2E3440',
    },
    buttonText: {
      '100': '#ECEFF4',
      '200': '#E5E9F0',
      '300': '#D8DEE9',
    },
    text: {
      '100': '#4C566A',
      '200': '#3B4252',
      '300': '#2E3440',
    },
    frost: {
      frost1: '#8FBCBB',
      frost2: '#88C0D0',
      frost3: '#81A1C1',
      frost4: '#5E81AC',
    },
    aurora: {
      orange: '#D08770',
      darkPink: '#B48EAD',
      green: '#A3BE8C',
      red: '#BF616A',
      yellow: '#EBCB8B',
    },
  },
  sizes: {
    image: {
      cartImage: 120,
      largeImage: 250,
    },
    padding: {
      button: 12,
      screen: 15,
      smallButton: 5,
    },
    text: {
      cartText: 13,
      onButtonText: 15,
      text: 13,
      title: 24,
    },
    radius: {
      button: 5,
    },
  },
};

export const darkTheme: Theme = {
  colors: {
    background: {
      '100': '#4C566A',
      '200': '#3B4252',
      '300': '#2E3440',
    },
    buttonBackground: {
      '100': '#ECEFF4',
      '200': '#E5E9F0',
      '300': '#D8DEE9',
    },
    buttonText: {
      '100': '#4C566A',
      '200': '#3B4252',
      '300': '#2E3440',
    },
    text: {
      '100': '#ECEFF4',
      '200': '#E5E9F0',
      '300': '#D8DEE9',
    },
    aurora: {...lightTheme.colors.aurora},
    frost: {...lightTheme.colors.frost},
  },
  sizes: {...lightTheme.sizes},
};

const initialState: ThemeSlice = {
  theme: lightTheme,
  darkThemeEnabled: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      if (state.darkThemeEnabled) {
        state.darkThemeEnabled = !state.darkThemeEnabled;
        state.theme = lightTheme;
      } else {
        state.darkThemeEnabled = !state.darkThemeEnabled;
        state.theme = darkTheme;
      }
    },
  },
});
export default themeSlice.reducer;
export const {toggleTheme} = themeSlice.actions;
