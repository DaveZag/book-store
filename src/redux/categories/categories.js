import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatus() {
      return 'Under construction';
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice;
