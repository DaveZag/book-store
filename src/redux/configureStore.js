import { combineReducers, configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesSlice from './categories/categories';

const reducer = combineReducers({
  books: booksReducer,
  categories: categoriesSlice,
});

const store = configureStore({
  reducer,
});

export default store;
