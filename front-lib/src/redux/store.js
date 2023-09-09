import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {booksSLice} from "./slices/booksSlice";


const reducers = combineReducers({
    book: booksSLice.reducer,
});

export const store = configureStore({
    reducer: reducers,
});