import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async ({ counter, searchValue, index, el }) => {
       try {
           console.log('sortTYPE IN ASYNC',el)
           const { data } = await axios.get(
               'https://www.googleapis.com/books/v1/volumes?q='+`${!searchValue?'java':searchValue}`+`${!el?'&orderBy=relevance':'&orderBy='+el}`+`&maxResults=30`+`&startIndex=${index}`+'&key=AIzaSyBQRK-QOa7bfZoq9xESykT7B_ohlESGnO0'

           )
           console.log(data)
           return data
       } catch (e) {
           console.log('error', e)

       }
    }
)

export const booksSLice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        isLoading: false,
        error: null,
        counter: 10,
        searchValue: '',
        index: 0,
        sortType: 'relevance',
    },
    reducers: {
        setCounter(state) {
            state.counter += 1;
        },
        setSortType(state, action) {
            console.log(state.sortType)
            state.sortType = action.payload;
        },
        setClearBooks(state) {
            state.books = [];
        },
        setIndex(state) {
            state.index += 30;
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
                state.books = [action.payload, ...state.books]
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
                state.books = []
            })
    },
})
export const { setCounter, setSearchValue, setIndex, setClearBooks,setSortType } = booksSLice.actions