import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const themeState = {
    colors: {
        body: '#F0FFFF',
        font: '#3b3c36'
    },
    darkTheme: false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: themeState,
    reducers: {
        setDarkTheme(state) {
            state.colors.body = "#3b3c36";
            state.colors.font = '#F0FFFF';
            state.darkTheme = true;
        },
        setDefaultTheme(state) {
            state.colors.body = '#F0FFFF';
            state.colors.font = '#3b3c36';
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