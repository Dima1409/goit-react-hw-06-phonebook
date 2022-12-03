import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const themeState = {
    colors: {
        body: '#c1ddf5',
        font: '#13132e',
        main: '#8bbae7'
    },
    darkTheme: false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: themeState,
    reducers: {
        setDarkTheme(state) {
            state.colors.body = "#384047";
            state.colors.font = '#8bbae7';
            state.colors.main = '#13132e';
            state.darkTheme = true;
        },
        setDefaultTheme(state) {
            state.colors.body = '#c1ddf5';
            state.colors.font = '#13132e';
            state.colors.main = '#8bbae7';
            state.darkTheme = false;
        },
    },
});

const persistConfig = {
    key: 'theme',
    storage,
}

export const themeReducer = persistReducer(persistConfig, themeSlice.reducer);
export const {setDarkTheme, setDefaultTheme} = themeSlice.actions;