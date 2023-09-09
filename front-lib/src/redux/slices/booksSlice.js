import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async ({ counter, searchValue }) => {
        const { data } = await axios.get(
            'https://www.googleapis.com/books/v1/volumes?q='+searchValue+'&key=AIzaSyCcEuUwqXkj45kBizl-5u8wflVTWDVKAFo'+`&maxResults=${counter}`
        )
        return data
    }
)

export const booksSLice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        isLoading: false,
        error: null,
        counter: 10,
        searchValue: 'javascript',
    },
    reducers: {
        setCounter(state) {
            state.counter += 10
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchBooks.pending, state => {
                state.isLoading = true
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.isLoading = false
                state.books = [action.payload]
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
                state.books = []
            })
    },
})
export const { setCounter, setSearchValue } = booksSLice.actions