import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsState = {
        contacts: [],
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsState,
    reducers: {
        addContact(state, action) {
                state.contacts.push(action.payload);     
                console.log(action.payload);    
        },
        deleteContact(state, action) {
            const index = state.contacts.findIndex(({id})=>id===action.payload);
            // console.log(index)
            // console.log(state)
             state.contacts.splice(index, 1);
        },
    },
});

const persistConfig = {
    key: 'contacts',
    storage,
};

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const {addContact, deleteContact} = contactsSlice.actions;
