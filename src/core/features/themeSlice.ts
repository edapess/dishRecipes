import { createSlice } from "@reduxjs/toolkit";
import { Theme, ThemeSlice } from "../../types";

const lightTheme: Theme = {
    colors:{
        background:{
            "100": "#ECEFF4",
            "200": "#E5E9F0",
            "300":"#D8DEE9"
        },
        buttonBackground:{
            "100": "#4C566A",
            "200": "#3B4252",
            "300": "#2E3440"
        },
        buttonText: {
            "100": "#ECEFF4",
            "200": "#E5E9F0",
            "300":"#D8DEE9"
        },
        text: {
            "100": "#4C566A",
            "200": "#3B4252",
            "300": "#2E3440"
        }
    },
    sizes:{
        image: {
            cartImage: 120,
            largeImage: 250
        },
        padding: 120,
        text: {
            cartText: 13,
            onButtonText: 15,
            text: 13,
            title: 24
        }
    }
}

const darkTheme : Theme = {
    colors:{
        background:{
            "100": "#4C566A",
            "200": "#3B4252",
            "300":"#2E3440"
        },
        buttonBackground:{
            "100": "#ECEFF4",
            "200": "#E5E9F0",
            "300":"#D8DEE9"
        },
        buttonText: {
            "100": "#4C566A",
            "200": "#3B4252",
            "300": "#2E3440"
        },
        text: {
            "100": "#ECEFF4",
            "200": "#E5E9F0",
            "300": "#D8DEE9"
        }
    },
sizes:{...lightTheme.sizes}
}

const initialState: ThemeSlice = {
    theme: lightTheme,
    darkThemeEnabled: false,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            if(state.darkThemeEnabled){
                state.darkThemeEnabled = !state.darkThemeEnabled;
                state.theme = lightTheme;
            }else{
                state.darkThemeEnabled = !state.darkThemeEnabled;
                state.theme = darkTheme;
            }
        }
    }
})
export default themeSlice.reducer;
export const {toggleTheme} = themeSlice.actions;