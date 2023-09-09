import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
    "books/fetchBooksStatus",
    async function DateBooks() {
        const {data} = await axios.get('https://www.googleapis.com/books/v1/volumes?q='+'JavaScript'+'&key=AIzaSyCcEuUwqXkj45kBizl-5u8wflVTWDVKAFo'+'&maxResults=20')
        return data;
    }
);

const initialState = {
    items: [],
    status:'loading', //loading | success | error
};
const booksSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: {
        [fetchBooks.pending]: (state) => {
            console.log("sending request");
            state.status = 'loading'
            state.items = [];
        },
        [fetchBooks.fulfilled]: (state, action) => {
            console.log("ok", state);
            state.items = action.payload
            state.status = 'success'
        },
        [fetchBooks.rejected]: (state) => {
            state.status = 'error'
            state.items = [];
        },
    },
});
export const { setItems } = booksSlice.actions;

export default booksSlice.reducer;