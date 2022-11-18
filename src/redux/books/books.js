import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// prettier-ignore
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wf8x6nL27HLKBPIE7Exv/';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const resp = await axios.get(`${url}books`);
  if (resp.data) {
    return resp.data;
  }
  return [];
});

export const addBook = createAsyncThunk('books/addBook', async (data) => {
  console.log(data);
  const resp = await axios.post(`${url}books`, data);
  console.log(resp.status);
  return data;
});

export const removeBook = createAsyncThunk('book/removeBook', async (id) => {
  const resp = await axios.delete(`${url}books/${id}`);
  console.log(resp.status);
  return id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((element) => {
        newState.push({
          id: element[0],
          title: element[1][0].title,
          category: element[1][0].category,
        });
      });
      return newState;
    });

    builder.addCase(addBook.fulfilled, (state, action) => {
      state.push({
        id: action.payload.item_id,
        title: action.payload.title,
        category: action.payload.category,
      });
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      const newState = state.filter((book) => book.id !== action.payload);
      return newState;
    });
  },
});

export default booksSlice.reducer;
