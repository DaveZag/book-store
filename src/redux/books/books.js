import { createSlice } from '@reduxjs/toolkit';

const bookArray = [
  {
    id: 0,
    genre: 'Action',
    title: 'In Search of Lost Time',
    author: 'Marcel Proust',
    percentageCompleted: '80%',
    currentChapter: 'Chapter 6',
  },
  {
    id: 1,
    genre: 'Adventure',
    title: ' One Hundred Years of Solitude',
    author: 'Gabriel Garcia Marquez',
    percentageCompleted: '10%',
    currentChapter: 'Chapter 2',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState: bookArray,
  reducers: {
    addBook(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
      });
    },
    removeBook(state, action) {
      return state.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
