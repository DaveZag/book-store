import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook(state, action) {
      state.push({
        id: action.payload.id,
        genre: action.payload.genre,
        title: action.payload.title,
        author: action.payload.author,
        percentageCompleted: action.payload.percentageCompleted,
        currentChapter: action.payload.currentChapter,
      });
    },
    removeBook(state, action) {
      return state.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
